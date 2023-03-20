<script setup lang="ts">
import type { Stats } from '~/types'

defineProps<{
  stat: Stats
}>()

const value = ref(100)

// const { modelValue } = defineModel<{
//   modelValue: string
// }>()
</script>

<template>
  <div class="pp-input" py-2>
    <button @click="value--">
      <div i-carbon-subtract />
    </button>
    <input
      v-model="value"
      type="number"
      v-bind="$attrs"
      w-60px
      text-center
      border-4px
      focus:outline-none
      pointer-events-none
    >
    <button @click="value++">
      <div i-carbon-add />
    </button>
  </div>
</template>

<style scoped>
.pp-input {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
}

.pp-input button {
  font-size: 2rem;
  line-height: 2rem;
  color: var(--BB7BFC);
}

.pp-input input {
  border-color: var(--black);
}
</style>
