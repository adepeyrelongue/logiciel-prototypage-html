<template>
  <dl class="row dl-recapitulatif" :class="classesComputed">
    <samp>ib:recap:debut</samp>
    <dt v-if="!blocs.length" class="bloc-vide">
      <p>Récapitulatif</p>
    </dt>
    <template v-for="bloc in blocs">
      <component
        v-if="bloc.tag === 'recap-dt'"
        :key="bloc.cle"
        :is="bloc.tag"
        v-bind="bloc"
        :xs="xsDt"
        :sm="smDt"
        :md="mdDt"
        :lg="lgDt"
      ></component>
      <component
        v-else
        :key="bloc.cle"
        :is="bloc.tag"
        v-bind="bloc"
        :xs="xsDd"
        :sm="smDd"
        :md="mdDd"
        :lg="lgDd"
      ></component>
    </template>
    <samp>ib:recap:fin</samp>
  </dl>
</template>

<script>
export default {
  name: "recap",
  props: {
    xsDt: {
      type: Number,
      required: true
    },
    smDt: {
      type: Number,
      default: 0
    },
    mdDt: {
      type: Number,
      default: 0
    },
    lgDt: {
      type: Number,
      default: 0
    },
    xsDd: {
      type: Number,
      required: true
    },
    smDd: {
      type: Number,
      default: 0
    },
    mdDd: {
      type: Number,
      default: 0
    },
    lgDd: {
      type: Number,
      default: 0
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>