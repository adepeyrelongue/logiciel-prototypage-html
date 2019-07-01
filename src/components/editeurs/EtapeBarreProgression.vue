<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Etape</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-libelle"
              type="text"
              name="ib-libelle"
              class="form-control"
              v-model="libelle_"
              aria-labelledby="ib-libelle-label"
              aria-required="true"
            >
            <div class="help-block">
              <label id="ib-libelle-label" class="requis">Libellé</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="checkbox">
              <label for="ib-active">
                <input id="ib-active" type="checkbox" name="ib-active" v-model="active_">
                Etape courante
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-etape-barre-progression",
  props: {
    active: Boolean,
    libelle: String
  },
  data: function() {
    return {
      active_: this.active || false,
      libelle_: this.libelle
    };
  },
  watch: {
    active_: function(active) {
      this.maj("active", active, active);
    },
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    }
  }
};
</script>