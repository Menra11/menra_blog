<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <header
    class="mt-10 px-8 max-w-4xl mx-auto flex flex-col justify-start items-start"
  >
    <h1 class="text-xl font-bold">
      {{ page!.title }}
    </h1>
    <div>
      <span class="text-xs pr-5">{{ page!.date }}</span>
      <span class="text-xs">{{ page!.description }}</span>
    </div>
    <div class="h-1 w-full bg-slate-700 my-1"></div>
    <div class="h-0.5 w-full bg-slate-700"></div>
  </header>
  <Contaner>
    <ContentRenderer
      v-if="page"
      :value="page"
      class="flex flex-col gap-4 max-w-3xl mx-auto"
    />
  </Contaner>
</template>
