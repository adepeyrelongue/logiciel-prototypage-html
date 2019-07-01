export default {
  props: {
    alignSelf: {
      type: String,
      default: ""
    },
    xs: {
      type: Number,
      required: true
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    lg: {
      type: Number,
      default: 0
    },
    xsOffset: {
      type: Number,
      default: -1
    },
    smOffset: {
      type: Number,
      default: -1
    },
    mdOffset: {
      type: Number,
      default: -1
    },
    lgOffset: {
      type: Number,
      default: -1
    },
    xsOrder: {
      type: Number,
      default: 0
    },
    smOrder: {
      type: Number,
      default: 0
    },
    mdOrder: {
      type: Number,
      default: 0
    },
    lgOrder: {
      type: Number,
      default: 0
    },
  },
  computed: {
    colBsClasses: function () {
      let _css = [];

      if (this.alignSelf) {
        switch (this.alignSelf) {
          case "start":
            _css.push("align-self-start");
            break;

          case "center":
            _css.push("align-self-center");
            break;

          case "end":
            _css.push("align-self-end");
            break;

          case "stretch":
            _css.push("align-self-stretch");
            break;

          default:
            break;
        }
      }

      _css.push(`col-xs-${this.xs}`);
      if (this.xsOffset !== -1) {
        _css.push(`col-xs-offset-${this.xsOffset}`);
      }
      if (this.xsOrder !== 0) {
        _css.push(`order-xs-${this.xsOrder}`);
      }

      if (this.sm) {
        _css.push(`col-sm-${this.sm}`);
      }
      if (this.smOffset !== -1) {
        _css.push(`col-sm-offset-${this.smOffset}`);
      }
      if (this.smOrder !== 0) {
        _css.push(`order-sm-${this.smOrder}`);
      }

      if (this.md) {
        _css.push(`col-md-${this.md}`);
      }
      if (this.mdOffset !== -1) {
        _css.push(`col-md-offset-${this.mdOffset}`);
      }
      if (this.mdOrder !== 0) {
        _css.push(`order-md-${this.mdOrder}`);
      }

      if (this.lg) {
        _css.push(`col-lg-${this.lg}`);
      }
      if (this.lgOffset !== -1) {
        _css.push(`col-lg-offset-${this.lgOffset}`);
      }
      if (this.lgOrder !== 0) {
        _css.push(`order-lg-${this.lgOrder}`);
      }

      return _css;
    }
  }
};