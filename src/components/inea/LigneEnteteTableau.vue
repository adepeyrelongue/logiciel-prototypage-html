<template>
  <tr>
    <td v-if="blocs.length === 0" class="bloc-vide avec-fond">
      <p>Ligne d'entête vide</p>
    </td>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </tr>
</template>

<script>
import TextProps from "./mixins/TextProps";

export default {
  name: "ligne-entete-tableau",
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