<template>
  <ul :class="classesComputed" :aria-label="ariaLabel">
    <samp>ib:liste:debut</samp>
    <li v-if="blocs.length === 0" class="bloc-vide avec-fond">
      <p>Liste vide</p>
    </li>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:liste:fin</samp>
  </ul>
</template>

<script>
import TextProps from "./mixins/TextProps";
import ListeProps from "./mixins/ListeProps";
import Espacement from "./mixins/Espacement";

export default {
  name: "liste",
  mixins: [TextProps, ListeProps, Espacement],
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.listeClasses,
        ...this.textClasses
      ];
    }
  }
};
</script>