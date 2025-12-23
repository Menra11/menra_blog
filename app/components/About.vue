<template>
  <div class="flex items-center justify-start">
    <div>
        <img
          src="~/assets/images/02.jpg"
          alt="头像"
          class="w-48 h-48 rounded-full"
        />
      </div>
      <div
        class="flex flex-col items-start justify-start border-l ml-10 pl-5 h-48"
      >
        <!-- 名称和介绍 -->
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Menra</h1>
        <p class="text-gray-600 font-medium">前端开发者 | 技术爱好者</p>

        <!-- 技术栈 -->
        <div class="flex flex-wrap justify-start gap-2 mt-6 max-w-2xs">
          <span
            class="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium"
            >Vue3</span
          >
          <span
            class="bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-medium"
            >TypeScript</span
          >
          <span
            class="bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-full text-sm font-medium"
            >Node.js</span
          >
          <span
            class="bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-sm font-medium"
            >Python</span
          >
          <span
            class="bg-purple-50 text-purple-600 px-3 py-1.5 rounded-full text-sm font-medium"
            >Nuxt4</span
          >
          <span
            class="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-sm font-medium"
            >Tailwind CSS</span
          >
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>