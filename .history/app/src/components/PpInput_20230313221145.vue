<script setup lang="ts">
import type { Stats } from '~/types'

defineProps<{
  stat: Stats
}>()

const value = ref('100')

// const { modelValue } = defineModel<{
//   modelValue: string
// }>()
</script>

<template>
  <input
    v-model="value"
    type="number"
    v-bind="$attrs"
    w-60px
    text-center
    border-4px
    border-black
    focus:outline-none
  >
</template>
