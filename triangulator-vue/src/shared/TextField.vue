<script setup lang="ts">
defineProps<{
  id: string
  label: string
  value: string
  placeholder: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label class="font-bold text-sm" :for="id">
      {{ label }}
    </label>
    <input
      class="outline-none py-2 px-2 border-b border-black focus:border-primary focus:border-b-2"
      :placeholder="placeholder"
      :id="id"
      :value="value"
    />
  </div>
</template>
