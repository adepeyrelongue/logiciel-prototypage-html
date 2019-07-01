export default {
  props: {
    cle: Number,
    tag: String,
    flexAlignSelf: {
      type: String,
      default: ""
    },
    flexGrowSelf: {
      type: Boolean,
      default: false
    },
    flexTaille: {
      type: String,
      default: ""
    },
    classesApp: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  computed: {
    isSelectionne: function () {
      return (this.$store && !this.$store.state.previsualisation && this.$store.state.selection.cle === this.cle) || false;
    },
    isRepere: function () {
      return (this.$store && !this.$store.state.previsualisation && this.$store.state.composantRepere === this.cle) || false;
    },
    previsualisation: function () {
      return (this.$store && this.$store.state.previsualisation) || false;
    },
    baseClasses: function () {
      let css = [...this.classesApp];

      if (this.isRepere) {
        css.push("composant-repere");
      }

      if (this.isSelectionne) {
        css.push("composant-selectionne");
      }

      if (this.flexAlignSelf) {
        switch (this.flexAlignSelf) {
          case "start":
            css.push("align-self-start");
            break;

          case "center":
            css.push("align-self-center");
            break;

          case "end":
            css.push("align-self-end");
            break;

          case "stretch":
            css.push("align-self-stretch");
            break;

          default:
            break;
        }
      }

      if (this.flexGrowSelf) {
        css.push("grow-self");
      }

      if (this.flexTaille) {
        css.push(`grow-self-${this.flexTaille}`);
      }

      return css;
    }
  },
  mounted: function () {
    this.$el.addEventListener('click', this.onClick)
  },
  updated: function () {
    this.$el.addEventListener('click', this.onClick)
  },
  beforeDestroy: function () {
    this.$el.removeEventListener('click', this.onClick)
  },
  filters: {
    wipe: function (value) {
      return value || false;
    }
  },
  methods: {
    onClick: function (e) {
      const targetTag = e.target.tagName.toLowerCase();
      if (targetTag === "label") {
        if (!this.previsualisation) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }

      if (!this.previsualisation) {
        e.stopPropagation();

        let chemin = [];
        let noeud = this;
        while (true) {
          if (noeud.tag === "dialogue-contenu") {
            const espaceDialogue = this.$store.state.page.elements.espaceDialogue;
            const dialogue = this.$store.state.dialogue;

            chemin.unshift("contenu");
            for (let index = 0; index < espaceDialogue.blocs.length; index++) {
              if (espaceDialogue.blocs[index].cle === dialogue.cle) {
                chemin.unshift(index);
                break;
              }
            }
            chemin.unshift("espaceDialogue");

            this.$store.dispatch("selectionnerComposant", chemin);
            break;
          }

          let enfant;
          if (noeud.$parent.blocs) {
            for (let index = 0; index < noeud.$parent.blocs.length; index++) {
              if (noeud.$parent.blocs[index].cle === noeud.cle) {
                enfant = index;
                break;
              }
            }
          } else {
            for (const element of Object.keys(noeud.$parent.elements)) {
              if (noeud.$parent.elements[element].cle === noeud.cle) {
                enfant = element;
                break;
              }
            }
          }
          chemin.unshift(enfant);

          noeud = noeud.$parent;
          if (noeud.tag !== "dialogue-contenu" && noeud.$parent.$el.id === "app") {
            this.$store.dispatch("selectionnerComposant", chemin);
            break;
          }
        }
      }
    }
  }
};