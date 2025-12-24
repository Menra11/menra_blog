<template>
  <pre class="bg-slate-300 rounded-lg shadow-md flex flex-col justify-start items-start" :class="$props.class">
    <div class="h-8 px-5 flex justify-center items-center text-slate-600"><span>{{ $props.language }}</span></div>
    <div class="bg-slate-200 w-full rounded-b-lg flex flex-col justify-start p-5">
      <slot />
    </div>
  </pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

<style>
pre code .line {
  display: block;
}
</style>
