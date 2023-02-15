<script setup lang="ts">
import { onMounted } from "vue";

import ActionsCard from "../components/ActionsCard.vue";
import TitledSection from "../components/TitledSection.vue";
import DomaineIntervention from "../components/DomaineIntervention.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

const domaineIntervention = [
  {
    image:
      "https://firdaouscharity.org/wp-content/uploads/2021/04/parrainage-orphelins.jpg",
    description:
      "Les enfants sont les premières victimes des crises humanitaires c’est pourquoi, le programme de parrainage vise à apporter un soutien régulier aux orphelins afin de les accompagner vers un avenir meilleur en leur apportant les moyens nécessaires pour couvrir leurs besoins au quotidien (besoins primaires, frais de scolarité, etc.).",
  },
  {
    image: "https://firdaouscharity.org/wp-content/uploads/2021/03/eau.jpg",
    description:
      "L’eau potable reste une denrée rare pour quelques 2,1 milliards de personnes, soit 30% de la population mondiale et 4,4 milliards, soit 60 %, ne disposent pas de services d’assainissement gérés en toute sécurité1. Le forage de puits figure parmi les actes dit Sadaqa jariya2 dans la mesure où ils profitent aux bénéficiaires dans la durée. Ainsi, faciliter l’accès à l’eau potable est l’un de nos défis majeurs.",
  },
  {
    image:
      "https://firdaouscharity.org/wp-content/uploads/2021/03/secu-alimentaire.jpg",
    description:
      "820 millions de personnes souffrent encore de la faim dans le monde1. Chaque jour, c’est 25 000 personnes, dont plus de 10 000 enfants, qui meurent de la faim et des causes associées3. Firdaous Charity France œuvre auprès des populations les plus vulnérables en leur apportant un renforcement nutritionnel, notamment par la distribution de colis alimentaires adaptés à leurs besoins.",
  },
  {
    image:
      "https://firdaouscharity.org/wp-content/uploads/2021/03/education.jpg",
    description:
      "Parce que l’éducation est une étape importante dans la construction de l’avenir d’un enfant, Firdaous Charity France met un accent particulier sur l’éducation en mettant en place des projets afin de faciliter l’accès à l’éducation : financements des frais de scolarité, distribution de matériel scolaire, réhabilitation d’écoles.",
  },
  {
    image: "https://firdaouscharity.org/wp-content/uploads/2021/03/sante.jpg",
    description:
      "Améliorer et préserver la santé des populations les plus fragiles fait partie de nos objectifs essentiels. Firdaous Charity France intervient par l’approvisionnement de matériel médical dans les hôpitaux mobiles et centres de rééducation physique des camps de réfugiés en Syrie et la distribution de kits d’hygiène. Mais aussi par un soutien apporté aux jeunes mamans à travers la distribution de kits maternité dans des cliniques en Afrique.",
  },
  {
    image:
      "https://firdaouscharity.org/wp-content/uploads/2021/03/urgences.jpg",
    description:
      "Firdaous Charity France répond aux besoins des populations affectées par les situations d’urgences (catastrophes naturelles, conflits, etc.) en leur apportant une aide vitale. Chaque année c’est également plus de 30 tonnes de matériel envoyées dans les camps de réfugiés syriens (colis alimentaires, matériel médical, lait infantile, produits d’hygiène, couvertures, etc.).",
  },
];
</script>

<template>
  <div class="home relative">
    <div
      class="landing w-full md:max-w-7xl flex justify-center items-center -z-10 overflow-hidden fixed"
    >
      <img
        class="h-[50vh] w-full object-cover"
        src="https://firdaouscharity.org/wp-content/uploads/2021/03/FCF_nous_decouvrir.jpg"
      />
      <div
        class="overlay absolute w-full h-full z-10 bg-gradient-to-r from-black/[.7] via-black/[.3] to-black/[.9]"
      ></div>
      <div class="description z-20 absolute w-3/4 text-center text-neutral-100">
        <h3>
          Oui ! ma démarche est utopiste, mais une certitude résonne dans mon
          esprit : l’effort que l’on fait en commun a plus d’impact et dure plus
          longtemps que l’œuvre d’une personne seule.
        </h3>
      </div>
    </div>
    <div class="content bg-neutral-50 rounded-t-3xl mt-[48vh]">
      <div
        class="section flex flex-col md:flex-row justify-center items-center md:items-start bg-neutral-50 pt-3 rounded-t-3xl"
      >
        <div class="leading w-1/3 p-10 flex items-start">
          <img
            src="https://firdaouscharity.org/wp-content/uploads/2021/03/Logo_FCF_retina-400x137.png"
            alt=""
          />
        </div>
        <div class="content w-2/3 md:py-10 md:pr-20 text-center md:text-left">
          <h1 class="text-slate-700 mb-5 text-xl md:text-3xl">
            UNE ASSOCIATION HUMANITAIRE FRANÇAISE
          </h1>
          <p class="text-neutral-500 mb-5">
            Depuis 2004, notre association humanitaire (ONG), d’intérêt général
            à but non lucratif régie par la loi 1901, mène tout au long de
            l’année des missions de secours d’urgence, d’aide à l’enfance et à
            l’éducation, d’eau et assainissement, de sécurité alimentaire et de
            santé. Objectif donner un sourire aux plus démunis.
          </p>
          <h1 class="text-lime-600 text-3xl md:text-5xl">
            Chaque année, plus de 100.000 personnes bénéficient désormais de nos
            aides humanitaires.
          </h1>
        </div>
      </div>
      <!-- <svg
        class="w-full h-[50px]"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
        >
        <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="white" />
      </svg> -->
      <div
        class="card flex flex-col justify-center items-center md:items-start md:flex-row px-5 py-10 md:py-14 md:px-20 mx-6 my-10 bg-slate-200 rounded-3xl shadow-lg"
      >
        <img
          class="h-[400px] w-[300px] max-h-[400px] max-w-[300px] rounded-2xl object-cover"
          src="https://firdaouscharity.org/wp-content/uploads/2021/03/Nagwa_El_Tantawi.jpg"
          alt=""
        />
        <div
          class="description flex flex-col mx-5 mt-10 md:ml-16 md:mt-0 justify-between items-center md:items-end text-center md:text-left"
        >
          <p class="text-neutral-600">
            Durant ma jeunesse, le fait de voir un orphelin, pauvre et chétif,
            une personne âgée défavorisée ou un opprimé me déchirait le cœur.
            Étant moi-même orpheline, j’ai beaucoup souffert de ce manque
            affectif et financier après le décès de mon père à l’âge de 11 ans.
            À ce titre, je remarquais rapidement les personnes qui traversaient
            des périodes difficiles et cette situation a développé en moi une
            qualité essentielle à la solidarité : l’empathie. J’ai sans cesse
            l’envie de pouvoir subvenir aux besoins des gens.
            <br /><br />
            Après mes études, j’ai enfin mon premier emploi ! Ma première
            dépense est un don pour les nécessiteux. Promptement, plutôt que de
            me contenter de dons ponctuels, je m’engage sur des dons réguliers
            afin que l’impact soit durable. Malgré cet accomplissement, que je
            prépare depuis ma plus tendre enfance, je n’ai pas le sentiment
            d’atteindre la satisfaction recherchée.
          </p>
          <RouterLink
            class="bg-emerald-400 rounded-xl py-3 px-5 text-white mt-10"
            to=""
            >En savoir plus</RouterLink
          >
        </div>
      </div>
      <TitledSection class="mt-20">
        <template v-slot:title>
          <h1>VALEURS DE L’ASSOCIATION</h1>
        </template>
        <template v-slot:description>
          <p>
            Les actions menées par Firdaous Charity France sont inspirées de
            valeurs universelles comme l’entraide, le partage, l’honnêteté et le
            courage.
          </p>
        </template>
        <template #default>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <ActionsCard>
              <template #default>
                <font-awesome-icon
                  class="w-full h-full"
                  icon="fa-solid fa-people-arrows"
                />
              </template>
              <template v-slot:title> Respect et responsabilité </template>
              <template v-slot:description>
                Respecter la dignité des plus démunis est une double
                responsabilité. Cette dernière consiste à informer nos donateurs
                avec transparence de l’utilisation de leurs dons tout en
                apportant aux bénéficiaires l’aide nécessaire sans intrusion
                dans l’intimité de leur vie privée.
              </template>
            </ActionsCard>
            <ActionsCard>
              <template #default>
                <font-awesome-icon
                  class="w-full h-full"
                  icon="fa-solid fa-heart"
                />
              </template>
              <template v-slot:title> Humanité </template>
              <template v-slot:description>
                Firdaous Charity France s’engage à trouver et mettre en place
                des solutions pour soulager les souffrances des plus vulnérables
                là où elles se manifestent.
              </template>
            </ActionsCard>
            <ActionsCard>
              <template #default>
                <font-awesome-icon
                  class="w-full h-full"
                  icon="fa-solid fa-globe-africa"
                />
              </template>
              <template v-slot:title> Neutralité et indépendance </template>
              <template v-slot:description>
                Firdaous Charity France œuvre sans distinction d’ethnie, de
                genre, de religion ou d’opinions. Elle est apolitique et agit
                dans une stricte neutralité.
              </template>
            </ActionsCard>
            <ActionsCard>
              <template #default>
                <font-awesome-icon
                  class="w-full h-full"
                  icon="fa-solid fa-handshake"
                />
              </template>
              <template v-slot:title> Partenariat </template>
              <template v-slot:description>
                Travailler avec des acteurs fiables est d’une importance
                capitale pour mener à bien des projets de grande envergure.
              </template>
            </ActionsCard>
          </div>
        </template>
      </TitledSection>
      <TitledSection>
        <template v-slot:title>
          <h1>NOS DOMAINES D’INTERVENTIONS</h1>
        </template>
        <template v-slot:description>
          <p>
            Firdaous Charity France poursuit, sans relâche, son engagement
            auprès des populations les plus vulnérables en France et à
            l’international à travers plusieurs domaines
          </p>
        </template>
        <template #default>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <DomaineIntervention
              v-for="(d, i) in domaineIntervention"
              :key="i + 'domaine'"
              :image="d.image"
              :description="d.description"
            />
          </div>
        </template>
      </TitledSection>
      <TitledSection>
        <template v-slot:title>
          <h1>NOS PAYS D’INTERVENTION</h1>
        </template>
        <template #default>
          <div class="map m-10 -mt-5 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://firdaouscharity.org/wp-content/uploads/2021/12/firdaous-map.png"
              alt=""
            />
          </div>
        </template>
      </TitledSection>

      <div class=""></div>
    </div>

    <div class="w-full py-5 flex justify-center items-center">
      <RouterLink
        class="mt-5 px-16 py-6 text-slate-50 bg-slate-900 rounded-2xl"
        to="/contact"
      >
        Nous contacter
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
