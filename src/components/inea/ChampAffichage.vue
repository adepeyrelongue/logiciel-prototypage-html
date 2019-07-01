<template>
  <div :class="classesComputed">
    <samp>ib:champ-affichage:debut</samp>
    <input
      :id="id"
      type="text"
      :value="valeur"
      readonly
      class="form-control"
      :aria-labelledby="labelledbyComputed | wipe"
    >
    <div v-if="this.libelle !== ''" :class="libelleAccessible ? 'sr-only' : 'help-block'">
      <label :id="id+'-label'">{{libelle}}</label>
    </div>
    <samp>ib:champ-affichage:fin</samp>
  </div>
</template>

<script>
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "champ-affichage",
  mixins: [ColBsProps],
  props: {
    id: {
      type: String,
      required: true
    },
    valeur: {
      type: String,
      required: true
    },
    libelle: {
      type: String,
      default: ""
    },
    libelleAccessible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses];
    },
    labelledbyComputed: function() {
      return this.libelle ? `${this.id}-label` : "";
    }
  }
};
</script>