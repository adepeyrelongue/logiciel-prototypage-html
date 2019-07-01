<template>
  <button
    type="button"
    class="btn btn-default"
    data-dismiss="modal"
    :class="classesComputed"
  >{{libelle}}</button>
</template>

<script>
export default {
  name: "bouton-fermer-dialogue",
  props: {
    libelle: {
      type: String,
      required: true
    }
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>