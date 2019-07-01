<template>
  <div class="flex-row">
    <marges
      class="espacement-bloc"
      :margeHaute="margeHaute"
      :margeDroite="margeDroite"
      :margeBasse="margeBasse"
      :margeGauche="margeGauche"
      @update:prop="$emit('update:prop', $event)"
      @delete:prop="$emit('delete:prop', $event)"
    >
      <espaces
        v-if="hasPadding"
        class="grow-self my-1_4"
        :hasGutters="hasGutters"
        :espaceHaut="espaceHaut"
        :espaceDroit="espaceDroit"
        :espaceBas="espaceBas"
        :espaceGauche="espaceGauche"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      >
        <div class="grow-self espacement-centre flex-row justify-content-center align-items-center">
          <span class="font-bold">Tous médias</span>
        </div>
      </espaces>
      <div
        v-else
        class="grow-self espacement-centre flex-row justify-content-center align-items-center"
      >
        <span class="font-bold">Tous médias</span>
      </div>
    </marges>
    <marges
      class="ml-1 espacement-bloc"
      :key="largeur"
      :media="largeur"
      :margeHaute="mediaMargeHaute"
      :margeDroite="mediaMargeDroite"
      :margeBasse="mediaMargeBasse"
      :margeGauche="mediaMargeGauche"
      @update:prop="$emit('update:prop', $event)"
      @delete:prop="$emit('delete:prop', $event)"
    >
      <espaces
        v-if="hasPadding"
        class="grow-self my-1_4"
        :key="largeur"
        :media="largeur"
        :hasGutters="hasGutters"
        :espaceHaut="mediaEspaceHaut"
        :espaceDroit="mediaEspaceDroit"
        :espaceBas="mediaEspaceBas"
        :espaceGauche="mediaEspaceGauche"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      >
        <div class="grow-self espacement-centre flex-row justify-content-center align-items-center">
          <span class="font-bold">{{media}}</span>
        </div>
      </espaces>
      <div
        v-else
        class="grow-self espacement-centre flex-row justify-content-center align-items-center"
      >
        <span class="font-bold">{{media}}</span>
      </div>
    </marges>
  </div>
</template>

<script>
export default {
  name: "espacement",
  props: {
    hasPadding: {
      type: Boolean,
      default: true
    },
    hasGutters: {
      type: Boolean,
      default: false
    },
    margeHaute: String,
    margeDroite: String,
    margeBasse: String,
    margeGauche: String,
    espaceHaut: String,
    espaceDroit: String,
    espaceBas: String,
    espaceGauche: String,
    xsMargeHaute: String,
    xsMargeDroite: String,
    xsMargeBasse: String,
    xsMargeGauche: String,
    xsEspaceHaut: String,
    xsEspaceDroit: String,
    xsEspaceBas: String,
    xsEspaceGauche: String,
    smMargeHaute: String,
    smMargeDroite: String,
    smMargeBasse: String,
    smMargeGauche: String,
    smEspaceHaut: String,
    smEspaceDroit: String,
    smEspaceBas: String,
    smEspaceGauche: String,
    mdMargeHaute: String,
    mdMargeDroite: String,
    mdMargeBasse: String,
    mdMargeGauche: String,
    mdEspaceHaut: String,
    mdEspaceDroit: String,
    mdEspaceBas: String,
    mdEspaceGauche: String,
    lgMargeHaute: String,
    lgMargeDroite: String,
    lgMargeBasse: String,
    lgMargeGauche: String,
    lgEspaceHaut: String,
    lgEspaceDroit: String,
    lgEspaceBas: String,
    lgEspaceGauche: String
  },
  computed: {
    largeur: function() {
      return this.$store.state.largeur;
    },
    media: function() {
      switch (this.$store.state.largeur) {
        case "xs":
          return "Smartphone";
        case "sm":
          return "Tablette";
        case "md":
          return "Moyen";
        case "lg":
          return "Large";

        default:
          break;
      }
    },
    mediaMargeHaute: function() {
      return this[`${this.largeur}MargeHaute`] || "";
    },
    mediaMargeDroite: function() {
      return this[`${this.largeur}MargeDroite`] || "";
    },
    mediaMargeBasse: function() {
      return this[`${this.largeur}MargeBasse`] || "";
    },
    mediaMargeGauche: function() {
      return this[`${this.largeur}MargeGauche`] || "";
    },
    mediaEspaceHaut: function() {
      return this[`${this.largeur}EspaceHaut`] || "";
    },
    mediaEspaceDroit: function() {
      return this[`${this.largeur}EspaceDroit`] || "";
    },
    mediaEspaceBas: function() {
      return this[`${this.largeur}EspaceBas`] || "";
    },
    mediaEspaceGauche: function() {
      return this[`${this.largeur}EspaceGauche`] || "";
    }
  }
};
</script>
<style>
.espacement-bloc {
  height: 140px;
  width: 200px;
}
.espacement-centre {
  background-color: lightcyan;
  border: 1px dashed darkcyan;
}
</style>