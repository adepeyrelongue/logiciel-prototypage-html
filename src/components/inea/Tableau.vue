<template>
  <table class="table" :class="classesComputed | wipe">
    <caption>{{captionLabel}}</caption>
    <entete-tableau :key="elements.entete.cle" v-bind="elements.entete"></entete-tableau>
    <corps-tableau :key="elements.corps.cle" v-bind="elements.corps"></corps-tableau>
  </table>
</template>


<script>
export default {
  name: "tableau",
  props: {
    blocs: Array,
    captionLabel: {
      type: String,
      required: true
    },
    zebre: {
      type: Boolean,
      default: false
    },
    survol: {
      type: Boolean,
      default: false
    },
    bord: {
      type: Boolean,
      default: false
    },
    elements: Object
  },
  computed: {
    classesComputed: function() {
      let tab = [];
      if (this.zebre) {
        tab.push("table-striped");
      }
      if (this.survol) {
        tab.push("table-hover");
      }
      if (this.bord) {
        tab.push("table-bordered");
      }
      return tab;
    },
    texteComputed: function() {
      return texteVersLignesHtml(this.texte);
    }
  }
};
</script>