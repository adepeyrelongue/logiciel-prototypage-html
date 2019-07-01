<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Liste</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-aria-label"
              type="text"
              name="ib-aria-label"
              class="form-control"
              aria-labelledby="ib-aria-label-label"
              aria-required="true"
              v-model="ariaLabel_"
            >
            <div class="help-block">
              <label id="ib-aria-label-label" class="requis">Texte accessible</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="checkbox">
              <label for="ib-zebree">
                <input id="ib-zebree" type="checkbox" name="ib-zebree" v-model="zebree_">
                Liste zébrée
              </label>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="checkbox">
              <label for="ib-sansstyle">
                <input id="ib-sansstyle" type="checkbox" name="ib-sansstyle" v-model="sansStyle_">Sans styles de liste
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <div class="checkbox">
              <label for="ib-pucesInea">
                <input id="ib-pucesInea" type="checkbox" name="ib-pucesInea" v-model="pucesInea_">
                Avec puces Inea
              </label>
            </div>
          </div>
          <div v-if="pucesInea_" class="col-xs-12 col-md-4">
            <div class="checkbox">
              <label for="ib-pucehaute">
                <input id="ib-pucehaute" type="checkbox" name="ib-pucehaute" v-model="puceHaute_">
                Puce alignée avec le haut de l'élément
              </label>
            </div>
          </div>
          <div v-if="pucesInea_" class="col-xs-12 col-md-4">
            <div class="checkbox">
              <label for="ib-condensee">
                <input id="ib-condensee" type="checkbox" name="ib-condensee" v-model="condensee_">
                Liste condensée
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
  name: "liste-props",
  props: {
    ariaLabel: String,
    zebree: Boolean,
    sansStyle: {
      type: Boolean,
      default: true
    },
    pucesInea: Boolean,
    puceHaute: Boolean,
    condensee: Boolean
  },
  data: function() {
    return {
      ariaLabel_: this.ariaLabel,
      zebree_: this.zebree || false,
      sansStyle_: this.sansStyle,
      pucesInea_: this.pucesInea || false,
      puceHaute_: this.puceHaute || false,
      condensee_: this.condensee || false
    };
  },
  watch: {
    ariaLabel_: function(ariaLabel) {
      this.maj("ariaLabel", ariaLabel);
    },
    zebree_: function(zebree) {
      this.maj("zebree", zebree, zebree);
    },
    sansStyle_: function(sansStyle) {
      this.maj("sansStyle", sansStyle, !sansStyle);
    },
    pucesInea_: function(pucesInea) {
      this.maj("pucesInea", pucesInea, pucesInea);
    },
    puceHaute_: function(puceHaute) {
      this.maj("puceHaute", puceHaute, puceHaute);
    },
    condensee_: function(condensee) {
      this.maj("condensee", condensee, condensee);
    }
  }
};
</script>