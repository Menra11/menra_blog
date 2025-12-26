<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content', ['description', 'date'])
    .order('date', 'ASC')
})
</script>

<template>
  <div class="size-full">
    <BlogContaner>
      <div class="min-h-[calc(50vh-64px)] max-w-3xl flex items-center justify-center pb-8 mx-auto border-b-2 border-slate-700 mb-8">
        <AboutMyself />
      </div>

      <div class="max-w-3xl mx-auto">
        <ItemCard
          :data="data!"
          :display-number="3"
        />
      </div>
    </BlogContaner>
  </div>
</template>

<style scoped></style>
