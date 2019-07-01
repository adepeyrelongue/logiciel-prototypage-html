<template>
  <div class="form-group">
    <div class="col-xs-12">
      <fieldset>
        <legend>Propriétés responsive</legend>
        <div class="form-group">
          <div class="col-xs-12 col-md-3">
            <select
              id="ib-alignement"
              name="ib-alignement"
              class="form-control"
              aria-labelledby="ib-alignement-label"
              v-model="alignSelf_"
            >
              <option value="defaut">Défaut</option>
              <option value="start">Haut</option>
              <option value="center">Milieu</option>
              <option value="end">Bas</option>
              <option value="stretch">Etiré</option>
            </select>
            <div class="help-block">
              <label id="ib-alignement-label">Alignement</label>
            </div>
          </div>
          <div v-if="largeur === 'xs'" class="col-xs-12 col-md-3">
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
              <label id="ib-xs-label" class="requis">Largeur</label>
            </div>
          </div>
          <div v-if="largeur === 'sm'" class="col-xs-12 col-md-3">
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
              <label id="ib-sm-label">Largeur</label>
            </div>
          </div>
          <div v-if="largeur === 'md'" class="col-xs-12 col-md-3">
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
              <label id="ib-md-label">Largeur</label>
            </div>
          </div>
          <div v-if="largeur === 'lg'" class="col-xs-12 col-md-3">
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
              <label id="ib-lg-label">Largeur</label>
            </div>
          </div>

          <div v-if="largeur === 'xs'" class="col-xs-12 col-md-3">
            <select
              id="ib-xs-offset"
              name="ib-xs-offset"
              class="form-control"
              aria-labelledby="ib-xs-offset-label"
              v-model.number="xsOffset_"
            >
              <option value="-1">Aucun</option>
              <option value="1">8% (1)</option>
              <option value="2">17% (2)</option>
              <option value="3">1/4 (3)</option>
              <option value="4">1/3 (4)</option>
              <option value="5">42% (5)</option>
              <option value="6">1/2 (6)</option>
              <option value="7">58% (7)</option>
              <option value="8">2/3 (8)</option>
              <option value="9">3/4 (9)</option>
              <option value="10">83% (10)</option>
              <option value="11">92% (11)</option>
            </select>
            <div class="help-block">
              <label id="ib-xs-offset-label">Décalage</label>
            </div>
          </div>
          <div v-if="largeur === 'sm'" class="col-xs-12 col-md-3">
            <select
              id="ib-sm-offset"
              name="ib-sm-offset"
              class="form-control"
              aria-labelledby="ib-sm-offset-label"
              v-model.number="smOffset_"
            >
              <option value="-1">Hérité ({{heritageOffset}})</option>
              <option value="0">Aucun</option>
              <option value="1">8% (1)</option>
              <option value="2">17% (2)</option>
              <option value="3">1/4 (3)</option>
              <option value="4">1/3 (4)</option>
              <option value="5">42% (5)</option>
              <option value="6">1/2 (6)</option>
              <option value="7">58% (7)</option>
              <option value="8">2/3 (8)</option>
              <option value="9">3/4 (9)</option>
              <option value="10">83% (10)</option>
              <option value="11">92% (11)</option>
            </select>
            <div class="help-block">
              <label id="ib-sm-offset-label">Décalage</label>
            </div>
          </div>
          <div v-if="largeur === 'md'" class="col-xs-12 col-md-3">
            <select
              id="ib-md-offset"
              name="ib-md-offset"
              class="form-control"
              aria-labelledby="ib-md-offset-label"
              v-model.number="mdOffset_"
            >
              <option value="-1">Hérité ({{heritageOffset}})</option>
              <option value="0">Aucun</option>
              <option value="1">8% (1)</option>
              <option value="2">17% (2)</option>
              <option value="3">1/4 (3)</option>
              <option value="4">1/3 (4)</option>
              <option value="5">42% (5)</option>
              <option value="6">1/2 (6)</option>
              <option value="7">58% (7)</option>
              <option value="8">2/3 (8)</option>
              <option value="9">3/4 (9)</option>
              <option value="10">83% (10)</option>
              <option value="11">92% (11)</option>
            </select>
            <div class="help-block">
              <label id="ib-md-offset-label">Décalage</label>
            </div>
          </div>
          <div v-if="largeur === 'lg'" class="col-xs-12 col-md-3">
            <select
              id="ib-lg-offset"
              name="ib-lg-offset"
              class="form-control"
              aria-labelledby="ib-lg-offset-label"
              v-model.number="lgOffset_"
            >
              <option value="-1">Hérité ({{heritageOffset}})</option>
              <option value="0">Aucun</option>
              <option value="1">8% (1)</option>
              <option value="2">17% (2)</option>
              <option value="3">1/4 (3)</option>
              <option value="4">1/3 (4)</option>
              <option value="5">42% (5)</option>
              <option value="6">1/2 (6)</option>
              <option value="7">58% (7)</option>
              <option value="8">2/3 (8)</option>
              <option value="9">3/4 (9)</option>
              <option value="10">83% (10)</option>
              <option value="11">92% (11)</option>
            </select>
            <div class="help-block">
              <label id="ib-lg-offset-label">Décalage</label>
            </div>
          </div>
          <div v-if="largeur === 'xs'" class="col-xs-12 col-md-3">
            <select
              id="ib-xs-order"
              name="ib-xs-order"
              class="form-control"
              aria-labelledby="ib-xs-order-label"
              v-model.number="xsOrder_"
            >
              <option value="0">Naturel</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <div class="help-block">
              <label id="ib-xs-order-label">Ordre</label>
            </div>
          </div>
          <div v-if="largeur === 'sm'" class="col-xs-12 col-md-3">
            <select
              id="ib-sm-order"
              name="ib-sm-order"
              class="form-control"
              aria-labelledby="ib-sm-order-label"
              v-model.number="smOrder_"
            >
              <option value="0">Hérité ({{heritageOrder}})</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <div class="help-block">
              <label id="ib-sm-order-label">Ordre</label>
            </div>
          </div>
          <div v-if="largeur === 'md'" class="col-xs-12 col-md-3">
            <select
              id="ib-md-order"
              name="ib-md-order"
              class="form-control"
              aria-labelledby="ib-md-order-label"
              v-model.number="mdOrder_"
            >
              <option value="0">Hérité ({{heritageOrder}})</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <div class="help-block">
              <label id="ib-md-order-label">Ordre</label>
            </div>
          </div>
          <div v-if="largeur === 'lg'" class="col-xs-12 col-md-3">
            <select
              id="ib-lg-order"
              name="ib-lg-order"
              class="form-control"
              aria-labelledby="ib-lg-order-label"
              v-model.number="lgOrder_"
            >
              <option value="0">Hérité ({{heritageOrder}})</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <div class="help-block">
              <label id="ib-lg-order-label">Ordre</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "col-bs-props",
  props: {
    alignSelf: String,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xsOffset: Number,
    smOffset: Number,
    mdOffset: Number,
    lgOffset: Number,
    xsOrder: Number,
    smOrder: Number,
    mdOrder: Number,
    lgOrder: Number
  },
  data: function() {
    return {
      alignSelf_: this.alignSelf || "defaut",
      xs_: this.xs,
      sm_: this.sm || 0,
      md_: this.md || 0,
      lg_: this.lg || 0,
      xsOffset_: this.xsOffset === undefined ? -1 : this.xsOffset,
      smOffset_: this.smOffset === undefined ? -1 : this.smOffset,
      mdOffset_: this.mdOffset === undefined ? -1 : this.mdOffset,
      lgOffset_: this.lgOffset === undefined ? -1 : this.lgOffset,
      xsOrder_: this.xsOrder || 0,
      smOrder_: this.smOrder || 0,
      mdOrder_: this.mdOrder || 0,
      lgOrder_: this.lgOrder || 0
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
    },
    heritageOffset: function() {
      let heritage = "";
      switch (this.$store.state.largeur) {
        case "sm":
          if (this.xsOffset_ !== -1) {
            heritage = this.xsOffset_;
          } else {
            heritage = "aucun";
          }
          break;

        case "md":
          if (this.smOffset_ !== -1) {
            heritage = this.smOffset_;
          } else if (this.xsOffset_ !== -1) {
            heritage = this.xsOffset_;
          } else {
            heritage = "aucun";
          }
          break;

        case "lg":
          if (this.mdOffset_ !== -1) {
            heritage = this.mdOffset_;
          } else if (this.smOffset_ !== -1) {
            heritage = this.smOffset_;
          } else if (this.xsOffset_ !== -1) {
            heritage = this.xsOffset_;
          } else {
            heritage = "aucun";
          }
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
          return heritage;
      }
    },
    heritageOrder: function() {
      let heritage = "";
      switch (this.$store.state.largeur) {
        case "sm":
          if (this.xsOrder_ !== 0) {
            heritage = this.xsOrder_;
          } else {
            heritage = "naturel";
          }
          break;

        case "md":
          if (this.smOrder_ !== 0) {
            heritage = this.smOrder_;
          } else if (this.xsOrder_ !== 0) {
            heritage = this.xsOrder_;
          } else {
            heritage = "naturel";
          }
          break;

        case "lg":
          if (this.mdOrder_ !== 0) {
            heritage = this.mdOrder_;
          } else if (this.smOrder_ !== 0) {
            heritage = this.smOrder_;
          } else if (this.xsOrder_ !== 0) {
            heritage = this.xsOrder_;
          } else {
            heritage = "naturel";
          }
          break;

        default:
          break;
      }

      return heritage;
    }
  },
  watch: {
    alignSelf_: function(alignSelf) {
      this.maj("alignSelf", alignSelf, alignSelf !== "defaut");
    },
    xs_: function(xs) {
      this.maj("xs", xs);
    },
    sm_: function(sm) {
      this.maj("sm", sm, sm !== 0);
    },
    md_: function(md) {
      this.maj("md", md, md !== 0);
    },
    lg_: function(lg) {
      this.maj("lg", lg, lg !== 0);
    },
    xsOffset_: function(offset) {
      this.maj("xsOffset", offset, offset !== -1);
    },
    smOffset_: function(offset) {
      this.maj("smOffset", offset, offset !== -1);
    },
    mdOffset_: function(offset) {
      this.maj("mdOffset", offset, offset !== -1);
    },
    lgOffset_: function(offset) {
      this.maj("lgOffset", offset, offset !== -1);
    },
    xsOrder_: function(xsOrder) {
      this.maj("xsOrder", xsOrder, xsOrder !== 0);
    },
    smOrder_: function(smOrder) {
      this.maj("smOrder", smOrder, smOrder !== 0);
    },
    mdOrder_: function(mdOrder) {
      this.maj("mdOrder", mdOrder, mdOrder !== 0);
    },
    lgOrder_: function(lgOrder) {
      this.maj("lgOrder", lgOrder, lgOrder !== 0);
    }
  }
};
</script>