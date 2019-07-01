<template>
  <optgroup :label="libelle">
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </optgroup>
</template>

<script>
export default {
  name: "liste-selection-groupe",
  props: {
    libelle: {
      type: String,
      required: true
    },
    blocs: Array
  }
};
</script>