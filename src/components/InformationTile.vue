<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps(["icon"]);

const { icon } = toRefs(props);
</script>

<template>
  <div
    class="info-tile w-full md:w-[50%] flex flex-col items-center md:items-start py-7 px-5 md:px-20"
  >
    <div
      class="title flex flex-col md:flex-row justify-center items-center mb-3"
    >
      <font-awesome-icon
        class="h-7 w-7 bg-teal-500/[.3] rounded-full p-3 mb-5 md:mb-0 md:mr-5"
        :icon="'fa-solid ' + icon"
      />
      <h1 class="text-xl font-bold">
        <slot name="title"></slot>
      </h1>
    </div>
    <div class="description text-sm text-slate-700">
      <slot name="description"></slot>
    </div>
  </div>
</template>
