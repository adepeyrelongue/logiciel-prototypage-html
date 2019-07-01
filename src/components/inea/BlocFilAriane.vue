<template>
  <div class="row bloc-fil-ariane" :class="classesComputed">
    <samp>ib:bloc-fil-ariane:debut</samp>
    <div class="col-xs-12 fil-ariane">
      <ol class="breadcrumb" aria-label="Vous êtes ici">
        <li v-for="(bloc, index) in blocs" :key="index">
          <component :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
        </li>
        <li>
          <span>{{nomPageActive}}</span>
        </li>
      </ol>
    </div>
    <samp>ib:bloc-fil-ariane:fin</samp>
  </div>
</template>

<script>
export default {
  name: "bloc-fil-ariane",
  props: {
    nomPageActive: {
      type: String,
      required: true
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>