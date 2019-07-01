<template>
  <div class="control-label" :class="classesComputed">
    <samp>ib:libelle-champ:debut</samp>
    <label :for="id" :class="{requis: requis}">{{libelle}}</label>
    <button
      v-if="informations"
      :id="id+'-info-btn'"
      type="button"
      class="btn btn-infobulle ml-1_4"
      :title="informations.titre"
      data-toggle="modal"
      :data-target="'#'+id+'-info'"
    >
      <span class="dgfipicon dgfipicon-aide-demander"></span>
    </button>
    <span v-if="format" :id="id+'-format'" class="help-block">
      <span class="sr-only">, format attendu,</span>
      <span :class="formatCasseComputed">{{format}}</span>
    </span>
    <samp>ib:libelle-champ:fin</samp>
  </div>
</template>

<script>
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "libelle-champ",
  mixins: [ColBsProps],
  props: {
    id: {
      type: String,
      required: true
    },
    libelle: {
      type: String,
      required: true
    },
    requis: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: ""
    },
    formatCasse: {
      type: String,
      default: ""
    },
    informations: {
      type: Object,
      default: null
    }
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses];
    },
    formatCasseComputed: function() {
      return this.formatCasse ? `text-${this.formatCasse}` : false;
    }
  }
};
</script>