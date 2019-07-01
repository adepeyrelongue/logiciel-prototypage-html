export default {
    props: {
        flex: {
            type: String,
            required: true
        },
        wrap: {
            type: Boolean,
            default: false
        },
        justifyContent: {
            type: String,
            default: ""
        },
        alignItems: {
            type: String,
            default: ""
        },
        axePrincipalPx: {
            type: Number,
            default: 0
        },
        axeTransversalPx: {
            type: Number,
            default: 0
        }
    },
    computed: {
        flexClasses: function () {
            let css = [];

            switch (this.flex) {
                case "row":
                    css.push("flex-row");
                    break;

                case "col":
                    css.push("flex-col");
                    break;

                case "inline-row":
                    css.push("inline-flex-row");
                    break;

                case "inline-col":
                    css.push("inline-flex-col");
                    break;

                default:
                    break;
            }

            if (this.wrap) {
                css.push("flex-wrap");
            }

            if (this.justifyContent) {
                switch (this.justifyContent) {
                    case "center":
                        css.push("justify-content-center");
                        break;

                    case "end":
                        css.push("justify-content-end");
                        break;

                    case "between":
                        css.push("justify-content-between");
                        break;

                    case "around":
                        css.push("justify-content-around");
                        break;

                    default:
                        break;
                }
            }

            if (this.alignItems) {
                switch (this.alignItems) {
                    case "start":
                        css.push("align-items-start");
                        break;

                    case "center":
                        css.push("align-items-center");
                        break;

                    case "end":
                        css.push("align-items-end");
                        break;

                    default:
                        break;
                }
            }

            return css;
        },
        flexStyles: function () {
            let styles = {};

            if (this.axePrincipalPx !== 0) {
                const rem = Math.round(this.axePrincipalPx / 16. * 10000000.) / 10000000;
                if (this.flex === "row" || this.flex === "inline-row") {
                    styles.width = `${rem}rem`;
                } else {
                    styles.height = `${rem}rem`;
                }
            }

            if (this.axeTransversalPx !== 0) {
                const rem = Math.round(this.axeTransversalPx / 16. * 10000000.) / 10000000;
                if (this.flex === "row" || this.flex === "inline-row") {
                    styles.height = `${rem}rem`;
                } else {
                    styles.width = `${rem}rem`;
                }
            }

            return styles;
        }
    }
};