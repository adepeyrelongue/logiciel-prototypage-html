<template>
  <div :class="classesComputed">
    <samp>ib:zone-edition:debut</samp>
    <textarea
      :id="id"
      class="form-control"
      :rows="lignes"
      :aria-required="requis"
      :aria-labelledby="labelledbyComputed | wipe"
      :aria-describedby="describedbyComputed | wipe"
    ></textarea>
    <div v-if="this.libelle !== ''" :class="libelleAccessible ? 'sr-only' : 'help-block'">
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
    <samp>ib:zone-edition:fin</samp>
  </div>
</template>

<script>
import ColBsProps from "./mixins/ColBsProps";
import ErreurChamp from "./mixins/ErreurChamp";

export default {
  name: "zone-edition",
  mixins: [ColBsProps, ErreurChamp],
  props: {
    id: {
      type: String,
      required: true
    },
    lignes: {
      type: Number,
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
    }
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses, this.erreurClasse];
    },
    describedbyComputed: function() {
      let describedby = "";
      if (this.erreur) {
        describedby = `${this.id}-erreur`;
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