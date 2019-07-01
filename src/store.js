import path from 'path'
import fs from "fs";
import { ipcRenderer } from 'electron'
import {
  chargerModele
} from "./utils";
import Vue from 'vue'
import Vuex from 'vuex'

function getSelection(page, chemin) {
  let noeud = page;
  let dansFlex = false;
  let dialogue = false;
  for (const enfant of chemin) {
    dansFlex = noeud.flex ? true : false;
    if (noeud.tag === "dialogue") {
      dialogue = noeud;
    }
    if (noeud.blocs) {
      noeud = noeud.blocs[enfant];
    } else {
      noeud = noeud.elements[enfant];
    }
  }
  return { selection: noeud, dansFlex: dansFlex, dialogue };
}


Vue.use(Vuex)

const modelePage = chargerModele(path.resolve(__static, "modeles", "page", "vide.yml"));

export default new Vuex.Store({
  state: {
    isPage: false,
    wcidPage: 0,
    isEdition: false,
    wcidEdition: 0,

    dossierProto: null,
    dossierImages: false,
    couleurs: [],
    thematiques: [],
    cssProto: [],

    page: modelePage.definition,
    titre: modelePage.definition.title,
    cheminSelection: [],
    selection: modelePage.definition,
    selectionDansFlex: false,
    dialogue: false,

    largeur: "xs",
    previsualisation: false,
    composantRepere: 0,
    undoRedoCount: 0
  },
  mutations: {
    isPage(state, wcidEdition) {
      state.isPage = true;
      state.wcidEdition = wcidEdition;
    },
    isEdition(state, wcidPage) {
      state.isEdition = true;
      state.wcidPage = wcidPage;
    },
    dossierProto(state, chemin) {
      state.dossierProto = chemin;
    },
    dossierImages(state, chemin) {
      state.dossierImages = chemin;
    },
    couleurs(state, couleurs) {
      state.couleurs = couleurs;
    },
    cssProto(state, cssProto) {
      state.cssProto = cssProto;
    },
    thematiques(state, thematiques) {
      state.thematiques = thematiques;
    },
    page(state, modele) {
      state.page = modele;
    },
    titre(state, titre) {
      state.titre = titre;
    },
    cheminSelection(state, chemin) {
      state.cheminSelection = chemin;
    },
    selection(state, sel) {
      state.selection = sel;
    },
    selectionDansFlex(state, dansFlex) {
      state.selectionDansFlex = dansFlex;
    },
    dialogue(state, dialogue) {
      state.dialogue = dialogue;
    },
    largeur(state, largeur) {
      state.largeur = largeur;
    },
    previsualisation(state, prev) {
      state.previsualisation = prev;
    },
    undoRedoCount(state, count) {
      state.undoRedoCount = count;
    },
    majProp(state, datas) {
      const { prop, value } = datas;
      Vue.set(state.selection, prop, value);
    },
    supprimerProp(state, prop) {
      Vue.delete(state.selection, prop);
    },
    majPropEnfant(state, datas) {
      const { enfant, prop, value } = datas;
      if (state.selection.blocs) {
        Vue.set(state.selection.blocs[enfant], prop, value);
      } else if (state.selection.elements) {
        Vue.set(state.selection.elements[enfant], prop, value);
      }
    },
    supprimerPropEnfant(state, datas) {
      const { enfant, prop } = datas;
      if (state.selection.blocs) {
        Vue.delete(state.selection.blocs[enfant], prop);
      } else if (state.selection.elements) {
        Vue.delete(state.selection.elements[enfant], prop);
      }
    },
    modifierBlocs(state, blocs) {
      state.selection.blocs = blocs;
    },
    modifierBlocsParent(state, blocs) {
      state.parentSelection.blocs = blocs;
    },
    modifierElement(state, datas) {
      const { nom, modele } = datas;
      Vue.set(state.selection.elements, nom, modele);
    },
    supprimerElement(state, nom) {
      Vue.delete(state.selection.elements, nom);
    },
    composantSelectionne(state, cle) {
      state.composantSelectionne = cle;
    },
    composantRepere(state, cle) {
      state.composantRepere = cle;
    },
    pasDeComposantRepere(state) {
      state.composantRepere = 0;
    }
  },
  actions: {
    initIpc({ commit }, infos) {
      if (infos.win === "page") {
        commit('isPage', infos.wcidEdition);
      } else if (infos.win === "edition") {
        commit('isEdition', infos.wcidPage);
      }
    },
    largeurPage({ commit, state }, largeurPx) {
      let largeur = "lg";

      if (largeurPx < 768) {
        largeur = "xs";
      } else if (largeurPx < 992) {
        largeur = "sm";
      } else if (largeurPx < 1200) {
        largeur = "md";
      }

      commit('largeur', largeur);

      if (state.isPage) {
        ipcRenderer.sendTo(state.wcidEdition, 'largeurPage', largeurPx);
      }
    },
    previsualiser({ commit, state }, prev) {
      commit('previsualisation', prev);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'previsualiser', prev);
      }
    },
    changerDossierProto({ commit, state }, chemin) {
      commit('dossierProto', chemin);
      commit('dossierImages', chemin ? path.resolve(chemin, "src/main/webapp/img") : false);

      let thematiques = [];
      let couleurs = [];
      if (chemin) {
        const variables = path.resolve(chemin, "src/main/sass/_variables.scss");
        const sass = fs.readFileSync(variables, "utf8");

        let thematiquesM = sass.match(/\$thematiques:\s*(\([^;]+)/s);
        thematiquesM = thematiquesM[1].substring(1, thematiquesM[1].length - 2);

        const tuplesT = thematiquesM.match(/\([^,]+,\s*[^\)]+\)/gs);
        for (const tuple of tuplesT) {
          const thematiqueM = tuple.match(/\(([^,]+),\s*([^\)]+)\)/);
          thematiques.push({
            nom: thematiqueM[1],
            code: thematiqueM[2]
          });
        }

        let couleursM = sass.match(/\$couleurs:\s*(\([^;]+)/s);
        couleursM = couleursM[1].substring(1, couleursM[1].length - 2);

        const tuplesC = couleursM.match(/\([^,]+,\s*[^\)]+\)/gs);
        for (const tuple of tuplesC) {
          const couleurM = tuple.match(/\(([^,]+),\s*([^\)]+)\)/);
          couleurs.push({
            nom: couleurM[1],
            code: couleurM[2]
          });
        }

        let cssProto = [];

        let stylesO = {};
        const appCss = path.resolve(chemin, "src/main/sass/application.scss");
        const css = fs.readFileSync(appCss, "utf8");
        const stylesM = css.match(/\.[a-z][a-zA-Z0-9_-]+/g);
        if (stylesM) {
          for (const style of stylesM) {
            stylesO[style.slice(1)] = true;
          }

          for (const style in stylesO) {
            cssProto.push(style);
          }
          cssProto.sort();
        }

        commit('cssProto', cssProto);
      } else if (chemin === false) {
        thematiques = [
          { nom: 'particulier', code: '#0b6ba8' },
          { nom: 'professionnel', code: '#a63950' },
          { nom: 'partenaire', code: '#0c7b38' },
          { nom: 'collectivite', code: '#586d84' },
          { nom: 'international', code: '#639' }
        ];

        couleurs = [
          { nom: 'blanc', code: '#fff' },
          { nom: 'gris-100', code: '#f8f9fa' },
          { nom: 'gris-200', code: '#e9ecef' },
          { nom: 'gris-300', code: '#dee2e6' },
          { nom: 'gris-400', code: '#ced4da' },
          { nom: 'gris-500', code: '#adb5bd' },
          { nom: 'gris-600', code: '#6c757d' },
          { nom: 'gris-700', code: '#495057' },
          { nom: 'gris-800', code: '#343a40' },
          { nom: 'gris-900', code: '#212529' },
          { nom: 'noir', code: '#000' }
        ];
      }
      commit('thematiques', thematiques);
      commit('couleurs', couleurs);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'changerDossierProto', chemin);
      }
    },
    changerPage({ commit, state }, modele) {
      commit('page', modele.definition);
      commit('titre', modele.definition.title);
      commit('cheminSelection', []);
      commit('selection', modele.definition);
      commit('selectionDansFlex', false);
      commit('dialogue', false);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'changerPage', modele);
      }
    },
    changerCheminSelection({ commit, state }, chemin) {
      commit("pasDeComposantRepere");
      Vue.nextTick(() => {
        commit('cheminSelection', chemin);

        const { selection, dansFlex, dialogue } = getSelection(state.page, chemin);
        commit('selection', selection);

        commit('selectionDansFlex', dansFlex);

        if (state.dialogue !== dialogue) {
          commit('dialogue', dialogue);
        }
      });

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'changerCheminSelection', chemin);
      }
    },
    undoRedo({ commit, state }, etat) {
      commit("pasDeComposantRepere");

      Vue.nextTick(() => {
        commit('page', etat.modele);
        commit('cheminSelection', etat.chemin);

        const { selection, dansFlex, dialogue } = getSelection(etat.modele, etat.chemin);
        commit('selection', selection);
        commit('selectionDansFlex', dansFlex);

        if (state.dialogue !== dialogue) {
          commit('dialogue', dialogue);
        }

        commit('undoRedoCount', state.undoRedoCount + 1);
      });

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'undoRedo', etat);
      }
    },

    majPropSelection({ commit, state }, datas) {
      commit('majProp', datas);

      if (state.selection.tag === 'page' && datas.prop === 'title') {
        commit('titre', datas.value);
      }

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'majPropSelection', datas);
      }
    },
    supprimerPropSelection({ commit, state }, prop) {
      commit('supprimerProp', prop);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'supprimerPropSelection', prop);
      }
    },
    majPropEnfant({ commit, state }, datas) {
      commit('majPropEnfant', datas);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'majPropEnfant', datas);
      }
    },
    supprimerPropEnfant({ commit, state }, datas) {
      commit('supprimerPropEnfant', datas);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'supprimerPropEnfant', datas);
      }
    },
    modifierBlocsSelection({ commit, state }, blocs) {
      commit('modifierBlocs', blocs);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'modifierBlocsSelection', blocs);
      }
    },
    modifierBlocsParentSelection({ commit, state }, blocs) {
      commit('modifierBlocsParent', blocs);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'modifierBlocsParentSelection', blocs);

      }
    },
    supprimerElementSelection({ commit, state }, nom) {
      commit('supprimerElement', nom);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'supprimerElementSelection', nom);
      }
    },
    modifierElementSelection({ commit, state }, datas) {
      commit('modifierElement', datas);

      if (state.isEdition) {
        ipcRenderer.sendTo(state.wcidPage, 'modifierElementSelection', datas);
      }
    },
    selectionnerComposant({ commit, state }, chemin) {
      commit("pasDeComposantRepere");

      Vue.nextTick(() => {
        commit('cheminSelection', chemin);
        const { selection, dansFlex, dialogue } = getSelection(state.page, chemin);
        commit('selection', selection);
        commit('selectionDansFlex', dansFlex);
        if (state.dialogue !== dialogue) {
          commit('dialogue', dialogue);
        }
      });

      if (state.isPage) {
        ipcRenderer.sendTo(state.wcidEdition, 'selectionnerComposant', chemin);
      }
    },
    repererElement({ commit, state }, cle) {
      if (cle !== state.composantSelectionne) {
        commit("composantRepere", cle);

        if (state.isEdition) {
          ipcRenderer.sendTo(state.wcidPage, 'repererElement', cle)
        }
      }
    },
    nePlusRepererElement({ commit, state }) {
      if (state.composantRepere !== 0) {
        commit("pasDeComposantRepere");

        if (state.isEdition) {
          ipcRenderer.sendTo(state.wcidPage, 'nePlusRepererElement')
        }
      }
    }
  }
})
