<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Groupe sections</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-alignement"
              name="ib-alignement"
              class="form-control"
              aria-labelledby="ib-alignement-label"
              v-model="alignItems_"
            >
              <option value="defaut">Etirées</option>
              <option value="start">Haut</option>
              <option value="center">Milieu</option>
              <option value="end">Bas</option>
            </select>
            <div class="help-block">
              <label id="ib-alignement-label">Alignement des sections</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-sections-rwd",
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