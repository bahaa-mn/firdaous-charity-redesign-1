<template>
  <div class="mt-10">
    <div
      class="title mb-5 font-semibold text-xl md:text-4xl text-center after:block after:w-1/2 after:h-1 after:bg-emerald-800 after:mx-auto after:mt-5 after:md:mt-10 after:rounded-full"
    >
      <slot name="title"></slot>
    </div>
    <div class="w-full flex justify-center items-center mt-5">
      <div
        class="caption w-full md:w-2/3 text-slate-600 text-center text-sm md:text-base"
      >
        <slot name="description"></slot>
      </div>
    </div>
    <div class="w-full flex justify-center items-center mt-5">
      <div class="w-full max-w-7xl">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
