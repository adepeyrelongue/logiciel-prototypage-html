<template>
  <div :class="classesComputed">
    <espace-dialogue
      v-if="elements.espaceDialogue"
      :key="elements.espaceDialogue.cle"
      v-bind="elements.espaceDialogue"
    ></espace-dialogue>
  </div>
</template>

<script>
export default {
  name: "page",
  props: {
    title: {
      type: String,
      required: true
    },
    thematique: {
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