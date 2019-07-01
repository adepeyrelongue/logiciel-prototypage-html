<template>
  <div class="col-xs-12 col-md-8">
    <fieldset>
      <legend>Elément Flex</legend>
      <div class="form-group">
        <div class="col-xs-12 col-md-4">
          <select
            id="ib-flex-alignement"
            name="ib-flex-alignement"
            class="form-control"
            aria-labelledby="ib-flex-alignement-label"
            v-model="flexAlignSelf_"
          >
            <option value="defaut">Défaut</option>
            <option value="start">Début</option>
            <option value="center">Milieu</option>
            <option value="end">Fin</option>
            <option value="stretch">Etiré</option>
          </select>
          <div class="help-block">
            <label id="ib-flex-alignement-label">Alignement de l'élément</label>
          </div>
        </div>
        <div v-if="flexTaille_ === 'defaut'" class="col-xs-12 col-md-4">
          <div class="checkbox">
            <label for="ib-grow">
              <input id="ib-grow" type="checkbox" name="ib-grow" v-model="flexGrowSelf_">Occuper l'espace
            </label>
          </div>
        </div>
        <div v-if="flexGrowSelf_ === false" class="col-xs-12 col-md-4">
          <select
            id="ib-flex-taille"
            name="ib-flex-taille"
            class="form-control"
            aria-labelledby="ib-flex-taille-label"
            v-model="flexTaille_"
          >
            <option value="defaut">Défaut</option>
            <option value="25">25%</option>
            <option value="33">1/3</option>
            <option value="50">50%</option>
            <option value="66">2/3</option>
            <option value="75">75%</option>
          </select>
          <div class="help-block">
            <label id="ib-flex-taille-label">Taille relative au parent</label>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "dans-flex-props",
  props: {
    flexAlignSelf: String,
    flexGrowSelf: Boolean,
    flexTaille: String
  },
  data: function() {
    return {
      flexAlignSelf_: this.flexAlignSelf || "defaut",
      flexGrowSelf_: this.flexGrowSelf || false,
      flexTaille_: this.flexTaille || "defaut"
    };
  },
  watch: {
    flexAlignSelf_: function(flexAlignSelf) {
      this.maj("flexAlignSelf", flexAlignSelf, flexAlignSelf !== "defaut");
    },
    flexGrowSelf_: function(flexGrowSelf) {
      this.maj("flexGrowSelf", flexGrowSelf, flexGrowSelf);
    },
    flexTaille_: function(flexTaille) {
      this.maj("flexTaille", flexTaille, flexTaille !== "defaut");
    }
  }
};
</script>