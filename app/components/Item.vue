<template>
  <div class="space-y-8 hover:" v-if="data">
    <article
      class="bg-slate-200 p-6 rounded-lg shadow-md"
      v-for="item in data.isReverse ? data.slice().reverse() : data"
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
const { data,isReverse } = defineProps<{
  data: any;
  isReverse:boolean;
}>();
</script>

<style></style>
