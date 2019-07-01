<template>
  <div class="bordure-bloc flex-col font-arial">
    <div class="bordure-haut-bas">
      <span class="bordure-libelle">bordures</span>
      <div class="flex-row">
        <button
          v-if="bordureHaute_ !== -1"
          type="button"
          class="pm-bordure mr-1_2"
          title="Réduire la bordure haute"
          @click.prevent="reduireBordure('bordureHaute_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <button
          type="button"
          class="btn-bordure"
          :class="{active: bordureHaute_ !== -1}"
          title="Définir la bordure haute"
          @click.prevent="switchBordure('bordureHaute_')"
        >{{bordureHaute_ === -1 ? 'nd' : bordureHaute_}}</button>
        <button
          v-if="bordureHaute_ !== -1"
          type="button"
          class="pm-bordure ml-1_2"
          title="Augmenter la bordure haute"
          @click.prevent="augmenterBordure('bordureHaute_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <selecteur-couleur
          v-if="bordureHaute_ > 0"
          class="align-self-center ml-1_2"
          v-model="bordureHauteCouleur_"
        ></selecteur-couleur>
      </div>
    </div>
    <div class="grow-self flex-row">
      <div class="mx-1_4 flex-col justify-content-center">
        <div class="flex-row">
          <selecteur-couleur
            v-if="bordureGauche_ > 0"
            class="align-self-center mr-1_2"
            v-model="bordureGaucheCouleur_"
          ></selecteur-couleur>
          <div class="flex-col">
            <button
              v-if="bordureGauche_ !== -1"
              type="button"
              class="pm-bordure mb-1_2"
              title="Augmenter la bordure gauche"
              @click.prevent="augmenterBordure('bordureGauche_')"
            >
              <span class="glyphicon glyphicon-plus"></span>
            </button>
            <button
              type="button"
              class="btn-bordure"
              :class="{active: bordureGauche_ !== -1}"
              title="Définir la bordure gauche"
              @click.prevent="switchBordure('bordureGauche_')"
            >{{bordureGauche_ === -1 ? 'nd' : bordureGauche_}}</button>
            <button
              v-if="bordureGauche_ !== -1"
              type="button"
              class="pm-bordure mt-1_4"
              title="Réduire la bordure gauche"
              @click.prevent="reduireBordure('bordureGauche_')"
            >
              <span class="glyphicon glyphicon-minus"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="grow-self bordure-centre flex-col justify-content-center align-items-center">
        <div class="flex-row">
          <button
            v-if="bordure_ !== -1"
            type="button"
            class="pm-bordure mr-1_2"
            title="Réduire la bordure"
            @click.prevent="reduireBordure('bordure_')"
          >
            <span class="glyphicon glyphicon-minus"></span>
          </button>
          <button
            type="button"
            class="btn-bordure"
            :class="{active: bordure_ !== -1}"
            title="Définir la bordure"
            @click.prevent="switchBordure('bordure_')"
          >{{bordure_ === -1 ? 'nd' : bordure_}}</button>
          <button
            v-if="bordure_ !== -1"
            type="button"
            class="pm-bordure ml-1_2"
            title="Augmenter la bordure"
            @click.prevent="augmenterBordure('bordure_')"
          >
            <span class="glyphicon glyphicon-plus"></span>
          </button>
        </div>
        <selecteur-couleur v-if="bordure_ > 0" class="mt-1_2" v-model="bordureCouleur_"></selecteur-couleur>
        <select class="mt-1_2" v-model="bordureArrondi_">
          <option value>Aucun arrondi</option>
          <option value="rounded">Coins arrondis</option>
          <option value="rounded-0">Sans arrondis</option>
          <option value="rounded-top">Coins arrondis en haut</option>
          <option value="rounded-right">Coins arrondis à droite</option>
          <option value="rounded-bottom">Coins arrondis en bas</option>
          <option value="rounded-left">Coins arrondis à gauche</option>
          <option value="rounded-pill">Coins très arrondis</option>
          <option value="rounded-circle">Badge</option>
        </select>
      </div>
      <div class="mx-1_4 flex-col justify-content-center">
        <div class="flex-row">
          <div class="flex-col">
            <button
              v-if="bordureDroite_ !== -1"
              type="button"
              class="pm-bordure mb-1_2"
              title="Augmenter la bordure droite"
              @click.prevent="augmenterBordure('bordureDroite_')"
            >
              <span class="glyphicon glyphicon-plus"></span>
            </button>
            <button
              type="button"
              class="btn-bordure"
              :class="{active: bordureDroite_ !== -1}"
              title="Définir la bordure droite"
              @click.prevent="switchBordure('bordureDroite_')"
            >{{bordureDroite_ === -1 ? 'nd' : bordureDroite_}}</button>
            <button
              v-if="bordureDroite_ !== -1"
              type="button"
              class="pm-bordure mt-1_4"
              title="Réduire la bordure droite"
              @click.prevent="reduireBordure('bordureDroite_')"
            >
              <span class="glyphicon glyphicon-minus"></span>
            </button>
          </div>
          <selecteur-couleur
            v-if="bordureDroite_ > 0"
            class="align-self-center ml-1_2"
            v-model="bordureDroiteCouleur_"
          ></selecteur-couleur>
        </div>
      </div>
    </div>
    <div class="bordure-haut-bas">
      <div class="flex-row">
        <button
          v-if="bordureBasse_ !== -1"
          type="button"
          class="pm-bordure mr-1_2"
          title="Réduire la bordure basse"
          @click.prevent="reduireBordure('bordureBasse_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <button
          type="button"
          class="btn-bordure"
          :class="{active: bordureBasse_ !== -1}"
          title="Définir la bordure basse"
          @click.prevent="switchBordure('bordureBasse_')"
        >{{bordureBasse_ === -1 ? 'nd' : bordureBasse_}}</button>
        <button
          v-if="bordureBasse_ !== -1"
          type="button"
          class="pm-bordure ml-1_2"
          title="Augmenter la bordure basse"
          @click.prevent="augmenterBordure('bordureBasse_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <selecteur-couleur
          v-if="bordureBasse_ > 0"
          class="align-self-center ml-1_2"
          v-model="bordureBasseCouleur_"
        ></selecteur-couleur>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bordure",
  props: {
    bordure: Number,
    bordureHaute: Number,
    bordureDroite: Number,
    bordureBasse: Number,
    bordureGauche: Number,
    bordureCouleur: String,
    bordureHauteCouleur: String,
    bordureDroiteCouleur: String,
    bordureBasseCouleur: String,
    bordureGaucheCouleur: String,
    bordureArrondi: String
  },
  data: function() {
    return {
      bordure_: this.bordure === undefined ? -1 : this.bordure,
      bordureHaute_: this.bordureHaute === undefined ? -1 : this.bordureHaute,
      bordureDroite_: this.bordureDroite === undefined ? -1 : this.bordureDroite,
      bordureBasse_: this.bordureBasse === undefined ? -1 : this.bordureBasse,
      bordureGauche_: this.bordureGauche === undefined ? -1 : this.bordureGauche,
      bordureCouleur_: this.bordureCouleur || "",
      bordureHauteCouleur_: this.bordureHauteCouleur || "",
      bordureDroiteCouleur_: this.bordureDroiteCouleur || "",
      bordureBasseCouleur_: this.bordureBasseCouleur || "",
      bordureGaucheCouleur_: this.bordureGaucheCouleur || "",
      bordureArrondi_: this.bordureArrondi || ""
    };
  },
  watch: {
    bordure_: function(bordure) {
      this.maj("bordure", bordure, bordure !== -1);
    },
    bordureHaute_: function(bordureHaute) {
      this.maj("bordureHaute", bordureHaute, bordureHaute !== -1);
    },
    bordureDroite_: function(bordureDroite) {
      this.maj("bordureDroite", bordureDroite, bordureDroite !== -1);
    },
    bordureBasse_: function(bordureBasse) {
      this.maj("bordureBasse", bordureBasse, bordureBasse !== -1);
    },
    bordureGauche_: function(bordureGauche) {
      this.maj("bordureGauche", bordureGauche, bordureGauche !== -1);
    },
    bordureCouleur_: function(bordureCouleur) {
      this.maj("bordureCouleur", bordureCouleur, bordureCouleur !== "");
    },
    bordureHauteCouleur_: function(bordureHauteCouleur) {
      this.maj(
        "bordureHauteCouleur",
        bordureHauteCouleur,
        bordureHauteCouleur !== ""
      );
    },
    bordureDroiteCouleur_: function(bordureDroiteCouleur) {
      this.maj(
        "bordureDroiteCouleur",
        bordureDroiteCouleur,
        bordureDroiteCouleur !== ""
      );
    },
    bordureBasseCouleur_: function(bordureBasseCouleur) {
      this.maj(
        "bordureBasseCouleur",
        bordureBasseCouleur,
        bordureBasseCouleur !== ""
      );
    },
    bordureGaucheCouleur_: function(bordureGaucheCouleur) {
      this.maj(
        "bordureGaucheCouleur",
        bordureGaucheCouleur,
        bordureGaucheCouleur !== ""
      );
    },
    bordureArrondi_: function(bordureArrondi) {
      this.maj("bordureArrondi", bordureArrondi, bordureArrondi !== "");
    }
  },
  methods: {
    switchBordure: function(bordure) {
      if (this[bordure] === -1) {
        this[bordure] = 1;
      } else {
        this[bordure] = -1;
      }
    },
    reduireBordure: function(bordure) {
      if (this[bordure] > 0) {
        this[bordure] = this[bordure] - 1;
      }
    },
    augmenterBordure: function(bordure) {
      if (this[bordure] < 5) {
        this[bordure] = this[bordure] + 1;
      }
    }
  }
};
</script>
<style>
.bordure-bloc {
  height: 140px;
  width: 400px;
  font-size: 9px;
  background-color: #cbf3cb;
  border: 1px dashed green;
}
.bordure-centre {
  background-color: lightcyan;
  border: 1px dashed darkcyan;
}
.bordure-haut-bas {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  position: relative;
}
.bordure-libelle {
  position: absolute;
  top: 1px;
  left: 1px;
}
.btn-bordure {
  background-color: transparent;
  border: 2px solid green;
  border-radius: 3px;
  padding: 6px 2px;
  line-height: 0;
}
.btn-bordure.active {
  background-color: #95d295;
}
.pm-bordure {
  color: green;
  background-color: transparent;
  border: 0;
  padding: 6px 2px;
  line-height: 0;
}
</style>