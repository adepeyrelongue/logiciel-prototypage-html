<template>
  <div :class="classesComputed">
    <samp>ib:case-cocher:debut</samp>
    <div class="checkbox">
      <label :for="idComputed">
        <input :id="idComputed" type="checkbox">
        {{libelle}}
      </label>
    </div>
    <samp>ib:case-cocher:fin</samp>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";
import Espacement from "./mixins/Espacement";
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "case-cocher",
  mixins: [Espacement, ColBsProps],
  props: {
    id: {
      type: String,
      default: ""
    },
    libelle: {
      type: String,
      required: true
    }
  },
  computed: {
    classesComputed: function() {
      return [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.colBsClasses
      ];
    },
    idComputed: function() {
      return this.id || kebabCase(this.libelle);
    }
  }
};
</script>