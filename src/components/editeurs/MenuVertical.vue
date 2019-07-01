<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Menu vertical</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <input
              id="ib-aria-label"
              type="text"
              name="ib-aria-label"
              class="form-control"
              aria-labelledby="ib-aria-label-label"
              aria-required="true"
              v-model="ariaLabel_"
            >
            <div class="help-block">
              <label id="ib-aria-label-label" class="requis">Texte accessible</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
export default {
  name: "pe-menu-vertical",
  props: {
    ariaLabel: String
  },
  data: function() {
    return {
      ariaLabel_: this.ariaLabel
    };
  },
  watch: {
    ariaLabel_: function(ariaLabel) {
      this.maj("ariaLabel", ariaLabel);
    }
  }
};
</script>