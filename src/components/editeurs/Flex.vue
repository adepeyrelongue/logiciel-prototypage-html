<template>
  <div class="row">
    <div class="col-xs-12">
      <flex-props
        v-bind="$attrs"
        @update:prop="$emit('update:prop', $event)"
        @delete:prop="$emit('delete:prop', $event)"
      ></flex-props>
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
  name: "pe-flex"
};
</script>