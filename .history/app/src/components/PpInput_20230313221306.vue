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
  <div>
    <button>
      <div i-carbon-minus />
    </button>
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
    <button>
      <div i-carbon-plus />
    </button>
  </div>
</template>
