<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <div class="col-xs-12"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "pe-ligne-corps-tableau",
  props: {
    blocs: Array,
    colspan: Number,
    rowspan: Number
  }
};
</script>