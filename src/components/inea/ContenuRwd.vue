<template>
  <div :class="classesComputed">
    <samp>ib:contenu-rwd:debut</samp>
    <div v-if="blocs.length === 0" class="bloc-vide">
      <p>Contenu responsive</p>
    </div>
    <div v-if="collapseId !== ''" class="collapse in" :id="collapseId" role="region">
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </div>
    <template v-else>
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </template>
    <samp>ib:contenu-rwd:fin</samp>
  </div>
</template>

<script>
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "contenu-rwd",
  mixins: [ColBsProps],
  props: {
    collapseId: {
      type: String,
      default: ""
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses];
    }
  }
};
</script>