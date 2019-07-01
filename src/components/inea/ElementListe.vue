<template>
  <li :class="classesComputed">
    <span v-if="blocs.length === 0" class="bloc-vide avec-fond">
      <p>Élément de liste Vide</p>
    </span>
    <form v-if="formulaire" class="form-horizontal" :action="action" method="post">
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </form>
    <component v-else v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
  </li>
</template>

<script>
import TextProps from "./mixins/TextProps";
import Espacement from "./mixins/Espacement";
import AlignementProps from "./mixins/AlignementProps";
export default {
  name: "element-liste",
  mixins: [TextProps, Espacement, AlignementProps],
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
      return [
        ...this.baseClasses,
        ...this.espacementClasses,
        ...this.textClasses,
        this.alignementClasse
      ];
    }
  }
};
</script>