<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Titre</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-2">
                <select
                  id="ib-niveau"
                  name="ib-niveau"
                  class="form-control"
                  v-model.number="niveau_"
                  aria-labelledby="ib-niveau-label"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <div class="help-block">
                  <label id="ib-niveau-label" class="requis">Niveau de titre</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-8">
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
            </div>
          </fieldset>
        </div>
      </div>
      <text-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></text-props>
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
  name: "pe-titre-simple",
  props: {
    niveau: Number,
    libelle: String,
    alignement: String
  },
  data: function() {
    return {
      niveau_: this.niveau,
      libelle_: this.libelle,
      alignement_: this.alignement || "defaut"
    };
  },
  watch: {
    niveau_: function(niveau) {
      this.maj("niveau", niveau);
    },
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    },
    alignement_: function(alignement) {
      this.maj("alignement", alignement, alignement !== "defaut");
    }
  }
};
</script>