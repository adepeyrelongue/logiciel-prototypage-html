<template>
  <div class="espacement-marges flex-col font-arial">
    <div class="espacement-haut-bas">
      <span class="espacement-libelle">marges{{media !== '' ? ' RWD' : ''}}</span>
      <div class="flex-row align-items-center">
        <button
          v-if="margeHaute_ && margeHaute_ !== '0'"
          type="button"
          class="pm-marge mr-1_2"
          title="Réduire la marge haute"
          @click.prevent="reduireEspacement('margeHaute_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <button
          type="button"
          class="btn-marge"
          :class="{active: margeHaute_ !== ''}"
          title="Définir la marge haute"
          @click.prevent="switchEspacement('margeHaute_')"
        >{{margeHaute_ || 'nd'}}</button>
        <button
          v-if="margeHaute_ && margeHaute_ !== '0'"
          type="button"
          class="pm-marge ml-1_2"
          title="Augmenter la marge haute"
          @click.prevent="augmenterEspacement('margeHaute_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>
    <div class="grow-self flex-row">
      <div class="mx-1_4 flex-col justify-content-center">
        <button
          v-if="margeGauche_ && margeGauche_ !== '0'"
          type="button"
          class="pm-marge mb-1_2"
          title="Augmenter la marge gauche"
          @click.prevent="augmenterEspacement('margeGauche_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <button
          type="button"
          class="btn-marge"
          :class="{active: margeGauche_ !== ''}"
          title="Définir la marge gauche"
          @click.prevent="switchEspacement('margeGauche_')"
        >{{margeGauche_ || 'nd'}}</button>
        <button
          v-if="margeGauche_ && margeGauche_ !== '0'"
          type="button"
          class="pm-marge mt-1_4"
          title="Réduire la marge gauche"
          @click.prevent="reduireEspacement('margeGauche_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
      </div>
      <slot/>
      <div class="mx-1_4 flex-col justify-content-center">
        <button
          v-if="margeDroite_ && margeDroite_ !== '0'"
          type="button"
          class="pm-marge mb-1_2"
          title="Augmenter la marge droite"
          @click.prevent="augmenterEspacement('margeDroite_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <button
          type="button"
          class="btn-marge"
          :class="{active: margeDroite_ !== ''}"
          title="Définir la marge droite"
          @click.prevent="switchEspacement('margeDroite_')"
        >{{margeDroite_ || 'nd'}}</button>
        <button
          v-if="margeDroite_ && margeDroite_ !== '0'"
          type="button"
          class="pm-marge mt-1_4"
          title="Réduire la marge droite"
          @click.prevent="reduireEspacement('margeDroite_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
      </div>
    </div>
    <div class="espacement-haut-bas">
      <div class="flex-row align-items-center">
        <button
          v-if="margeBasse_ && margeBasse_ !== '0'"
          type="button"
          class="pm-marge mr-1_2"
          title="Réduire la marge basse"
          @click.prevent="reduireEspacement('margeBasse_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <button
          type="button"
          class="btn-marge"
          :class="{active: margeBasse_ !== ''}"
          title="Définir la marge basse"
          @click.prevent="switchEspacement('margeBasse_')"
        >{{margeBasse_ || 'nd'}}</button>
        <button
          v-if="margeBasse_ && margeBasse_ !== '0'"
          type="button"
          class="pm-marge ml-1_2"
          title="Augmenter la marge basse"
          @click.prevent="augmenterEspacement('margeBasse_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "marges",
  props: {
    margeHaute: String,
    margeDroite: String,
    margeBasse: String,
    margeGauche: String,
    media: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      margeHaute_: this.margeHaute || "",
      margeDroite_: this.margeDroite || "",
      margeBasse_: this.margeBasse || "",
      margeGauche_: this.margeGauche || ""
    };
  },
  watch: {
    margeHaute_: function(margeHaute) {
      const prop = this.media ? `${this.media}MargeHaute` : "margeHaute";
      this.maj(prop, margeHaute, margeHaute !== "");
    },
    margeDroite_: function(margeDroite) {
      const prop = this.media ? `${this.media}MargeDroite` : "margeDroite";
      this.maj(prop, margeDroite, margeDroite !== "");
    },
    margeBasse_: function(margeBasse) {
      const prop = this.media ? `${this.media}MargeBasse` : "margeBasse";
      this.maj(prop, margeBasse, margeBasse !== "");
    },
    margeGauche_: function(margeGauche) {
      const prop = this.media ? `${this.media}MargeGauche` : "margeGauche";
      this.maj(prop, margeGauche, margeGauche !== "");
    }
  },
  methods: {
    switchEspacement: function(espacement) {
      if (this[espacement] === "") {
        this[espacement] = "1";
      } else if (this[espacement] !== "0") {
        this[espacement] = "0";
      } else {
        this[espacement] = "";
      }
    },
    reduireEspacement: function(espacement) {
      switch (this[espacement]) {
        case "3":
          this[espacement] = "3_2";
          break;

        case "3_2":
          this[espacement] = "1";
          break;

        case "1":
          this[espacement] = "3_4";
          break;

        case "3_4":
          this[espacement] = "1_2";
          break;

        case "1_2":
          this[espacement] = "1_4";
          break;

        case "1_4":
          this[espacement] = "1_8";
          break;

        default:
          break;
      }
    },
    augmenterEspacement: function(espacement) {
      switch (this[espacement]) {
        case "1_8":
          this[espacement] = "1_4";
          break;

        case "1_4":
          this[espacement] = "1_2";
          break;

        case "1_2":
          this[espacement] = "3_4";
          break;

        case "3_4":
          this[espacement] = "1";
          break;

        case "1":
          this[espacement] = "3_2";
          break;

        case "3_2":
          this[espacement] = "3";
          break;

        default:
          break;
      }
    },
  }
};
</script>
<style>
.espacement-marges {
  font-size: 9px;
  background-color: lightgoldenrodyellow;
  border: 1px dashed goldenrod;
}
.espacement-haut-bas {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  position: relative;
}
.espacement-libelle {
  position: absolute;
  top: 1px;
  left: 1px;
}
.btn-marge {
  background-color: transparent;
  border: 2px solid goldenrod;
  border-radius: 3px;
  padding: 6px 2px;
  line-height: 0;
}
.btn-marge.active {
  background-color: #ffd97b;
}
.pm-marge {
  color: goldenrod;
  background-color: transparent;
  border: 0;
  padding: 6px 2px;
  line-height: 0;
}
</style>