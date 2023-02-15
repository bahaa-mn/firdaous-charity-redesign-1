<template>
  <div class="flex flex-col justify-start items-center mt-10 md:m-10">
    <div class="flex flex-col justify-center items-center">
      <div
        class="h-7 w-7 mb-3 md:h-14 md:w-14 flex justify-center items-center"
      >
        <slot></slot>
      </div>
      <h1 class="md:mt-5 text-xl md:text-3xl text-center font-semibold">
        <slot name="title"></slot>
      </h1>
    </div>
    <p class="mt-3 text-sm text-center font-bold text-slate-700/[.8]">
      <slot name="caption"></slot>
    </p>
  </div>
</template>
