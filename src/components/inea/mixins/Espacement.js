export default {
  props: {
    margeHaute: {
      type: String,
      default: ""
    },
    margeDroite: {
      type: String,
      default: ""
    },
    margeBasse: {
      type: String,
      default: ""
    },
    margeGauche: {
      type: String,
      default: ""
    },
    espaceHaut: {
      type: String,
      default: ""
    },
    espaceDroit: {
      type: String,
      default: ""
    },
    espaceBas: {
      type: String,
      default: ""
    },
    espaceGauche: {
      type: String,
      default: ""
    },
    xsMargeHaute: {
      type: String,
      default: ""
    },
    xsMargeDroite: {
      type: String,
      default: ""
    },
    xsMargeBasse: {
      type: String,
      default: ""
    },
    xsMargeGauche: {
      type: String,
      default: ""
    },
    xsEspaceHaut: {
      type: String,
      default: ""
    },
    xsEspaceDroit: {
      type: String,
      default: ""
    },
    xsEspaceBas: {
      type: String,
      default: ""
    },
    xsEspaceGauche: {
      type: String,
      default: ""
    },
    smMargeHaute: {
      type: String,
      default: ""
    },
    smMargeDroite: {
      type: String,
      default: ""
    },
    smMargeBasse: {
      type: String,
      default: ""
    },
    smMargeGauche: {
      type: String,
      default: ""
    },
    smEspaceHaut: {
      type: String,
      default: ""
    },
    smEspaceDroit: {
      type: String,
      default: ""
    },
    smEspaceBas: {
      type: String,
      default: ""
    },
    smEspaceGauche: {
      type: String,
      default: ""
    },
    mdMargeHaute: {
      type: String,
      default: ""
    },
    mdMargeDroite: {
      type: String,
      default: ""
    },
    mdMargeBasse: {
      type: String,
      default: ""
    },
    mdMargeGauche: {
      type: String,
      default: ""
    },
    mdEspaceHaut: {
      type: String,
      default: ""
    },
    mdEspaceDroit: {
      type: String,
      default: ""
    },
    mdEspaceBas: {
      type: String,
      default: ""
    },
    mdEspaceGauche: {
      type: String,
      default: ""
    },
    lgMargeHaute: {
      type: String,
      default: ""
    },
    lgMargeDroite: {
      type: String,
      default: ""
    },
    lgMargeBasse: {
      type: String,
      default: ""
    },
    lgMargeGauche: {
      type: String,
      default: ""
    },
    lgEspaceHaut: {
      type: String,
      default: ""
    },
    lgEspaceDroit: {
      type: String,
      default: ""
    },
    lgEspaceBas: {
      type: String,
      default: ""
    },
    lgEspaceGauche: {
      type: String,
      default: ""
    }
  },
  computed: {
    espacementClasses: function () {
      let css = [];

      if (this.margeHaute !== "" && this.margeDroite === this.margeHaute && this.margeBasse === this.margeDroite && this.margeGauche === this.margeBasse) {
        css.push(`m-${this.margeHaute}`);
      } else {
        if (this.margeHaute !== "" && this.margeBasse === this.margeHaute) {
          css.push(`my-${this.margeHaute}`);
        } else {
          if (this.margeHaute !== "") {
            css.push(`mt-${this.margeHaute}`);
          }
          if (this.margeBasse !== "") {
            css.push(`mb-${this.margeBasse}`);
          }
        }

        if (this.margeDroite !== "" && this.margeGauche === this.margeDroite) {
          css.push(`mx-${this.margeDroite}`);
        } else {
          if (this.margeDroite !== "") {
            css.push(`mr-${this.margeDroite}`);
          }
          if (this.margeGauche !== "") {
            css.push(`ml-${this.margeGauche}`);
          }
        }
      }

      if (this.espaceHaut !== "" && this.espaceDroit === this.espaceHaut && this.espaceBas === this.espaceDroit && this.espaceGauche === this.espaceBas) {
        css.push(`p-${this.espaceHaut}`);
      } else {
        if (this.espaceHaut !== "" && this.espaceBas === this.espaceHaut) {
          css.push(`py-${this.espaceHaut}`);
        } else {
          if (this.espaceHaut !== "") {
            css.push(`pt-${this.espaceHaut}`);
          }
          if (this.espaceBas !== "") {
            css.push(`pb-${this.espaceBas}`);
          }
        }

        if (this.espaceDroit !== "" && this.espaceGauche === this.espaceDroit) {
          css.push(`px-${this.espaceDroit}`);
        } else {
          if (this.espaceDroit !== "") {
            css.push(`pr-${this.espaceDroit}`);
          }
          if (this.espaceGauche !== "") {
            css.push(`pl-${this.espaceGauche}`);
          }
        }
      }

      for (const media of ["xs", "sm", "md", "lg"]) {
        const margeHaute = this[`${media}MargeHaute`];
        const margeDroite = this[`${media}MargeDroite`];
        const margeBasse = this[`${media}MargeBasse`];
        const margeGauche = this[`${media}MargeGauche`];

        if (margeHaute !== "" && margeDroite === margeHaute && margeBasse === margeDroite && margeGauche === margeBasse) {
          css.push(`m-${media}-${margeHaute}`);
        } else {
          if (margeHaute !== "" && margeBasse === margeHaute) {
            css.push(`my-${media}-${margeHaute}`);
          } else {
            if (margeHaute !== "") {
              css.push(`mt-${media}-${margeHaute}`);
            }
            if (margeBasse !== "") {
              css.push(`mb-${media}-${margeBasse}`);
            }
          }

          if (margeDroite !== "" && margeGauche === margeDroite) {
            css.push(`mx-${media}-${margeDroite}`);
          } else {
            if (margeDroite !== "") {
              css.push(`mr-${media}-${margeDroite}`);
            }
            if (margeGauche !== "") {
              css.push(`ml-${media}-${margeGauche}`);
            }
          }
        }

        const espaceHaut = this[`${media}EspaceHaut`];
        const espaceDroit = this[`${media}EspaceDroit`];
        const espaceBas = this[`${media}EspaceBas`];
        const espaceGauche = this[`${media}EspaceGauche`];

        if (espaceHaut !== "" && espaceDroit === espaceHaut && espaceBas === espaceDroit && espaceGauche === espaceBas) {
          css.push(`p-${media}-${espaceHaut}`);
        } else {
          if (espaceHaut !== "" && espaceBas === espaceHaut) {
            css.push(`py-${media}-${espaceHaut}`);
          } else {
            if (espaceHaut !== "") {
              css.push(`pt-${media}-${espaceHaut}`);
            }
            if (espaceBas !== "") {
              css.push(`pb-${media}-${espaceBas}`);
            }
          }

          if (espaceDroit !== "" && espaceGauche === espaceDroit) {
            css.push(`px-${media}-${espaceDroit}`);
          } else {
            if (espaceDroit !== "") {
              css.push(`pr-${media}-${espaceDroit}`);
            }
            if (espaceGauche !== "") {
              css.push(`pl-${media}-${espaceGauche}`);
            }
          }
        }
      }

      return css;
    }
  }
};