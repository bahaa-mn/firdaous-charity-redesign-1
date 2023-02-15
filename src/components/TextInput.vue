<script setup lang="ts">
import { toRefs, ref, computed } from "vue";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps<{
  label: string;
  placeholder?: string;
  modelValue: string;
}>();

const { label, modelValue } = toRefs(props);

const lowerLabel = computed(() => label?.value.toLowerCase().replace(" ", "-"));

const inputValue = ref(modelValue?.value ?? 0);

function updateValue() {
  emits("update:modelValue", inputValue.value);
}
</script>

<template>
  <label class="block w-full mb-5">
    <span
      class="block text-sm md:text-base font-medium text-slate-700 ml-2 mb-1"
    >
      {{ label }}
    </span>
    <input
      :id="lowerLabel"
      class="w-full rounded-lg py-1 px-3 shadow-sm border-[1px] border-emerald-900/[.5] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm md:text-base"
      type="text"
      :placeholder="placeholder ?? label"
      @keyup.prevent="updateValue"
      v-model="inputValue"
    />
  </label>
</template>
