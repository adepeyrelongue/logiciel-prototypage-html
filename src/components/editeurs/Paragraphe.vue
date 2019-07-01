<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Paragraphe</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-2">
                <select
                  id="ib-style-titre"
                  name="ib-style-titre"
                  class="form-control"
                  :disabled="sansStyle_ || heading_"
                  v-model.number="styleTitre_"
                  aria-labelledby="ib-style-titre-label"
                >
                  <option value="0">Aucun</option>
                  <option value="1">Niveau 1</option>
                  <option value="2">Niveau 2</option>
                  <option value="3">Niveau 3</option>
                  <option value="4">Niveau 4</option>
                  <option value="5">Niveau 5</option>
                  <option value="6">Niveau 6</option>
                </select>
                <div class="help-block">
                  <label id="ib-style-titre-label">Styles d'un titre</label>
                </div>
              </div>
              <div v-if="styleTitre_ === 0" class="col-xs-12 col-md-3">
                <div class="checkbox">
                  <label for="ib-sansstyle">
                    <input
                      id="ib-sansstyle"
                      type="checkbox"
                      name="ib-sansstyle"
                      v-model="sansStyle_"
                    >Sans styles de paragraphe
                  </label>
                </div>
              </div>
              <div v-if="styleTitre_ === 0" class="col-xs-12 col-md-2">
                <div class="checkbox">
                  <label for="ib-heading">
                    <input id="ib-heading" type="checkbox" name="ib-heading" v-model="heading_">Rôle de titre
                  </label>
                </div>
              </div>
              <div v-if="heading_" class="col-xs-12 col-md-2">
                <select
                  id="ib-heading-niveau"
                  name="ib-heading-niveau"
                  class="form-control"
                  aria-labelledby="ib-heading-niveau-label"
                  aria-required="true"
                  v-model.number="ariaLevel_"
                >
                  <option value="1">Niveau 1</option>
                  <option value="2">Niveau 2</option>
                  <option value="3">Niveau 3</option>
                  <option value="4">Niveau 4</option>
                  <option value="5">Niveau 5</option>
                  <option value="6">Niveau 6</option>
                </select>
                <div class="help-block">
                  <label id="ib-heading-niveau-label" class="requis">Niveau de titre</label>
                </div>
              </div>
              <div v-if="heading_" class="col-xs-12 col-md-2">
                <div class="checkbox">
                  <label for="ib-ineaAutofocus">
                    <input
                      id="ib-ineaAutofocus"
                      type="checkbox"
                      name="ib-ineaAutofocus"
                      v-model="ineaAutofocus_"
                    >
                    Autofocus
                  </label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
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
  name: "pe-paragraphe",
  props: {
    sansStyle: Boolean,
    styleTitre: Number,
    heading: Boolean,
    ariaLevel: Number,
    ineaAutofocus: Boolean,
    alignement: String
  },
  data: function() {
    return {
      sansStyle_: this.sansStyle || false,
      styleTitre_: this.styleTitre || 0,
      heading_: this.heading || false,
      ariaLevel_: this.ariaLevel || 2,
      ineaAutofocus_: this.ineaAutofocus || false,
      alignement_: this.alignement || "defaut"
    };
  },
  watch: {
    sansStyle_: function(sansStyle) {
      this.maj("sansStyle", sansStyle, sansStyle);
    },
    styleTitre_: function(styleTitre) {
      this.maj("styleTitre", styleTitre, styleTitre !== 0);
    },
    heading_: function(heading) {
      this.maj("heading", heading, heading);
    },
    ariaLevel_: function(ariaLevel) {
      this.maj("ariaLevel", ariaLevel);
    },
    ineaAutofocus_: function(ineaAutofocus) {
      this.maj("ineaAutofocus", ineaAutofocus, ineaAutofocus);
    },
    alignement_: function(alignement) {
      this.maj("alignement", alignement, alignement !== "defaut");
    }
  }
};
</script>