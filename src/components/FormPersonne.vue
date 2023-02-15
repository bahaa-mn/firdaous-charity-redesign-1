<script setup lang="ts">
import { ref } from "vue";

import TextInput from "./TextInput.vue";
import CheckBox from "./CheckBox.vue";
import { today } from "../utils";

const civilites = ["Mme", "M", "Mme/M", "Société", "Association"];
const selectedCivilite = ref(-1);

const isSelectedCivilite = (ind: number) => ind === selectedCivilite.value;
const selectCivilite = (ind: number) => (selectedCivilite.value = ind);

const newsletterChecked = ref(false);

const datesPrelevement = [10, 15];
const selectedDatePrelevement = ref(-1);
const isSelectedDatePrelevement = (ind: number) =>
  ind === selectedDatePrelevement.value;
const selectDatePrelevement = (ind: number) =>
  (selectedDatePrelevement.value = ind);

const mandatChecked = ref(false);

const nomInput = ref("");
const prenomInput = ref("");
</script>

<template>
  <div class="w-full flex flex-col items-center md:items-start">
    <h3
      class="mb-5 text-xl text-center md:text-left text-slate-900 font-semibold"
    >
      JE ME PRÉSENTE
    </h3>
    <div class="select">
      <label>Civilité</label>
      <div class="w-full choices flex flex-wrap">
        <div
          class="bg-slate-200 border-2 border-black/[.1] flex justify-center items-center px-5 py-2 rounded-xl mr-3 my-3 transition-all hover:cursor-pointer text-sm md:text-md"
          :class="{
            'border-emerald-500 bg-emerald-200/[.45]': isSelectedCivilite(ind),
          }"
          v-for="(c, ind) in civilites"
          :key="c + '-' + ind"
          @click="selectCivilite(ind)"
        >
          {{ c }}
        </div>
      </div>
    </div>
    <div class="row w-full flex flex-col md:flex-row justify-between">
      <TextInput class="md:w-[47%]" label="Nom" v-model="nomInput" />
      <TextInput class="md:w-[47%]" label="Prenom" v-model="prenomInput" />
    </div>
    <TextInput label="Adresse" v-model="prenomInput" />
    <div class="row w-full flex flex-col md:flex-row justify-between">
      <TextInput class="md:w-[47%]" label="Code Postal" v-model="nomInput" />
      <TextInput class="md:w-[47%]" label="Ville" v-model="prenomInput" />
    </div>

    <div class="row w-full flex flex-col md:flex-row justify-between mb-5">
      <TextInput
        class="md:w-[47%]"
        label="Telephone"
        placeholder="+33 6 12 34 56 78"
        v-model="nomInput"
      />
      <TextInput
        class="md:w-[47%]"
        label="E-mail"
        placeholder="exemple@firdaous.com"
        v-model="prenomInput"
      />
    </div>

    <CheckBox v-model="newsletterChecked">
      <p>J'accepte de recevoir des informations de Firdaous Charity France.</p>
    </CheckBox>
    <h3
      class="mb-5 text-xl text-center md:text-left text-slate-900 font-semibold"
    >
      JE CONTRIBUE ACTIVEMENT
    </h3>
    <div class="prelevement mb-5">
      <p
        class="text-md text-center md:text-left font-medium text-slate-700 mb-3"
      >
        Je choisis d'être prélevé chaque mois le
      </p>
      <div class="flex">
        <div
          class="bg-slate-200 border-2 border-black/[.1] flex justify-center items-center px-5 py-2 rounded-xl mr-3 my-3 transition-all hover:cursor-pointer text-sm md:text-md"
          :class="{
            'border-emerald-500 bg-emerald-200/[.45]':
              isSelectedDatePrelevement(ind),
          }"
          v-for="(d, ind) in datesPrelevement"
          :key="d + '-' + ind"
          @click="selectDatePrelevement(ind)"
        >
          {{ d }}
        </div>
      </div>
    </div>

    <div class="row w-full flex flex-col md:flex-row justify-between mb-5">
      <TextInput
        class="md:w-[47%]"
        label="IBAN"
        placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"
        v-model="nomInput"
      />
      <TextInput
        class="md:w-[47%]"
        label="BIC"
        placeholder="AAAABBCC123"
        v-model="prenomInput"
      />
    </div>

    <div class="file-picker mb-5 w-full">
      <p class="text-md font-medium text-slate-700">
        Merci de joindre votre RIB
      </p>
      <div
        class="picker w-full border-2 border-teal-500/30 rounded-xl overflow-hidden mt-2"
      >
        <label
          for="file"
          class="w-full h-full py-10 bg-teal-200/10 flex flex-col justify-center items-center hover:cursor-pointer"
        >
          <font-awesome-icon
            class="h-7 text-cyan-800"
            icon="fa-solid fa-file-arrow-down"
          />
        </label>
        <input
          id="file"
          type="file"
          name="rib-picker"
          @change="null"
          ref="fileInput"
        />
      </div>
    </div>
    <div class="mandat mb-5">
      <p
        class="text-md text-center md:text-left font-medium text-slate-700 mb-3"
      >
        MANDAT DE PRÉLÈVEMENT SEPA MENSUEL
      </p>
      <div class="checkbox text-slate-700 flex items-start mb-5">
        <CheckBox v-model="mandatChecked">
          <p>
            En signant ce formulaire de mandat, vous autorisez Firdaous Charity
            France à envoyer des instructions à votre banque pour débiter votre
            compte, et votre banque à débiter votre compte conformément aux
            instructions de Firdaous Charity France. Vous bénéficiez du droit
            d’être remboursé par votre banque selon les conditions décrites dans
            la convention que vous avez passée avec elle. NOM ET ADRESSE DU
            CRÉANCIER : Firdaous Charity France, 38 rue Servan 75011 Paris
            Identifiant Créancier SEPA (ICS) FR49ZZZ85CAB5
          </p>
        </CheckBox>
      </div>
      <div class="date text-slate-700 mb-5">
        <p class="text-md font-medium mb-3">Date</p>
        <p
          class="w-fit px-5 py-2 border-[1px] border-emerald-900/[.5] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-lg flex justify-center items-center rounded-lg"
          type="date"
        >
          {{ today() }}
        </p>
      </div>
      <div class="signature">
        <p class="text-md font-medium text-slate-700 mb-3">Signature</p>
        <div
          class="w-full h-32 bg-slate-200 flex justify-center items-center rounded-lg"
        >
          signez ici
        </div>
      </div>
    </div>

    <button
      class="mt-5 py-3 px-7 bg-emerald-500 text-slate-50 rounded-xl"
      type="submit"
    >
      Valider la demande
    </button>
  </div>
</template>

<style>
[type="file"] {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
  margin: auto;
}
</style>
