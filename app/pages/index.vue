<script setup lang="ts">
const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content",['description','date'])
    .order('date', 'ASC');
});
</script>

<template>
  <div class="size-full">
    <div class="h-[calc(50vh-64px)] flex items-center justify-center p-4">
      <About/>
    </div>
    <Contaner>
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6">最新文章</h2>
        <Item :data="data" :isReverse="true" />
      </div>
    </Contaner>
  </div>
</template>

<style scoped></style>
