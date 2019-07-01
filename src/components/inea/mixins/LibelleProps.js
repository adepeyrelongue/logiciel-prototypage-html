import { texteVersParagraphesHtml, kebabCase } from "../../../utils";

export default {
  props: {
    libelle: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: ""
    },
    requis: {
      type: Boolean,
      default: false
    },
    informations: {
      type: Object,
      default: null
    }
  },
  computed: {
    informationsHtml: function () {
      return texteVersParagraphesHtml(this.informations.texte);
    },
    idComputed: function () {
      return this.id || kebabCase(this.libelle);
    }
  }
};