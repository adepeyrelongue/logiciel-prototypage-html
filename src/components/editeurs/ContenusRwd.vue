<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Groupe responsive</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-justify"
              name="ib-justify"
              class="form-control"
              aria-labelledby="ib-justify-label"
              v-model="justifyContent_"
            >
              <option value="defaut">Gauche</option>
              <option value="center">Milieu</option>
              <option value="end">Droite</option>
              <option value="between">Espaces entre</option>
              <option value="around">Espaces autour</option>
            </select>
            <div class="help-block">
              <label id="ib-justify-label">Justification des contenus</label>
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
              <option value="start">Haut</option>
              <option value="center">Milieu</option>
              <option value="end">Bas</option>
            </select>
            <div class="help-block">
              <label id="ib-alignement-label">Alignement des contenus</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-contenus-rwd",
  props: {
    justifyContent: String,
    alignItems: String
  },
  data: function() {
    return {
      justifyContent_: this.justifyContent || "defaut",
      alignItems_: this.alignItems || "defaut"
    };
  },
  watch: {
    justifyContent_: function(justifyContent) {
      this.maj("justifyContent", justifyContent, justifyContent !== "defaut");
    },
    alignItems_: function(alignItems) {
      this.maj("alignItems", alignItems, alignItems !== "defaut");
    }
  }
};
</script>