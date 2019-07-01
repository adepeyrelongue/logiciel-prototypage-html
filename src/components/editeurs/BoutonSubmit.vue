<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Bouton validation</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-4">
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
              <div class="col-xs-12 col-md-8">
                <input
                  id="ib-aria-label"
                  type="text"
                  name="ib-aria-label"
                  class="form-control"
                  aria-labelledby="ib-aria-label-label"
                  v-model="ariaLabel_"
                >
                <div class="help-block">
                  <label id="ib-aria-label-label">Texte accessible</label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <espacement
            v-bind="$attrs"
            :hasPadding="false"
            @update:prop="$emit('update:prop', $event)"
            @delete:prop="$emit('delete:prop', $event)"
          ></espacement>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pe-bouton-submit",
  props: {
    libelle: String,
    ariaLabel: String
  },
  data: function() {
    return {
      libelle_: this.libelle,
      ariaLabel_: this.ariaLabel || ""
    };
  },
  watch: {
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    },
    ariaLabel_: function(ariaLabel) {
      this.maj("ariaLabel", ariaLabel, ariaLabel !== "");
    }
  }
};
</script>