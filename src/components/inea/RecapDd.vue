<template>
  <dd :class="classesComputed">
    <span v-if="!blocs.length" class="bloc-vide avec-fond">
      <span>Élément de récapitulatif vide</span>
    </span>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </dd>
</template>
<script>
export default {
  name: "recap-dd",
  props: {
    xs: {
      type: Number,
      required: true
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
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

      css.push(`col-xs-${this.xs}`);
      if (this.sm) {
        css.push(`col-sm-${this.sm}`);
      }
      if (this.md) {
        css.push(`col-md-${this.md}`);
      }
      if (this.lg) {
        css.push(`col-lg-${this.lg}`);
      }

      return css;
    }
  }
};
</script>