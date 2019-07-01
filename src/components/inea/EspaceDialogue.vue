<template>
  <main role="main" :class="classesComputed">
    <samp>ib:espace-dialogue:debut</samp>
    <form v-if="formulaire" class="form-horizontal" :action="action" method="post">
      <div class="container">
        <div v-if="blocs.length === 0" class="row">
          <div class="col-xs-12 bloc-vide">
            <p>Espace dialogue avec formulaire vide</p>
          </div>
        </div>
        <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
      </div>
    </form>
    <div v-else class="container">
      <div v-if="blocs.length === 0" class="row">
        <div class="col-xs-12 bloc-vide">
          <p>Espace dialogue vide</p>
        </div>
      </div>
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </div>
    <samp>ib:espace-dialogue:fin</samp>
  </main>
</template>

<script>
export default {
  name: "espace-dialogue",
  props: {
    formulaire: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: ""
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>