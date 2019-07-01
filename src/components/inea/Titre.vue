<template>
  <div class="titre" :class="classesComputed">
    <samp>ib:titre:debut</samp>
    <h1 v-if="niveau === 1" :inea-autofocus="ineaAutofocus" :tabindex="ineaAutofocus ? '0' : false">
      <span v-if="icone" class="mr-1_2" :class="icone"></span>
      {{libelle}}
    </h1>
    <h2 v-if="niveau === 2" :inea-autofocus="ineaAutofocus" :tabindex="ineaAutofocus ? '0' : false">
      <span v-if="icone" class="mr-1_2" :class="icone"></span>
      {{libelle}}
    </h2>
    <h3
      v-if="niveau === 3"
      :inea-autofocus="ineaAutofocus"
      :tabindex="ineaAutofocus ? '0' : false"
    >{{libelle}}</h3>
    <samp>ib:titre:fin</samp>
  </div>
</template>

<script>
import AlignementProps from "./mixins/AlignementProps";
export default {
  name: "titre",
  mixins: [AlignementProps],
  props: {
    niveau: {
      type: Number,
      required: true
    },
    libelle: {
      type: String,
      required: true
    },
    icone: {
      type: String,
      default: ""
    },
    ineaAutofocus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, this.alignementClasse];
    }
  }
};
</script>