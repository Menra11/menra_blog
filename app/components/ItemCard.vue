<template>
  <div
    v-if="data"
    class="space-y-8 "
  >
    <article
      v-for="item in data.slice().reverse().slice(0, displayNumber)"
      :key="item.path"
      class="bg-slate-200 p-4 rounded-lg shadow-md transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"
    >
      <NuxtLink :to="item.path">
        <h1 class="text-xl font-medium mb-2">
          {{ item.title }}</h1>
        <div class="flex justify-between items-center text-sm text-slate-500">
          <span class="flex justify-center items-center gap-1">
            <UIcon
              name="ic:twotone-bookmark-border"
              class="size-4"
            />{{ item.description }}
          </span>
          <span class="flex justify-center items-center gap-1">
            <UIcon
              name="ic:baseline-calendar-month"
              class="size-4"
            />{{ item.date }}
          </span>
        </div>
      </NuxtLink>
    </article>
  </div>
</template>

<script lang="ts" setup>
import type { ContentNavigationItem } from '@nuxt/content'

const { data, displayNumber } = defineProps<{
  data: ContentNavigationItem[]
  displayNumber: number
}>()
</script>

<style></style>
