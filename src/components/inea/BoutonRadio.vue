<template>
  <div :class="classesComputed">
    <samp>ib:bouton-radio:debut</samp>
    <div class="radio">
      <label :for="idComputed">
        <input :id="idComputed" type="radio" :name="name" :checked="checked">
        {{libelle}}
      </label>
    </div>
    <samp>ib:bouton-radio:fin</samp>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "bouton-radio",
  mixins: [ColBsProps],
  props: {
    name: {
      type: String,
      required: true
    },
    libelle: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses];
    },
    idComputed: function() {
      return this.id || kebabCase(this.libelle);
    }
  }
};
</script>