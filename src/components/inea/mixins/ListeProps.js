export default {
    props: {
        ariaLabel: {
            type: String,
            required: true
        },
        zebree: {
            type: Boolean,
            default: false
        },
        sansStyle: {
            type: Boolean,
            default: true
        },
        pucesInea: {
            type: Boolean,
            default: false
        },
        puceHaute: {
            type: Boolean,
            default: false
        },
        condensee: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        listeClasses: function () {
            let css = [];

            if (this.pucesInea) {
                css.push("liste");

                if (this.puceHaute) {
                    css.push("liste-puce-haute");
                }

                if (this.condensee) {
                    css.push("liste-condensee");
                }
            } else if (this.sansStyle) {
                css.push("list-unstyled");
            }

            if (this.zebree) {
                css.push("list-striped");
            }

            return css;
        }
    }
};