<template>
  <th :rowspan="rowspan" :colspan="colspan">
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </th>
</template>

<script>
export default {
  name: "cellule-entete-tableau",
  props: {
    blocs: Array,
    colspan: Number,
    rowspan: Number
  },
  computed: {
    classesComputed: function() {
      return false;
    },
    texteComputed: function() {
      return texteVersLignesHtml(this.texte);
    }
  }
};
</script>