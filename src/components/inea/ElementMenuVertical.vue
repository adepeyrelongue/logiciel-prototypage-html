<template>
  <li :class="classesComputed">
    <samp>ib:element-menu-vertical:debut</samp>
    <a :class="classeCouleurComputed" :href="href">
      {{libelle}}
      <span v-if="active" class="sr-only">, élément actif</span>
      <span v-if="badge !== ''" class="badge">
        {{badge}}
        <span class="sr-only">{{badgeSr}}</span>
      </span>
    </a>
    <samp>ib:element-menu-vertical:fin</samp>
  </li>
</template>
<script>
export default {
  name: "element-menu-vertical",
  props: {
    libelle: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
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
      let css = [...this.baseClasses];

      if (this.active) {
        css.push("active");
      }

      return css;
    },
    classeCouleurComputed: function() {
      return this.couleur || false;
    }
  }
};
</script>