export default {
    props: {
        alignement: {
            type: String,
            default: ""
        }
    },
    computed: {
        alignementClasse: function () {
            if (this.alignement) {
                return `text-${this.alignement}`;
            } else {
                return "";
            }
        }
    }
};