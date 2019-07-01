<template>
  <nav class="navbar-vertical navbar-default" role="navigation" aria-label="composants">
    <ul class="nav navbar-vertical-nav">
      <li v-for="composant in composants" :key="composant.nom">
        <a href="#" @click="$emit('elements:modeles', composant.nom)">
          <span class="glyphicon glyphicon-plus font-size-h4"></span>
          {{composant.libelle}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { composants } from "../utils";

export default {
  props: {
    parent: Object
  },
  computed: {
    composants: function() {
      const noms = Object.keys(composants[this.parent.tag].elements).filter(
        nom => {
          return !this.parent.elements[nom];
        }
      );
      return noms.map(nom => {
        return { nom: nom, ...composants[this.parent.tag].elements[nom] };
      });
    }
  }
};
</script>