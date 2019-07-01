<template>
  <!-- inea:menu-vertical:debut -->
  <div class="grow-self rubrique bg-particulier" @dragend="dragEnd">
    <div class="mb-1_4">Elements dans {{libelle}}</div>
    <nav class="navbar-vertical navbar-default" role="navigation" aria-label="blocs composant">
      <ul v-if="blocs.length > 0" class="nav navbar-vertical-nav">
        <template v-for="(bloc, index) in blocs">
          <li
            class="draggable-hover-position"
            :ref="'hightlight-'+index"
            :key="'hightlight-'+index"
            v-if="index===0"
            :class="classesHighlightDragOver(0)"
          ></li>
          <li
            :key="index"
            @dragstart="dragStart(index,$event)"
            @dragover.prevent="dragOver(index,$event)"
            :id="'el-liste-'+index"
            draggable="true"
          >
            <a
              href="#"
              class="flex-row align-items-center"
              @click.prevent="$emit('blocs:selection', index)"
              @mouseover="repererBloc(index)"
              @mouseleave="repererAucun"
            >
              <span class="grow-self">{{bloc}}</span>
              <button
                type="button"
                class="btn btn-default ml-1_4"
                @click.prevent.stop="$emit('blocs:dupliquer', index)"
                title="Dupliquer l'élément"
              >
                <svg
                  class="fill-blanc"
                  style="width: 18px; height: 18px;"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    d="M149.3 152h213.3v62.4l85.3-83.2L362.7 48v62.4h-256v124.8h42.7V152zm213.4 208H149.3v-62.4L64 380.8l85.3 83.2v-62.4h256V276.8h-42.7V360z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="btn btn-default ml-1_4"
                @click.prevent.stop="$emit('blocs:copier', index)"
                title="Copier l'élément"
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
                class="btn btn-default ml-1_4"
                @click.prevent.stop="$emit('blocs:couper', index)"
                title="Couper l'élément"
              >
                <svg
                  class="fill-blanc"
                  style="width: 18px; height: 18px;"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    d="M203.1 158.3c5.2-11.2 8.1-23.5 8.1-36.7 0-49.5-40.1-89.6-89.6-89.6S32 72.1 32 121.6s40.1 89.6 89.6 89.6c13.2 0 25.5-2.9 36.7-8.1l52.9 52.9-52.9 52.9c-11.2-5.2-23.5-8.1-36.7-8.1-49.5 0-89.6 40.1-89.6 89.6S72.1 480 121.6 480s89.6-40.1 89.6-89.6c0-13.2-2.9-25.5-8.1-36.7l52.9-52.9 156.8 156.8H480v-22.4L203.1 158.3zm-81.5 8.1c-24.6 0-44.8-19.9-44.8-44.8S97 76.8 121.6 76.8s44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm0 268.8c-24.6 0-44.8-19.9-44.8-44.8s20.2-44.8 44.8-44.8 44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm134.4-168c-6.3 0-11.2-4.9-11.2-11.2 0-6.3 4.9-11.2 11.2-11.2 6.3 0 11.2 4.9 11.2 11.2 0 6.3-4.9 11.2-11.2 11.2zM412.8 54.4L278.4 188.8l44.8 44.8L480 76.8V54.4h-67.2z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="btn btn-default ml-1_4"
                @click.prevent.stop="$emit('blocs:supprimer', index)"
                title="Supprimer l'élément"
              >
                <span class="dgfipicon dgfipicon-supprimer font-size-h4"></span>
              </button>
            </a>
          </li>
          <li
            class="draggable-hover-position"
            :key="'hilight-bottom-'+index"
            :class="classesHighlightDragOver(index+1)"
          ></li>
        </template>
      </ul>
      <p v-else class="h4 ml-1 font-italic">Aucun élément</p>
    </nav>
  </div>

  <!-- inea:menu-vertical:fin -->
</template>

<script>
import { composants } from "../utils";

export default {
  props: {
    composant: Object,
    libelle: String
  },
  data: function() {
    return {
      isDragging: false,
      indexOrigineDrag: -1,
      indexInsertionDrag: -1
    };
  },
  computed: {
    blocs: function() {
      return this.composant.blocs.map(bloc => composants[bloc.tag].libelle);
    }
  },
  methods: {
    repererBloc: function(index) {
      this.$store.dispatch("repererElement", this.composant.blocs[index].cle);
    },
    repererAucun: function() {
      this.$store.dispatch("nePlusRepererElement");
    },

    /* Méthodes concernant le drag and drop */

    // Affecte des attributs nécessaires au début du drag and drop
    dragStart: function(index, event) {
      this.indexOrigineDrag = index;
      this.isDragging = true;
    },
    // Détermine l'index d'insertion en fonction de la position de la souris
    // par rapport au millieu vertical du bloc que l'on survole
    dragOver(index, event) {
      var rect = event.currentTarget.getBoundingClientRect();
      var centerPosition = rect.top + rect.height / 2;
      if (event.clientY < centerPosition) {
        this.indexInsertionDrag = index;
      } else {
        this.indexInsertionDrag = index + 1;
      }
    },
    // Termine le drag and drop en modifant le tableau de blocs
    dragEnd: function() {
      // si on se situe à proximité de l'élément d'origine, on insert pas
      if (
        this.indexOrigineDrag === this.indexInsertionDrag ||
        this.indexOrigineDrag === this.indexInsertionDrag - 1
      ) {
        this.reinitialiserAttributsDragAndDrop();
        return;
      }
      // sinon on modifie le tableau de blocs
      var blocs;
      var elementInsere = this.composant.blocs[this.indexOrigineDrag];
      if (this.indexInsertionDrag < this.indexOrigineDrag) {
        blocs = [
          ...this.composant.blocs.slice(0, this.indexInsertionDrag),
          elementInsere,
          ...this.composant.blocs.slice(
            this.indexInsertionDrag,
            this.indexOrigineDrag
          ),
          ...this.composant.blocs.slice(
            this.indexOrigineDrag + 1,
            this.composant.blocs.length
          )
        ];
      } else {
        blocs = [
          ...this.composant.blocs.slice(0, this.indexOrigineDrag),
          ...this.composant.blocs.slice(
            this.indexOrigineDrag + 1,
            this.indexInsertionDrag
          ),
          elementInsere,
          ...this.composant.blocs.slice(
            this.indexInsertionDrag,
            this.composant.blocs.length
          )
        ];
      }
      this.reinitialiserAttributsDragAndDrop();
      this.$emit("blocs:drag", blocs);
    },
    //initialise les variables avant le drag and drop
    reinitialiserAttributsDragAndDrop: function() {
      this.isDragging = false;
      this.indexOrigineDrag = -1;
      this.indexInsertionDrag = -1;
    },
    //retourne une classe "active" pour afficher la ligne en surbrillance d'insertion (pendant le drag and drop)
    classesHighlightDragOver: function(indexInsertionDragPotentiel) {
      if (
        this.indexInsertionDrag !== -1 &&
        this.indexInsertionDrag === indexInsertionDragPotentiel &&
        this.isDragging
      ) {
        return "active";
      }
      return "";
    }
  }
};
</script>

<style >
#dragged {
  position: absolute;
  width: 400px;
  height: 400px;
  z-index: 999;
  background-color: white;
}
.nav > li.draggable-hover-position {
  display: none;
  margin: 0;
  height: 0;
  opacity: 0;
  margin-top: 5px;
  margin-bottom: -5px;
}

.draggable-hover-position {
  transition: height, opacity 0.6s ease-in;
}
.nav > li.draggable-hover-position.active {
  display: block;
  width: 100%;
  height: 10px;
  opacity: 0.9;
  background-color: rgb(255, 219, 101);
  margin-bottom: -5px;
}
</style>
