<template>
  <div class="modal-content" :class="classesComputed">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Fermer">
        <span aria-hidden="true">&times;</span>
      </button>
      <h1 class="modal-title h4" :id="id+'-titre'">{{titre}}</h1>
    </div>
    <form v-if="formulaire" class="form-horizontal" :action="action" method="post">
      <dialogue-corps :key="elements.corps.cle" v-bind="elements.corps"></dialogue-corps>
      <dialogue-pied v-if="elements.pied" :key="elements.pied.cle" v-bind="elements.pied"></dialogue-pied>
    </form>
    <template v-else>
      <dialogue-corps :key="elements.corps.cle" v-bind="elements.corps"></dialogue-corps>
      <dialogue-pied v-if="elements.pied" :key="elements.pied.cle" v-bind="elements.pied"></dialogue-pied>
    </template>
  </div>
</template>

<script>
export default {
  name: "dialogue-contenu",
  props: {
    titre: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    formulaire: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: ""
    },
    elements: Object
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>