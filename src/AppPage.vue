<template>
  <div id="app" :class="page.thematique" v-resize:debounce.initial="onResize">
    <dialogue-contenu
      v-if="dialogue !== false"
      :style="{width:'598px'}"
      :key="dialogue.elements.contenu.cle"
      v-bind="dialogue.elements.contenu"
      :id="dialogueIdComputed"
      :titre="dialogue.titre"
    ></dialogue-contenu>
    <component v-else :key="page.cle" :is="page.tag" v-bind="page"></component>
  </div>
</template>

<script>
import path from "path";
import fs from "fs";
import { remote } from "electron";
import resize from "vue-resize-directive";
import { kebabCase } from "./utils";

export default {
  name: "app",
  directives: {
    resize
  },
  computed: {
    page: function() {
      return this.$store.state.page;
    },
    titre: function() {
      return this.$store.state.titre;
    },
    dialogue: function() {
      return this.$store.state.dialogue;
    },
    dialogueIdComputed: function() {
      if (this.$store.state.dialogue !== false) {
        return (
          this.$store.state.dialogue.id ||
          kebabCase(this.$store.state.dialogue.titre)
        );
      } else {
        return false;
      }
    }
  },
  watch: {
    titre: function(titre) {
      document.title = titre;
    }
  },
  created: function() {
    document.title = this.titre;
  },
  methods: {
    onResize: function(el) {
      this.$store.dispatch("largeurPage", el.clientWidth);
    },
    rechargerCss: function(dossierProto) {
      if (dossierProto) {
        let css = path.resolve(
          dossierProto,
          "generated-webresources/css/application.css"
        );
        if (fs.existsSync(css)) {
          remote
            .getCurrentWindow()
            .webContents.insertCSS(fs.readFileSync(css, "utf8"));
        }
      } else if (dossierProto === false) {
        let css = path.resolve(__static, "css/inea.css");
        remote
          .getCurrentWindow()
          .webContents.insertCSS(fs.readFileSync(css, "utf8"));
      }
    }
  }
};
</script>

<style>
.bloc-vide {
  height: 50px;
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.bloc-vide.avec-fond {
  margin: 1px;
  background-color: #adb5bd;
}

.bloc-vide > p {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0b6ba8;
}

.composant-repere {
  position: relative;
}

.composant-repere:after {
  content: "";
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
  opacity: 0.6;
}

.composant-selectionne {
  outline: dashed 2px #0c7b38;
  outline-offset: -1px;
}

samp {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
