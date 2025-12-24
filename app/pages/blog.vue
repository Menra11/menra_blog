<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>

<template>
  <BlogContaner>
    <div class="max-w-3xl mx-auto">
      <ItemCard
        :data="data!"
        :display-number="data!.length"
      />
    </div>
  </BlogContaner>
</template>
