<template>
  <header class="bg-blue-50 shadow-lg p-4 h-16">
    <div class="flex justify-between items-center">
      <!-- 博客名称放在左边 -->
      <div class="text-xl font-bold">
        <NuxtLink to="/">Menra's blog</NuxtLink>
      </div>
      <!-- 导航链接放在右边 -->
      <nav>
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="hover:text-blue-700">Menra's blog</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-blue-700">关于</NuxtLink></li>
          <li><NuxtLink to="/blog/v1" class="hover:text-blue-700">博客</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style>

</style>