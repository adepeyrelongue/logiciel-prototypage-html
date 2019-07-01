<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Champ d'affichage</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-5">
                <input
                  id="ib-valeur"
                  type="text"
                  name="ib-valeur"
                  class="form-control"
                  aria-labelledby="ib-valeur-label"
                  aria-required="true"
                  v-model="valeur_"
                >
                <div class="help-block">
                  <label id="ib-valeur-label" class="requis">Valeur</label>
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
  name: "pe-champ-affichage",
  props: {
    valeur: String,
    libelleAccessible: Boolean,
  },
  data: function() {
    return {
      valeur_: this.valeur,
      libelleAccessible_: this.libelleAccessible || false
    };
  },
  watch: {
    valeur_: function(valeur) {
      this.maj("valeur", valeur);
    },
    libelleAccessible_: function(libelleAccessible) {
      this.maj("libelleAccessible", libelleAccessible, libelleAccessible);
    }
  }
};
</script>