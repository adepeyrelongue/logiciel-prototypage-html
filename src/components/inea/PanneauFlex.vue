<template>
  <div :class="classesComputed" :style="stylesComputed">
    <samp>ib:panneau-flex:debut</samp>
    <div v-if="blocs.length === 0" class="bloc-vide">
      <p>Panneau Flex</p>
    </div>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:panneau-flex:fin</samp>
  </div>
</template>

<script>
import FlexProps from "./mixins/FlexProps";
import Espacement from "./mixins/Espacement";
import Bordure from "./mixins/Bordure";
import BlocProps from "./mixins/BlocProps";

export default {
  name: "panneau-flex",
  mixins: [FlexProps, Espacement, Bordure, BlocProps],
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [
        ...this.baseClasses,
        ...this.flexClasses,
        ...this.espacementClasses,
        ...this.bordureClasses,
        ...this.blocClasses
      ];

      if (this.couleur) {
        css.push(`bg-${this.couleur}`);
      }

      return css;
    },
    stylesComputed: function() {
      return this.flexStyles;
    }
  }
};
</script>