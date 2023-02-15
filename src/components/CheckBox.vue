<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits(["update:modelValue"]);

const isChecked = ref(false);
function toggleCheck() {
  isChecked.value = !isChecked.value;
  emits("update:modelValue", isChecked.value);
}
</script>

<template>
  <div class="checkbox text-slate-700 flex justify-center items-start mb-5">
    <div
      class="mt-0.5 shrink-0 w-4 h-4 border-2 mx-3 border-slate-300 bg-slate-200/[.4] transition-all"
      :class="{
        'bg-emerald-300/[.7] border-emerald-600/[.7] rounded-full': isChecked,
      }"
      @click="toggleCheck"
    ></div>
    <div class="pr-7 mt-0 text-sm text-slate-800/[.7]">
      <slot> </slot>
    </div>
  </div>
</template>
