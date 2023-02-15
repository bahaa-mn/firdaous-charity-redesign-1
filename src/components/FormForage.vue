<script setup lang="ts">
import { reactive, ref } from "vue";

import FormPersonne from "./FormPersonne.vue";
import CheckBox from "./CheckBox.vue";

function submitForm() {
  console.log("forage form submitted !");
}

const continuousOptions = [
  reactive({
    title: "J’offre de l’eau potable à 15 bénéficiaires pour tout le mois.",
    content: "Avec 15€/mois",
    model: ref(false),
  }),
  reactive({
    title: "J’offre de l’eau potable à 30 bénéficiaires pour tout le mois.",
    content: "Avec 30€/mois",
    model: ref(false),
  }),
  reactive({
    title: "J’offre de l’eau potable à 60 bénéficiaires pour tout le mois.",
    content: "Avec 60€/mois",
    model: ref(false),
  }),
];
const completeOptions = [
  reactive({
    title: "Forage manuel 5.500 €",
    content:
      "Jusqu’à 60m de profondeur, une pompe à motricité humaine INDIA, 3 ans de garantie des équipements, aménagement complet de l’installation (puits perdu, margelle…), protection du matériel par l’installation de grillage, formation d’un comité de gestion villageois (entretien, gestion…). Jusqu’à 6 000 bénéficiaires directs (village) et indirects (villages voisins).",
    model: ref(false),
  }),
  reactive({
    title: "Forage château 8.500 €",
    content:
      "Jusqu’à 90m de profondeur, un château avec cuve en inox, 4 robinets d’approvisionnement, une pompe électrique INDIA alimentée par panneaux solaires, 3 ans de garantie des équipements, protection du matériel par l’installation de grillage, dalles anti bourbier, formation d’un comité de gestion villageois (entretien, gestion…). Plus de 8 000 bénéficiaires directs (village) et indirects (villages voisins).",
    model: ref(false),
  }),
];

// watch(continuousOptions, () => {
//   console.log("check status updated 1 : ", continuousOptions[0].model);
//   console.log("check status updated 2 : ", continuousOptions[1].model);
//   console.log("check status updated 3 : ", continuousOptions[2].model);
// });
</script>

<template>
  <form
    @submit.prevent="submitForm()"
    class="w-full md:w-3/4 flex flex-col items-center md:items-start"
  >
    <h3
      class="mb-5 text-xl text-center md:text-left text-slate-900 font-semibold"
    >
      JE CONTRIBUE À UN DON CONTINU
    </h3>
    <div class="choices flex flex-col md:flex-row justify-start items-start">
      <div
        class="px-3 text-sm font-semibold flex flex-col justify-start items-start"
        v-for="(opt, ind) in continuousOptions"
        :key="'opt.title-' + ind"
      >
        <h3>{{ opt.title }}</h3>
        <CheckBox class="-ml-3 mt-1" v-model="opt.model">
          <p>{{ opt.content }}</p>
        </CheckBox>
      </div>
    </div>
    <h3
      class="mb-5 text-xl text-center md:text-left text-slate-900 font-semibold"
    >
      JE FINANCE INTÉGRALEMENT UN PUITS
    </h3>
    <div class="choices flex flex-col md:flex-row justify-start items-start">
      <div
        class="px-3 text-sm font-semibold flex flex-col justify-start items-start"
        v-for="(opt, ind) in completeOptions"
        :key="'opt.title-' + ind"
      >
        <h3>{{ opt.title }}</h3>
        <CheckBox class="-ml-3 mt-1" v-model="opt.model">
          <p>{{ opt.content }}</p>
        </CheckBox>
      </div>
    </div>
    <FormPersonne />
  </form>
</template>
