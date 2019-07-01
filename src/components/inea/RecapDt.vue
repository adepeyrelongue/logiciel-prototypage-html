<template>
  <dt :class="classesComputed">{{libelle}}</dt>
</template>

<script>
export default {
  name: "recap-dt",
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
    libelle: {
      type: String,
      required: true
    }
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