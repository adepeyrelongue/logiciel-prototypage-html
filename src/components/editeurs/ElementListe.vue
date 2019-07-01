<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Elément de liste</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-4">
                <div class="checkbox">
                  <label for="ib-formulaire">
                    <input
                      id="ib-formulaire"
                      type="checkbox"
                      name="ib-formulaire"
                      v-model="formulaire_"
                    >
                    Elément avec formulaire
                  </label>
                </div>
              </div>
              <div v-if="formulaire_" class="col-xs-12 col-md-4">
                <div class="input-group">
                  <input
                    id="ib-action"
                    type="text"
                    name="ib-action"
                    class="form-control"
                    v-model="action_"
                    aria-labelledby="ib-action-label"
                    aria-required="true"
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
                  <label id="ib-action-label" class="requis">Action (url)</label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <text-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></text-props>
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
  name: "pe-element-liste",
  props: {
    formulaire: Boolean,
    action: String
  },
  data: function() {
    return {
      formulaire_: this.formulaire || false,
      action_: this.action || ""
    };
  },
  computed: {
    dossierProto: function() {
      return this.$store.state.dossierProto;
    }
  },
  watch: {
    formulaire_: function(formulaire) {
      this.maj("formulaire", formulaire, formulaire);
    },
    action_: function(action) {
      this.maj("action", action, action !== "");
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
        this.action_ = href;
      }
    }
  }
};
</script>