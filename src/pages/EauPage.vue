<script setup lang="ts">
import { onMounted, ref } from "vue";

import InformationTile from "../components/InformationTile.vue";
import IconElement from "../components/IconElement.vue";
import ImageSlider from "../components/ImageSlider.vue";
import FormForage from "../components/FormForage.vue";
import DonModal from "../components/DonModal.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

const impacts = [
  {
    icon: "fa-tint",
    text: "L’amélioration de la disponibilité et de la qualité de l’eau de consommation",
  },
  {
    icon: "fa-weight-hanging",
    text: "La réduction de la pénibilité du portage de l’eau, notamment pour les femmes et les enfants",
  },
  {
    icon: "fa-graduation-cap",
    text: "L’amélioration de l’assiduité des enfants à l’école",
  },
  {
    icon: "fa-stethoscope",
    text: "La réduction du taux de prévalence des maladies d’origine hydrique",
  },
  {
    icon: "fa-tractor",
    text: "La promotion des activités génératrices de revenus liées à l’eau",
  },
];

const forageSteps = [
  {
    icon: "fa-users",
    text: "Sélection du village, nombre d’habitants, distance du point d’eau le plus proche",
  },
  {
    icon: "fa-hotel",
    text: "Autorisations administratives, la mairie Le ministère de l’hydraulique",
  },
  {
    icon: "fa-map-marked-alt",
    text: "Choix de la Localisation du forage",
  },
  {
    icon: "fa-cogs",
    text: "Forage POSITIF",
  },
  {
    icon: "fa-vial",
    text: "Validation de la qualité de l’eau",
  },
  {
    icon: "fa-id-card",
    text: "Inauguration et formation du comité de gestion villageois",
  },
];

const isModalOpen = ref(false);

const openModal = () => (isModalOpen.value = true);
const closeModal = () => (isModalOpen.value = false);
</script>

<template>
  <div class="water">
    <div
      class="landing w-full md:max-w-7xl flex justify-center items-center -z-10 overflow-hidden fixed"
    >
      <img
        class="h-[50vh] w-full object-cover"
        src="https://firdaouscharity.org/wp-content/uploads/2022/03/BAN-PAGE-EAU-PUITS.jpg"
      />
      <div
        class="overlay absolute w-full h-full z-10 bg-gradient-to-r from-black/[.7] via-black/[.4] to-black/[.9]"
      ></div>
      <div class="description z-20 absolute w-3/4 text-center text-neutral-100">
        <h3 class="text-xl md:text-4xl">« Le meilleur don est l’eau. »</h3>
      </div>
    </div>
    <div
      class="bg-slate-50 mt-[47vh] rounded-t-3xl flex flex-col items-center w-full overflow-hidden"
    >
      <div class="intro w-full relative flex flex-col-reverse md:flex-row">
        <img
          class="w-full md:w-1/2 shrink-0"
          src="https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf10-800x598.jpg"
          alt=""
        />
        <div
          class="content h-auto flex flex-col justify-center p-10 bg-teal-200/30"
        >
          <h1 class="mb-5 text-xl md:text-3xl text-teal-700 font-medium">
            MANQUE D’ACCÈS À L’EAU : <br />
            VIE TRÈS DIFFICILE
          </h1>
          <p>
            Les besoins en eau sont énormes dans les pays semi-désertiques ; Les
            femmes sont sous pression car elles doivent veiller sur la famille,
            cuisiner, nettoyer et éduquer les enfants. À cela s’ajoute la
            contrainte d’aller très loin, plusieurs fois par jour, pour puiser
            de l’eau, souvent insalubre. Le risque que les enfants et animaux
            tombent dans les puits à ciel ouvert est important. Beaucoup
            (trop)d’accidents surviennent chaque année.
            <b>
              Les enfants ne vont pas a l’école parce qu’ils doivent aller
              puiser de l’eau ; un énorme frein à leur Éducation.
            </b>
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center my-5">
        <InformationTile icon="fa-child">
          <template v-slot:title> 361 000 </template>
          <template v-slot:description>
            enfants âgés de moins de cinq ans meurent chaque année de diarrhée
            en raison des maladies liées à la consommation d’eau impure (UNICEF)
          </template>
        </InformationTile>
        <InformationTile icon="fa-faucet">
          <template v-slot:title> 1 personne sur 3 </template>
          <template v-slot:description>
            dans le monde n’a pas accès à l’eau potable – UNICEF, OMS
            (Organisation Mondiale de la Santé)
          </template>
        </InformationTile>
      </div>
      <img
        class="w-full"
        src="https://firdaouscharity.org/wp-content/uploads/2021/10/eau-sale.jpg"
        alt=""
      />
      <h1
        class="w-full py-10 mb-3 text-xl md:text-3xl text-teal-700 text-center"
      >
        Depuis 2004, l’eau est au cœur des actions de Firdaous Charity France.
      </h1>
      <div
        class="flex flex-col md:flex-row justify-start items-center bg-teal-200/30 px-5 mx-5 mb-16 py-10 md:py-20 rounded-3xl shadow-lg"
      >
        <div
          class="items w-full md:w-fit flex md:flex-col shrink-0 mb-10 md:mx-20 justify-center items-start md:items-center"
        >
          <div
            class="item w-1/2 md:w-fit flex flex-col justify-center items-center"
          >
            <img
              class="h-20 md:h-40"
              src="https://firdaouscharity.org/wp-content/uploads/2021/11/robinet-200x200.png"
              alt=""
            />
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-5xl font-bold my-5">157</h1>
              <p class="font-bold text-center text-slate-900/80">
                Infrastructures hydrauliques
              </p>
            </div>
          </div>
          <div
            class="item w-1/2 md:w-fit flex flex-col justify-center items-center md:mt-10"
          >
            <img
              class="h-20 md:h-40"
              src="https://firdaouscharity.org/wp-content/uploads/2021/10/PUITS-ICONS-200x200.png"
              alt=""
            />
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-5xl font-bold my-5">54</h1>
              <p class="font-bold text-center text-slate-900/80">
                Forage de puits
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:pr-16 text-center md:text-left">
          <h1 class="mb-10 text-xl md:text-3xl text-teal-700">
            PARTICIPEZ À TOUS NOS PROJETS EAU ET D’ASSAINISSEMENT
          </h1>
          <p class="text-base">
            Firdaous Charity France a réalisé
            <b> 157 infrastructures hydrauliques</b>
            avec un financement total d’environ <b> 311 500 euros</b>, offrant
            ainsi l’accès à l’eau potable à <b> 164 000 personnes</b> dans
            différents pays.
            <br />
            <br />
            <b> 54 forages</b> ont été réalisés profitant à
            <b>148 000 bénéficiaires</b> dans plusieurs régions au <b>Niger</b>,
            au <b>Tchad</b> et au <b>Bangladesh</b> pour
            <b>les réfugiés de la minorité Rohingya de Birmanie</b>.
            <br />
            <br />
            <b>
              Fournir l’accès à l’eau potable à des populations en situation
              d’urgence humanitaire.
            </b>
            Afin de venir en aide aux réfugiés éthiopiens ayant fui leur pays,
            Firdaous Charity France a financé un ensemble complet
            d’approvisionnement en eau :
            <br />
            <br />
            Il comprend un <b>tank d’eau d’une capacité de 7 500 litres</b>, une
            canalisation allant de la source au réservoir et un point de
            distribution d’eau avec plusieurs robinets pour les bénéficiaires.
            <br />
            <br />
            Cette installation aide à fournir 15 litres d’eau potable par
            personne et par jour à 500 personnes ; 109 familles plus
            précisément.
            <br />
            <br />
            Un autre projet réalisé à Gaza a permis de mettre en place
            <b>100 réservoirs domestiques pour 100 familles</b> (environ 700
            personnes) ; quel soulagement pour eux de pouvoir stocker l’eau et
            la trouver disponible à chaque besoin ! Les actions de Firdaous
            Charity France ont été adaptées aux différents contextes des zones
            d’interventions. Un grand merci à tous nos donateurs pour ces
            merveilleuses actions !
          </p>
        </div>
      </div>

      <div class="impacts w-full">
        <h1 class="w-full mb-3 text-xl md:text-3xl text-teal-700 text-center">
          LEURS IMPACTS SOCIO-ÉCONOMIQUES CONCERNENT
        </h1>
        <div class="w-full flex flex-col md:flex-row px-5 md:px-0">
          <IconElement class="" v-for="impact in impacts" :key="impact.icon">
            <template #default>
              <font-awesome-icon
                class="w-full h-full text-teal-700"
                :icon="'fa-solid ' + impact.icon"
              />
            </template>
            <template v-slot:caption> {{ impact.text }} </template>
          </IconElement>
        </div>
      </div>

      <div class="medias w-full flex flex-col mt-10">
        <div
          class="pictures w-full overflow-hidden flex flex-col md:flex-row justify-center items-stretch"
        >
          <ImageSlider
            class="w-full md:w-1/2 aspect-video"
            :images="[
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf4.jpg',
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf3.jpg',
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf2.jpg',
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf7.jpg',
            ]"
          />
          <ImageSlider
            class="w-full md:w-1/2 aspect-video"
            :images="[
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf.jpg',
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf6.jpg',
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf5.jpg',
              'https://firdaouscharity.org/wp-content/uploads/2021/11/puits-fcf8.jpg',
            ]"
          />
        </div>
        <div class="videos flex flex-col md:flex-row w-full">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/WIjlHvwoLX8"
          >
          </iframe>
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/i7oaNH_XZhw"
          >
          </iframe>
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/VTsyWOWv-AQ"
          >
          </iframe>
        </div>
      </div>

      <div class="steps bg-teal-200/30 py-10">
        <h1 class="w-full mb-3 text-xl md:text-3xl text-teal-700 text-center">
          LES ÉTAPES DU FORAGE
        </h1>
        <div class="w-full flex flex-col md:flex-row px-5 md:px-0">
          <IconElement class="" v-for="step in forageSteps" :key="step.icon">
            <template #default>
              <font-awesome-icon
                class="w-full h-full text-teal-700"
                :icon="'fa-solid ' + step.icon"
              />
            </template>
            <template v-slot:caption> {{ step.text }} </template>
          </IconElement>
        </div>
      </div>

      <h1
        class="py-20 px-5 md:px-32 text-xl md:text-3xl text-teal-700 text-center"
      >
        L’eau ne se mérite pas, c’est un droit.
      </h1>

      <div
        class="temoignage flex flex-col md:flex-row justify-center items-center"
      >
        <div
          class="w-full md:w-1/3 md:pl-20 md:pr-10 px-5 mb-7 flex flex-col text-center md:text-left shrink-0"
        >
          <h1
            class="w-full mb-3 mdpb-10 text-xl md:text-3xl text-teal-700text-center md:text-left"
          >
            Témoignages de villageois
          </h1>
          <p>
            Chaque village a sa propre histoire ; la souffrance de la population
            est telle et si ancienne qu’il devient habituel et normal de
            l’endurer. Au moment de la visite des villages chacun raconte alors
            ses difficultés pour chercher de l’eau.
          </p>
        </div>
        <div
          class="bg-teal-200/30 p-10 md:p-16 mx-5 md:mr-16 rounded-3xl shadow-lg text-center md:text-left flex flex-col justify-end items-end"
        >
          <p class="">
            J’ai commencé à aller chercher de l’eau avec ma maman dès mon jeune
            âge en parcourant environ 4km aller-retour à chaque fois. Mon père
            m’a mariée très jeune, comme la plupart des filles ; je suis devenue
            autonome à cuisiner, à gérer mon petit foyer mais la tâche la plus
            difficile c’était d’aller chercher de l’eau car je suis faible avec
            une petite forme, ne supportant pas un bidon de 20 litres d’eau sur
            un long trajet. Malgré cela, j’étais heureuse quand j’ai découvert
            ma grossesse et que mon ventre a commencé à prendre forme ; je
            rêvais du moment où j’allais jouer avec mon enfant, l’allaiter, etc.
            J’ai décidé de marcher beaucoup plus loin pour chercher de l’eau le
            plus propre possible pour boire et ainsi lui donner une eau moins
            polluée. Alors que j’en étais au septième mois de ma grossesse, de
            retour avec un bidon de 15 litres d’eau sur ma tête, la pluie
            commença à tomber ; je me suis précipitée pour rentrer chez moi mais
            je suis tombée sur mon ventre et j’ai perdu mon enfant, dont je
            rêvais tellement », raconte Batoul en pleurant ; elle relatait son
            histoire avec une tristesse et un chagrin émouvant.
          </p>
          <p class="mt-3">- <b>Batoul</b>, 18 ans</p>
        </div>
      </div>

      <h1
        class="pt-20 pb-10 px-5 md:px-32 text-xl md:text-3xl text-teal-700 text-center"
      >
        JE PARTICIPE AU FORAGE D’UN PUITS
      </h1>

      <div
        class="px-10 py-5 bg-teal-600 text-lg md:text-xl rounded-xl text-slate-50 hover:cursor-pointer shadow-md"
        @click="openModal"
      >
        <h1>Je fais un don ponctuel</h1>
      </div>

      <div class="w-full">
        <h1
          class="pt-20 px-5 md:px-32 text-xl md:text-3xl text-teal-700 text-center"
        >
          JE PARTICIPE AU FORAGE D’UN PUITS <br />
          En faisant un don régulier
        </h1>
        <div class="px-10 mt-10">
          <div class="flex flex-col justify-center items-center w-full">
            <FormForage />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-5 flex justify-center items-center">
      <RouterLink
        class="mt-5 px-16 py-6 text-slate-50 bg-slate-900 rounded-2xl"
        to="/contact"
      >
        Nous contacter
      </RouterLink>
    </div>

    <DonModal :is-open="isModalOpen" @close="closeModal">
      <template v-slot:title>
        Je fais un don ponctuel pour le forage d'un puits
      </template>
      <template #default>
        <iframe
          class="w-full h-full"
          src="https://www.helloasso.com/associations/firdaous-charity-france/collectes/eau-et-assainissemant/widget"
          frameborder="0"
        />
      </template>
    </DonModal>
  </div>
</template>
