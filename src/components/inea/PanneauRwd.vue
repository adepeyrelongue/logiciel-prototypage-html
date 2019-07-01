<template>
  <div :class="classesComputed" class="grow-self gutters">
    <samp>ib:panneau-rwd:debut</samp>
    <div v-if="blocs.length === 0" class="bloc-vide">
      <p>Panneau responsive</p>
    </div>
    <form v-if="formulaire" class="form-horizontal" :action="action" method="post">
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </form>
    <component v-else v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:panneau-rwd:fin</samp>
  </div>
</template>

<script>
import BlocProps from "./mixins/BlocProps";
import Espacement from "./mixins/Espacement";
import Bordure from "./mixins/Bordure";

export default {
  name: "panneau-rwd",
  mixins: [Espacement, Bordure, BlocProps],
  props: {
    formulaire: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: ""
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.bordureClasses,
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