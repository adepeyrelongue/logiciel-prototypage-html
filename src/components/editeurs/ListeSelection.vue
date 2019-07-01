<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Liste de sélection</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-3">
                <div class="checkbox">
                  <label for="ib-forcer-selection">
                    <input
                      id="ib-forcer-selection"
                      type="checkbox"
                      name="ib-forcer-selection"
                      v-model="forcerSelection_"
                    >Forcer un choix (si requis)
                  </label>
                </div>
              </div>
              <div class="col-xs-12 col-md-2">
                <div class="checkbox">
                  <label for="ib-multiple">
                    <input id="ib-multiple" type="checkbox" name="ib-multiple" v-model="multiple_">Multiple
                  </label>
                </div>
              </div>
              <div v-if="multiple_" class="col-xs-12 col-md-2">
                <input
                  id="ib-lignes"
                  type="text"
                  name="ib-lignes"
                  class="form-control"
                  aria-labelledby="ib-lignes-label"
                  v-model.number="lignes_"
                >
                <div class="help-block">
                  <label id="ib-lignes-label">Lignes affichées</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="checkbox">
                  <label for="ib-libelleAccessible">
                    <input
                      id="ib-libelleAccessible"
                      type="checkbox"
                      name="ib-libelleAccessible"
                      v-model="libelleAccessible_"
                    >
                    Masquage accessible du libellé
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <erreur-champ
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></erreur-champ>
      <col-bs-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></col-bs-props>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-liste-selection",
  props: {
    forcerSelection: Boolean,
    multiple: Boolean,
    lignes: Number,
    libelleAccessible: Boolean
  },
  data: function() {
    return {
      forcerSelection_: this.forcerSelection || false,
      multiple_: this.multiple || false,
      lignes_: this.lignes || 5,
      libelleAccessible_: this.libelleAccessible || false
    };
  },
  watch: {
    forcerSelection_: function(forcerSelection) {
      this.maj("forcerSelection", forcerSelection, forcerSelection);
    },
    multiple_: function(multiple) {
      this.maj("multiple", multiple, multiple);
    },
    lignes_: function(lignes) {
      this.maj("lignes", lignes);
    },
    libelleAccessible_: function(libelleAccessible) {
      this.maj("libelleAccessible", libelleAccessible, libelleAccessible);
    }
  }
};
</script>