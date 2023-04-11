<script setup lang="ts">
import Button from './shared/Button.vue'
import TextField from './shared/TextField.vue'
</script>

<template>
  <div class="flex flex-col gap-2 p-8">
    <div class="flex flex-col gap-2 p-4">
      <h1 class="text-4xl">Button</h1>

      <div class="flex gap-2">
        <Button variant="contained" color="primary"> Primary </Button>
        <Button variant="contained" color="primary" disabled> Primary </Button>
        <Button variant="contained" color="primary" loading> Primary </Button>
      </div>

      <div class="flex gap-2">
        <Button variant="outlined" color="primary"> Primary </Button>
        <Button variant="outlined" color="primary" disabled> Primary </Button>
        <Button variant="outlined" color="primary" loading> Primary </Button>
      </div>

      <div class="flex gap-2">
        <Button variant="contained" color="default"> Default </Button>
        <Button variant="contained" disabled color="default"> Default </Button>
        <Button variant="contained" loading> Default </Button>
      </div>

      <div class="flex gap-2">
        <Button variant="outlined" color="default"> Default </Button>
        <Button variant="outlined" disabled color="default"> Default </Button>
        <Button variant="outlined" loading color="default"> Default </Button>
      </div>

      <div class="flex gap-2">
        <Button variant="contained" color="danger"> Danger </Button>
        <Button variant="contained" color="danger" disabled> Danger </Button>
        <Button variant="contained" color="danger" loading> Danger </Button>
      </div>

      <div class="flex gap-2">
        <Button variant="outlined" color="danger"> Danger </Button>
        <Button variant="outlined" color="danger" disabled> Danger </Button>
        <Button variant="outlined" color="danger" loading> Danger </Button>
      </div>
    </div>
    <div class="flex flex-col gap-2 p-4">
      <h1 class="text-4xl">Text Field</h1>
      <div class="flex gap-2">
        <TextField
          class="w-full max-w-xl"
          id="text-field-demo"
          label="Name"
          value=""
          placeholder="Mathematics"
        />
      </div>
    </div>
    <div class="w-32 h-96 bg-gray-900">hello</div>
  </div>
</template>
