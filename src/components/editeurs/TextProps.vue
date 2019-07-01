<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Styles du texte</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-police"
              name="ib-police"
              class="form-control"
              aria-labelledby="ib-police-label"
              v-model="police_"
            >
              <option value>Défaut</option>
              <option value="open-sans">Open Sans</option>
              <option value="arial">Arial</option>
            </select>
            <div class="help-block">
              <label id="ib-police-label">Police de caractères</label>
            </div>
          </div>
          <div v-if="tailleTitre_ === 0" class="col-xs-12 col-md-4">
            <select
              id="ib-taille-px"
              name="ib-taille-px"
              class="form-control"
              aria-labelledby="ib-taille-px-label"
              v-model.number="taillePx_"
            >
              <option value="0">Aucune</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="22">22</option>
              <option value="24">24</option>
              <option value="26">26</option>
              <option value="28">28</option>
              <option value="30">30</option>
              <option value="32">32</option>
              <option value="36">36</option>
              <option value="40">40</option>
              <option value="44">44</option>
              <option value="48">48</option>
              <option value="52">52</option>
              <option value="56">56</option>
              <option value="64">64</option>
              <option value="72">72</option>
              <option value="80">80</option>
              <option value="88">88</option>
              <option value="96">96</option>
            </select>
            <div class="help-block">
              <label id="ib-taille-px-label">Taille</label>
            </div>
          </div>
          <div v-if="taillePx_ === 0" class="col-xs-12 col-md-4">
            <select
              id="ib-taille-titre"
              name="ib-taille-titre"
              class="form-control"
              aria-labelledby="ib-taille-titre-label"
              v-model.number="tailleTitre_"
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
              <label id="ib-taille-titre-label">Taille d'un titre</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12 col-md-2">
            <selecteur-couleur
              class="form-control"
              aria-labelledby="ib-couleur-label"
              v-model="couleur_"
            ></selecteur-couleur>
            <div class="help-block">
              <label id="ib-couleur-label">Couleur</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-2">
            <div class="checkbox">
              <label for="ib-gras">
                <input id="ib-gras" type="checkbox" name="ib-gras" v-model="gras_">
                Gras
              </label>
            </div>
          </div>
          <div class="col-xs-12 col-md-2">
            <div class="checkbox">
              <label for="ib-italique">
                <input id="ib-italique" type="checkbox" name="ib-italique" v-model="italique_">
                Italique
              </label>
            </div>
          </div>
          <div class="col-xs-12 col-md-3">
            <select
              id="ib-style-format"
              name="ib-style-format"
              class="form-control"
              aria-labelledby="ib-style-format-label"
              v-model="casse_"
            >
              <option value>Défaut</option>
              <option value="uppercase">Lettres capitales</option>
              <option value="lowercase">Lettres minuscules</option>
            </select>
            <div class="help-block">
              <label id="ib-style-format-label">Casse</label>
            </div>
          </div>
          <div class="col-xs-12 col-md-3">
            <div class="checkbox">
              <label for="ib-coupure">
                <input id="ib-coupure" type="checkbox" name="ib-coupure" v-model="coupureMots_">
                Coupure des mots
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
  name: "text-props",
  props: {
    couleur: String,
    police: String,
    taillePx: Number,
    tailleTitre: Number,
    casse: String,
    coupureMots: Boolean,
    gras: Boolean,
    italique: Boolean
  },
  data: function() {
    return {
      couleur_: this.couleur || "",
      police_: this.police || "",
      taillePx_: this.taillePx || 0,
      tailleTitre_: this.tailleTitre || 0,
      casse_: this.casse || "",
      coupureMots_: this.coupureMots || false,
      gras_: this.gras || false,
      italique_: this.italique || false
    };
  },
  watch: {
    couleur_: function(couleur) {
      this.maj("couleur", couleur, couleur !== "");
    },
    police_: function(police) {
      this.maj("police", police, police !== "");
    },
    taillePx_: function(taillePx) {
      this.maj("taillePx", taillePx, taillePx !== 0);
    },
    tailleTitre_: function(tailleTitre) {
      this.maj("tailleTitre", tailleTitre, tailleTitre !== 0);
    },
    casse_: function(casse) {
      this.maj("casse", casse, casse !== "");
    },
    coupureMots_: function(coupureMots) {
      this.maj("coupureMots", coupureMots, coupureMots);
    },
    gras_: function(gras) {
      this.maj("gras", gras, gras);
    },
    italique_: function(italique) {
      this.maj("italique", italique, italique);
    }
  }
};
</script>