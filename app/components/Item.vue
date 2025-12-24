<template>
  <div class="space-y-8 hover:" v-if="data">
    <article
      class="bg-slate-200 p-6 rounded-lg shadow-md"
      v-for="item in data.slice().reverse()"
      :key="item.path"
    >
      <NuxtLink :to="item.path"
        ><h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
        <p>这里是文章的摘要部分...</p>
      </NuxtLink>
    </article>
  </div>
</template>

<script lang="ts" setup>
const { data } = defineProps<{
  data: any;
}>();
</script>

<style></style>
