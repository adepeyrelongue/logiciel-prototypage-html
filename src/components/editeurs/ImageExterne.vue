<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Image</legend>
            <div class="form-group align-items-end">
              <div class="col-xs-12 col-md-3">
                <fieldset>
                  <legend>Source</legend>
                  <div class="form-group">
                    <div class="col-xs-12">
                      <selecteur-source-image v-model="source_"></selecteur-source-image>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="col-xs-12 col-md-9">
                <input
                  id="ib-alt"
                  type="text"
                  name="ib-alt"
                  class="form-control"
                  aria-labelledby="ib-alt-label"
                  v-model="texteAlternatif_"
                >
                <div class="help-block">
                  <label id="ib-alt-label">Texte accessible</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-largeur"
                  type="number"
                  name="ib-largeur"
                  class="form-control"
                  min="0"
                  aria-labelledby="ib-largeur-label"
                  v-model.number="largeur_"
                >
                <div class="help-block">
                  <label id="ib-largeur-label">Largeur (0 pour naturelle)</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-hauteur"
                  type="number"
                  name="ib-hauteur"
                  class="form-control"
                  min="0"
                  aria-labelledby="ib-hauteur-label"
                  v-model.number="hauteur_"
                >
                <div class="help-block">
                  <label id="ib-hauteur-label">Hauteur (0 pour naturelle)</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <select
                  id="ib-forme"
                  name="ib-forme"
                  class="form-control"
                  aria-labelledby="ib-forme-label"
                  v-model="forme_"
                >
                  <option value>Aucune</option>
                  <option value="img-circle">Circulaire</option>
                  <option value="img-thumbnail">Cadre</option>
                </select>
                <div class="help-block">
                  <label id="ib-forme-label">Forme</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="checkbox">
                  <label for="ib-responsive">
                    <input
                      id="ib-responsive"
                      type="checkbox"
                      name="ib-responsive"
                      v-model="responsive_"
                    >
                    Image responsive
                  </label>
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
  name: "pe-image-externe",
  props: {
    source: String,
    forme: String,
    responsive: Boolean,
    texteAlternatif: String,
    largeur: Number,
    hauteur: Number
  },
  data: function() {
    return {
      source_: this.source,
      forme_: this.forme || "",
      responsive_: this.responsive || false,
      texteAlternatif_: this.texteAlternatif || "",
      largeur_: this.largeur || 0,
      hauteur_: this.hauteur || 0
    };
  },
  watch: {
    source_: function(source) {
      this.maj("source", source);
    },
    forme_: function(forme) {
      this.maj("forme", forme, forme !== "");
    },
    responsive_: function(responsive) {
      this.maj("responsive", responsive, responsive);
    },
    texteAlternatif_: function(texteAlternatif) {
      this.maj("texteAlternatif", texteAlternatif, texteAlternatif !== "");
    },
    largeur_: function(largeur) {
      this.maj("largeur", largeur, largeur !== 0);
    },
    hauteur_: function(hauteur) {
      this.maj("hauteur", hauteur, hauteur !== 0);
    }
  }
};
</script>