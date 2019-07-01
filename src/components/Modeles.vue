<template>
  <div>
    <div v-if="previsualisation">
      <div v-for="(modele, index) in modeles" :key="index" class="row mb-1">
        <div class="col-xs-12">
          <fieldset>
            <legend>
              <button
                @click.prevent="handleAjoutModele(index)"
                type="button"
                class="btn btn-gris-200"
                title="Ajouter ce modèle"
              >
                <span class="glyphicon glyphicon-plus-sign font-size-16"></span>
              </button>
              {{modele.libelle}}
            </legend>
            <div class="row mb-1">
              <div class="col-xs-12">
                <component :is="modele.definition.tag" v-bind="modele.definition"></component>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    <ul v-else class="liste liste-condensee">
      <li v-for="(modele, index) in modeles" :key="index">
        <a href="#" @click.prevent="handleAjoutModele(index)">{{modele.libelle}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { chargerModeles, chargerModele } from "../utils";

export default {
  props: {
    tag: String,
    parent: String,
    dossierModelesExtra: String,
    previsualisation: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    modeles: function() {
      const modelesExtra = this.dossierModelesExtra
        ? chargerModeles(this.tag, { dossier: this.dossierModelesExtra })
        : [];
      const modelesParent = this.parent
        ? chargerModeles(this.tag, { parent: this.parent })
        : [];
      const modelesTag =
        modelesParent.length === 0 ? chargerModeles(this.tag) : [];

      return [...modelesExtra, ...modelesParent, ...modelesTag];
    }
  },
  methods: {
    handleAjoutModele: function(index) {
      const modele = chargerModele(this.modeles[index].path, this.tag);
      this.$emit("modeles:ajouter", modele.definition);
    }
  }
};
</script>
<style>
.wrapper-modele {
  padding: 5px;
  background-color: lightgoldenrodyellow;
}
.libelle-modele {
  position: absolute;
  top: 0;
  left: 5px;
}
</style>