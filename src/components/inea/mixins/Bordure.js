export default {
    props: {
        bordure: {
            type: Number,
            default: -1
        },
        bordureHaute: {
            type: Number,
            default: -1
        },
        bordureDroite: {
            type: Number,
            default: -1
        },
        bordureBasse: {
            type: Number,
            default: -1
        },
        bordureGauche: {
            type: Number,
            default: -1
        },
        bordureCouleur: {
            type: String,
            default: ""
        },
        bordureHauteCouleur: {
            type: String,
            default: ""
        },
        bordureDroiteCouleur: {
            type: String,
            default: ""
        },
        bordureBasseCouleur: {
            type: String,
            default: ""
        },
        bordureGaucheCouleur: {
            type: String,
            default: ""
        },
        bordureArrondi: {
            type: String,
            default: ""
        }
    },
    computed: {
        bordureClasses: function () {
            let css = [];

            if (this.bordure !== -1) {
                css.push(`b-${this.bordure}`);

                if (this.bordureCouleur !== "") {
                    css.push(`b-${this.bordureCouleur}`);
                }
            }

            if (this.bordureHaute !== -1) {
                css.push(`bt-${this.bordureHaute}`);

                if (this.bordureHauteCouleur !== "") {
                    css.push(`bt-${this.bordureHauteCouleur}`);
                }
            }
            if (this.bordureDroite !== -1) {
                css.push(`br-${this.bordureDroite}`);

                if (this.bordureDroiteCouleur !== "") {
                    css.push(`br-${this.bordureDroiteCouleur}`);
                }
            }
            if (this.bordureBasse !== -1) {
                css.push(`bb-${this.bordureBasse}`);

                if (this.bordureBasseCouleur !== "") {
                    css.push(`bb-${this.bordureBasseCouleur}`);
                }
            }
            if (this.bordureGauche !== -1) {
                css.push(`bl-${this.bordureGauche}`);

                if (this.bordureGaucheCouleur !== "") {
                    css.push(`bl-${this.bordureGaucheCouleur}`);
                }
            }

            if (this.bordureArrondi !== "") {
                css.push(this.bordureArrondi);
            }

            return css;
        }
    }
};