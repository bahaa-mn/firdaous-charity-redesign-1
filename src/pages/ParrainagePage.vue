<script setup lang="ts">
import { onMounted } from "vue";

import TitledSection from "../components/TitledSection.vue";
import IconElement from "../components/IconElement.vue";
import ParrainageForm from "../components/FormParrainage.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

function submitForm() {
  console.log("submit message !");
}
</script>

<template>
  <div class="parrainage w-full text-emerald-600">
    <div class="landing w-full max-w-7xl h-[50vh] -z-10 overflow-hidden fixed">
      <img
        class="w-full"
        src="https://firdaouscharity.org/wp-content/uploads/2022/03/BAN-PAGE-PARRAINAGE-1.jpg"
        alt=""
      />
    </div>
    <div
      class="bg-slate-50 w-full mt-[14vh] md:mt-[35vh] pt-1 md:pt-3 rounded-t-3xl"
    >
      <div class="card">
        <TitledSection class="px-10">
          <template v-slot:title>
            <div class="w-full md:px-24 text-center">
              PARRAINER UN ORPHELIN C’EST LUI APPORTER UN SOUTIEN DANS
            </div>
          </template>
          <template #default>
            <div class="-mt-20md:px-0 flex flex-col lg:flex-row">
              <IconElement>
                <template #default>
                  <font-awesome-icon
                    class="w-full h-full"
                    icon="fa-solid fa-utensils"
                  />
                </template>
                <template v-slot:title>
                  <h1 class="text-xl">SES BESOINS PRIMAIRES</h1>
                </template>
                <template v-slot:caption>
                  L’accès aux besoins de base tels que l’alimentation, l’eau
                  potable et l’hébergement constitue l’une des priorités du
                  programme de parrainage.
                </template>
              </IconElement>
              <IconElement>
                <template #default>
                  <font-awesome-icon
                    class="w-full h-full"
                    icon="fa-solid fa-book"
                  />
                </template>
                <template v-slot:title>
                  <h1 class="text-xl">SES FRAIS DE SCOLARITÉ</h1>
                </template>
                <template v-slot:caption>
                  Parce que la scolarité est une étape importante dans la
                  construction de l’avenir de chaque enfant, le parrainage vise
                  à assurer la scolarisation des orphelins.
                </template>
              </IconElement>
              <IconElement>
                <template #default>
                  <font-awesome-icon
                    class="w-full h-full"
                    icon="fa-solid fa-car-side"
                  />
                </template>
                <template v-slot:title>
                  <h1 class="text-xl">SES FRAIS DE TRANSPORT</h1>
                </template>
                <template v-slot:caption>
                  Le parrainage vise à faciliter les déplacements nécessaires
                  dans le cadre du programme afin qu’ils ne soient pas un frein.
                </template>
              </IconElement>
              <IconElement>
                <template #default>
                  <font-awesome-icon
                    class="w-full h-full"
                    icon="fa-solid fa-stethoscope"
                  />
                </template>
                <template v-slot:title>
                  <h1 class="text-xl">SES SOINS MÉDICAUX</h1>
                </template>
                <template v-slot:caption>
                  Chaque enfant bénéficie d’un suivi médical régulier afin de
                  nous assurer de son bon état de santé physique et
                  psychologique.
                </template>
              </IconElement>
              <IconElement>
                <template #default>
                  <font-awesome-icon
                    class="w-full h-full"
                    icon="fa-solid fa-users"
                  />
                </template>
                <template v-slot:title>
                  <h1 class="text-xl">LES BESOINS DE SA FAMILLE</h1>
                </template>
                <template v-slot:caption>
                  Le parrainage d’orphelins change non seulement la vie d’un
                  enfant mais aussi celle de sa famille en leur apportant une
                  aide au quotidien.
                </template>
              </IconElement>
            </div>
          </template>
        </TitledSection>
      </div>
      <div class="videos">
        <TitledSection class="px-10 lg:px-0">
          <template v-slot:title>
            PLUS QUE DES DISCOURS, LEURS PROPRES MOTS
          </template>
          <template #default>
            <div
              class="w-full flex flex-col justify-evenly items-center lg:flex-row"
            >
              <iframe
                class="w-full lg:w-[29%] aspect-video mt-5"
                src="https://www.youtube.com/embed/v4Dat4tQ0p4"
              >
              </iframe>
              <iframe
                class="w-full lg:w-[29%] aspect-video mt-5"
                src="https://www.youtube.com/embed/KC6uqDQwEy0"
              >
              </iframe>
              <iframe
                class="w-full lg:w-[29%] aspect-video mt-5"
                src="https://www.youtube.com/embed/ZWkTS93dt-g"
              >
              </iframe>
            </div>
          </template>
        </TitledSection>
      </div>
      <div class="correspondance px-10">
        <TitledSection>
          <template v-slot:title>JE CORRESPONDS AVEC MON ORPHELIN</template>
          <template v-slot:description>
            Quelques règles de bon sens à respecter afin d’être en conformité
            avec la Convention internationale des droits de l’enfant (CIDE) de
            1989 à laquelle FCF adhère :
            <br />
            <br />
            Se limiter à un échange convivial, sans considérations politiques ou
            prosélytisme de quelque nature. Les échanges de coordonnées ne sont
            pas permis (Email, téléphone, adresse postale…) En dehors de ces
            précautions, faites-vous plaisir et tissez une nouvelle relation !
            :)
            <br />
            <br />
            Bien fraternellement.
            <br />
            Equipe Parrainage d’Orphelins
          </template>
          <template #default>
            <div
              class="card bg-slate-200 md:mx-20 p-5 md:py-14 rounded-xl shadow-xl"
            >
              <div class="flex flex-col justify-center items-center w-full">
                <form
                  @submit.prevent="submitForm()"
                  class="w-full flex flex-col items-center md:items-end px-3 md:px-20"
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
            </div>
          </template>
        </TitledSection>
      </div>
      <div class="parrainage px-10 mt-20">
        <TitledSection>
          <template v-slot:title>
            OUI ! JE VEUX REDONNER LE SOURIRE À UN ORPHELIN
          </template>
          <template #default>
            <div class="card">
              <div class="flex flex-col justify-center items-center w-full">
                <ParrainageForm />
                <div class="hadith mt-20">
                  <h1 class="text-center text-2xl font-mono">
                    « Moi et le tuteur de l’orphelin nous serons au Paradis,
                    comme ceux-ci »
                    <br />
                    et il ﷺ montra ses deux doigts : l’index et le majeur.
                    <br />
                    – Hadith –
                  </h1>
                </div>
              </div>
            </div>
          </template>
        </TitledSection>
      </div>
      <div class="contact mt-20">
        <TitledSection>
          <template v-slot:title>
            LE SERVICE PARRAINAGE À VOTRE ÉCOUTE
          </template>
          <template v-slot:description>
            <div class="w-3/4 m-auto">
              Pour plus d’informations concernant le parrainage, n’hésitez pas à
              contacter notre équipe.
            </div>
          </template>
          <template #default>
            <div class="contact w-full flex justify-center items-center">
              <RouterLink
                class="menu-item bg-emerald-500 py-5 px-7 mt-10 rounded-xl flex justify-center items-center hover:cursor-pointer text-white"
                to="/contact"
              >
                Nous contacter
              </RouterLink>
            </div>
          </template>
        </TitledSection>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
