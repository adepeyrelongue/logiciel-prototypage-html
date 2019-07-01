<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Ligne de champs</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-3">
            <select
              id="ib-alignement"
              name="ib-alignement"
              class="form-control"
              v-model="alignItems_"
              aria-labelledby="ib-alignement-label"
            >
              <option value="defaut">Etirés</option>
              <option value="start">Haut</option>
              <option value="center">Milieu</option>
              <option value="end">Bas</option>
            </select>
            <div class="help-block">
              <label id="ib-alignement-label">Alignement des champs</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-champs",
  props: {
    alignItems: String
  },
  data: function() {
    return {
      alignItems_: this.alignItems || "defaut"
    };
  },
  watch: {
    alignItems_: function(alignItems) {
      this.maj("alignItems", alignItems, alignItems !== "defaut");
    }
  }
};
</script>