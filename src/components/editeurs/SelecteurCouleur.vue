<template>
  <select v-model="couleur">
    <option value="aucune">Aucune</option>
    <optgroup label="Thématiques">
      <option
        v-for="thematique in thematiques"
        :key="thematique.valeur"
        :value="thematique.valeur"
      >{{thematique.visible}}</option>
    </optgroup>
    <optgroup label="Couleurs INEA">
      <option
        v-for="couleurINEA in couleursINEA"
        :key="couleurINEA.valeur"
        :value="couleurINEA.valeur"
      >{{couleurINEA.visible}}</option>
    </optgroup>
    <optgroup label="Couleurs Bootstrap">
      <option
        v-for="couleurBS in couleursBS"
        :key="couleurBS.valeur"
        :value="couleurBS.valeur"
      >{{couleurBS.visible}}</option>
    </optgroup>
  </select>
</template>

<script>
export default {
  name: "selecteur-couleur",
  props: {
    value: String
  },
  data: function() {
    return {
      couleur: this.value || "aucune",
      couleursBS: [
        {
          visible: "Primaire",
          valeur: "primary"
        },
        {
          visible: "Secondary",
          valeur: "secondary"
        },
        {
          visible: "Succes",
          valeur: "success"
        },
        {
          visible: "Danger",
          valeur: "danger"
        },
        {
          visible: "Attention",
          valeur: "warning"
        },
        {
          visible: "Information",
          valeur: "info"
        }
      ]
    };
  },
  computed: {
    thematiques: function() {
      let thematiques = [];

      for (const thematique of this.$store.state.thematiques) {
        thematiques.push({
          visible:
            thematique.nom.charAt(0).toUpperCase() +
            thematique.nom.slice(1).replace(/[^\w]/g, " "),
          valeur: thematique.nom
        });
      }

      return thematiques;
    },
    couleursINEA: function() {
      let couleurs = [];

      for (const couleur of this.$store.state.couleurs) {
        couleurs.push({
          visible:
            couleur.nom.charAt(0).toUpperCase() +
            couleur.nom.slice(1).replace(/[^\w]/g, " "),
          valeur: couleur.nom
        });
      }

      return couleurs;
    }
  },
  watch: {
    couleur: function(couleur) {
      if (couleur === "aucune") {
        this.$emit("input", "");
      } else {
        this.$emit("input", couleur);
      }
    }
  }
};
</script>