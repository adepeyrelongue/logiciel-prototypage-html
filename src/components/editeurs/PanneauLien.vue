<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Panneau lien</legend>
            <div class="form-group">
              <div class="col-xs-12">
                <fieldset>
                  <legend>Lien</legend>
                  <div class="form-group">
                    <div class="col-xs-12 col-md-3">
                      <div class="checkbox">
                        <label for="ib-collapse">
                          <input
                            id="ib-collapse"
                            type="checkbox"
                            name="ib-collapse"
                            v-model="collapse_"
                          >
                          Plie / Déplie un contenu
                        </label>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-3">
                      <div class="input-group">
                        <input
                          id="ib-href"
                          type="text"
                          name="ib-href"
                          class="form-control"
                          aria-labelledby="ib-href-label"
                          aria-required="true"
                          v-model="href_"
                        >
                        <span v-if="!collapse_&& dossierProto" class="input-group-btn">
                          <button
                            type="button"
                            class="btn btn-default"
                            title="Sélectionner une page"
                            @click.prevent="selectionnerPage"
                          >
                            <span class="glyphicon glyphicon-link"></span>
                          </button>
                        </span>
                      </div>
                      <div class="help-block">
                        <label id="ib-href-label" class="requis">{{labelHrefComputed}}</label>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-2">
                      <div class="checkbox">
                        <label for="ib-sans-surlignement">
                          <input
                            id="ib-sans-surlignement"
                            type="checkbox"
                            name="ib-sans-surlignement"
                            v-model="sansSurlignement_"
                          >
                          Sans surlignements
                        </label>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-3">
                      <div class="checkbox">
                        <label for="ib-nouvelle-fenetre">
                          <input
                            id="ib-nouvelle-fenetre"
                            type="checkbox"
                            name="ib-nouvelle-fenetre"
                            v-model="nouvelleFenetre_"
                          >
                          Nouvelle fenêtre
                        </label>
                      </div>
                    </div>
                    <div v-if="nouvelleFenetre_" class="col-xs-12 col-md-3">
                      <input
                        id="ib-aria-label"
                        type="text"
                        name="ib-aria-label"
                        class="form-control"
                        aria-labelledby="ib-aria-label-label"
                        aria-required="true"
                        v-model="ariaLabel_"
                      >
                      <div class="help-block">
                        <label id="ib-aria-label-label" class="requis">Texte accessible</label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <flex-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></flex-props>
      <bloc-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></bloc-props>
      <div class="form-group">
        <div class="col-xs-6">
          <espacement
            v-bind="$attrs"
            @update:prop="$emit('update:prop', $event)"
            @delete:prop="$emit('delete:prop', $event)"
          ></espacement>
        </div>
        <div class="col-xs-6">
          <bordure
            v-bind="$attrs"
            @update:prop="$emit('update:prop', $event)"
            @delete:prop="$emit('delete:prop', $event)"
          ></bordure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import path from "path";
import { remote } from "electron";
export default {
  name: "pe-panneau-lien",
  props: {
    href: String,
    collapse: Boolean,
    nouvelleFenetre: Boolean,
    ariaLabel: String,
    sansSurlignement: Boolean
  },
  data: function() {
    return {
      href_: this.href,
      collapse_: this.collapse || false,
      nouvelleFenetre_: this.nouvelleFenetre || false,
      ariaLabel_: this.ariaLabel || "",
      sansSurlignement_: this.sansSurlignement || false
    };
  },
  computed: {
    dossierProto: function() {
      return this.$store.state.dossierProto;
    },
    labelHrefComputed: function() {
      if (this.collapse_) {
        return "Id de contenu à plier";
      } else {
        return "Destination (href)";
      }
    }
  },
  watch: {
    href_: function(href) {
      this.maj("href", href);
    },
    collapse_: function(collapse) {
      this.maj("collapse", collapse, collapse);
    },
    nouvelleFenetre_: function(nouvelleFenetre) {
      this.maj("nouvelleFenetre", nouvelleFenetre, nouvelleFenetre);
    },
    ariaLabel_: function(ariaLabel) {
      this.maj("ariaLabel", ariaLabel, ariaLabel !== "");
    },
    sansSurlignement_: function(sansSurlignement) {
      this.maj("sansSurlignement", sansSurlignement, sansSurlignement);
    }
  },
  methods: {
    selectionnerPage: function() {
      const dossierPages = path.resolve(
        this.dossierProto,
        "src/inea-builder/pages"
      );

      const filePaths = remote.dialog.showOpenDialog({
        title: "Sélectionner une page",
        properties: ["openFile"],
        filters: [{ name: "Page Inea Builder (yml)", extensions: ["yml"] }],
        defaultPath: dossierPages
      });
      if (filePaths === undefined) {
        return;
      }
      const chemin = filePaths[0];

      if (chemin.indexOf(dossierPages) === 0) {
        const href =
          chemin.substring(dossierPages.length + 1, chemin.indexOf(".yml")) +
          ".html";
        this.href_ = href;
      }
    }
  }
};
</script>