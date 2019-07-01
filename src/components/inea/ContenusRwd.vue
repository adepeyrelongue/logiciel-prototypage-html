<template>
  <div class="row" :class="classesComputed">
    <samp>ib:contenus-rwd:debut</samp>
    <div v-if="blocs.length === 0" class="col-xs-12 bloc-vide">
      <p>Groupe responsive</p>
    </div>
    <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    <samp>ib:contenus-rwd:fin</samp>
  </div>
</template>

<script>
export default {
  name: "contenus-rwd",
  props: {
    justifyContent: {
      type: String,
      default: ""
    },
    alignItems: {
      type: String,
      default: ""
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      let css = [...this.baseClasses];

      switch (this.justifyContent) {
        case "center":
          css.push("justify-content-center");
          break;

        case "end":
          css.push("justify-content-end");
          break;

        case "between":
          css.push("justify-content-between");
          break;

        case "around":
          css.push("justify-content-around");
          break;

        default:
          break;
      }

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