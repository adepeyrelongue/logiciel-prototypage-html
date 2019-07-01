<template>
  <div :class="classesComputed">
    <samp>ib:groupe-champs:debut</samp>
    <fieldset :class="{'fieldset-sr-only': srOnly}">
      <legend>{{legende}}</legend>
      <div v-if="blocs.length === 0" class="bloc-vide">
        <p>Groupe de champs vide</p>
      </div>
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </fieldset>
    <samp>ib:groupe-champs:fin</samp>
  </div>
</template>

<script>
import Espacement from "./mixins/Espacement";
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "groupe-champs",
  mixins: [Espacement, ColBsProps],
  props: {
    legende: {
      type: String,
      required: true
    },
    srOnly: {
      type: Boolean,
      default: false
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.colBsClasses
      ];
    }
  }
};
</script>