<template>
  <div class="row" :class="classesComputed">
    <samp>ib:message:debut</samp>
    <div class="col-xs-12 col-sm-offset-1 col-sm-10 alert" :class="classeMessageComputed">
      <p
        role="heading"
        aria-level="2"
        :tabindex="typeMessage !== 'info' ? 0 : false"
        :inea-autofocus="typeMessage !== 'info' ? true : false"
      >
        <span class="mr-1_2" :class="classeIconeComputed">
          <span class="sr-only">{{srComputed}}</span>
        </span>
        <component
          v-for="bloc in blocs"
          :key="bloc.cle"
          :is="bloc.tag"
          v-bind="bloc"
          :in-message="true"
        ></component>
      </p>
      <ul v-if="typeMessage === 'danger' && liensListe.length > 0" class="liste liste-condensee">
        <li v-for="(lien, index) in liensListe" :key="index">
          <a
            href="#"
            :inea-target-focus="'#'+targetComputed(lien)"
            class="alert-link"
            :title="titleComputed(lien)"
          >{{lien.texte}}</a>
        </li>
      </ul>
    </div>
    <samp>ib:message:fin</samp>
  </div>
</template>

<script>
import { kebabCase } from "../../utils";

export default {
  name: "message",
  props: {
    typeMessage: {
      type: String,
      required: true
    },
    liensListe: {
      type: Array,
      default: function() {
        return [];
      }
    },
    blocs: Array
  },
  computed: {
    classesComputed: function() {
      return this.baseClasses;
    },
    classeMessageComputed: function() {
      return `alert-${this.typeMessage}`;
    },
    classeIconeComputed: function() {
      switch (this.typeMessage) {
        case "info":
          return "glyphicon glyphicon-info-sign";
        case "success":
          return "glyphicon glyphicon-ok-sign";
        case "warning":
          return "glyphicon glyphicon-exclamation-sign";
        case "danger":
          return "glyphicon glyphicon-remove-sign";
        default:
          return "";
      }
    },
    srComputed: function() {
      switch (this.typeMessage) {
        case "info":
          return "information";
        case "success":
          return "confirmation";
        case "warning":
          return "avertissement";
        case "danger":
          return "erreur";
        default:
          return "";
      }
    }
  },
  methods: {
    targetComputed: function(lien) {
      return lien.target || kebabCase(lien.texte);
    },
    titleComputed: function(lien) {
      return lien.title || lien.texte + " : corriger cette information";
    }
  }
};
</script>