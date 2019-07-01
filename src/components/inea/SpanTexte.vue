<template>
  <span :class="classesComputed" v-html="texteComputed"></span>
</template>


<script>
import { texteVersLignesHtml } from "../../utils";
import TextProps from "./mixins/TextProps";
import Espacement from "./mixins/Espacement";
export default {
  name: "span-texte",
  mixins: [TextProps, Espacement],
  props: {
    texte: {
      type: String,
      required: true
    }
  },
  computed: {
    classesComputed: function() {
      return [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.textClasses
      ];
    },
    texteComputed: function() {
      return texteVersLignesHtml(this.texte);
    }
  }
};
</script>