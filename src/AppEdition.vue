<template>
  <div id="app">
    <div class="tools">
      <div class="container-fluid">
        <div v-if="selectionModelesPage" class="row bloc-titre">
          <div class="col-xs-12 rubrique">
            <div class="row">
              <div class="col-xs-12">
                <div class="titre flex-row align-items-center">
                  <button
                    type="button"
                    class="ml-1_2 btn btn-default"
                    @click.prevent="annulerSelectionModelesPage"
                  >Annuler</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <h1 class="h3 text-particulier">Sélectionner un modèle de page</h1>
              </div>
            </div>
            <Modeles
              tag="page"
              :dossierModelesExtra="dossierModeles || ''"
              :previsualisation="false"
              @modeles:ajouter="nouveau"
            ></Modeles>
          </div>
        </div>
        <div v-else-if="selectionModeles" class="row bloc-titre">
          <div class="col-xs-12">
            <div class="row mb-1">
              <div class="col-xs-12">
                <div class="flex-row align-items-center">
                  <button
                    type="button"
                    class="mr-1 btn btn-default"
                    @click.prevent="annulerSelectionModeles"
                  >Retour</button>
                </div>
              </div>
            </div>
            <div class="row mb-1">
              <div class="col-xs-12">
                <h1 class="h4 text-particulier">
                  Sélectionner un modèle de
                  <span
                    class="font-bold text-lowercase"
                  >{{selectionModeles.libelle}}</span>
                </h1>
              </div>
            </div>
            <Modeles
              v-if="selection.blocs"
              :parent="selection.tag"
              :tag="selectionModeles.tag"
              :dossierModelesExtra="dossierModeles || ''"
              @modeles:ajouter="ajouterBloc"
            ></Modeles>
            <Modeles
              v-else-if="selection.elements"
              :parent="selection.tag"
              :tag="selectionModeles.tag"
              :dossierModelesExtra="dossierModeles || ''"
              @modeles:ajouter="definirElement"
            ></Modeles>
          </div>
        </div>
        <div v-else-if="exportModele" class="row bloc-titre">
          <div class="col-xs-12 rubrique">
            <div class="row">
              <div class="col-xs-12">
                <div class="titre">
                  <h1 class="h3">Exporter comme modèle</h1>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="export-modele-info-libelle" class="control-label requis">Libellé du modèle</label>
              <input
                id="export-modele-info-libelle"
                type="text"
                name="export-modele-info-libelle"
                autofocus
                class="form-control"
                aria-required="true"
                v-model="libelleExportModele"
              >
            </div>
            <div class="row bloc-validation">
              <div class="col-xs-12 actions-espace-dialogue">
                <div class="row justify-content-center">
                  <div class="col-xs-6">
                    <div class="btn-group btn-group-justified">
                      <button
                        type="button"
                        class="btn btn-default"
                        @click.prevent="exporterModele"
                      >Exporter</button>
                      <button
                        type="button"
                        class="btn btn-default"
                        @click.prevent="fermerExportModele"
                      >Annuler</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-12 flex-col justify-content-between">
                <div class="flex-row">
                  <div class="flex-row align-items-center font-size-h4 text-professionnel">
                    <img src="./assets/rwd.svg" alt class="mr-1_2 img-rwd">
                    <span>{{largeur}}</span>
                  </div>
                  <div class="flex-row align-items-center">
                    <ion-toggle class="ml-1" @click.prevent="swichPrevisualisation"></ion-toggle>
                    <span class="font-size-h4 text-particulier">Prévisualisation</span>
                  </div>
                  <div class="flex-row ml-1">
                    <div class="btn-group ml-1">
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Nouvelle page"
                        @click.prevent="selectionnerModelesPage"
                      >
                        <span class="glyphicon glyphicon-file font-size-h4"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Nouvelle page à partir de celle-ci"
                        @click.prevent="pageCommeNouveau"
                      >
                        <svg
                          class="fill-blanc"
                          style="width: 18px; height: 18px;"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            d="M296 48H176.5C154.4 48 136 65.4 136 87.5V96h-7.5C106.4 96 88 113.4 88 135.5v288c0 22.1 18.4 40.5 40.5 40.5h208c22.1 0 39.5-18.4 39.5-40.5V416h8.5c22.1 0 39.5-18.4 39.5-40.5V176L296 48zm0 44.6l83.4 83.4H296V92.6zm48 330.9c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5h7.5v255.5c0 22.1 10.4 32.5 32.5 32.5H344v7.5zm48-48c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5H264v128h128v167.5z"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Ouvrir"
                        @click.prevent="ouvrir"
                      >
                        <span class="glyphicon glyphicon-open-file font-size-h4"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Enregistrer"
                        :disabled="!hasUndo"
                        @click.prevent="enregistrer"
                      >
                        <span class="glyphicon glyphicon-save-file font-size-h4"></span>
                      </button>
                    </div>
                    <div class="btn-group ml-1">
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Ouvrir un prototype HTML"
                        @click.prevent="ouvrirProto"
                      >
                        <span class="glyphicon glyphicon-folder-open font-size-h4"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Recharger la feuille de styles du prototype"
                        :disabled="dossierProto === false"
                        @click.prevent="rechargerCss"
                      >
                        <span class="glyphicon glyphicon-refresh font-size-h4"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Exporter en HTML dans le prototype"
                        :disabled="dossierProto === false || fichier === false"
                        @click.prevent="exporterHtml"
                      >
                        <span class="glyphicon glyphicon-export font-size-h4"></span>
                      </button>
                    </div>
                    <div class="btn-group ml-1">
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Annuler"
                        :disabled="!hasUndo"
                        @click.prevent="undo"
                      >
                        <svg
                          class="fill-blanc"
                          style="width: 18px; height: 18px;"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            d="M262.3 179.6c-57.9 0-110.3 21.6-150.7 56.8L32 160v192h197.5l-79.1-76.8c30.4-25.3 69-41.1 111.8-41.1 77.3 0 143.1 48.2 166 117.8l51.8-14.8c-30.4-91.4-116.2-157.5-217.7-157.5z"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default"
                        title="Rétablir"
                        :disabled="!hasRedo"
                        @click.prevent="redo"
                      >
                        <svg
                          class="fill-blanc"
                          style="width: 18px; height: 18px;"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            d="M32 337.2L83.8 352c22.9-69.7 88.7-117.8 166-117.8 42.8 0 81.5 15.7 111.8 41.1L282.5 352H480V160l-79.6 76.3c-40.4-35.2-92.8-56.8-150.7-56.8-101.5.1-187.3 66.2-217.7 157.7z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grow-self flex-row justify-content-end">
                    <span class="font-size-14 text-particulier">Inea 1.0.2</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row bloc-titre">
              <div class="col-xs-12 titre-espace-dialogue">
                <div v-if="selection.tag !== 'page'" class="row bloc-fil-ariane">
                  <div class="col-xs-12 fil-ariane flex-row">
                    <span
                      class="glyphicon glyphicon-list font-size-h4 mr-1_2"
                      :title="'Parents de '+confSelection.libelle"
                    ></span>
                    <Breadcrumb :page="page" :value="cheminSelection" @input="changerChemin"></Breadcrumb>
                  </div>
                </div>
                <!--
                <div class="row">
                  <div class="col-xs-12">
                    <div class="titre flex-row align-items-center">
                      <h1>{{confSelection.libelle}}</h1>

                      <a
                        v-if="dossierModeles"
                        href="#"
                        class="btn btn-default"
                        title="Exporter comme modèle"
                        @click.prevent.prevent="ouvrirExportModele"
                      >
                        <span class="glyphicon glyphicon-export font-size-h4"></span>
                      </a>
                    </div>
                  </div>
                </div>
                -->
                <form
                  v-if="confSelection.editeur || selectionDansFlex"
                  :key="undoRedoCount + '-' + selection.cle"
                  class="form-horizontal"
                  action
                  method="post"
                  @submit.prevent
                >
                  <component
                    :is="confSelection.editeur"
                    v-bind="selection"
                    @update:prop="majProp"
                    @delete:prop="supprimerProp"
                    @update:propEnfant="majPropEnfant"
                    @delete:propEnfant="supprimerPropEnfant"
                  ></component>
                  <div class="form-group align-items-center">
                    <dans-flex-props
                      v-if="selectionDansFlex"
                      v-bind="selection"
                      @update:prop="majProp"
                      @delete:prop="supprimerProp"
                    ></dans-flex-props>
                    <classes-app
                      v-bind="selection"
                      @update:prop="majProp"
                      @delete:prop="supprimerProp"
                    ></classes-app>
                  </div>
                </form>
                <div v-else class="row">
                  <div class="col-xs-12">
                    <p class="h4 ml-1 font-italic">Aucune propriété</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="selection.blocs" class="row no-gutters bloc-contenu">
              <div class="col-xs-7 flex-col">
                <Blocs
                  :libelle="confSelection.libelle"
                  :composant="selection"
                  @blocs:selection="selectionnerBloc"
                  @blocs:dupliquer="dupliquerBloc"
                  @blocs:copier="copierBloc"
                  @blocs:couper="couperBloc"
                  @blocs:supprimer="supprimerBloc"
                  @blocs:drag="dragBloc"
                ></Blocs>
              </div>
              <div class="col-xs-5 flex-col">
                <div class="grow-self ml-1 rubrique bg-gris-300">
                  <div class="mb-1_4">Ajouter dans {{confSelection.libelle}}</div>
                  <AjoutBloc
                    :key="selection.cle"
                    :parent="selection"
                    :pressePapier="pressePapier"
                    @blocs:modeles="selectionnerModeles"
                    @blocs:coller="collerBloc"
                  ></AjoutBloc>
                </div>
              </div>
            </div>
            <div v-else-if="selection.elements" class="row no-gutters bloc-contenu">
              <div class="col-xs-6 flex-col">
                <div class="grow-self rubrique bg-particulier">
                  <div class="mb-1_4">Elements dans {{confSelection.libelle}}</div>
                  <Elements
                    :composant="selection"
                    @elements:selection="selectionnerElement"
                    @elements:supprimer="supprimerElement"
                    @elements:modification="selectionnerModeles($event)"
                  ></Elements>
                </div>
              </div>
              <div v-if="manqueDesElements" class="col-xs-6 flex-col">
                <div class="grow-self ml-1 rubrique bg-gris-300">
                  <div class="mb-1_4">Ajouter dans {{confSelection.libelle}}</div>
                  <AjoutElement
                    :key="selection.cle"
                    :parent="selection"
                    @elements:modeles="selectionnerModeles"
                  ></AjoutElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ion-toast-controller></ion-toast-controller>
  </div>
</template>

<script>
import path from "path";
import fs from "fs";
import { remote } from "electron";
import {
  kebabCase,
  preferences,
  setPreferences,
  chargerModele,
  enregistrerModele,
  composants,
  dupliquerNoeud
} from "./utils";
import Vue from "vue";
import vueRenderer from "vue-server-renderer";
import Breadcrumb from "./components/Breadcrumb.vue";
import Blocs from "./components/Blocs.vue";
import Elements from "./components/Elements.vue";
import AjoutBloc from "./components/AjoutBloc.vue";
import AjoutElement from "./components/AjoutElement.vue";
import Modeles from "./components/Modeles.vue";

let undos = [];
let redos = [];

export default {
  name: "app",
  components: {
    Breadcrumb,
    Blocs,
    AjoutBloc,
    Elements,
    AjoutElement,
    Modeles
  },
  data: function() {
    return {
      fichier: false,
      selectionModeles: false,
      selectionModelesPage: false,
      exportModele: false,
      libelleExportModele: "",
      pressePapier: null,
      hasUndo: false,
      hasRedo: false
    };
  },
  computed: {
    previsualisation: function() {
      return this.$store.state.previsualisation;
    },
    largeur: function() {
      switch (this.$store.state.largeur) {
        case "xs":
          return "Smartphone";
        case "sm":
          return "Tablette";
        case "md":
          return "Moyen";
        case "lg":
          return "Large";

        default:
          break;
      }
    },
    undoRedoCount: function() {
      return this.$store.state.undoRedoCount;
    },
    page: function() {
      return this.$store.state.page;
    },
    cheminSelection: function() {
      return this.$store.state.cheminSelection;
    },
    selection: function() {
      return this.$store.state.selection;
    },
    parentSelection: function() {
      return this.$store.state.parentSelection;
    },
    selectionDansFlex: function() {
      return this.$store.state.selectionDansFlex;
    },
    manqueDesElements: function() {
      return Object.keys(composants[this.selection.tag].elements).some(
        nom => !this.selection.elements[nom]
      );
    },
    confSelection: function() {
      return composants[this.selection.tag];
    },
    dossierProto: function() {
      return this.$store.state.dossierProto;
    },
    dossierPages: function() {
      if (this.fichier) {
        return path.dirname(this.fichier);
      } else if (this.dossierProto) {
        return path.resolve(this.dossierProto, "src/inea-builder/pages");
      } else {
        return remote.app.getPath("home");
      }
    },
    dossierModeles: function() {
      return this.dossierProto
        ? path.resolve(this.dossierProto, "src/inea-builder/modeles")
        : false;
    },
    modeleHtml: function() {
      return this.dossierProto
        ? path.resolve(this.dossierProto, "src/inea-builder/html/defaut.html")
        : false;
    },
    webapp: function() {
      return this.dossierProto
        ? path.resolve(this.dossierProto, "src/main/webapp")
        : false;
    },
    titre: function() {
      let titre = this.fichier ? path.basename(this.fichier) : "Nouvelle page";
      if (this.dossierProto) {
        titre += ` - ${this.dossierProto.substring(
          this.dossierProto.lastIndexOf(path.sep) + 1
        )}`;
      }
      return titre;
    }
  },
  watch: {
    fichier: function(chemin) {
      if (chemin) {
        const page = chargerModele(chemin);
        this.$store.dispatch("changerPage", page);
        this.resetUndoRedo();
      }
    },
    titre: function(titre) {
      document.title = titre;
    },
    selection: function() {
      this.selectionModelesPage = false;
      this.selectionModeles = false;
      this.exportModele = false;
    }
  },
  created: function() {
    document.title = this.titre;

    const prefs = preferences();

    if (prefs.fichier) {
      if (fs.existsSync(prefs.fichier)) {
        this.fichier = prefs.fichier;
      } else {
        setPreferences({ fichier: false });
      }
    }

    if (prefs.proto) {
      this.$store.dispatch("changerDossierProto", prefs.proto);
    } else {
      this.$store.dispatch("changerDossierProto", false);
    }

    let ionicCss = path.resolve(__static, "css/ionic.bundle.css");
    remote
      .getCurrentWindow()
      .webContents.insertCSS(fs.readFileSync(ionicCss, "utf8"));

    let css = path.resolve(__static, "css/inea.css");
    remote
      .getCurrentWindow()
      .webContents.insertCSS(fs.readFileSync(css, "utf8"));
  },
  methods: {
    swichPrevisualisation: function() {
      this.$store.dispatch("previsualiser", !this.previsualisation);
    },
    changerChemin: function(chemin) {
      this.$store.dispatch("changerCheminSelection", chemin);
    },
    avantModification: function(prop) {
      // si le dernier undo concerne la même prop ne pas en ajouter un autre
      if (
        prop &&
        undos.length > 0 &&
        undos[undos.length - 1].prop &&
        undos[undos.length - 1].cle === this.selection.cle &&
        undos[undos.length - 1].prop === prop
      ) {
        return;
      }
      undos.push({
        chemin: [...this.cheminSelection],
        modele: JSON.parse(JSON.stringify(this.page))
      });
      if (prop) {
        undos[undos.length - 1].cle = this.selection.cle;
        undos[undos.length - 1].prop = prop;
      }
      this.hasUndo = true;

      redos = [];
      this.hasRedo = false;
    },
    undo: function() {
      redos.push({
        chemin: [...this.cheminSelection],
        modele: JSON.parse(JSON.stringify(this.page))
      });
      this.hasRedo = true;

      const etat = undos.pop();
      this.$store.dispatch("undoRedo", etat);
      this.hasUndo = undos.length > 0;
    },
    redo: function() {
      undos.push({
        chemin: [...this.cheminSelection],
        modele: JSON.parse(JSON.stringify(this.page))
      });
      this.hasUndo = true;

      const etat = redos.pop();
      this.$store.dispatch("undoRedo", etat);
      this.hasRedo = redos.length > 0;
    },
    resetUndoRedo: function() {
      undos = [];
      this.hasUndo = false;
      redos = [];
      this.hasRedo = false;
    },
    majProp: function(event) {
      this.avantModification(event.prop);
      this.$store.dispatch("majPropSelection", event);
    },
    supprimerProp: function(prop) {
      this.avantModification(prop);
      this.$store.dispatch("supprimerPropSelection", prop);
    },
    majPropEnfant: function(event) {
      this.avantModification(event.prop);
      this.$store.dispatch("majPropEnfant", event);
    },
    supprimerPropEnfant: function(event) {
      this.avantModification(event.prop);
      this.$store.dispatch("supprimerPropEnfant", event);
    },
    selectionnerModeles: function(element) {
      if (this.selection.blocs) {
        this.selectionModeles = {
          tag: element,
          libelle: composants[element].libelle
        };
      } else if (this.selection.elements) {
        this.selectionModeles = {
          nom: element,
          tag: composants[this.selection.tag].elements[element].tag,
          libelle:
            composants[composants[this.selection.tag].elements[element].tag]
              .libelle
        };
      }
    },
    annulerSelectionModeles: function() {
      this.selectionModeles = false;
    },
    selectionnerBloc: function(index) {
      const chemin = [...this.cheminSelection, index];
      this.$store.dispatch("changerCheminSelection", chemin);
    },
    ajouterBloc: function(modele) {
      this.avantModification();
      const blocs = [...this.selection.blocs, modele];
      this.$store.dispatch("modifierBlocsSelection", blocs);
      this.selectionModeles = false;
      this.selectionnerBloc(blocs.length - 1);
    },
    supprimerBloc: function(index) {
      this.avantModification();
      const blocs = [
        ...this.selection.blocs.slice(0, index),
        ...this.selection.blocs.slice(index + 1)
      ];
      this.$store.dispatch("modifierBlocsSelection", blocs);
    },
    dupliquerBloc: function(index) {
      this.avantModification();
      const blocs = [
        ...this.selection.blocs.slice(0, index + 1),
        dupliquerNoeud(this.selection.blocs[index]),
        ...this.selection.blocs.slice(index + 1)
      ];
      this.$store.dispatch("modifierBlocsSelection", blocs);
    },
    dragBloc: function(blocs) {
      this.avantModification();
      this.$store.dispatch("modifierBlocsSelection", blocs);
    },
    copierBloc: function(index) {
      this.pressePapier = JSON.parse(
        JSON.stringify(this.selection.blocs[index])
      );
    },
    couperBloc: function(index) {
      this.pressePapier = JSON.parse(
        JSON.stringify(this.selection.blocs[index])
      );
      this.supprimerBloc(index);
    },
    collerBloc: function() {
      this.avantModification();
      const blocs = [
        ...this.selection.blocs,
        dupliquerNoeud(this.pressePapier)
      ];
      this.$store.dispatch("modifierBlocsSelection", blocs);
      this.selectionnerBloc(blocs.length - 1);
    },

    selectionnerElement: function(nom) {
      const chemin = [...this.cheminSelection, nom];
      this.$store.dispatch("changerCheminSelection", chemin);
    },
    supprimerElement: function(nom) {
      this.avantModification();
      this.$store.dispatch("supprimerElementSelection", nom);
    },
    definirElement: function(modele) {
      const nom = this.selectionModeles.nom;
      this.avantModification();
      this.$store.dispatch("modifierElementSelection", {
        nom: nom,
        modele: modele
      });
      this.selectionModeles = false;
      this.selectionnerElement(nom);
    },
    demanderEnregistrement: function() {
      if (this.hasUndo) {
        const reponse = remote.dialog.showMessageBox({
          type: "question",
          title: "Enregistrer",
          message: "Enregistrer les modifications avant de fermer la page ?",
          buttons: ["Enregistrer", "Abandonner", "Annuler"],
          cancelId: 2
        });
        if (reponse === 2) {
          return false;
        } else if (reponse === 1) {
          return true;
        } else {
          if (this.fichier) {
            enregistrerModele(this.fichier, this.page);
            this.resetUndoRedo();
          } else {
            const fileName = remote.dialog.showSaveDialog({
              title: "Enregistrer la page",
              filters: [
                { name: "Page Inea Builder (yml)", extensions: ["yml"] }
              ],
              defaultPath: this.dossierPages
            });
            if (fileName === undefined) {
              return false;
            }
            enregistrerModele(fileName, this.page);
            setPreferences({ fichier: fileName });
            this.fichier = fileName;
          }
          return true;
        }
      } else {
        return true;
      }
    },
    ouvrirProto: function() {
      const filePaths = remote.dialog.showOpenDialog({
        title: "Ouvrir un prototype HTML",
        properties: ["openDirectory"],
        defaultPath: remote.app.getPath("home")
      });

      if (filePaths === undefined) {
        return;
      }

      const dossierProto = filePaths[0];

      // vérifier la structure
      if (
        fs.existsSync(path.resolve(dossierProto, "src/inea-builder")) &&
        fs.existsSync(path.resolve(dossierProto, "src/inea-builder/pages")) &&
        fs.existsSync(path.resolve(dossierProto, "src/inea-builder/modeles")) &&
        fs.existsSync(
          path.resolve(dossierProto, "src/inea-builder/html/defaut.html")
        ) &&
        fs.existsSync(path.resolve(dossierProto, "src/main/webapp")) &&
        fs.existsSync(path.resolve(dossierProto, "src/main/webapp/img")) &&
        fs.existsSync(
          path.resolve(dossierProto, "src/main/sass/_variables.scss")
        ) &&
        fs.existsSync(
          path.resolve(
            dossierProto,
            "generated-webresources/css/application.css"
          )
        )
      ) {
        setPreferences({ proto: dossierProto });
        this.$store.dispatch("changerDossierProto", dossierProto);
      } else {
        remote.dialog.showErrorBox(
          "Utiliser un prototype HTML",
          "Ce dossier n'est pas un prototype HTML Inea"
        );
      }
    },
    rechargerCss: function() {
      this.$store.dispatch("changerDossierProto", this.dossierProto.slice());
      this.presentToast("Feuille de styles rechargée");
    },
    ouvrir: function() {
      if (this.demanderEnregistrement()) {
        const filePaths = remote.dialog.showOpenDialog({
          title: "Ouvrir une page",
          properties: ["openFile"],
          filters: [{ name: "Page Inea Builder (yml)", extensions: ["yml"] }],
          defaultPath: this.dossierPages
        });
        if (filePaths === undefined) {
          return;
        }
        const chemin = filePaths[0];
        setPreferences({ fichier: chemin });
        this.fichier = chemin;
      }
    },
    selectionnerModelesPage: function() {
      this.selectionModelesPage = true;
    },
    annulerSelectionModelesPage: function() {
      this.selectionModelesPage = false;
    },
    nouveau: function(modele) {
      this.selectionModelesPage = false;
      if (this.demanderEnregistrement()) {
        this.resetUndoRedo();
        const page = {
          fichier: "",
          libelle: "",
          definition: modele
        };
        this.$store.dispatch("changerPage", page);
        setPreferences({ fichier: false });
        this.fichier = false;
      }
    },
    pageCommeNouveau: function() {
      if (this.demanderEnregistrement()) {
        this.resetUndoRedo();
        const page = {
          fichier: "",
          libelle: "",
          definition: JSON.parse(JSON.stringify(this.page))
        };
        this.$store.dispatch("changerPage", page);
        setPreferences({ fichier: false });
        this.fichier = false;
      }
    },
    enregistrer: function() {
      if (this.hasUndo) {
        if (this.fichier) {
          enregistrerModele(this.fichier, this.page);
          this.resetUndoRedo();
        } else {
          const fileName = remote.dialog.showSaveDialog({
            title: "Enregistrer la page",
            filters: [{ name: "Page Inea Builder (yml)", extensions: ["yml"] }],
            defaultPath: this.dossierPages
          });
          if (fileName === undefined) {
            return;
          }

          enregistrerModele(fileName, this.page);
          setPreferences({ fichier: fileName });
          this.fichier = fileName;
        }

        const nom = path.basename(this.fichier);
        this.presentToast(nom + " enregistrée");
      }
    },
    ouvrirExportModele: function() {
      this.libelleExportModele = this.confSelection.libelle;
      this.exportModele = true;
    },
    fermerExportModele: function() {
      this.exportModele = false;
    },
    exporterModele: function() {
      this.exportModele = false;

      let fichier = kebabCase(this.libelleExportModele);
      const dossierModele = path.resolve(
        this.projet,
        "modeles",
        this.selection.tag
      );
      if (fs.existsSync(path.resolve(dossierModele, fichier + ".yml"))) {
        remote.dialog.showErrorBox("Modèle", "Ce nom de modèle existe déjà");
        return;
      }

      if (!fs.existsSync(dossierModele)) {
        fs.mkdirSync(dossierModele);
      }
      enregistrerModele(
        path.resolve(dossierModele, fichier),
        this.selection,
        this.libelleExportModele.trim()
      );
    },
    exporterHtml: function() {
      let fichier;

      const pages = path.resolve(this.dossierProto, "src/inea-builder/pages");
      if (this.fichier.indexOf(pages) === 0) {
        const fichierRelatif = this.fichier.substring(pages.length + 1);
        const cheminRelatif = path.dirname(fichierRelatif);
        const nom = path.basename(fichierRelatif, ".yml");
        fichier = path.resolve(this.webapp, cheminRelatif, nom + ".html");
      } else {
        const fileName = remote.dialog.showSaveDialog({
          title: "Exporter en HTML dans le prototype",
          filters: [{ name: "Page HTML (html)", extensions: ["html"] }],
          defaultPath: this.webapp
        });
        if (fileName === undefined) {
          return;
        }
        fichier = fileName;

        if (path.extname(fichier) === "") {
          fichier = fichier + ".html";
        }
      }

      let relatifToWebapp = path.relative(path.dirname(fichier), this.webapp);
      if (relatifToWebapp === "") {
        relatifToWebapp = ".";
      }

      const app = new Vue({
        template: `<espace-dialogue v-bind="espaceDialogue"></espace-dialogue>`,
        data: {
          espaceDialogue: this.page.elements.espaceDialogue
        }
      });

      const renderer = require("vue-server-renderer").createRenderer({
        template: fs.readFileSync(this.modeleHtml, "utf-8")
      });
      renderer.renderToString(
        app,
        {
          titre: this.page.title,
          thematique: this.page.thematique,
          webapp: relatifToWebapp
        },
        (err, html) => {
          if (err) throw err;

          // supprimer les commentaire vides et data-server-rendered
          html = html
            .replace(' data-server-rendered="true"', "")
            .replace(/<!---->/g, "")
            .replace(/<samp>([^<]*)<\/samp>/g, "<!-- $1 -->");

          if (!fs.existsSync(path.dirname(fichier))) {
            fs.mkdirSync(path.dirname(fichier), { recursive: true });
          }
          fs.writeFileSync(fichier, html);

          const nom = path.basename(fichier);
          this.presentToast(nom + " exportée");
        }
      );
    },
    /*supprimerElement: function() {
      var parent = this.repererParent();
    },*/
    quitter: function() {
      if (this.demanderEnregistrement()) {
        remote
          .getCurrentWindow()
          .getParentWindow()
          .destroy();
        remote.getCurrentWindow().destroy();
      }
    },
    presentToast: function(message) {
      const toastController = document.querySelector("ion-toast-controller");

      toastController
        .componentOnReady()
        .then(() => {
          return toastController.create({
            message: message,
            duration: 2000
          });
        })
        .then(toast => {
          return toast.present();
        });
    }
  }
};
</script>

<style>
.tools {
  min-height: 600px;
}

.img-rwd {
  height: 25px;
}

.btn-test-page,
.btn-test-page:focus,
.btn-test-page:hover {
  background-color: transparent;
  border: 2px solid #0b6ba8;
  border-radius: 5px;
  color: #0b6ba8;
}

.btn-test-page.active {
  background-color: #0b6ba8;
  color: white;
}

.bloc-vide {
  height: 50px;
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.bloc-vide.avec-fond {
  margin: 1px;
  background-color: #adb5bd;
}

.bloc-vide > p {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0b6ba8;
}
</style>
