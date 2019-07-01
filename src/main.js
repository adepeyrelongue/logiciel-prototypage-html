import process from 'process'
import { remote, ipcRenderer } from 'electron'
import Vue from 'vue'
import AppPage from './AppPage.vue'
import AppEdition from './AppEdition.vue'
import Base from "./components/inea/mixins/Base"
import BaseEditeur from "./components/editeurs/mixins/Base"
import store from './store'
import VueDragDrop from 'vue-drag-drop';

Vue.config.productionTip = false

const requireComponent = require.context(
  // The relative path of the components folder
  './components/inea',
  // Whether or not to look in subfolders
  false
)

// Register Inea components
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName).default

  // ajouter le mixin de base
  componentConfig.mixins = componentConfig.mixins ? [Base, ...componentConfig.mixins] : [Base]

  // Register component globally
  Vue.component(
    componentConfig.name,
    Vue.extend(componentConfig)
  )
})

// Register editors
const requireEditor = require.context(
  // The relative path of the components folder
  './components/editeurs',
  // Whether or not to look in subfolders
  false
)

requireEditor.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireEditor(fileName).default

  // ajouter le mixin de base
  componentConfig.mixins = [BaseEditeur]

  // Register component globally
  Vue.component(
    componentConfig.name,
    Vue.extend(componentConfig)
  )
})

const quiSuisJe = process.argv.pop();
if (quiSuisJe === 'isPage') {
  const page = new Vue({
    store,
    created: function () {
      store.dispatch('initIpc', {
        win: 'page',
        wcidEdition: remote.getCurrentWindow().getChildWindows()[0].webContents.id
      });
    },
    render: h => h(AppPage)
  }).$mount('#app')

  ipcRenderer.on('changerDossierProto', (event, chemin) => {
    store.dispatch('changerDossierProto', chemin)
    page.$children[0].rechargerCss(chemin);
  })
  ipcRenderer.on('changerPage', (event, page) => {
    store.dispatch('changerPage', page)
  })
  ipcRenderer.on('changerCheminSelection', (event, chemin) => {
    store.dispatch('changerCheminSelection', chemin)
  })
  ipcRenderer.on('undoRedo', (event, etat) => {
    store.dispatch('undoRedo', etat)
  })
  ipcRenderer.on('previsualiser', (event, test) => {
    store.dispatch('previsualiser', test)
  })
  ipcRenderer.on('majPropSelection', (event, datas) => {
    store.dispatch('majPropSelection', datas)
  })
  ipcRenderer.on('supprimerPropSelection', (event, prop) => {
    store.dispatch('supprimerPropSelection', prop)
  })
  ipcRenderer.on('majPropEnfant', (event, datas) => {
    store.dispatch('majPropEnfant', datas)
  })
  ipcRenderer.on('supprimerPropEnfant', (event, datas) => {
    store.dispatch('supprimerPropEnfant', datas)
  })
  ipcRenderer.on('modifierBlocsSelection', (event, blocs) => {
    store.dispatch('modifierBlocsSelection', blocs)
  })
  ipcRenderer.on('modifierElementSelection', (event, datas) => {
    store.dispatch('modifierElementSelection', datas)
  })
  ipcRenderer.on('supprimerElementSelection', (event, nom) => {
    store.dispatch('supprimerElementSelection', nom)
  })

  ipcRenderer.on('repererElement', (event, cle) => {
    store.dispatch('repererElement', cle)
  })
  ipcRenderer.on('nePlusRepererElement', (event) => {
    store.dispatch('nePlusRepererElement')
  })
} else if (quiSuisJe === 'isEdition') {
  const edition = new Vue({
    store,
    created: function () {
      store.dispatch('initIpc', {
        win: 'edition',
        wcidPage: remote.getCurrentWindow().getParentWindow().webContents.id
      });
    },
    render: h => h(AppEdition)
  }).$mount('#app')

  ipcRenderer.on('largeurPage', (event, largeurPx) => {
    store.dispatch('largeurPage', largeurPx)
  })
  ipcRenderer.on('selectionnerComposant', (event, chemin) => {
    store.dispatch('selectionnerComposant', chemin)
  })
  ipcRenderer.on('quitter', (event) => {
    edition.$children[0].quitter();
  })
}