<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Erreur du champ</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-erreur"
              type="text"
              name="ib-erreur"
              class="form-control"
              aria-labelledby="ib-erreur-label"
              v-model="erreur_"
            >
            <div class="help-block">
              <label id="ib-erreur-label">Message d'erreur</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "erreur-champ",
  props: {
    erreur: String
  },
  data: function() {
    return {
      erreur_: this.erreur || ""
    };
  },
  watch: {
    erreur_: function(erreur) {
      this.maj("erreur", erreur, erreur !== "");
    }
  }
};
</script>