<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Champ de saisie</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-3">
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
              <div class="col-xs-12 col-md-2">
                <div class="checkbox">
                  <label for="ib-calendrier">
                    <input
                      id="ib-calendrier"
                      type="checkbox"
                      name="ib-calendrier"
                      v-model="calendrier_"
                    >
                    Calendrier
                  </label>
                </div>
              </div>
              <div class="col-xs-12 col-md-2">
                <fieldset>
                  <legend>Picto bouton</legend>
                  <div class="form-group">
                    <div class="col-xs-12">
                      <selecteur-icone v-model="boutonIcone_"></selecteur-icone>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div v-if="boutonIcone_ !== ''" class="col-xs-12 col-md-3">
                <input
                  id="ib-bouton-title"
                  type="text"
                  name="ib-bouton-title"
                  class="form-control"
                  v-model="boutonTitle_"
                  aria-labelledby="ib-bouton-title-label"
                  aria-required="true"
                >
                <div class="help-block">
                  <label id="ib-bouton-title-label" class="requis">Libellé accessible du bouton</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-2">
                <input
                  id="ib-reference"
                  type="text"
                  name="ib-reference"
                  class="form-control"
                  v-model="reference_"
                  aria-labelledby="ib-reference-label"
                >
                <div class="help-block">
                  <label id="ib-reference-label">Référence</label>
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
  name: "pe-champ-saisie",
  props: {
    libelleAccessible: Boolean,
    boutonIcone: String,
    boutonTitle: String,
    calendrier: Boolean,
    reference: String
  },
  data: function() {
    return {
      libelleAccessible_: this.libelleAccessible || false,
      boutonIcone_: this.boutonIcone || "",
      boutonTitle_: this.boutonTitle || "",
      calendrier_: this.calendrier || false,
      reference_: this.reference || ""
    };
  },
  watch: {
    libelleAccessible_: function(libelleAccessible) {
      this.maj("libelleAccessible", libelleAccessible, libelleAccessible);
    },
    boutonIcone_: function(boutonIcone) {
      this.maj("boutonIcone", boutonIcone, boutonIcone !== "");
    },
    boutonTitle_: function(boutonTitle) {
      this.maj("boutonTitle", boutonTitle, boutonTitle !== "");
    },
    calendrier_: function(calendrier) {
      this.maj("calendrier", calendrier, calendrier);
    },
    reference_: function(reference) {
      this.maj("reference", reference, reference !== "");
    }
  }
};
</script>