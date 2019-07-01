<template>
  <a
    :style="retourLigneComputed"
    :class="classesComputed"
    :href="hrefComputed"
    :title="titleComputed"
    :aria-label="ariaLabelComputed"
    :target="nouvelleFenetre ? '_blank' : false"
    :rel="nouvelleFenetre ? 'noopener' : false"
    :data-toggle="dataToggleComputed"
    :aria-controls="boutonAction === 'collapse' ? href : false"
    :aria-expanded="boutonAction === 'collapse' ? true : false"
  >
    <samp>ib:lien:debut</samp>
    <span v-if="bouton && icone !== ''" :class="[icone, {'mr-1_2': texte !== ''}]"></span>
    {{texte}}
    <span
      v-if="texte !== '' && nouvelleFenetre"
      class="ml-1_4 dgfipicon dgfipicon-sortie-page infobulle"
      title="nouvelle fenêtre"
    ></span>
    <samp>ib:lien:fin</samp>
  </a>
</template>

<script>
import Espacement from "./mixins/Espacement";
import AlignementProps from "./mixins/AlignementProps";

export default {
  name: "lien",
  mixins: [Espacement, AlignementProps],
  props: {
    texte: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      required: true
    },
    couleur: {
      type: String,
      default: ""
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    nouvelleFenetre: {
      type: Boolean,
      default: false
    },
    icone: {
      type: String,
      default: ""
    },
    bouton: {
      type: Boolean,
      default: false
    },
    boutonAction: {
      type: String,
      default: "lien"
    },
    inMessage: {
      type: Boolean,
      default: false
    },
    retourLigne: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classesComputed: function() {
      let css = [
        ...this.baseClasses,
        ...this.espacementClasses,
        this.alignementClasse
      ];

      if (this.bouton) {
        if (this.icone) {
          css.push("btn-compose");
        }

        css.push(`btn btn-${this.couleur || "default"}`);
      }
      if (this.inMessage) {
        css.push("alert-link");
      }

      return css;
    },
    hrefComputed: function() {
      if (this.boutonAction === "lien") {
        return this.href;
      } else {
        return "#" + this.href;
      }
    },
    dataToggleComputed: function() {
      switch (this.boutonAction) {
        case "collapse":
          return "collapse";

        case "modal":
          return "modal";

        default:
          return false;
      }
    },
    ariaLabelComputed: function() {
      if (this.ariaLabel) {
        if (this.nouvelleFenetre) {
          return this.ariaLabel + " (nouvelle fenêtre)";
        } else {
          return this.ariaLabel;
        }
      } else {
        return false;
      }
    },
    titleComputed: function() {
      if (this.texte === "" && this.bouton && this.icone) {
        if (this.nouvelleFenetre) {
          return this.ariaLabel + " (nouvelle fenêtre)";
        } else {
          return this.ariaLabel;
        }
      } else {
        return false;
      }
    },
    retourLigneComputed: function() {
      if (this.bouton && this.retourLigne) {
        return { "white-space": "normal" };
      } else {
        return false;
      }
    }
  }
};
</script>