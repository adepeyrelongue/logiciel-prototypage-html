<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Groupe de champs</legend>
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
export default {
  name: "pe-groupe-champs",
  props: {
    legende: String,
    srOnly: Boolean
  },
  data: function() {
    return {
      legende_: this.legende,
      srOnly_: this.srOnly || false
    };
  },
  watch: {
    legende_: function(legende) {
      this.maj("legende", legende);
    },
    srOnly_: function(srOnly) {
      this.maj("srOnly", srOnly, srOnly);
    }
  }
};
</script>