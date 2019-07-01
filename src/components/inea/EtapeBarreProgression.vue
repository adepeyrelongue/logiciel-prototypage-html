<template>
  <li :class="classesComputed">
    <span>
      {{libelle}}
      <span v-if="active" class="sr-only">phase en cours</span>
    </span>
  </li>
</template>

<script>
export default {
  name: "etape-barre-progression",
  props: {
    libelle: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [...this.baseClasses];

      if (this.active) {
        css.push("active");
      }

      return css;
    }
  }
};
</script>