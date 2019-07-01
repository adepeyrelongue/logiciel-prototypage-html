<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Image SVG</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-1">
                <button
                  type="button"
                  class="btn btn-default"
                  title="Choisir l'image SVG"
                  @click.prevent="choisir"
                >
                  <span class="glyphicon glyphicon-picture"></span>
                </button>
              </div>
              <div class="col-xs-12 col-md-2">
                <selecteur-couleur
                  class="form-control"
                  aria-labelledby="ib-couleur-label"
                  v-model="couleur_"
                ></selecteur-couleur>
                <div class="help-block">
                  <label id="ib-couleur-label">Couleur</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-largeur"
                  type="number"
                  name="ib-largeur"
                  class="form-control"
                  min="0"
                  aria-labelledby="ib-largeur-label"
                  v-model.number="largeur_"
                >
                <div class="help-block">
                  <label id="ib-largeur-label">Largeur (0 pour naturelle)</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-hauteur"
                  type="number"
                  name="ib-hauteur"
                  class="form-control"
                  min="0"
                  aria-labelledby="ib-hauteur-label"
                  v-model.number="hauteur_"
                >
                <div class="help-block">
                  <label id="ib-hauteur-label">Hauteur (0 pour naturelle)</label>
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
import fs from "fs";
import { remote } from "electron";
export default {
  name: "pe-image-svg",
  props: {
    viewBox: String,
    paths: Array,
    couleur: String,
    largeur: Number,
    hauteur: Number
  },
  data: function() {
    return {
      couleur_: this.couleur || "",
      largeur_: this.largeur || 0,
      hauteur_: this.hauteur || 0
    };
  },
  computed: {
    dossierImages: function() {
      return this.$store.state.dossierImages;
    }
  },
  watch: {
    couleur_: function(couleur) {
      this.maj("couleur", couleur, couleur !== "");
    },
    largeur_: function(largeur) {
      this.maj("largeur", largeur, largeur !== 0);
    },
    hauteur_: function(hauteur) {
      this.maj("hauteur", hauteur, hauteur !== 0);
    }
  },
  methods: {
    choisir: function() {
      let options = {
        title: "Choisir une image SVG",
        properties: ["openFile"],
        defaultPath: this.dossierImages || remote.app.getPath("home"),
        filters: [{ name: "Images", extensions: ["svg"] }]
      };

      remote.dialog.showOpenDialog(options, filePaths => {
        if (filePaths === undefined) {
          return;
        }
        const fichier = filePaths[0];
        const rawSvg = fs.readFileSync(fichier, "utf8");

        const svgM = rawSvg.match(
          /<svg[^>]+viewBox="([^"]+)[^>]+>((<path[^>]+><\/path>|<path[^>]+\/>)+)<\/svg>/s
        );
        if (svgM) {
          const viewBox = svgM[1];
          const rawPaths = svgM[2];

          let paths = [];
          const pathsM = /<path[^>]+d="([^"]+)[^>]+><\/path>|<path[^>]+d="([^"]+)[^>]+\/>/gs;
          let pathM = pathsM.exec(rawPaths);
          while (pathM !== null) {
            paths.push(pathM[1] || pathM[2]);
            pathM = pathsM.exec(rawPaths);
          }

          this.maj("viewBox", viewBox);
          this.maj("paths", paths);
        }
      });
    }
  }
};
</script>