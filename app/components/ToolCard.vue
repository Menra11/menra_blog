<template>
  <div class="flex justify-between items-center px-2 bg-white rounded-sm border border-slate-500 h-8 text-sm gap-1">
    <UIcon
      :name="name"
      class="size-4"
    />
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
const { name } = defineProps<{
  name: string
  text: string
}>()
</script>

<style>

</style>
