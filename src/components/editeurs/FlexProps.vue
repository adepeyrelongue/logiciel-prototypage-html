<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Flex</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-flex"
              name="ib-flex"
              class="form-control"
              aria-labelledby="ib-flex-label"
              aria-required="true"
              v-model="flex_"
            >
              <option value="row">Horizontale</option>
              <option value="col">Verticale</option>
              <option value="inline-row">Horizontale (inline)</option>
              <option value="inline-col">Verticale (inline)</option>
            </select>
            <div class="help-block">
              <label id="ib-flex-label" class="requis">Distribution des éléments</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-justify"
              name="ib-justify"
              class="form-control"
              aria-labelledby="ib-justify-label"
              v-model="justifyContent_"
            >
              <option value="defaut">Début</option>
              <option value="center">Milieu</option>
              <option value="end">Fin</option>
              <option value="between">Espaces entre</option>
              <option value="around">Espaces autour</option>
            </select>
            <div class="help-block">
              <label id="ib-justify-label">Justification des éléments</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-alignement"
              name="ib-alignement"
              class="form-control"
              aria-labelledby="ib-alignement-label"
              v-model="alignItems_"
            >
              <option value="defaut">Etirés</option>
              <option value="start">Début</option>
              <option value="center">Milieu</option>
              <option value="end">Fin</option>
            </select>
            <div class="help-block">
              <label id="ib-alignement-label">Alignement des éléments</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <div class="checkbox">
              <label for="ib-wrap">
                <input id="ib-wrap" type="checkbox" name="ib-wrap" v-model="wrap_">Eléments sur plusieurs rangées
              </label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-crosspx"
              type="text"
              name="ib-crosspx"
              class="form-control"
              aria-labelledby="ib-crosspx-label"
              v-model="axeTransversalPx_"
            >
            <div class="help-block">
              <label
                id="ib-crosspx-label"
              >{{flex_ === 'row' || flex_ === 'inline-row' ? 'Hauteur' : 'Largeur'}} (pixels)</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-mainpx"
              type="text"
              name="ib-mainpx"
              class="form-control"
              ria-labelledby="ib-mainpx-label"
              v-model="axePrincipalPx_"
            >
            <div class="help-block">
              <label
                id="ib-mainpx-label"
              >{{flex_ === 'row' || flex_ === 'inline-row' ? 'Largeur' : 'Hauteur'}} (pixels)</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "flex-props",
  props: {
    flex: String,
    wrap: Boolean,
    justifyContent: String,
    alignItems: String,
    axePrincipalPx: Number,
    axeTransversalPx: Number
  },
  data: function() {
    return {
      flex_: this.flex,
      wrap_: this.wrap || false,
      justifyContent_: this.justifyContent || "defaut",
      alignItems_: this.alignItems || "defaut",
      axePrincipalPx_: this.axePrincipalPx ? "" + this.axePrincipalPx : "",
      axeTransversalPx_: this.axeTransversalPx ? "" + this.axeTransversalPx : ""
    };
  },
  watch: {
    flex_: function(flex) {
      this.maj("flex", flex);
    },
    wrap_: function(wrap) {
      this.maj("wrap", wrap, wrap);
    },
    justifyContent_: function(justifyContent) {
      this.maj("justifyContent", justifyContent, justifyContent !== "defaut");
    },
    alignItems_: function(alignItems) {
      this.maj("alignItems", alignItems, alignItems !== "defaut");
    },
    axePrincipalPx_: function(axePrincipalPx) {
      let px = 0;
      try {
        px = parseInt(axePrincipalPx);
        px = Math.abs(px);
      } catch (error) {
        px = 0;
      }
      this.maj("axePrincipalPx", px, px !== 0);
    },
    axeTransversalPx_: function(axeTransversalPx) {
      let px = 0;
      try {
        px = parseInt(axeTransversalPx);
        px = Math.abs(px);
      } catch (error) {
        px = 0;
      }
      this.maj("axeTransversalPx", px, px !== 0);
    }
  }
};
</script>