<template>
  <div class="form-group" :class="classesComputed">
    <samp>ib:champs:debut</samp>
    <div v-if="blocs.length === 0" class="col-xs-12 bloc-vide">
      <p>Champs de saisie</p>
    </div>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:champs:fin</samp>
  </div>
</template>

<script>
export default {
  name: "champs",
  props: {
    alignItems: {
      type: String,
      default: ""
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [...this.baseClasses];

      switch (this.alignItems) {
        case "start":
          css.push("align-items-start");
          break;

        case "center":
          css.push("align-items-center");
          break;

        case "end":
          css.push("align-items-end");
          break;

        default:
          break;
      }

      return css;
    }
  }
};
</script>