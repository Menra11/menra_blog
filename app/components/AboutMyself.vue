<template>
  <div class="size-full flex items-center justify-center">
    <div class="flex items-center justify-center">
      <img
        src="~/assets/images/02.jpg"
        alt="头像"
        class="w-48 h-48 rounded-full border-2 border-slate-500"
      >
      <div
        class="h-48 w-full gap-2 flex flex-col justify-center items-start text-lg"
      >
        <!-- 1 - 姓名和生日 -->
        <h1 class="h-8 flex items-center justify-start gap-2 animate-slide-in delay-0">
          <UIcon
            name="ic:outline-account-circle"
            class="size-6"
          /><span class="mr-5">Menra</span>
          <UIcon
            name="ic:outline-cake"
            class="size-6"
          /><span>2004-07-14</span>
        </h1>

        <!-- 2 - 喜好和位置 -->
        <span class="ml-6 h-8 flex items-center justify-start gap-2 animate-slide-in delay-1">
          <UIcon
            name="ic:baseline-favorite-border"
            class="size-6"
          /><span>Client enthusiast</span>
          <UIcon
            name="ic:outline-place"
            class="size-6"
          /><span>CN</span>/<span class="text-sm">GuanZhou</span>
        </span>

        <!-- 3 - 工具 -->
        <div class="flex items-center justify-start gap-2 ml-8 h-8 animate-slide-in delay-2">
          <UIcon
            name="ic:outline-build"
            class="size-6"
          /><span>tools:</span>
          <ToolCard
            name="vscode-icons:file-type-vscode"
            text="VSCode"
          />
          <ToolCard
            name="vscode-icons:file-type-git"
            text="Git"
          />
          <ToolCard
            name="vscode-icons:file-type-mysql"
            text="MySQL"
          />
        </div>

        <!-- 4 - 语言 -->
        <div class="flex items-center justify-start gap-2 ml-6 h-8 animate-slide-in delay-3">
          <UIcon
            name="ic:round-code"
            class="size-6"
          /><span>languages:</span>
          <ToolCard
            name="vscode-icons:file-type-tsconfig"
            text="TypeScript"
          />
          <ToolCard
            name="vscode-icons:file-type-python"
            text="Python"
          />
        </div>

        <!-- 5 - 框架 -->
        <div class="flex items-center justify-start gap-2 h-8 animate-slide-in delay-4">
          <UIcon
            name="ic:round-apps"
            class="size-6"
          /><span>frame:</span>
          <ToolCard
            name="vscode-icons:file-type-nuxt"
            text="Nuxt 4"
          />
          <ToolCard
            name="vscode-icons:file-type-vue"
            text="Vue 3"
          />
          <ToolCard
            name="vscode-icons:file-type-tauri"
            text="Tauri"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 组件逻辑
</script>

<style scoped>
@keyframes slideIn {
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slideIn 0.6s ease-out forwards;
  opacity: 0;
}

.delay-0 { animation-delay: 0.1s; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.4s; }
.delay-4 { animation-delay: 0.5s; }
</style>
