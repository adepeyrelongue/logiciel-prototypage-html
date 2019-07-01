<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Fil d'Ariane</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-page-active"
              type="text"
              name="ib-page-active"
              class="form-control"
              aria-labelledby="ib-page-active-label"
              aria-required="true"
              v-model="nomPageActive_"
            >
            <div class="help-block">
              <label id="ib-page-active-label" class="requis">Page courante</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
export default {
  name: "pe-bloc-fil-ariane",
  props: {
    nomPageActive: String
  },
  data: function() {
    return {
      nomPageActive_: this.nomPageActive || ""
    };
  },
  watch: {
    nomPageActive_: function(nomPageActive) {
      this.maj("nomPageActive", nomPageActive);
    }
  }
};
</script>