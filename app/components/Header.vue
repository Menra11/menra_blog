<template>
  <header class="p-4 h-16">
    <div class="flex justify-between items-center">
      <div class="text-xl font-bold">
        <NuxtLink to="/">Menra's blog</NuxtLink>
      </div>
      <!-- 导航链接放在右边 -->
      <nav>
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="hover:text-blue-700">Menra's blog</NuxtLink></li>
          <li><NuxtLink to="/blog" class="hover:text-blue-700">文章</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style>

</style>