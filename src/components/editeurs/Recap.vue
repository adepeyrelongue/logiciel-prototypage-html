<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Récapitulatif</legend>
        <div class="form-group">
          <div v-if="largeur === 'xs'" class="col-xs-12 col-md-4">
            <select
              id="ib-xsDt"
              name="ib-xsDt"
              class="form-control"
              aria-labelledby="ib-xsDt-label"
              aria-required="true"
              v-model.number="xsDt_"
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
              <label id="ib-xsDt-label" class="requis">Largeur des termes</label>
            </div>
          </div>
          <div v-if="largeur === 'sm'" class="col-xs-12 col-md-4">
            <select
              id="ib-smDt"
              name="ib-smDt"
              class="form-control"
              aria-labelledby="ib-smDt-label"
              v-model.number="smDt_"
            >
              <option value="0">Hérité ({{heritageDtComputed}})</option>
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
              <label id="ib-smDt-label">Largeur des termes</label>
            </div>
          </div>
          <div v-if="largeur === 'md'" class="col-xs-12 col-md-4">
            <select
              id="ib-mdDt"
              name="ib-mdDt"
              class="form-control"
              aria-labelledby="ib-mdDt-label"
              v-model.number="mdDt_"
            >
              <option value="0">Hérité ({{heritageDtComputed}})</option>
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
              <label id="ib-mdDt-label">Largeur des termes</label>
            </div>
          </div>
          <div v-if="largeur === 'lg'" class="col-xs-12 col-md-4">
            <select
              id="ib-lgDt"
              name="ib-lgDt"
              class="form-control"
              aria-labelledby="ib-lgDt-label"
              v-model.number="lgDt_"
            >
              <option value="0">Hérité ({{heritageDtComputed}})</option>
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
              <label id="ib-lgDt-label">Largeur des termes</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
export default {
  name: "pe-recap",
  props: {
    xsDt: Number,
    smDt: Number,
    mdDt: Number,
    lgDt: Number,
    xsDd: Number,
    smDd: Number,
    mdDd: Number,
    lgDd: Number
  },
  data: function() {
    return {
      xsDt_: this.xsDt,
      smDt_: this.smDt || 0,
      mdDt_: this.mdDt || 0,
      lgDt_: this.lgDt || 0,
      xsDd_: this.xsDd,
      smDd_: this.smDd || 0,
      mdDd_: this.mdDd || 0,
      lgDd_: this.lgDd || 0
    };
  },
  computed: {
    largeur: function() {
      return this.$store.state.largeur;
    },
    heritageDtComputed: function() {
      let heritage = 0;
      switch (this.$store.state.largeur) {
        case "sm":
          heritage = this.xsDt_;
          break;
        case "md":
          heritage = this.smDt_ || this.xsDt_;
          break;
        case "lg":
          heritage = this.mdDt_ || this.smDt_ || this.xsDt_;
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
    xsDt_: function(xsDt) {
      this.maj("xsDt", xsDt);
      this.maj("xsDd", this.ddFromDt(xsDt));
    },
    smDt_: function(smDt) {
      this.maj("smDt", smDt, smDt !== 0);
      this.maj("smDd", this.ddFromDt(smDt), smDt !== 0);
    },
    mdDt_: function(mdDt) {
      this.maj("mdDt", mdDt, mdDt !== 0);
      this.maj("mdDd", this.ddFromDt(mdDt), mdDt !== 0);
    },
    lgDt_: function(lgDt) {
      this.maj("lgDt", lgDt, lgDt !== 0);
      this.maj("lgDd", this.ddFromDt(lgDt), lgDt !== 0);
    }
  },
  methods: {
    ddFromDt: function(dt) {
      if (dt === 12) {
        return 12;
      } else {
        return 12 - dt;
      }
    }
  }
};
</script>