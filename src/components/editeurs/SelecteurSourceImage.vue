<template>
  <div class="flex-row align-items-center">
    <button
      v-if="dossierImages"
      type="button"
      class="btn btn-default"
      title="Choisir l'image"
      @click.prevent="choisir"
    >
      <span class="glyphicon glyphicon-picture"></span>
    </button>
    <button
      v-if="source"
      type="button"
      class="btn btn-default ml-1_4"
      title="Image par défaut"
      @click.prevent="supprimer"
    >
      <span class="glyphicon glyphicon-trash"></span>
    </button>
  </div>
</template>

<script>
import { remote } from "electron";
export default {
  name: "selecteur-source-image",
  props: {
    value: String
  },
  data: function() {
    return {
      source: this.value
    };
  },
  computed: {
    dossierImages: function() {
      return this.$store.state.dossierImages;
    }
  },
  methods: {
    supprimer: function() {
      this.$emit("input", "");
      this.source = "";
    },
    choisir: function() {
      let options = {
        title: "Choisir une image",
        properties: ["openFile"],
        defaultPath: this.dossierImages,
        filters: [
          { name: "Images", extensions: ["jpg", "png", "gif", "jpeg"] }
        ]
      };

      remote.dialog.showOpenDialog(options, filePaths => {
        if (filePaths === undefined) {
          return;
        }
        const fichier = filePaths[0];

        if (fichier.indexOf(this.dossierImages) === 0) {
          const source = fichier.substring(this.dossierImages.length + 1);
          this.$emit("input", source);
          this.source = source;
        }
      });
    }
  }
};
</script>