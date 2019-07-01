<template>
  <span
    :class="classesComputed"
    :title="this.collapse ? 'Déplier' : false"
    :aria-hidden="this.collapse ? true : false"
  ></span>
</template>

<script>
import { texteVersLignesHtml } from "../../utils";
import Espacement from "./mixins/Espacement";

export default {
  name: "icone",
  mixins: [Espacement],
  props: {
    icone: {
      type: String,
      default: ""
    },
    collapse: {
      type: Boolean,
      default: false
    },
    couleur: {
      type: String,
      default: ""
    },
    taillePx: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classesComputed: function() {
      let css = [...this.baseClasses, ...this.espacementClasses];

      if (this.collapse) {
        css.push("collapseicon");
      } else {
        css.push(this.icone);
      }

      if (this.couleur) {
        css.push(`text-${this.couleur}`);
      }

      if (this.taillePx) {
        css.push(`font-size-${this.taillePx}`);
      }

      return css;
    }
  }
};
</script>