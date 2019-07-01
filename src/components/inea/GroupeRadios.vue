<template>
  <div :class="classesComputed">
    <samp>ib:groupe-radios:debut</samp>
    <fieldset :class="{'fieldset-sr-only': srOnly}">
      <legend>{{legende}}</legend>
      <div v-if="blocs.length === 0" class="bloc-vide">
        <p>Groupe de radios vide</p>
      </div>
      <template v-else>
        <template v-if="vertical">
          <div class="form-group" v-for="bloc in blocs" :key="bloc.cle">
            <component :key="bloc.cle" :is="bloc.tag" v-bind="bloc" :name="nameComputed"></component>
          </div>
        </template>
        <template v-else>
          <div class="form-group">
            <component
              v-for="bloc in blocs"
              :key="bloc.cle"
              :is="bloc.tag"
              v-bind="bloc"
              :name="nameComputed"
            ></component>
          </div>
        </template>
      </template>
    </fieldset>
    <samp>ib:groupe-radios:fin</samp>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";
import Espacement from "./mixins/Espacement";
import ColBsProps from "./mixins/ColBsProps";

export default {
  name: "groupe-radios",
  mixins: [Espacement, ColBsProps],
  props: {
    legende: {
      type: String,
      required: true
    },
    srOnly: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    name: {
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
        ...this.colBsClasses
      ];
    },
    nameComputed: function() {
      return this.name || kebabCase(this.legende);
    }
  }
};
</script>