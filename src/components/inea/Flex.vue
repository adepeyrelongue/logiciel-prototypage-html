<template>
  <div :class="classesComputed" :style="stylesComputed">
    <samp>ib:flex:debut</samp>
    <div v-if="blocs.length === 0" class="bloc-vide">
      <p>Contenu flex</p>
    </div>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:flex:fin</samp>
  </div>
</template>

<script>
import FlexProps from "./mixins/FlexProps";
import Espacement from "./mixins/Espacement";

export default {
  name: "flex",
  mixins: [Espacement, FlexProps],
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.flexClasses
      ];

      return css;
    },
    stylesComputed: function() {
      return this.flexStyles;
    }
  }
};
</script>