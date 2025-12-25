<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>

<template>
  <div>
    <header
      class="mt-10 max-w-3xl mx-auto flex flex-col justify-start items-start"
    >
      <h1 class="text-xl font-medium mb-2">
        {{ page!.title }}
      </h1>
      <div class="w-full flex justify-start items-center text-sm text-slate-500 gap-4">
        <span class="flex justify-center items-center gap-1">
          <UIcon
            name="ic:twotone-bookmark-border"
            class="size-4"
          />{{ page!.description }}
        </span>
        <span class="flex justify-center items-center gap-1">
          <UIcon
            name="ic:baseline-calendar-month"
            class="size-4"
          />{{ page!.date }}
        </span>
      </div>
      <div class="h-1 w-full bg-slate-700 mt-2 mb-1" />
      <div class="h-0.5 w-full bg-slate-700" />
    </header>
    <BlogContaner>
      <ContentRenderer
        v-if="page"
        :value="page"
        class="flex flex-col gap-4 max-w-3xl mx-auto"
      />
    </BlogContaner>
  </div>
</template>
