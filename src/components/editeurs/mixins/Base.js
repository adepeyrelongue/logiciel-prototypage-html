export default {
  inheritAttrs: false,
  methods: {
    maj: function (prop, value, definie) {
      if (definie === undefined || definie) {
        this.$emit("update:prop", { prop: prop, value: value });
      } else {
        this.$emit("delete:prop", prop);
      }
    },
    majEnfant: function (enfant, prop, value, definie) {
      if (definie === undefined || definie) {
        this.$emit("update:propEnfant", { enfant: enfant, prop: prop, value: value });
      } else {
        this.$emit("delete:propEnfant", { enfant: enfant, prop: prop });
      }
    }
  }
};