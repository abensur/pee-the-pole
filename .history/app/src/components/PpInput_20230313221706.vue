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
  <div class="pp-input">
    <button>
      <div i-carbon-subtract />
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
      <div i-carbon-add />
    </button>
  </div>
</template>

<style scoped>
.pp-input {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
}

.pp-input button {
  font-size: 2rem;
  line-height: 2rem;
}
</style>
