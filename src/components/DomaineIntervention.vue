<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps(["image", "description"]);

const { image, description } = toRefs(props);
</script>

<template>
  <div class="card m-5 flex flex-col items-center">
    <div
      class="img-container relative w-[300px] h-[366px] overflow-hidden rounded-2xl shadow-xl"
    >
      <img
        class="hover:scale-105 transition-all duration-150"
        :src="image"
        alt=""
      />
      <!-- <div
        class="overlay absolute top-0 w-full h-full z-10 hover:bg-black/[.8]"
      ></div> -->
    </div>
    <p class="description w-[300px] mt-3">{{ description }}</p>
  </div>
</template>
