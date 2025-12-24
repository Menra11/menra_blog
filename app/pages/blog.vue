<script setup lang="ts">
const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content");
});
</script>

<template>
  <Contaner>
    <div class="max-w-3xl mx-auto">
      <Item :data="data" :displayNumber="data!.length" />
    </div>
  </Contaner>
</template>
