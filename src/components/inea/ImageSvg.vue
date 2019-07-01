<template>
  <svg
    :class="classesComputed"
    :style="stylesComputed"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    aria-hidden="true"
  >
    <path v-for="(chemin, index) in paths" :key="index" :d="chemin"></path>
  </svg>
</template>

<script>
import Espacement from "./mixins/Espacement";
export default {
  name: "image-svg",
  mixins: [Espacement],
  props: {
    viewBox: {
      type: String,
      required: true
    },
    paths: {
      type: Array,
      required: true
    },
    couleur: {
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
    classesComputed: function() {
      let css = [...this.baseClasses, ...this.espacementClasses];

      if (this.couleur) {
        css.push(`fill-${this.couleur}`);
      }

      return css;
    },
    stylesComputed: function() {
      let styles = {};

      if (this.largeur !== 0) {
        styles.width = `${this.largeur}px`;
      }

      if (this.hauteur !== 0) {
        styles.height = `${this.hauteur}px`;
      }

      return styles;
    }
  }
};
</script>