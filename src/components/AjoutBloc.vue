<template>
  <nav class="navbar-vertical navbar-default" role="navigation" aria-label="composants">
    <ul class="nav navbar-vertical-nav">
      <li v-if="pressePapierComputed">
        <a href="#" @click="$emit('blocs:coller')">
          <svg
            style="width: 18px; height: 18px;"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden="true"
          >
            <path
              d="M405.333 80h-87.35C310.879 52.396 285.821 32 256 32s-54.879 20.396-61.983 48h-87.35C83.198 80 64 99.198 64 122.667v314.665C64 460.801 83.198 480 106.667 480h298.666C428.802 480 448 460.801 448 437.332V122.667C448 99.198 428.802 80 405.333 80zM256 80c11.729 0 21.333 9.599 21.333 21.333s-9.604 21.334-21.333 21.334-21.333-9.6-21.333-21.334S244.271 80 256 80zm152 360H104V120h40v72h224v-72h40v320z"
            ></path>
          </svg>
          Coller {{pressePapierComputed}}
        </a>
      </li>
      <li v-for="composant in composants" :key="composant.tag">
        <a href="#" @click="$emit('blocs:modeles', composant.tag)">
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
    parent: Object,
    pressePapier: Object
  },
  computed: {
    pressePapierComputed: function() {
      if (this.pressePapier) {
        for (const bloc of composants[this.parent.tag].blocs) {
          if (this.pressePapier.tag === bloc) {
            return composants[bloc].libelle;
          }
        }
      }
      return false;
    },
    composants: function() {
      let _composants = [];

      for (const bloc of composants[this.parent.tag].blocs) {
        _composants.push({ tag: bloc, libelle: composants[bloc].libelle });
      }
      return _composants;
    }
  }
};
</script>