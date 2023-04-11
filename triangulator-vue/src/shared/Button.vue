<script lang="ts" setup>
import Spinner from './Spinner.vue'
import { defineProps } from 'vue'

type Color = 'primary' | 'default' | 'danger'

type Variant = 'outlined' | 'contained'

type Combination = `${Variant}-${Color}`

const props = defineProps<{
  color?: 'primary' | 'default' | 'danger'
  variant?: 'outlined' | 'contained'
  loading?: boolean
  disabled?: boolean
}>()

const combination: Combination = `${props.variant ?? 'contained'}-${props.color ?? 'default'}`
</script>

<template>
  <button
    :disabled="disabled || loading"
    class="rounded-full px-4 py-2 font-bold outline-none flex justify-center items-center"
    :class="{
      'bg-primary text-black': combination === 'contained-primary',
      'border border-primary text-primary': combination === 'outlined-primary',
      'bg-gray-300 text-black': combination === 'contained-default',
      'border border-gray-300 text-gray-400': combination === 'outlined-default',
      'bg-red-600 text-white': combination === 'contained-danger',
      'border border-red-600 text-red-600': combination === 'outlined-danger',
      'opacity-30 cursor-not-allowed': disabled,
      'hover:opacity-90 active:opacity-60': !disabled && !loading,
      'cursor-wait': loading
    }"
  >
    <Spinner class="w-5 h-5 mr-1" v-if="loading" />
    <div>
      <slot></slot>
    </div>
  </button>
</template>
