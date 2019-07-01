<template>
  <div class="row bloc-validation" :class="classesComputed">
    <samp>ib:bloc-validation:debut</samp>
    <div class="col-xs-12 actions-espace-dialogue" :class="justifierUnBoutonComputed">
      <div v-if="blocs.length === 0" class="bloc-vide avec-fond">
        <p>Bloc de validation vide</p>
      </div>
      <template v-else-if="blocs.length === 1">
        <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
      </template>
      <div v-else class="row" :class="justifierDesBoutonsComputed">
        <div :class="largeurComputed">
          <div class="btn-group btn-group-justified">
            <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
          </div>
        </div>
      </div>
    </div>
    <samp>ib:bloc-validation:fin</samp>
  </div>
</template>
<script>
export default {
  name: "bloc-validation",
  props: {
    justifyContent: {
      type: String,
      default: ""
    },
    xs: {
      type: Number,
      default: 12
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    lg: {
      type: Number,
      default: 0
    },
    blocs: Array
  },
  computed: {
    justifierUnBoutonComputed: function() {
      if (this.blocs && this.blocs.length > 1) {
        return false;
      }
      let tab = [];
      if (this.justifyContent) {
        tab.push("flex-row");
        switch (this.justifyContent) {
          case "center":
            tab.push("justify-content-center");
            break;
          case "end":
            tab.push("justify-content-end");
            break;
          default:
            tab.push("justify-content-start");
            break;
        }
      }
      if (tab.length > 0) return tab;
      else return false;
    },
    justifierDesBoutonsComputed: function() {
      let tab = [];
      if (this.justifyContent) {
        switch (this.justifyContent) {
          case "center":
            tab.push("justify-content-center");
            break;
          case "end":
            tab.push("justify-content-end");
            break;
          default:
            tab.push("justify-content-start");
            break;
        }
      }
      if (tab.length > 0) return tab;
      else return false;
    },

    largeurComputed: function() {
      let tab = [];
      if (this.xs) {
        tab.push(`col-xs-${this.xs}`);
      }
      if (this.sm) {
        tab.push(`col-sm-${this.sm}`);
      }
      if (this.md) {
        tab.push(`col-md-${this.md}`);
      }
      if (this.lg) {
        tab.push(`col-lg-${this.lg}`);
      }
      if (tab.length > 0) return tab;
      else return false;
    },
    classesComputed: function() {
      return this.baseClasses;
    }
  }
};
</script>