<template>
  <img
    :src="sourceComputed"
    :class="classesComputed"
    :alt="texteAlternatif"
    :width="largeur || false"
    :height="hauteur || false"
  >
</template>

<script>
import Espacement from "./mixins/Espacement";
import SourceDefaut from "../../assets/image_defaut.png";
export default {
  name: "image-externe",
  mixins: [Espacement],
  props: {
    source: {
      type: String,
      default: ""
    },
    forme: {
      type: String,
      default: ""
    },
    responsive: {
      type: Boolean,
      default: false
    },
    texteAlternatif: {
      type: String,
      default: ""
    },
    largeur: {
      type: Number,
      default: 0
    },
    hauteur: {
      type: Number,
      default: 0
    }
  },

  computed: {
    dossierImages: function() {
      return (this.$store && this.$store.state.dossierImages) || false;
    },
    sourceComputed: function() {
      if (this.source) {
        if (this.dossierImages) {
          return `file://${this.dossierImages}/${this.source}`;
        } else {
          return `img/${this.source}`;
        }
      } else {
        return SourceDefaut;
      }
    },
    classesComputed: function() {
      let css = [...this.baseClasses, ...this.espacementClasses];

      if (this.forme) {
        css.push(this.forme);
      }
      if (this.responsive) {
        css.push("img-responsive");
      }
      return css;
    }
  }
};
</script>