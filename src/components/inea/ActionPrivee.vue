<template>
  <a class="btn btn-compose-vertical" :class="classesComputed" :href="href">
    <samp>ib:action-privee:debut</samp>
    <span :class="icone"></span>
    {{libelle}}
    <span v-if="badge !== ''" class="badge">
      {{badge}}
      <span class="sr-only">{{badgeSr}}</span>
    </span>
    <samp>ib:action-privee:fin</samp>
  </a>
</template>
<script>
import Espacement from "./mixins/Espacement";

export default {
  name: "action-privee",
  mixins: [Espacement],
  props: {
    libelle: {
      type: String,
      required: true
    },
    icone: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    couleur: {
      type: String,
      default: ""
    },
    badge: {
      type: String,
      default: ""
    },
    badgeSr: {
      type: String,
      default: ""
    }
  },
  computed: {
    classesComputed: function() {
      let css = [...this.baseClasses, ...this.espacementClasses];

      if (this.couleur) {
        css.push(`btn-${this.couleur}`);
      }

      return css;
    }
  }
};
</script>