<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterView, RouterLink, useRoute } from "vue-router";

import DonModal from "./components/DonModal.vue";

const route = useRoute();

const socials = [
  {
    icon: "fa-facebook",
    url: "https://www.facebook.com/firdaouscharityfr",
  },
  {
    icon: "fa-instagram",
    url: "https://www.instagram.com/firdaous_charity_france/",
  },
  {
    icon: "fa-youtube",
    url: "https://www.youtube.com/channel/UCrCJYEdGWG6QeBpaLDtEfqg",
  },
];

const menuEntries = [
  {
    name: "Accueil",
    to: "/",
  },
  {
    name: "Parrainage",
    to: "/parrainage",
  },
  {
    name: "Eau et Assainissement",
    to: "/water",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

const menu = ref<Element>();

const activeMenu = computed(() => {
  return menuEntries.findIndex((m) => m.to === route.path);
});

const isActive = (index: number) => activeMenu.value === index;

const showMenu = ref(false);
const toggleMenu = () => (showMenu.value = !showMenu.value);
const hideMenu = () => (showMenu.value = false);

const isModalOpen = ref(false);
const openModal = () => {
  hideMenu();
  isModalOpen.value = true;
};
const closeModal = () => (isModalOpen.value = false);
</script>

<template>
  <header
    class="fixed top-0 box-border w-full max-w-[100vw] p-0 md:px-3 text-slate-900 bg-slate-100 flex flex-col md:flex-row items-center justify-between z-20 shadow-md"
  >
    <button
      class="absolute top-0 right-0 h-20 px-5 md:hidden"
      @click="toggleMenu()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <img
      class="h-20"
      src="https://firdaouscharity.org/wp-content/uploads/2021/12/LOGO_FCF_NEW-e1640988621214.png"
      alt=""
    />
    <teleport to="#app">
      <div
        class="menu h-fit md:h-20 w-full md:w-fit flex flex-col md:flex-row items-center z-10 md:z-30 mb-5 md:mb-0 transition-all duration-200 fixed top-20 md:top-0 md:right-5 bg-slate-100 pb-5 md:p-0"
        :class="{ '-translate-y-[100vh] md:translate-y-0': !showMenu }"
        ref="menu"
      >
        <RouterLink
          class="p-5 h-12 md:h-full w-full md:w-fit hover:bg-emerald-700/[.05] border-emerald-300 transition-colors flex justify-center items-center relative before:transition-all before:w-1 before:md:w-full before:h-full before:md:h-2 before:bg-emerald-500 before:absolute before:top-0 before:left-0"
          :class="{
            'before:h-0 before:md:w-0': !isActive(ind),
          }"
          v-for="(menu, ind) in menuEntries"
          :key="menu.name + '-' + ind"
          :to="menu.to"
          @click="hideMenu"
        >
          {{ menu.name }}
        </RouterLink>
        <button
          class="menu-item bg-emerald-500 py-3 px-5 ml-3 rounded-full flex justify-center items-center hover:cursor-pointer text-white"
          @click="openModal"
        >
          Faire un don
        </button>
      </div>
    </teleport>
  </header>

  <div class="w-full flex flex-col justify-center items-center relative">
    <RouterView
      class="mt-20 w-full max-w-[100vw] md:max-w-7xl"
      v-slot="{ Component }"
    >
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </div>

  <DonModal :is-open="isModalOpen" @close="closeModal">
    <template v-slot:title> Je fais un don </template>
    <template #default>
      <iframe
        class="w-full h-full"
        src="https://www.helloasso.com/associations/firdaous-charity-france/adhesions/formulaire-faire-un-don/widget"
        frameborder="0"
      />
    </template>
  </DonModal>

  <footer
    class="h-20 py-16 pb-10 pt-20 w-full flex flex-col justify-center items-center bg-slate-50"
  >
    <p class="text-center">
      Copyright 2022 - © Firdaous Charity France | Tous droits réservés |
      <a
        class="hover:text-emerald-600"
        href="https://firdaouscharity.org/mentions-legales/"
        target="_blank"
      >
        Mentions légales
      </a>
    </p>
    <div class="social flex mt-5">
      <a
        class="p-2 flex justify-center items-center"
        v-for="s in socials"
        :key="s.icon"
        :href="s.url"
        target="_blank"
      >
        <font-awesome-icon class="h-4 w-4" :icon="'fa-brands ' + s.icon" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.route-enter-active {
  transition: all 150ms ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.route-leave-active {
  transition: all 150ms ease-in;
}
</style>
