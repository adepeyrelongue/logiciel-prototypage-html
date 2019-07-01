<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Bloc de validation</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-4">
            <select
              id="ib-justify"
              name="ib-justify"
              class="form-control"
              aria-labelledby="ib-justify-label"
              v-model="justifyContent_"
            >
              <option value>Début</option>
              <option value="center">Milieu</option>
              <option value="end">Fin</option>
            </select>
            <div class="help-block">
              <label id="ib-justify-label">Justification des boutons</label>
            </div>
          </div>
          <template v-if="blocs && blocs.length > 1">
            <div v-if="largeur === 'xs'" class="col-xs-12 col-md-4">
              <select
                id="ib-xs"
                name="ib-xs"
                class="form-control"
                aria-labelledby="ib-xs-label"
                aria-required="true"
                v-model.number="xs_"
              >
                <option value="12">100% (12)</option>
                <option value="11">92% (11)</option>
                <option value="10">83% (10)</option>
                <option value="9">3/4 (9)</option>
                <option value="8">2/3 (8)</option>
                <option value="7">58% (7)</option>
                <option value="6">1/2 (6)</option>
                <option value="5">42% (5)</option>
                <option value="4">1/3 (4)</option>
                <option value="3">1/4 (3)</option>
                <option value="2">17% (2)</option>
                <option value="1">8% (1)</option>
              </select>
              <div class="help-block">
                <label id="ib-xs-label" class="requis">Largeur du groupe de boutons</label>
              </div>
            </div>
            <div v-if="largeur === 'sm'" class="col-xs-12 col-md-4">
              <select
                id="ib-sm"
                name="ib-sm"
                class="form-control"
                aria-labelledby="ib-sm-label"
                v-model.number="sm_"
              >
                <option value="0">Hérité ({{heritage}})</option>
                <option value="12">100% (12)</option>
                <option value="11">92% (11)</option>
                <option value="10">83% (10)</option>
                <option value="9">3/4 (9)</option>
                <option value="8">2/3 (8)</option>
                <option value="7">58% (7)</option>
                <option value="6">1/2 (6)</option>
                <option value="5">42% (5)</option>
                <option value="4">1/3 (4)</option>
                <option value="3">1/4 (3)</option>
                <option value="2">17% (2)</option>
                <option value="1">8% (1)</option>
              </select>
              <div class="help-block">
                <label id="ib-sm-label">Largeur du groupe de boutons</label>
              </div>
            </div>
            <div v-if="largeur === 'md'" class="col-xs-12 col-md-4">
              <select
                id="ib-md"
                name="ib-md"
                class="form-control"
                aria-labelledby="ib-md-label"
                v-model.number="md_"
              >
                <option value="0">Hérité ({{heritage}})</option>
                <option value="12">100% (12)</option>
                <option value="11">92% (11)</option>
                <option value="10">83% (10)</option>
                <option value="9">3/4 (9)</option>
                <option value="8">2/3 (8)</option>
                <option value="7">58% (7)</option>
                <option value="6">1/2 (6)</option>
                <option value="5">42% (5)</option>
                <option value="4">1/3 (4)</option>
                <option value="3">1/4 (3)</option>
                <option value="2">17% (2)</option>
                <option value="1">8% (1)</option>
              </select>
              <div class="help-block">
                <label id="ib-md-label">Largeur du groupe de boutons</label>
              </div>
            </div>
            <div v-if="largeur === 'lg'" class="col-xs-12 col-md-4">
              <select
                id="ib-lg"
                name="ib-lg"
                class="form-control"
                aria-labelledby="ib-lg-label"
                v-model.number="lg_"
              >
                <option value="0">Hérité ({{heritage}})</option>
                <option value="12">100% (12)</option>
                <option value="11">92% (11)</option>
                <option value="10">83% (10)</option>
                <option value="9">3/4 (9)</option>
                <option value="8">2/3 (8)</option>
                <option value="7">58% (7)</option>
                <option value="6">1/2 (6)</option>
                <option value="5">42% (5)</option>
                <option value="4">1/3 (4)</option>
                <option value="3">1/4 (3)</option>
                <option value="2">17% (2)</option>
                <option value="1">8% (1)</option>
              </select>
              <div class="help-block">
                <label id="ib-lg-label">Largeur du groupe de boutons</label>
              </div>
            </div>
          </template>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "pe-bloc-validation",
  props: {
    justifyContent: String,
    blocs: Array,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number
  },
  data: function() {
    return {
      justifyContent_: this.justifyContent || "",
      xs_: this.xs || 12,
      sm_: this.sm || 0,
      md_: this.md || 0,
      lg_: this.lg || 0
    };
  },
  computed: {
    largeur: function() {
      return this.$store.state.largeur;
    },
    heritage: function() {
      let heritage = 0;
      switch (this.$store.state.largeur) {
        case "sm":
          heritage = this.xs_;
          break;

        case "md":
          heritage = this.sm_ || this.xs_;
          break;

        case "lg":
          heritage = this.md_ || this.sm_ || this.xs_;
          break;

        default:
          break;
      }

      switch (heritage) {
        case 12:
          return "100%";

        case 9:
          return "3/4";

        case 8:
          return "2/3";

        case 6:
          return "1/2";

        case 4:
          return "1/3";

        case 3:
          return "1/4";

        case 11:
          return "92%";

        case 10:
          return "83%";

        case 7:
          return "58%";

        case 5:
          return "42%";

        case 2:
          return "17%";

        case 1:
          return "8%";

        default:
          return "";
      }
    }
  },
  watch: {
    justifyContent_: function(justifyContent) {
      this.maj("justifyContent", justifyContent, justifyContent !== "");
    },
    xs_: function(xs) {
      this.maj("xs", xs, xs !== 12);
    },
    sm_: function(sm) {
      this.maj("sm", sm, sm !== 0);
    },
    md_: function(md) {
      this.maj("md", md, md !== 0);
    },
    lg_: function(lg) {
      this.maj("lg", lg, lg !== 0);
    }
  }
};
</script>