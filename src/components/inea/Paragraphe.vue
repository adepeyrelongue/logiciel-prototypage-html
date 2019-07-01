<template>
  <p
    :class="classesComputed"
    :role="headingComputed"
    :aria-level="ariaLevelComputed"
    :inea-autofocus="ineaAutofocus"
    :tabindex="ineaAutofocus ? '0' : false"
  >
    <samp>ib:paragraphe:debut</samp>
    <span v-if="blocs.length === 0" class="bloc-vide avec-fond">
      <p>Paragraphe Vide</p>
    </span>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:paragraphe:fin</samp>
  </p>
</template>

<script>
import TextProps from "./mixins/TextProps";
import Espacement from "./mixins/Espacement";
import AlignementProps from "./mixins/AlignementProps";
export default {
  name: "paragraphe",
  mixins: [TextProps, Espacement, AlignementProps],
  props: {
    sansStyle: {
      type: Boolean,
      default: false
    },
    styleTitre: {
      type: Number,
      default: 0
    },
    heading: {
      type: Boolean,
      default: false
    },
    ariaLevel: {
      type: Number,
      default: 2
    },
    ineaAutofocus: {
      type: Boolean,
      default: false
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.textClasses,
        this.alignementClasse
      ];

      if (this.sansStyle) {
        css.push("p-unstyled");
      }

      if (this.styleTitre) {
        css.push(`h${this.styleTitre}`);
      }

      return css;
    },
    headingComputed: function() {
      return this.heading ? "heading" : false;
    },
    ariaLevelComputed: function() {
      return this.heading ? this.ariaLevel : false;
    }
  }
};
</script>