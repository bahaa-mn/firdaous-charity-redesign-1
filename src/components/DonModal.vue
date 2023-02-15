<script setup lang="ts">
import { toRefs, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({ isOpen: Boolean });
const emits = defineEmits(["close"]);

const { isOpen } = toRefs(props);
const modal = ref(null);

function closeModal() {
  emits("close");
}

onClickOutside(modal, () => {
  closeModal();
});
</script>

<template>
  <Teleport to="#modal">
    <Transition name="modal">
      <div
        class="modal-bg fixed top-0 left-0 w-screen h-screen bg-slate-900/60 flex justify-center items-center z-50"
        v-if="isOpen"
      >
        <div
          class="modal h-full md:h-[70%] w-full md:w-[70%] relative bg-slate-100 rounded-xl overflow-hidden"
          ref="modal"
        >
          <h1
            class="h-14 px-[15%] text-sm md:text-xl text-teal-700 bg-teal-100 text-center flex justify-center items-center"
          >
            <slot name="title"></slot>
          </h1>
          <div class="iframe">
            <slot></slot>
          </div>
          <div
            class="close-btn hover:cursor-pointer text-center absolute top-0 right-0 px-5 h-14 flex justify-center items-center"
            @click="closeModal"
          >
            <font-awesome-icon icon="fa-solid fa-x" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.iframe {
  height: calc(100% - 3.5rem);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 250ms ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
