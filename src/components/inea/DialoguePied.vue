<template>
  <div class="modal-footer" :class="classesComputed">
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </div>
</template>

<script>
export default {
  name: "dialogue-pied",
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>