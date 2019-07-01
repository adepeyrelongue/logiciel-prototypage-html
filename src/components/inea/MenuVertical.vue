<template>
  <nav
    class="navbar-vertical navbar-default"
    :class="classesComputed"
    role="navigation"
    :aria-label="ariaLabel"
  >
    <samp>ib:menu-vertical:debut</samp>
    <ul class="nav navbar-vertical-nav">
      <li v-if="blocs.length === 0" class="bloc-vide avec-fond">
        <p>Menu vertical</p>
      </li>
      <component v-for="bloc in blocs" :key="bloc.cle" :is="bloc.tag" v-bind="bloc"></component>
    </ul>
    <samp>ib:menu-vertical:fin</samp>
  </nav>
</template>

<script>
export default {
  name: "menu-vertical",
  props: {
    ariaLabel: {
      type: String,
      required: true
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