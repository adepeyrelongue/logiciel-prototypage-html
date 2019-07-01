<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Format du champ</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-format"
              type="text"
              name="ib-format"
              class="form-control"
              aria-labelledby="ib-format-label"
              v-model="format_"
            >
            <div class="help-block">
              <label id="ib-format-label">Format</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-casse"
              name="ib-casse"
              class="form-control"
              aria-labelledby="ib-casse-label"
              v-model="casse_"
            >
              <option value>Défaut</option>
              <option value="uppercase">Lettres capitales</option>
              <option value="lowercase">Lettres minuscules</option>
            </select>
            <div class="help-block">
              <label id="ib-casse-label">Casse</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "format-champ",
  props: {
    format: String,
    formatCasse: String
  },
  data: function() {
    return {
      format_: this.format || "",
      casse_: this.formatCasse || ""
    };
  },
  watch: {
    format_: function(format) {
      this.maj("format", format, format !== "");
    },
    casse_: function(casse) {
      this.maj("formatCasse", casse, casse !== "");
    }
  }
};
</script>