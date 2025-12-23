<script setup>
</script>


<template>
  <div>
    <FullScreenImage  class="w-full h-screen relative"/>
    <section class="container mx-auto px-4 py-12">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6">最新文章</h2>
        <div class="space-y-8">
          <article class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-medium mb-2">第一篇博客文章</h3>
            <p class="text-gray-600">这里是文章的摘要部分...</p>
            <NuxtLink to="/blog/v1" class="text-blue-500 hover:underline mt-2 inline-block">阅读更多</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
