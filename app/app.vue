<template>
  <div class="size-full flex flex-col overflow-hidden bg-slate-100">
    <Header />
    <main class="w-full h-[calc(100vh-64px)] grow overflow-auto hide-scrollbar">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none; 
}

</style>