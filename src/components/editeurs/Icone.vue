<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Icône</legend>
            <div class="form-group">
              <div v-if="!collapse_" class="col-xs-12 col-md-2">
                <fieldset>
                  <legend>Picto</legend>
                  <div class="form-group">
                    <div class="col-xs-12">
                      <selecteur-icone v-model="icone_"></selecteur-icone>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="checkbox">
                  <label for="ib-collapse">
                    <input id="ib-collapse" type="checkbox" name="ib-collapse" v-model="collapse_">
                    Icône plier/déplier
                  </label>
                </div>
              </div>
              <div class="col-xs-12 col-md-2">
                <select
                  id="ib-taille-px"
                  name="ib-taille-px"
                  class="form-control"
                  v-model.number="taillePx_"
                  aria-labelledby="ib-taille-px-label"
                >
                  <option value="0">Défaut</option>
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
              <div v-if="!collapse_" class="col-xs-12 col-md-4">
                <selecteur-couleur
                  class="form-control"
                  aria-labelledby="ib-couleur-label"
                  v-model="couleur_"
                ></selecteur-couleur>
                <div class="help-block">
                  <label id="ib-couleur-label">Couleur</label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

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
  name: "pe-icone",
  props: {
    icone: String,
    collapse: Boolean,
    couleur: String,
    taillePx: Number
  },
  data: function() {
    return {
      icone_: this.icone || "",
      collapse_: this.collapse || false,
      couleur_: this.couleur || "",
      taillePx_: this.taillePx || 0
    };
  },
  watch: {
    icone_: function(icone) {
      this.maj("icone", icone, icone !== "");
    },
    collapse_: function(collapse) {
      this.maj("collapse", collapse, collapse);
    },
    couleur_: function(couleur) {
      this.maj("couleur", couleur, couleur !== "");
    },
    taillePx_: function(taillePx) {
      this.maj("taillePx", taillePx, taillePx !== 0);
    }
  }
};
</script>