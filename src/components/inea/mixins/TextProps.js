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
        tailleTitre: {
            type: Number,
            default: 0
        },
        casse: {
            type: String,
            default: ""
        },
        coupureMots: {
            type: Boolean,
            default: false
        },
        gras: {
            type: Boolean,
            default: false
        },
        italique: {
            type: Boolean,
            default: false
        }

    },
    computed: {
        textClasses: function () {
            let css = [];

            if (this.couleur) {
                css.push(`text-${this.couleur}`);
            }
            if (this.police) {
                css.push(`font-${this.police}`);
            }
            if (this.taillePx) {
                css.push(`font-size-${this.taillePx}`);
            }
            if (this.tailleTitre) {
                css.push(`font-size-h${this.tailleTitre}`);
            }
            if (this.casse) {
                css.push(`text-${this.casse}`);
            }
            if (this.coupureMots) {
                css.push('text-break');
            }
            if (this.gras) {
                css.push("font-bold");
            }
            if (this.italique) {
                css.push("font-italic");
            }

            return css;
        }
    }
};