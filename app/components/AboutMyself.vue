<template>
  <div class="size-full flex items-center justify-center">
    <div class="flex flex-col md:flex-row items-start justify-start max-w-4xl">
      <!-- 容器1：头像和小屏幕前两排内容 -->
      <div class="flex md:flex-row items-center md:items-center order-1">
        <!-- 头像 -->
        <img
          src="~/assets/images/02.jpg"
          alt="头像"
          class="w-20 h-20 md:w-48 md:h-48 rounded-full border-2 border-slate-500 shrink-0"
        >

        <!-- 小屏幕前两排内容 -->
        <div class="flex flex-col ml-3 md:hidden mt-2 md:mt-0 flex-1 min-w-0">
          <h1 class="h-8 flex items-center justify-start gap-2 animate-slide-in delay-0 text-base">
            <UIcon
              name="ic:outline-account-circle"
              class="size-5"
            />
            <span class="font-medium">Menra</span>
            <UIcon
              name="ic:baseline-favorite-border"
              class="size-5"
            />
            <span>Client enthusiast</span>
          </h1>
          <span class="h-8 flex items-center justify-start gap-2 animate-slide-in delay-1 text-sm">
            <UIcon
              name="ic:outline-cake"
              class="size-4"
            />
            <span>2004-07-14</span>
            <UIcon
              name="ic:outline-place"
              class="size-4"
            />
            <span>CN / GuanZhou</span>
          </span>
        </div>
      </div>

      <!-- 容器2：所有内容 -->
      <div class="flex flex-col justify-center items-start text-lg mt-4 md:mt-0 md:ml-6 order-2">
        <!-- 大屏幕前两排内容 -->
        <div class="hidden md:block">
          <h1 class="h-8 flex items-center justify-start gap-2 md:h-8 md:mb-2 animate-slide-in delay-0">
            <UIcon
              name="ic:outline-account-circle"
              class="size-6"
            />
            <span class="font-medium">Menra</span>
            <UIcon
              name="ic:baseline-favorite-border"
              class="size-6"
            />
            <span>Client enthusiast</span>
          </h1>
          <span class="ml-6 h-8 flex items-center justify-start gap-2 md:h-8 md:mb-2 animate-slide-in delay-1">
            <UIcon
              name="ic:outline-cake"
              class="size-6"
            />
            <span>2004-07-14</span>
            <UIcon
              name="ic:outline-place"
              class="size-6"
            />
            <span>CN / GuanZhou</span>
          </span>
        </div>

        <!-- 3 - 工具 -->
        <div class="flex items-center justify-start gap-2 md:ml-8 mb-2 animate-slide-in delay-2 w-84">
          <UIcon
            name="ic:outline-build"
            class="size-6"
          /><span class="font-medium">tools:</span>
          <div class="flex items-center justify-end w-full gap-2">
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
        </div>

        <!-- 4 - 语言 -->
        <div class="flex items-center justify-start gap-2 md:ml-6 h-8 mb-2 animate-slide-in delay-3 w-84">
          <UIcon
            name="ic:round-code"
            class="size-6"
          /><span class="font-medium">languages:</span>
          <div class="flex items-center justify-end w-full gap-2">
            <ToolCard
              name="vscode-icons:file-type-tsconfig"
              text="TypeScript"
            />
            <ToolCard
              name="vscode-icons:file-type-python"
              text="Python"
            />
          </div>
        </div>

        <!-- 5 - 框架 -->
        <div class="flex items-center justify-start gap-2 h-8 animate-slide-in delay-4 w-84">
          <UIcon
            name="ic:round-apps"
            class="size-6"
          /><span class="font-medium">frame:</span>
          <div class="flex items-center justify-end w-full gap-2">
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
