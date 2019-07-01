<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Description de récapitulatif</legend>
        <div class="form-group">
          <div class="col-xs-12">
            <input
              id="ib-libelle"
              type="text"
              name="ib-libelle"
              class="form-control"
              aria-labelledby="ib-libelle-label"
              aria-required="true"
              v-model="libelle_"
            >
            <div class="help-block">
              <label id="ib-libelle-label" class="requis">Libellé</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
export default {
  name: "pe-recap-dt",
  props: {
    libelle: String
  },
  data: function() {
    return {
      libelle_: this.libelle || ""
    };
  },
  watch: {
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    }
  }
};
</script>