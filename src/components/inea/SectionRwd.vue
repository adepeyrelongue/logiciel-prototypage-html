<template>
  <div :class="classesComputed" class="flex-col">
    <samp>ib:section-rwd:debut</samp>
    <div v-if="blocs.length === 0" class="grow-self bloc-vide avec-fond">
      <p>Section responsive</p>
    </div>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:section-rwd:fin</samp>
  </div>
</template>

<script>
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "section-rwd",
  mixins: [ColBsProps],
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses];
    }
  }
};
</script>