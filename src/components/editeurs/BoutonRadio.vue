<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Bouton radio</legend>
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
      <col-bs-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></col-bs-props>
    </div>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";

export default {
  name: "pe-bouton-radio",
  props: {
    id: String,
    libelle: String
  },
  data: function() {
    return {
      id_: this.id || "",
      libelle_: this.libelle
    };
  },
  computed: {
    idPlaceholderComputed: function() {
      return kebabCase(this.libelle_);
    }
  },
  watch: {
    id_: function(id) {
      this.maj("id", id, id !== "");
    },
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    }
  }
};
</script>