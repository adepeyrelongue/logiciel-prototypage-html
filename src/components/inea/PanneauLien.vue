<template>
  <a
    :class="classesComputed"
    :style="stylesComputed"
    :href="hrefComputed"
    :aria-label="ariaLabelComputed | wipe"
    :title="ariaLabelComputed | wipe"
    :target="nouvelleFenetre ? '_blank' : false"
    :rel="nouvelleFenetre ? 'noopener' : false"
    :data-toggle="collapse ? 'collapse' : false"
    :aria-controls="collapse ? href : false"
    :aria-expanded="collapse ? true : false"
  >
    <samp>ib:panneau-lien:debut</samp>
    <span v-if="blocs.length === 0" class="bloc-vide">
      <p>Panneau lien</p>
    </span>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:panneau-lien:fin</samp>
  </a>
</template>

<script>
import FlexProps from "./mixins/FlexProps";
import Espacement from "./mixins/Espacement";
import Bordure from "./mixins/Bordure";
import BlocProps from "./mixins/BlocProps";

export default {
  name: "panneau-lien",
  mixins: [FlexProps, Espacement, Bordure, BlocProps],
  props: {
    href: {
      type: String,
      required: true
    },
    collapse: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    nouvelleFenetre: {
      type: Boolean,
      default: false
    },
    sansSurlignement: {
      type: Boolean,
      default: false
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [
        ...this.baseClasses,
        ...this.flexClasses,
        ...this.espacementClasses,
        ...this.bordureClasses,
        ...this.blocClasses
      ];

      if (this.couleur) {
        css.push(`bg-${this.couleur}`);
      }

      if (this.sansSurlignement) {
        css.push("a-unstyled");
      }

      return css;
    },
    stylesComputed: function() {
      return this.flexStyles;
    },
    hrefComputed: function() {
      if (this.collapse) {
        return "#" + this.href;
      } else {
        return this.href;
      }
    },
    ariaLabelComputed: function() {
      return this.nouvelleFenetre ? this.ariaLabel + " (nouvelle fenêtre)" : "";
    }
  }
};
</script>