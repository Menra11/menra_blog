<template>
  <div
    v-if="data"
    class="space-y-8 hover:"
  >
    <article
      v-for="item in data.slice().reverse().slice(0, displayNumber)"
      :key="item.path"
      class="bg-slate-200 p-6 rounded-lg shadow-md"
    >
      <NuxtLink :to="item.path"><h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
        <div class="flex justify-between items-center">
          <p>{{ item.description }}</p>
          <span>{{ item.date }}</span>
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
