<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Propriétés du champ</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-3">
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
          <div class="col-xs-12 col-md-3">
            <input
              id="ib-id"
              type="text"
              name="ib-id"
              :placeholder="idPlaceholderComputed"
              class="form-control"
              aria-labelledby="ib-id-label"
              v-model="id_"
            >
            <div class="help-block">
              <label id="ib-id-label">Id</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-3">
            <div class="checkbox">
              <label for="ib-requis">
                <input id="ib-requis" type="checkbox" name="ib-requis" v-model="requis_">Requis
              </label>
            </div>
          </div>
          <div class="col-xs-12 col-md-3">
            <input
              id="ib-info-titre"
              type="text"
              name="ib-info-titre"
              class="form-control"
              aria-labelledby="ib-info-titre-label"
              v-model="titre"
            >
            <div class="help-block">
              <label id="ib-info-titre-label">Infobulle</label>
            </div>
          </div>
        </div>
        <div v-if="titre" class="form-group">
          <div class="col-xs-12">
            <textarea
              id="ib-info-texte"
              name="ib-info-texte"
              class="form-control"
              aria-labelledby="ib-info-texte-label"
              v-model="texte"
              rows="5"
            ></textarea>
            <div class="help-block">
              <label id="ib-info-texte-label">Texte du dialogue de l'infobulle</label>
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
  name: "libelle-props",
  props: {
    libelle: String,
    id: String,
    requis: Boolean,
    informations: Object
  },
  data: function() {
    return {
      libelle_: this.libelle,
      id_: this.id || "",
      requis_: this.requis || false,
      titre: this.informations ? this.informations.titre : "",
      texte: this.informations ? this.informations.texte : ""
    };
  },
  computed: {
    idPlaceholderComputed: function() {
      return kebabCase(this.libelle_);
    }
  },
  watch: {
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    },
    id_: function(id) {
      this.maj("id", id, id !== "");
    },
    requis_: function(requis) {
      this.maj("requis", requis, requis);
    },
    titre: function(titre) {
      this.maj(
        "informations",
        { titre: titre, texte: this.texte },
        titre !== "" || this.texte !== ""
      );
    },
    texte: function(texte) {
      this.maj(
        "informations",
        { titre: this.titre, texte: texte },
        texte !== "" || this.titre !== ""
      );
    }
  }
};
</script>