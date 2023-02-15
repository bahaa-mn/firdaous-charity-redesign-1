<script setup lang="ts">
import { onMounted } from "vue";

import IconElement from "../components/IconElement.vue";
import TitledSection from "../components/TitledSection.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

function submitForm() {
  console.log("form submited !");
}
</script>

<template>
  <div class="contact w-full">
    <div class="w-full max-w-7xl h-[50vh] -z-10 overflow-hidden fixed">
      <img
        class="shadow-inner w-full h-full object-cover"
        src="https://firdaouscharity.org/wp-content/uploads/2022/05/BUREAUX-v2.jpg"
        alt=""
      />
    </div>
    <div class="bg-slate-50 mt-[47vh] rounded-t-3xl flex flex-col items-center">
      <div
        class="w-full flex flex-col lg:flex-row justify-evenly items-center bg-neutral-50 rounded-t-3xl text-teal-700"
      >
        <IconElement class="min-w-[25%]">
          <template #default>
            <font-awesome-icon
              class="w-full h-full"
              icon="fa-solid fa-building"
            />
          </template>
          <template v-slot:title> Horaires d'ouverture </template>
          <template v-slot:caption>
            du lundi au samedi <br />
            de 11h à 19h
          </template>
        </IconElement>
        <IconElement class="min-w-[25%]">
          <template #default>
            <font-awesome-icon
              class="w-full h-full"
              icon="fa-solid fa-map-marker-alt"
            />
          </template>
          <template v-slot:title> Adresse </template>
          <template v-slot:caption>
            4 rue Marcel Cachin <br />
            93400 Saint-Ouen
          </template>
        </IconElement>
        <IconElement class="min-w-[25%]">
          <template #default>
            <font-awesome-icon
              class="w-full h-full"
              icon="fa-solid fa-phone-alt"
            />
          </template>
          <template v-slot:title> Téléphone </template>
          <template v-slot:caption> 01 44 04 24 49 </template>
        </IconElement>
      </div>
      <div class="form w-[90%] bg-slate-200 rounded-3xl m-10 p-10 pt-0">
        <TitledSection>
          <template v-slot:title>Contactez nos équipes</template>
          <template v-slot:description>
            Pour toute information, n’hésitez pas à contacter notre équipe en
            remplissant le formulaire ci-dessous :
          </template>
          <template #default>
            <div class="flex flex-col justify-center items-center w-full">
              <form
                @submit.prevent="submitForm()"
                class="w-full md:w-2/3 flex flex-col items-center md:items-end"
              >
                <div
                  class="row w-full flex flex-col md:flex-row justify-between mb-5"
                >
                  <label class="block w-full md:w-[47%] mb-5 md:mb-0">
                    <span
                      class="block text-md font-medium text-slate-700 ml-2 mb-2"
                    >
                      Nom
                    </span>
                    <input
                      id="nom"
                      class="w-full rounded-lg py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-emerald-500 text-lg"
                      type="text"
                      placeholder="Nom"
                    />
                  </label>
                  <label class="block w-full md:w-[47%]">
                    <span
                      class="block text-md font-medium text-slate-700 ml-2 mb-2"
                    >
                      Prenom
                    </span>
                    <input
                      id="prenom"
                      class="w-full rounded-lg py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-emerald-500 text-lg"
                      type="text"
                      placeholder="Prenom"
                    />
                  </label>
                </div>
                <div
                  class="row w-full flex flex-col md:flex-row justify-between mb-5"
                >
                  <label class="block w-full md:w-[47%] mb-5 md:mb-0">
                    <span
                      class="block text-md font-medium text-slate-700 ml-2 mb-2"
                    >
                      Email
                    </span>
                    <input
                      id="email"
                      class="w-full rounded-lg py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-emerald-500 text-lg"
                      type="text"
                      placeholder="Email"
                    />
                  </label>
                  <label class="block w-full md:w-[47%]">
                    <span
                      class="block text-md font-medium text-slate-700 ml-2 mb-2"
                    >
                      Sujet
                    </span>
                    <input
                      id="sujet"
                      class="w-full rounded-lg py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-emerald-500 text-lg"
                      type="text"
                      placeholder="Sujet"
                    />
                  </label>
                </div>
                <label class="block w-full">
                  <span
                    class="block text-md font-medium text-slate-700 ml-2 mb-2"
                  >
                    Message
                  </span>
                  <textarea
                    id="message"
                    class="w-full resize-none rounded-lg py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-emerald-500 text-md"
                    rows="7"
                    placeholder="Message"
                  />
                </label>
                <button
                  class="mt-5 py-3 px-7 bg-emerald-500 text-slate-50 rounded-xl"
                  type="submit"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </template>
        </TitledSection>
      </div>
    </div>
  </div>
</template>
