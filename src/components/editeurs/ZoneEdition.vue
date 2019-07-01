<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Zone d'édition</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-lignes"
                  type="text"
                  name="ib-lignes"
                  class="form-control"
                  aria-labelledby="ib-lignes-label"
                  v-model.number="lignes_"
                >
                <div class="help-block">
                  <label id="ib-lignes-label">Lignes</label>
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
  name: "pe-zone-edition",
  props: {
    lignes: Number,
    libelleAccessible: Boolean
  },
  data: function() {
    return {
      lignes_: this.lignes,
      libelleAccessible_: this.libelleAccessible || false
    };
  },
  watch: {
    lignes_: function(lignes) {
      this.maj("lignes", lignes);
    },
    libelleAccessible_: function(libelleAccessible) {
      this.maj("libelleAccessible", libelleAccessible, libelleAccessible);
    }
  }
};
</script>