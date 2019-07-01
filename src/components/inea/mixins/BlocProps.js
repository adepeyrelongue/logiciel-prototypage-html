export default {
  props: {
    couleur: {
      type: String,
      default: ""
    },
    police: {
      type: String,
      default: ""
    },
    taillePx: {
      type: Number,
      default: 0
    },
    couleurTexte: {
      type: String,
      default: ""
    },
    coupureMots: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    blocClasses: function () {
      let css = [];

      if (this.police) {
        css.push(`font-${this.police}`);
      }
      if (this.taillePx) {
        css.push(`font-size-${this.taillePx}`);
      }
      if (this.couleurTexte) {
        css.push(`text-${this.couleurTexte}`);
      }
      if (this.coupureMots) {
        css.push('text-break');
      }

      return css;
    }
  }
};