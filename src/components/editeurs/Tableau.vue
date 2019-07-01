<template>
  <div class="row">
    <div class="col-xs-12">
      <fieldset>
        <legend>Tableau</legend>
        <div class="form-group">
          <div class="col-xs-12">
            <div class="col-xs-12 col-md-6">
              <input
                id="ib-texte"
                type="text"
                name="ib-texte"
                class="form-control"
                v-model="captionLabel_"
                aria-labelledby="ib-texte-label"
              >
              <div class="help-block">
                <label id="ib-texte-label" class="requis">Caption</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12">
            <div class="col-xs-12 col-md-3">
              <div class="checkbox">
                <label for="ib-zebre">
                  <input id="ib-zebre" type="checkbox" name="ib-zebre" v-model="zebre_">Tableau zébré
                </label>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="checkbox">
                <label for="ib-survol">
                  <input id="ib-survol" type="checkbox" name="ib-survol" v-model="survol_">Surbrillance de ligne lors du survol
                </label>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="checkbox">
                <label for="ib-bord">
                  <input id="ib-bord" type="checkbox" name="ib-bord" v-model="bord_">Bords exterieurs
                </label>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
export default {
  name: "pe-tableau",
  props: {
    blocs: Array,
    captionLabel: {
      type: String,
      required: true
    },
    zebre: Boolean,
    survol: Boolean,
    bord: Boolean
  },
  data: function() {
    return {
      captionLabel_: this.captionLabel || "",
      zebre_: this.zebre || false,
      survol_: this.survol || false,
      bord_: this.bord || false
    };
  },
  watch: {
    captionLabel_: function(captionLabel) {
      this.maj("captionLabel", captionLabel);
    },
    zebre_: function(zebre) {
      this.maj("zebre", zebre, zebre);
    },
    survol_: function(survol) {
      this.maj("survol", survol, survol !== "");
    },
    bord_: function(bord) {
      this.maj("bord", bord, bord);
    }
  },
  computed: {}
};
</script>