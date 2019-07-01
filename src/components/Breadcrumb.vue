<template>
  <ol class="breadcrumb p-0" aria-label="Elements parents">
    <li v-for="(composant, index) in chemin" :key="index">
      <a
        v-if="index < chemin.length - 1"
        href="#"
        @click="handleSelect(index)"
        @mouseover="repererElement(index)"
        @mouseleave="repererAucun"
      >{{composant}}</a>
      <span v-if="index === chemin.length - 1">{{composant}}</span>
    </li>
  </ol>
</template>

<script>
import { composants } from "../utils";

export default {
  props: {
    page: Object,
    value: Array
  },
  computed: {
    chemin: function() {
      let noeud = this.page;
      let breadcrumb = [composants[noeud.tag].libelle];
      for (const enfant of this.value) {
        if (noeud.blocs) {
          noeud = noeud.blocs[enfant];
        } else {
          noeud = noeud.elements[enfant];
        }
        breadcrumb.push(composants[noeud.tag].libelle);
      }
      return breadcrumb;
    }
  },
  methods: {
    handleSelect: function(index) {
      const value = this.value.slice(0, index);
      this.$emit("input", value);
    },
    repererElement: function(index) {
      let noeud = this.page;
      let cle = this.page.cle;
      for (let i = 1; i <= index; i++) {
        if (noeud.blocs) {
          noeud = noeud.blocs[this.value[i-1]];
        } else {
          noeud = noeud.elements[this.value[i-1]];
        }
        cle = noeud.cle;
      }
      this.$store.dispatch("repererElement", cle);
    },
    repererAucun: function() {
      this.$store.dispatch("nePlusRepererElement");
    }
  }
};
</script>