<template>
  <div class="row">
    <div class="col-xs-12">
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
  name: "pe-libelle-champ"
};
</script>