<template>
  <h3
    :id="props.id"
    class="group relative text-xl font-bold hover:cursor-pointer"
  >
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
      class="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ease-in-out flex items-center justify-end w-6 h-6 rounded-md text-slate-600 transition-all duration-200"
    >##</a>
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
      class="inline-block"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h3)))
</script>
