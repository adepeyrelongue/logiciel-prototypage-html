<template>
  <nav class="navbar-vertical navbar-default" role="navigation" aria-label="éléments composant">
    <ul v-if="Object.keys(elements).length > 0" class="nav navbar-vertical-nav">
      <li v-for="element in elements" :key="element.nom">
        <a
          href="#"
          class="flex-row align-items-center"
          @click.prevent="$emit('elements:selection', element.nom)"
          @mouseover="repererElement(element.nom)"
          @mouseleave="repererAucun"
        >
          <span class="grow-self">{{element.libelle}}</span>
          <button
            v-if="!element.requis"
            type="button"
            class="btn btn-default ml-1_2"
            @click.prevent.stop="$emit('elements:supprimer', element.nom)"
          >
            <span class="dgfipicon dgfipicon-supprimer font-size-h4"></span>
          </button>
          <button
            type="button"
            class="btn btn-default ml-1_2"
            @click.stop="$emit('elements:modification', element.nom)"
          >
            <span class="dgfipicon dgfipicon-modifier font-size-h4"></span>
          </button>
        </a>
      </li>
    </ul>
    <p v-else class="h4 ml-1 font-italic">Aucun élément</p>
  </nav>
</template>

<script>
import { composants } from "../utils";

export default {
  props: {
    composant: Object
  },
  computed: {
    elements: function() {
      return Object.keys(this.composant.elements).map(nom => {
        const element = this.composant.elements[nom];
        const definition = composants[this.composant.tag].elements[nom];
        return {
          nom: nom,
          libelle: definition.libelle,
          requis: definition.requis || false
        };
      });
    }
  },
  methods: {
    repererElement: function(nom) {
      this.$store.dispatch("repererElement", this.composant.elements[nom].cle);
    },
    repererAucun: function() {
      this.$store.dispatch("nePlusRepererElement");
    }
  }
};
</script>