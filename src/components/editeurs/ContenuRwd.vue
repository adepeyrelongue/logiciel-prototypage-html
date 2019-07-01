<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12">
          <fieldset>
            <legend>Contenu responsive</legend>
            <div class="form-group">
              <div class="col-xs-12 col-md-4">
                <input
                  id="ib-collapse-id"
                  type="text"
                  name="ib-collapse-id"
                  class="form-control"
                  aria-labelledby="ib-collapse-id-label"
                  v-model="collapseId_"
                >
                <div class="help-block">
                  <label id="ib-collapse-id-label">Id de contenu pliable</label>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-contenu-rwd",
  props: {
    collapseId: String
  },
  data: function() {
    return {
      collapseId_: this.collapseId || ""
    };
  },
  watch: {
    collapseId_: function(collapseId) {
      this.maj("collapseId", collapseId, collapseId !== "");
    }
  }
};
</script>