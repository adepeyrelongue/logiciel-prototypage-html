<template>
  <button
    type="submit"
    class="btn btn-default"
    :class="classesComputed"
    :aria-label="ariaLabel | wipe"
  >{{libelle}}</button>
</template>

<script>
import Espacement from "./mixins/Espacement";

export default {
  name: "bouton-submit",
  mixins: [Espacement],
  props: {
    libelle: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.espacementClasses];
    }
  }
};
</script>