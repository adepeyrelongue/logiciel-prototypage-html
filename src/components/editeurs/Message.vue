<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Message</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-typemsg"
              name="ib-typemsg"
              class="form-control"
              aria-labelledby="ib-typemsg-label"
              aria-required="true"
              v-model="typeMessage_"
            >
              <option value="info">Information</option>
              <option value="success">Confirmation</option>
              <option value="warning">Avertissement</option>
              <option value="danger">Erreur</option>
            </select>
            <div class="help-block">
              <label id="ib-typemsg-label" class="requis">Type de message</label>
            </div>
          </div>
        </div>
        <div v-if="typeMessage_ === 'danger'" class="form-group">
          <div class="col-xs-12">
            <fieldset>
              <legend>
                Champs en erreur
                <button
                  @click.prevent="ajouterLien"
                  type="button"
                  class="btn btn-blanc"
                  title="Ajouter un champ"
                >
                  <span class="glyphicon glyphicon-plus-sign font-size-16"></span>
                </button>
              </legend>
              <div v-for="(lien, index) in liensListe_" :key="lien.cle" class="form-group">
                <div class="col-xs-12 col-md-2">
                  <button
                    v-if="index>0"
                    type="button"
                    class="btn btn-default"
                    title="Remonter"
                    @click.prevent="remonter(index)"
                  >
                    <span class="glyphicon glyphicon-chevron-up font-size-16"></span>
                  </button>
                  <button
                    v-if="index < liensListe_.length - 1"
                    type="button"
                    class="btn btn-default ml-1_8"
                    title="Descendre"
                    @click.prevent="descendre(index)"
                  >
                    <span class="glyphicon glyphicon-chevron-down font-size-16"></span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-default ml-1_8"
                    title="Retirer"
                    @click.prevent="supprimer(index)"
                  >
                    <span class="dgfipicon dgfipicon-supprimer font-size-16"></span>
                  </button>
                </div>
                <div class="col-xs-12 col-md-3">
                  <input
                    :id="'ib-texte-'+index"
                    type="text"
                    :name="'ib-texte-'+index"
                    class="form-control"
                    :aria-labelledby="'ib-texte-label-'+index"
                    aria-required="true"
                    v-model="lien.texte"
                  >
                  <div class="help-block">
                    <label :id="'ib-texte-label-'+index" class="requis">Nom du champ</label>
                  </div>
                </div>
                <div class="col-xs-12 col-md-3">
                  <input
                    :id="'ib-target-'+index"
                    type="text"
                    :name="'ib-target-'+index"
                    :placeholder="targetPlaceholder(lien)"
                    class="form-control"
                    :aria-labelledby="'ib-target-label-'+index"
                    v-model="lien.target"
                  >
                  <div class="help-block">
                    <label :id="'ib-target-label-'+index">Id du champ</label>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <input
                    :id="'ib-title-'+index"
                    type="text"
                    :name="'ib-title-'+index"
                    :placeholder="titlePlaceholder(lien)"
                    class="form-control"
                    :aria-labelledby="'ib-title-label-'+index"
                    v-model="lien.title"
                  >
                  <div class="help-block">
                    <label :id="'ib-title-label-'+index">Infobulle</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
import { kebabCase } from "../../utils";

let cle = 0;

export default {
  name: "pe-message",
  props: {
    typeMessage: String,
    liensListe: Array
  },
  data: function() {
    return {
      typeMessage_: this.typeMessage,
      liensListe_: this.liensListe
        ? this.liensListe.map(lien => {
            return {
              cle: cle++,
              texte: lien.texte,
              target: lien.target,
              title: lien.title
            };
          })
        : []
    };
  },
  watch: {
    typeMessage_: function(typeMessage) {
      this.maj("typeMessage", typeMessage);
    },
    liensListe_: {
      deep: true,
      handler: function(liensListe) {
        this.maj("liensListe", this.liens(liensListe), liensListe.length > 0);
      }
    }
  },
  methods: {
    targetPlaceholder: function(lien) {
      return kebabCase(lien.texte);
    },
    titlePlaceholder: function(lien) {
      return lien.texte + " : corriger cette information";
    },
    liens: function(liensListe) {
      return liensListe.map(lien => {
        return { texte: lien.texte, target: lien.target, title: lien.title };
      });
    },
    ajouterLien: function() {
      this.liensListe_.push({
        cle: cle++,
        texte: "Champ",
        target: "",
        title: ""
      });
    },
    descendre(index) {
      let liensListe = [
        ...this.liensListe_.slice(0, index),
        this.liensListe_[index + 1],
        this.liensListe_[index],
        ...this.liensListe_.slice(index + 2)
      ];
      this.maj("liensListe", this.liens(liensListe), liensListe.length > 0);
      this.liensListe_ = liensListe;
    },
    remonter(index) {
      let liensListe = [
        ...this.liensListe_.slice(0, index - 1),
        this.liensListe_[index],
        this.liensListe_[index - 1],
        ...this.liensListe_.slice(index + 1)
      ];
      this.maj("liensListe", this.liens(liensListe), liensListe.length > 0);
      this.liensListe_ = liensListe;
    },
    supprimer: function(index) {
      let liensListe = [
        ...this.liensListe_.slice(0, index),
        ...this.liensListe_.slice(index + 1)
      ];
      this.maj("liensListe", this.liens(liensListe), liensListe.length > 0);
      this.liensListe_ = liensListe;
    }
  }
};
</script>