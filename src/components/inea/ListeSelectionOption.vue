<template>
  <option :value="valeurComputed">{{libelle}}</option>
</template>

<script>
import { kebabCase } from "../../utils";

export default {
  name: "liste-selection-option",
  props: {
    valeur: {
      type: String,
      default: ""
    },
    libelle: {
      type: String,
      required: true
    }
  },
  computed: {
    valeurComputed: function() {
      return this.valeur || kebabCase(this.libelle);
    }
  }
};
</script>