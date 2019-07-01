<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Page</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-title"
              type="text"
              name="ib-title"
              class="form-control"
              v-model="title_"
              aria-labelledby="ib-title-label"
              aria-required="true"
            >
            <div class="help-block">
              <label id="ib-title-label" class="requis">Titre</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-thematique"
              name="ib-thematique"
              class="form-control"
              aria-labelledby="ib-thematique-label"
              v-model="thematique_"
            >
              <option value="aucune">Aucune</option>
              <option
                v-for="thematique in thematiques"
                :key="thematique.valeur"
                :value="thematique.valeur"
              >{{thematique.visible}}</option>
            </select>
            <div class="help-block">
              <label id="ib-thematique-label">Thématique</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-page",
  props: {
    title: String,
    thematique: String
  },
  data: function() {
    return {
      title_: this.title,
      thematique_: this.thematique || "aucune"
    };
  },
  computed: {
    thematiques: function() {
      let thematiques = [];

      for (const thematique of this.$store.state.thematiques) {
        thematiques.push({
          visible:
            thematique.nom.charAt(0).toUpperCase() +
            thematique.nom.slice(1).replace(/[^\w]/g, " "),
          valeur: thematique.nom
        });
      }

      return thematiques;
    }
  },
  watch: {
    title_: function(title) {
      this.maj("title", title);
    },
    thematique_: function(thematique) {
      this.maj("thematique", thematique, thematique !== "aucune");
    }
  }
};
</script>