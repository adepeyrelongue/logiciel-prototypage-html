'use strict'

import { app, protocol, BrowserWindow, dialog } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
const contextMenu = require('electron-context-menu');

contextMenu()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let winPage
let winEdition

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true })
function createWindow() {
  // Create the browser window.
  winPage = new BrowserWindow({
    width: 1600, height: 1200, webPreferences: {
      webSecurity: false,
      additionalArguments: ['isPage'],
      devTools: true
    }
  })
  winPage.setMenuBarVisibility(false)
  winEdition = new BrowserWindow({
    parent: winPage,
    width: 1010,
    height: 768,
    center: true,
    webPreferences: {
      additionalArguments: ['isEdition']
    }
  })
  winEdition.setMenuBarVisibility(false)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    winPage.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) winPage.webContents.openDevTools()
    winEdition.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    //if (!process.env.IS_TEST) winEdition.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    winPage.loadURL('app://./index.html')
    winPage.webContents.openDevTools()
    winEdition.loadURL('app://./index.html')
  }

  winPage.maximize();

  winPage.on('close', (e) => {
    e.preventDefault()
    winEdition.webContents.send('quitter');
  })
  winPage.on('closed', () => {
    winPage = null
  })
  winEdition.on('close', (e) => {
    e.preventDefault()
    winEdition.webContents.send('quitter');
  })
  winEdition.on('closed', () => {
    winEdition = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (winPage === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  /*if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    await installVueDevtools()
  }*/
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
