<template>
  <div class="row bloc-messages" :class="classesComputed">
    <samp>ib:bloc-messages:debut</samp>
    <div class="col-xs-12 messages">
      <div v-if="blocs.length === 0" class="bloc-vide">
        <p>Messages</p>
      </div>
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </div>
    <samp>ib:bloc-messages:fin</samp>
  </div>
</template>

<script>
export default {
  name: "bloc-messages",
  props: {
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>