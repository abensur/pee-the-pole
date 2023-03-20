<script setup lang="ts">
import type { Stats } from '~/types'

defineProps<{
  stat: Stats
}>()

const value = ref('')

// const { modelValue } = defineModel<{
//   modelValue: string
// }>()
</script>

<template>
  <input
    v-model="value"
    type="number"
    v-bind="$attrs"
    w-full
    border-4px
    border-black
  >
</template>
