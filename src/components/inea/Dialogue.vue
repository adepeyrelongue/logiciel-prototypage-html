<template>
  <div
    class="modal"
    role="dialog"
    :aria-labelledby="idComputed+'-titre'"
    :id="idComputed"
    tabindex="-1"
  >
    <samp>ib:dialogue:debut</samp>
    <div class="modal-dialog" role="document">
      <dialogue-contenu
        :key="elements.contenu.cle"
        :id="idComputed"
        :titre="titre"
        v-bind="elements.contenu"
      ></dialogue-contenu>
    </div>
    <samp>ib:dialogue:fin</samp>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";

export default {
  name: "dialogue",
  props: {
    titre: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: ""
    },
    elements: Object
  },
  computed: {
    idComputed: function() {
      return this.id || kebabCase(this.titre);
    }
  }
};
</script>