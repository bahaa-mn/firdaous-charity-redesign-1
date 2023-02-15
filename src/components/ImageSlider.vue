<script setup lang="ts">
import { toRefs, ref, computed, onBeforeUnmount } from "vue";

const props = defineProps({
  images: { type: Array<string>, default: [] },
  speed: { type: Number, default: 3000 },
});

const { images, speed } = toRefs(props);

const imageContainer = ref<HTMLElement>();

const imagesCopy = ref([...images.value]);

const imagesComputed = computed(() => {
  // console.log("updated images array ", imagesCopy.value);
  return [...imagesCopy.value];
});

function changeImage() {
  imageContainer.value?.scrollTo({
    top: 0,
    left: imageContainer.value?.clientWidth,
    behavior: "smooth",
  });

  setTimeout(() => {
    console.log("update image");
    imagesCopy.value.push(imagesCopy.value.shift() ?? "");
    imageContainer.value?.scrollTo(0, 0);
  }, 500);
}

const interval = setInterval(() => {
  changeImage();
}, speed.value);

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="slider w-full p-5">
    <div
      class="image-container h-full w-full flex overflow-hidden rounded-3xl shadow-md"
      ref="imageContainer"
    >
      <img
        class="min-w-full object-cover"
        v-for="image in imagesComputed"
        :key="image"
        :src="image"
        alt=""
      />
    </div>
  </div>
</template>
