<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Option</legend>
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
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-valeur"
              type="text"
              name="ib-valeur"
              :placeholder="valeurPlaceholderComputed"
              class="form-control"
              aria-labelledby="ib-valeur-label"
              v-model="valeur_"
            >
            <div class="help-block">
              <label id="ib-valeur-label">Valeur</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";

export default {
  name: "pe-liste-selection-option",
  props: {
    libelle: String,
    valeur: String
  },
  data: function() {
    return {
      libelle_: this.libelle,
      valeur_: this.valeur || ""
    };
  },
  computed: {
    valeurPlaceholderComputed: function() {
      return kebabCase(this.libelle_);
    }
  },
  watch: {
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    },
    valeur_: function(valeur) {
      this.maj("valeur", valeur, valeur !== "");
    }
  }
};
</script>