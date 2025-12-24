<script setup lang="ts">
const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content");
});
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <Contaner>
    <div class="max-w-3xl mx-auto">
      <ItemCard :data="data" :display-number="data?.length" />
    </div>
  </Contaner>
</template>
