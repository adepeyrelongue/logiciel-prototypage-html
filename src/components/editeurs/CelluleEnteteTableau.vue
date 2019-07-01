<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12 col-md-3">
          <input
            id="ib-colspan"
            type="number"
            name="ib-colspan"
            class="form-control"
            min="0"
            aria-labelledby="ib-colspan-label"
            v-model.number="colspan_"
          >
          <div class="help-block">
            <label id="ib-colspan-label">colspan</label>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <input
            id="ib-rowspan"
            type="number"
            name="ib-rowspan"
            class="form-control"
            min="0"
            aria-labelledby="ib-rowspan-label"
            v-model.number="rowspan_"
          >
          <div class="help-block">
            <label id="ib-rowspan-label">rowspan</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-cellule-entete-tableau",
  props: {
    blocs: Array,
    colspan: Number,
    rowspan: Number
  },
  data: function() {
    return {
      rowspan_: this.rowspan || 0,
      colspan_: this.colspan || 0
    };
  },
  computed: {},
  watch: {
    colspan_: function(colspan) {
      this.maj("colspan", colspan, colspan > 0);
    },
    rowspan_: function(rowspan) {
      this.maj("rowspan", rowspan, rowspan > 0);
    }
  }
};
</script>