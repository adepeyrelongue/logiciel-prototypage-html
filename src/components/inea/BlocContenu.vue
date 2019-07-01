<template>
  <div class="row no-gutters bloc-contenu" :class="classesComputed">
    <samp>ib:bloc-contenu:debut</samp>
    <div class="col-xs-12 flex-col">
      <div v-if="blocs.length === 0" class="bloc-vide">
        <p>Bloc de contenu</p>
      </div>
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </div>
    <samp>ib:bloc-contenu:fin</samp>
  </div>
</template>

<script>
export default {
  name: "bloc-contenu",
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