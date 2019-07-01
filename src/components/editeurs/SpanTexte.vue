<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Texte</legend>
            <div class="form-group">
              <div class="col-xs-12">
                <textarea
                  id="ib-texte"
                  name="ib-texte"
                  class="form-control"
                  aria-labelledby="ib-texte-label"
                  aria-required="true"
                  v-model="texte_"
                ></textarea>
                <div class="help-block">
                  <label id="ib-texte-label" class="requis">Texte</label>
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
export default {
  name: "pe-span-texte",
  props: {
    texte: String
  },
  data: function() {
    return {
      texte_: this.texte
    };
  },
  watch: {
    texte_: function(texte) {
      this.maj("texte", texte);
    }
  }
};
</script>