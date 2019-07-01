<template>
  <div :class="classesComputed">
    <samp>ib:bloc-champ-affichage:debut</samp>
    <div class="row">
      <libelle-champ
        v-if="elements.libelle"
        :key="elements.libelle.cle"
        :id="idComputed"
        :libelle="libelle"
        :informations="informations"
        v-bind="elements.libelle"
      ></libelle-champ>
      <champ-affichage
        :key="elements.controle.cle"
        :id="idComputed"
        :libelle="elements.libelle ? '' : libelle"
        v-bind="elements.controle"
      ></champ-affichage>
    </div>
    <div
      v-if="informations"
      class="modal"
      role="dialog"
      :aria-labelledby="idComputed+'-info-titre'"
      :id="idComputed+'-info'"
      tabindex="-1"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Fermer">
              <span aria-hidden="true">&times;</span>
            </button>
            <h1 class="modal-title h4" :id="idComputed+'-info-titre'">{{informations.titre}}</h1>
          </div>
          <div class="modal-body" v-html="informationsHtml"></div>
          <div class="modal-footer">
            <div class="btn-group btn-group-justified">
              <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <samp>ib:bloc-champ-affichage:fin</samp>
  </div>
</template>

<script>
import Espacement from "./mixins/Espacement";
import ColBsProps from "./mixins/ColBsProps";
import LibelleProps from "./mixins/LibelleProps";

export default {
  name: "bloc-champ-affichage",
  mixins: [Espacement, ColBsProps, LibelleProps],
  props: {
    elements: Object
  },
  computed: {
    classesComputed: function() {
      return [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.colBsClasses
      ];
    }
  }
};
</script>