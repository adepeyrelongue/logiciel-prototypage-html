<template>
  <div class="espacement-espaces flex-col font-arial">
    <div class="espacement-haut-bas">
      <span class="espacement-libelle">espaces</span>
      <div class="flex-row align-items-center">
        <button
          v-if="espaceHaut_ && espaceHaut_ !== '0'"
          type="button"
          class="pm-espace mr-1_2"
          title="Réduire l'espace haut"
          @click.prevent="reduireEspacement('espaceHaut_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <button
          type="button"
          class="btn-espace"
          :class="{active: espaceHaut_ !== ''}"
          title="Définir l'espace haut"
          @click.prevent="switchEspacement('espaceHaut_')"
        >{{espaceHaut_ || 'nd'}}</button>
        <button
          v-if="espaceHaut_ && espaceHaut_ !== '0'"
          type="button"
          class="pm-espace ml-1_2"
          title="Augmenter l'espace haut"
          @click.prevent="augmenterEspacement('espaceHaut_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>
    <div class="grow-self flex-row">
      <div v-if="hasGutters" class="mx-1_4 px-1"></div>
      <div v-else class="mx-1_4 flex-col justify-content-center">
        <button
          v-if="espaceGauche_ && espaceGauche_ !== '0'"
          type="button"
          class="pm-espace mb-1_2"
          title="Augmenter l'espace gauche"
          @click.prevent="augmenterEspacement('espaceGauche_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <button
          type="button"
          class="btn-espace"
          :class="{active: espaceGauche_ !== ''}"
          title="Définir l'espace gauche"
          @click.prevent="switchEspacement('espaceGauche_')"
        >{{espaceGauche_ || 'nd'}}</button>
        <button
          v-if="espaceGauche_ && espaceGauche_ !== '0'"
          type="button"
          class="pm-espace mt-1_8"
          title="Réduire l'espace gauche"
          @click.prevent="reduireEspacement('espaceGauche_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
      </div>
      <slot/>
      <div v-if="hasGutters" class="mx-1_4 px-1"></div>
      <div v-else class="mx-1_4 flex-col justify-content-center">
        <button
          v-if="espaceDroit_ && espaceDroit_ !== '0'"
          type="button"
          class="pm-espace mb-1_2"
          title="Augmenter l'espace droit"
          @click.prevent="augmenterEspacement('espaceDroit_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <button
          type="button"
          class="btn-espace"
          :class="{active: espaceDroit_ !== ''}"
          title="Définir l'espace droit"
          @click.prevent="switchEspacement('espaceDroit_')"
        >{{espaceDroit_ || 'nd'}}</button>
        <button
          v-if="espaceDroit_ && espaceDroit_ !== '0'"
          type="button"
          class="pm-espace mt-1_8"
          title="Réduire l'espace droit"
          @click.prevent="reduireEspacement('espaceDroit_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
      </div>
    </div>
    <div class="espacement-haut-bas">
      <div class="flex-row align-items-center">
        <button
          v-if="espaceBas_ && espaceBas_ !== '0'"
          type="button"
          class="pm-espace mr-1_2"
          title="Réduire l'espace bas"
          @click.prevent="reduireEspacement('espaceBas_')"
        >
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <button
          type="button"
          class="btn-espace"
          :class="{active: espaceBas_ !== ''}"
          title="Définir l'espace bas"
          @click.prevent="switchEspacement('espaceBas_')"
        >{{espaceBas_ || 'nd'}}</button>
        <button
          v-if="espaceBas_ && espaceBas_ !== '0'"
          type="button"
          class="pm-espace ml-1_2"
          title="Augmenter l'espace bas"
          @click.prevent="augmenterEspacement('espaceBas_')"
        >
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "espaces",
  props: {
    espaceHaut: String,
    espaceDroit: String,
    espaceBas: String,
    espaceGauche: String,
    media: {
      type: String,
      default: ""
    },
    hasGutters: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      espaceHaut_: this.espaceHaut || "",
      espaceDroit_: this.espaceDroit || "",
      espaceBas_: this.espaceBas || "",
      espaceGauche_: this.espaceGauche || ""
    };
  },
  watch: {
    espaceHaut_: function(espaceHaut) {
      const prop = this.media ? `${this.media}EspaceHaut` : "espaceHaut";
      this.maj(prop, espaceHaut, espaceHaut !== "");
    },
    espaceDroit_: function(espaceDroit) {
      const prop = this.media ? `${this.media}EspaceDroit` : "espaceDroit";
      this.maj(prop, espaceDroit, espaceDroit !== "");
    },
    espaceBas_: function(espaceBas) {
      const prop = this.media ? `${this.media}EspaceBas` : "espaceBas";
      this.maj(prop, espaceBas, espaceBas !== "");
    },
    espaceGauche_: function(espaceGauche) {
      const prop = this.media ? `${this.media}EspaceGauche` : "espaceGauche";
      this.maj(prop, espaceGauche, espaceGauche !== "");
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
.espacement-espaces {
  font-size: 9px;
  background-color: lavenderblush;
  border: 1px dashed mediumpurple;
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
.btn-espace {
  background-color: transparent;
  border: 2px solid mediumpurple;
  border-radius: 3px;
  padding: 6px 2px;
  line-height: 0;
}
.btn-espace.active {
  background-color: #cebdf1;
}
.pm-espace {
  color: mediumpurple;
  background-color: transparent;
  border: 0;
  padding: 6px 2px;
  line-height: 0;
}
</style>