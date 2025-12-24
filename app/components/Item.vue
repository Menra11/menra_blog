<template>
  <div class="space-y-8 hover:" v-if="data">
    <article
      class="bg-slate-200 p-6 rounded-lg shadow-md"
      v-for="item in data.slice().reverse().slice(0,displayNumber)"
      :key="item.path"
    >
      <NuxtLink :to="item.path"
        ><h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
       <div class="flex justify-between items-center">
        <p>{{item.description}}</p>
       <span>{{ item.date }}</span>
       </div>
      </NuxtLink>
    </article>
  </div>
</template>

<script lang="ts" setup>
const { data,displayNumber } = defineProps<{
  data: any;
  displayNumber:number;
}>();
</script>

<style></style>
