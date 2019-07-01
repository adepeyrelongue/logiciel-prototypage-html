<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Groupe de boutons radio</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-legende"
                  type="text"
                  name="ib-legende"
                  class="form-control"
                  aria-labelledby="ib-legende-label"
                  aria-required="true"
                  v-model="legende_"
                >
                <div class="help-block">
                  <label id="ib-legende-label" class="requis">Légende</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="checkbox">
                  <label for="ib-sronly">
                    <input id="ib-sronly" type="checkbox" name="ib-sronly" v-model="srOnly_">Masquage accessible
                  </label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <input
                  id="ib-name"
                  type="text"
                  name="ib-name"
                  :placeholder="namePlaceholderComputed"
                  class="form-control"
                  aria-labelledby="ib-name-label"
                  v-model="name_"
                >
                <div class="help-block">
                  <label id="ib-name-label">name</label>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="checkbox">
                  <label for="ib-vertical">
                    <input id="ib-vertical" type="checkbox" name="ib-vertical" v-model="vertical_">Affichage vertical
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-10 col-xs-offset-1">
                <fieldset>
                  <legend>Élément coché par défaut</legend>
                  <div v-if="blocs.length === 0" class="bloc-vide">
                    <p>Groupe de radios vide</p>
                  </div>
                  <template v-else>
                    <div
                      class="form-group"
                      v-for="(bloc,index) in blocs"
                      :key="bloc.cle"
                      @click.prevent="majAttributChecked(index,$event)"
                    >
                      <component
                        :is="bloc.tag"
                        :id="'pe-radio-checked'+index"
                        :libelle="bloc.libelle"
                        :checked="bloc.checked"
                        :xs="12"
                        :name="name"
                      ></component>
                    </div>
                  </template>
                </fieldset>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <col-bs-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></col-bs-props>
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
import { kebabCase } from "../../utils";

export default {
  name: "pe-groupe-radios",
  props: {
    legende: String,
    name: String,
    srOnly: Boolean,
    vertical: Boolean,
    blocs: Array
  },
  data: function() {
    return {
      legende_: this.legende,
      name_: this.name || "",
      srOnly_: this.srOnly || false,
      vertical_: this.vertical || false
    };
  },
  computed: {
    namePlaceholderComputed: function() {
      return kebabCase(this.legende_);
    }
  },
  watch: {
    legende_: function(legende) {
      this.maj("legende", legende);
    },
    name_: function(name) {
      this.maj("name", name, name !== "");
    },
    srOnly_: function(srOnly) {
      this.maj("srOnly", srOnly, srOnly);
    },
    vertical_: function(vertical) {
      this.maj("vertical", vertical, vertical);
    }
  },
  methods: {
    majAttributChecked: function(nouvelIndex, event) {
      if (event !== undefined && event.target.tagName === "INPUT") {
        var ancienIndex = -1;
        for (let i = 0; i < this.blocs.length; i++) {
          if (this.blocs[i].checked) {
            ancienIndex = i;
            break;
          }
        }
        if (ancienIndex !== nouvelIndex) {
          this.majEnfant(ancienIndex, "checked", false);
          this.majEnfant(nouvelIndex, "checked", true);
        }
      }
    }
  }
};
</script>