<template>
  <td :rowspan="rowspan" :colspan="colspan">
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </td>
</template>

<script>
import { texteVersLignesHtml } from "../../utils";
import TextProps from "./mixins/TextProps";

export default {
  name: "cellule-tableau",
  mixins: [TextProps],
  props: {
    blocs: Array,
    colspan: Number,
    rowspan: Number
  },
  data: function() {
    return {
      colspan_: this.colspan || false,
      rowspan_: this.rowspan || false
    };
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