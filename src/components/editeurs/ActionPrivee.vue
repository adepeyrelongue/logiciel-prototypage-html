<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Action privée</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-4">
                <fieldset>
                  <legend>Picto</legend>
                  <div class="form-group">
                    <div class="col-xs-12">
                      <selecteur-icone v-model="icone_"></selecteur-icone>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="col-xs-12 col-md-4">
                <input
                  id="ib-libelle"
                  type="text"
                  name="ib-libelle"
                  class="form-control"
                  aria-labelledby="ib-libelle-label"
                  aria-required="true"
                  v-model="libelle_"
                >
                <div class="help-block">
                  <label id="ib-libelle-label" class="requis">Libellé</label>
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
                  <span v-if="dossierProto" class="input-group-btn">
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
                  <label id="ib-href-label" class="requis">Destination (href)</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-12 col-md-4">
                <selecteur-couleur
                  class="form-control"
                  aria-labelledby="ib-couleur-label"
                  v-model="couleur_"
                ></selecteur-couleur>
                <div class="help-block">
                  <label id="ib-couleur-label">Couleur</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <input
                  id="ib-badge-valeur"
                  type="text"
                  name="ib-badge-valeur"
                  class="form-control"
                  v-model="badge_"
                  aria-labelledby="ib-badge-valeur-label"
                >
                <div class="help-block">
                  <label id="ib-badge-valeur-label">Badge</label>
                </div>
              </div>
              <div v-if="badge_ !== ''" class="col-xs-12 col-md-4">
                <input
                  id="ib-badge-sr"
                  type="text"
                  name="ib-badge-sr"
                  class="form-control"
                  aria-labelledby="ib-badge-sr-label"
                  aria-required="true"
                  v-model="badgeSr_"
                >
                <div class="help-block">
                  <label id="ib-badge-sr-label" class="requis">Texte accessible du badge</label>
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
  name: "pe-action-privee",
  props: {
    libelle: String,
    href: String,
    couleur: String,
    icone: String,
    badge: String,
    badgeSr: String
  },
  data: function() {
    return {
      libelle_: this.libelle,
      href_: this.href,
      icone_: this.icone,
      couleur_: this.couleur || "",
      badge_: this.badge || "",
      badgeSr_: this.badgeSr || ""
    };
  },
  computed: {
    dossierProto: function() {
      return this.$store.state.dossierProto;
    }
  },
  watch: {
    libelle_: function(libelle) {
      this.maj("libelle", libelle);
    },
    icone_: function(icone) {
      this.maj("icone", icone);
    },
    couleur_: function(couleur) {
      this.maj("couleur", couleur, couleur !== "");
    },
    href_: function(href) {
      this.maj("href", href);
    },
    badge_: function(badge) {
      this.maj("badge", badge, badge !== "");
    },
    badgeSr_: function(badgeSr) {
      this.maj("badgeSr", badgeSr, badgeSr !== "");
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