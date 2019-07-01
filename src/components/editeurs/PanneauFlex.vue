<template>
  <div class="row">
    <div class="col-xs-12">
      <flex-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></flex-props>
      <bloc-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></bloc-props>
      <div class="form-group">
        <div class="col-xs-6">
          <espacement
            v-bind="$attrs"
            @update:prop="$emit('update:prop', $event)"
            @delete:prop="$emit('delete:prop', $event)"
          ></espacement>
        </div>
        <div class="col-xs-6">
          <bordure
            v-bind="$attrs"
            @update:prop="$emit('update:prop', $event)"
            @delete:prop="$emit('delete:prop', $event)"
          ></bordure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-panneau-flex"
};
</script>