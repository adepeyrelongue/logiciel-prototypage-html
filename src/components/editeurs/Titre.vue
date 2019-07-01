<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Titre Charte</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-2">
            <select
              id="ib-niveau"
              name="ib-niveau"
              class="form-control"
              v-model.number="niveau_"
              aria-labelledby="ib-niveau-label"
              aria-required="true"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div class="help-block">
              <label id="ib-niveau-label" class="requis">Niveau de titre</label>
            </div>
          </div>
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
          <div class="col-xs-12 col-md-2">
            <select
              id="ib-alignement"
              name="ib-alignement"
              class="form-control"
              v-model="alignement_"
              aria-labelledby="ib-alignement-label"
            >
              <option value="defaut">défaut</option>
              <option value="left">gauche</option>
              <option value="center">centré</option>
              <option value="right">droit</option>
            </select>
            <div class="help-block">
              <label id="ib-alignement-label">Justification du texte</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-2">
            <fieldset>
              <legend>Picto</legend>
              <div class="form-group">
                <div class="col-xs-12">
                  <selecteur-icone v-model="icone_"></selecteur-icone>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="col-xs-12 col-md-2">
            <div class="checkbox">
              <label for="ib-ineaAutofocus">
                <input
                  id="ib-ineaAutofocus"
                  type="checkbox"
                  name="ib-ineaAutofocus"
                  v-model="ineaAutofocus_"
                >
                Autofocus
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
  name: "pe-titre",
  props: {
    niveau: Number,
    libelle: String,
    icone: String,
    ineaAutofocus: Boolean,
    alignement: String
  },
  data: function() {
    return {
      niveau_: this.niveau,
      libelle_: this.libelle,
      icone_: this.icone || "",
      ineaAutofocus_: this.ineaAutofocus || false,
      alignement_: this.alignement || "defaut"
    };
  },
  watch: {
    niveau_: function(niveau) {
      this.maj("niveau", niveau);
    },
    icone_: function(icone) {
      this.maj("icone", icone, icone !== "");
    },
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    },
    ineaAutofocus_: function(ineaAutofocus) {
      this.maj("ineaAutofocus", ineaAutofocus, ineaAutofocus);
    },
    alignement_: function(alignement) {
      this.maj("alignement", alignement, alignement !== "defaut");
    }
  }
};
</script>