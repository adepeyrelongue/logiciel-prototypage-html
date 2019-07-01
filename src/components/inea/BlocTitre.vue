<template>
  <div class="row bloc-titre" :class="classesComputed">
    <samp>ib:bloc-titre:debut</samp>
    <div class="col-xs-12 titre-espace-dialogue">
      <div class="row">
        <div class="col-xs-12">
          <titre :key="elements.titre.cle" v-bind="elements.titre"></titre>
        </div>
      </div>

      <div v-if="elements.barreProgression" class="row hidden-xs hidden-sm">
        <barre-progression :key="elements.barreProgression.cle" v-bind="elements.barreProgression"></barre-progression>
      </div>
    </div>
    <samp>ib:bloc-titre:fin</samp>
  </div>
</template>

<script>
export default {
  name: "bloc-titre",
  props: {
    elements: Object
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>