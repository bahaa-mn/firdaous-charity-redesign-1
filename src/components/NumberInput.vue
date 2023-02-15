<script setup lang="ts">
import { toRefs, ref } from "vue";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps(["label", "caption", "price", "modelValue"]);

const { label, caption, price, modelValue } = toRefs(props);

const inputValue = ref(modelValue?.value ?? 0);

function updateValue() {
  emits("update:modelValue", inputValue.value);
}
</script>

<template>
  <div class="mb-3">
    <label class="block w-full md:w-fit">
      <span class="block text-md font-medium text-slate-700 ml-2 mb-2">
        {{ label }} <br />
        <p class="text-sm text-slate-600/[.9]">{{ price }}€/mois</p>
      </span>
      <input
        id="n-niger"
        class="w-1/2 rounded-lg py-1 px-3 shadow-sm border-[1px] border-emerald-900/[.5] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-lg text-black/[.7]"
        type="number"
        @keyup.prevent="updateValue"
        v-model="inputValue"
      />
    </label>
    <p class="mt-2 ml-2 pr-7 text-xs text-slate-800/[.7]">{{ caption }}</p>
  </div>
</template>
