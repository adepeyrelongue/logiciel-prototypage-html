<template>
  <div :class="classesComputed">
    <samp>ib:liste-selection:debut</samp>
    <select
      :id="id"
      class="form-control"
      :multiple="multiple"
      :size="multiple ? lignes : false"
      :aria-required="requis"
      :aria-labelledby="labelledbyComputed | wipe"
      :aria-describedby="describedbyComputed | wipe"
    >
      <option v-if="requis && forcerSelection && !multiple" disabled selected>Choisir...</option>
      <option v-if="!requis && !multiple" value=""></option>
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </select>
    <div v-if="this.libelle !== ''" :class="libelleAccessible ? 'sr-only' : 'help-block'">
      <label :id="id+'-label'" :class="{requis: requis}">{{libelle}}</label>
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
    <samp>ib:liste-selection:fin</samp>
  </div>
</template>

<script>
import ColBsProps from "./mixins/ColBsProps";
import ErreurChamp from "./mixins/ErreurChamp";

export default {
  name: "liste-selection",
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
    forcerSelection: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    lignes: {
      type: Number,
      default: null
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.colBsClasses, this.erreurClasse];
    },
    describedbyComputed: function() {
      return this.erreur ? `${this.id}-erreur` : "";
    },
    labelledbyComputed: function() {
      return this.libelle ? `${this.id}-label` : "";
    }
  }
};
</script>