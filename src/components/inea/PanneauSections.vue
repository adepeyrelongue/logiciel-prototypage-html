<template>
  <div :class="classesComputed" class="grow-self flex-col">
    <samp>ib:panneau-sections:debut</samp>
    <div v-if="blocs.length === 0" class="bloc-vide">
      <p>Panneau de sections</p>
    </div>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:panneau-sections:fin</samp>
  </div>
</template>

<script>
import BlocProps from "./mixins/BlocProps";
import Espacement from "./mixins/Espacement";

export default {
  name: "panneau-sections",
  mixins: [Espacement, BlocProps],
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.blocClasses
      ];

      if (this.couleur) {
        css.push(`bg-${this.couleur}`);
      }

      return css;
    }
  }
};
</script>