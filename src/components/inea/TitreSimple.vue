<script>
import AlignementProps from "./mixins/AlignementProps";
import TextProps from "./mixins/TextProps";
import Espacement from "./mixins/Espacement";
export default {
  name: "titre-simple",
  mixins: [TextProps, Espacement, AlignementProps],
  props: {
    niveau: {
      type: Number,
      required: true
    },
    libelle: {
      type: String,
      required: true
    }
  },
  render: function(createElement) {
    return createElement(
      "h" + this.niveau,
      {
        class: [
          ...this.baseClasses,
          ...this.espacementClasses,
          ...this.textClasses,
          this.alignementClasse
        ]
      },
      this.libelle
    );
  }
};
</script>