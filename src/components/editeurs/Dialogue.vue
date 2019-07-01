<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Dialogue</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-titre"
              type="text"
              name="ib-titre"
              class="form-control"
              aria-labelledby="ib-titre-label"
              aria-required="true"
              v-model="titre_"
            >
            <div class="help-block">
              <label id="ib-titre-label" class="requis">Titre</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
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
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";

export default {
  name: "pe-dialogue",
  props: {
    id: String,
    titre: String
  },
  data: function() {
    return {
      id_: this.id || "",
      titre_: this.titre
    };
  },
  computed: {
    idPlaceholderComputed: function() {
      return kebabCase(this.titre_);
    }
  },
  watch: {
    id_: function(id) {
      this.maj("id", id, id !== "");
    },
    titre_: function(titre) {
      this.maj("titre", titre);
    }
  }
};
</script>