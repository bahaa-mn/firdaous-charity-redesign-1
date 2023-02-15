<script setup lang="ts">
import { ref } from "vue";

import NumberInput from "../components/NumberInput.vue";
import FormPersonne from "./FormPersonne.vue";

function submitForm() {
  console.log("submit message !");
}

const nigerNumber = ref(0);
const yemenNumber = ref(0);
const bakNumber = ref(0); // bosnie + albanie + kosovo
</script>

<template>
  <form
    @submit.prevent="submitForm()"
    class="w-full md:w-3/4 flex flex-col items-center md:items-start"
  >
    <h3
      class="mb-5 text-xl text-center md:text-left text-slate-900 font-semibold"
    >
      JE PARRAINE MON ORPHELIN
    </h3>
    <div class="row w-full flex flex-col md:flex-row justify-between mb-5">
      <NumberInput
        label="Niger"
        price="40"
        caption="orphelin(s)."
        v-model="nigerNumber"
      />
      <NumberInput
        label="Yemen"
        price="40"
        caption="orphelin(s)."
        v-model="yemenNumber"
      />
      <NumberInput
        label="Bosnie/Albanie/Kosovo"
        price="50"
        caption="orphelin(s)."
        v-model="bakNumber"
      />
      <!-- <label class="block w-full md:w-fit mb-5 md:mb-0">
                    <span
                      class="block text-md font-medium text-slate-700 ml-2 mb-2"
                    >
                      Niger (40€/mois)
                    </span>
                    <input
                      id="n-niger"
                      class="w-1/2 rounded-lg py-1 px-3 shadow-sm border-[1px] border-emerald-900/[.5] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-lg text-black/[.7]"
                      type="number"
                      @keypress.prevent="inputKeyPressed"
                    />
                  </label> -->
    </div>
    <h3
      class="mb-5 text-xl text-center md:text-left text-slate-900 font-semibold"
    >
      JE PARRAINE MON ORPHELIN EN PALESTINE
    </h3>
    <div class="row w-full flex flex-col md:flex-row justify-start mb-5">
      <NumberInput
        class="md:max-w-[50%]"
        label="À travers le parrainage intégral"
        price="90"
        caption="orphelin(s). Frais scolaires et éducatifs ainsi que le suivi psychologique et santé à 100%, aide alimentaire pour toute la famille, formation de la maman : droits, démarches administratives, employabilité, projet professionnel."
        v-model="nigerNumber"
      />
      <NumberInput
        label="À travers le co-parrainage"
        price="45"
        caption="orphelin(s). Parlez-en à un(e) proche et parrainez un orphelin à deux !"
        v-model="yemenNumber"
      />
    </div>
    <FormPersonne />
  </form>
</template>
