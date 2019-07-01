<template>
  <div :class="classesComputed">
    <samp>ib:champ-saisie:debut</samp>
    <div v-if="reference !== '' || calendrier || boutonIcone !== ''" class="input-group">
      <input
        :id="id"
        type="text"
        class="form-control"
        :aria-required="requis"
        :aria-labelledby="labelledbyComputed | wipe"
        :aria-describedby="describedbyComputed | wipe"
      >
      <span v-if="reference !== ''" :id="id+'-reference'" class="input-group-addon">
        <span class="sr-only">, référence,</span>
        {{reference}}
      </span>
      <span v-if="calendrier || boutonIcone !== ''" class="input-group-btn">
        <button
          v-if="calendrier"
          type="button"
          class="btn btn-default btn-calendrier"
          :data-target="'#'+id"
          tabindex="-1"
          aria-hidden="true"
        >
          <span class="dgfipicon dgfipicon-calendrier"></span>
        </button>
        <button v-if="boutonIcone !== ''" type="submit" class="btn btn-default" :title="boutonTitle">
          <span :class="boutonIcone"></span>
        </button>
      </span>
    </div>
    <input
      v-else
      :id="id"
      type="text"
      class="form-control"
      :aria-required="requis"
      :aria-labelledby="labelledbyComputed | wipe"
      :aria-describedby="describedbyComputed | wipe"
    >
    <div v-if="libelle !== ''" :class="libelleAccessible ? 'sr-only' : 'help-block'">
      <label :id="id+'-label'" :class="{requis: requis}">{{libelle}}</label>
    </div>
    <div v-if="format !== ''" :id="id+'-format'" class="help-block">
      <span class="sr-only">, format attendu,</span>
      <span :class="formatCasseComputed">{{format}}</span>
    </div>
    <div v-if="erreur !== ''" class="help-block">
      <div class="alert">
        <p :id="id+'-erreur'">
          <span class="dgfipicon dgfipicon-erreur mr-1_4">
            <span class="sr-only">, erreur,</span>
          </span>
          {{erreur}}
        </p>
      </div>
    </div>
    <samp>ib:champ-saisie:fin</samp>
  </div>
</template>

<script>
import ColBsProps from "./mixins/ColBsProps";
import ErreurChamp from "./mixins/ErreurChamp";

export default {
  name: "champ-saisie",
  mixins: [ColBsProps, ErreurChamp],
  props: {
    id: {
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
    },
    requis: {
      type: Boolean,
      default: false
    },
    hasFormat: {
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
    reference: {
      type: String,
      default: ""
    },
    calendrier: {
      type: Boolean,
      default: false
    },
    boutonIcone: {
      type: String,
      default: ""
    },
    boutonTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses, this.erreurClasse];
    },
    describedbyComputed: function() {
      let describedby = "";
      if (this.reference) {
        describedby = `${this.id}-reference`;
      }
      if (this.erreur) {
        describedby = (describedby ? " " : "") + `${this.id}-erreur`;
      }
      if (this.hasFormat) {
        describedby += (describedby ? " " : "") + `${this.id}-format`;
      }
      return describedby;
    },
    labelledbyComputed: function() {
      return this.libelle ? `${this.id}-label` : "";
    },
    formatCasseComputed: function() {
      return this.formatCasse ? `text-${this.formatCasse}` : false;
    }
  }
};
</script>