<template>
  <div :class="classesComputed">
    <samp>ib:barre-progression:debut</samp>
    <ol class="barre-progression" aria-label="étapes du formulaire">
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </ol>
    <samp>ib:barre-progression:fin</samp>
  </div>
</template>

<script>
export default {
  name: "barre-progression",
  props: {
    md: {
      type: Number,
      required: true
    },
    lg: {
      type: Number,
      default: 0
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [...this.baseClasses];

      css.push(`col-md-${this.md}`);

      if (this.lg) {
        css.push(`col-lg-${this.lg}`);
      }

      return css;
    }
  }
};
</script>