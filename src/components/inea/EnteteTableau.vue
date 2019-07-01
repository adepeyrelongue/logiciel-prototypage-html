<template>
  <thead>
    <tr v-if="blocs.length === 0" class="bloc-vide avec-fond">
      <td>Entête de tableau vide</td>
    </tr>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </thead>
</template>

<script>
import { texteVersLignesHtml } from "../../utils";
import TextProps from "./mixins/TextProps";

export default {
  name: "entete-tableau",
  mixins: [TextProps],
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.textClasses];
    }
  }
};
</script>