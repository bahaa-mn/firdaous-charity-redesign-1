<script setup lang="ts"></script>

<template>
  <div class="flex justify-center">
    <div
      class="card py-10 px-5 m-8 rounded-3xl max-w-lg bg-slate-200 flex flex-col items-center shadow-lg"
    >
      <div class="h-20 w-20 flex justify-center items-center">
        <slot></slot>
      </div>
      <h1 class="title mt-3 text-xl font-bold">
        <slot name="title"></slot>
      </h1>
      <p class="description mt-3 mx-3 text-center">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
