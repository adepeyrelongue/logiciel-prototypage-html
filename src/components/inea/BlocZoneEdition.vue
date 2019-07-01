<template>
  <div :class="classesComputed">
    <samp>ib:bloc-zone-edition:debut</samp>
    <div class="row">
      <libelle-champ
        v-if="elements.libelle"
        :key="elements.libelle.cle"
        :id="idComputed"
        :libelle="libelle"
        :requis="requis"
        :format="format"
        :formatCasse="formatCasse"
        :informations="informations"
        v-bind="elements.libelle"
      ></libelle-champ>
      <zone-edition
        :key="elements.controle.cle"
        :id="idComputed"
        :libelle="elements.libelle ? '' : libelle"
        :requis="requis"
        :hasFormat="format !== ''"
        :format="elements.libelle ? '' : format"
        :formatCasse="elements.libelle ? '' : formatCasse"
        v-bind="elements.controle"
      ></zone-edition>
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
    <samp>ib:bloc-zone-edition:fin</samp>
  </div>
</template>

<script>
import Espacement from "./mixins/Espacement";
import ColBsProps from "./mixins/ColBsProps";
import LibelleProps from "./mixins/LibelleProps";
import FormatChamp from "./mixins/FormatChamp";

export default {
  name: "bloc-zone-edition",
  mixins: [Espacement, ColBsProps, LibelleProps, FormatChamp],
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