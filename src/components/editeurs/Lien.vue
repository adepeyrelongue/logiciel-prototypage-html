<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Lien</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-texte"
                  type="text"
                  name="ib-texte"
                  class="form-control"
                  v-model="texte_"
                  aria-labelledby="ib-texte-label"
                  :aria-required="!bouton_"
                >
                <div class="help-block">
                  <label id="ib-texte-label" :class="{requis: !bouton_}">Texte</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
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
                  <span v-if="boutonAction_ === 'lien' && dossierProto" class="input-group-btn">
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
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-aria-label"
                  type="text"
                  name="ib-aria-label"
                  class="form-control"
                  aria-labelledby="ib-aria-label-label"
                  :aria-required="texte_ === ''"
                  v-model="ariaLabel_"
                >
                <div class="help-block">
                  <label id="ib-aria-label-label" :class="{requis: texte_ === ''}">Texte accessible</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-12 col-md-2">
                <select
                  id="ib-alignement"
                  name="ib-alignement"
                  class="form-control"
                  v-model="alignement_"
                  aria-labelledby="ib-alignement-label"
                >
                  <option value="defaut">défaut</option>
                  <option value="left">gauche</option>
                  <option value="center">centré</option>
                  <option value="right">droit</option>
                </select>
                <div class="help-block">
                  <label id="ib-alignement-label">Justification du texte</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-1">
                <div class="checkbox">
                  <label for="ib-ressemble-bouton">
                    <input
                      id="ib-ressemble-bouton"
                      type="checkbox"
                      name="ib-ressemble-bouton"
                      v-model="bouton_"
                    >
                    Bouton
                  </label>
                </div>
              </div>
              <div v-if="bouton_" class="col-xs-12 col-md-2">
                <select
                  id="ib-bouton-action"
                  name="ib-bouton-action"
                  class="form-control"
                  v-model="boutonAction_"
                  aria-labelledby="ib-bouton-action-label"
                >
                  <option value="lien">Lien</option>
                  <option value="collapse">Plier / déplier</option>
                  <option value="modal">Ouvrir dialogue</option>
                </select>
                <div class="help-block">
                  <label id="ib-bouton-action-label">Action du bouton</label>
                </div>
              </div>
              <div v-if="bouton_" class="col-xs-12 col-md-2">
                <selecteur-couleur
                  class="form-control"
                  aria-labelledby="ib-couleur-label"
                  v-model="couleur_"
                ></selecteur-couleur>
                <div class="help-block">
                  <label id="ib-couleur-label">Couleur</label>
                </div>
              </div>
              <div v-if="bouton_" class="col-xs-12 col-md-2">
                <fieldset>
                  <legend>Picto</legend>
                  <div class="form-group">
                    <div class="col-xs-12">
                      <selecteur-icone v-model="icone_"></selecteur-icone>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div v-if="bouton_" class="col-xs-12 col-md-3">
                <div class="checkbox">
                  <label for="ib-retour-ligne">
                    <input
                      id="ib-retour-ligne"
                      type="checkbox"
                      name="ib-retour-ligne"
                      v-model="retourLigne_"
                    >
                    Activer le retour à la ligne
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <espacement
            v-bind="$attrs"
            :hasPadding="false"
            @update:prop="$emit('update:prop', $event)"
            @delete:prop="$emit('delete:prop', $event)"
          ></espacement>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import path from "path";
import { remote } from "electron";
export default {
  name: "pe-lien",
  props: {
    texte: String,
    href: String,
    boutonAction: String,
    couleur: String,
    disabled: Boolean,
    nouvelleFenetre: Boolean,
    ariaLabel: String,
    bouton: Boolean,
    icone: String,
    retourLigne: Boolean,
    alignement: String
  },
  data: function() {
    return {
      texte_: this.texte || "",
      href_: this.href || "",
      boutonAction_: this.boutonAction || "lien",
      couleur_: this.couleur || "",
      nouvelleFenetre_: this.nouvelleFenetre || false,
      ariaLabel_: this.ariaLabel || "",
      bouton_: this.bouton || false,
      icone_: this.icone || "",
      retourLigne_: this.retourLigne_ || false,
      alignement_: this.alignement || "defaut"
    };
  },
  computed: {
    dossierProto: function() {
      return this.$store.state.dossierProto;
    },
    labelHrefComputed: function() {
      switch (this.boutonAction_) {
        case "collapse":
          return "Id de contenu à plier";

        case "modal":
          return "Id de dialogue à ouvrir";

        default:
          return "Destination (href)";
      }
    }
  },
  watch: {
    texte_: function(texte) {
      this.maj("texte", texte, texte !== "");
    },
    href_: function(href) {
      this.maj("href", href);
    },
    boutonAction_: function(boutonAction) {
      this.maj("boutonAction", boutonAction, boutonAction !== "lien");
    },
    couleur_: function(couleur) {
      this.maj("couleur", couleur, couleur !== "");
    },
    nouvelleFenetre_: function(nouvelleFenetre) {
      this.maj("nouvelleFenetre", nouvelleFenetre, nouvelleFenetre !== "");
    },
    ariaLabel_: function(ariaLabel) {
      this.maj("ariaLabel", ariaLabel, ariaLabel !== "");
    },
    bouton_: function(bouton) {
      this.maj("bouton", bouton, bouton);
    },
    icone_: function(icone) {
      this.maj("icone", icone, icone !== "");
    },
    retourLigne_: function(retourLigne) {
      this.maj("retourLigne", retourLigne, retourLigne);
    },
    alignement_: function(alignement) {
      this.maj("alignement", alignement, alignement !== "defaut");
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