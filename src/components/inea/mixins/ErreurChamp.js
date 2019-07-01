export default {
  props: {
    erreur: {
      type: String,
      default: ""
    }
  },
  computed: {
    erreurClasse: function() {
      return {'has-error': this.erreur !== ""};
    }
  }
};