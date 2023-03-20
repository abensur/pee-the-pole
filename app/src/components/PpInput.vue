<script setup lang="ts">
import type { Stats } from '~/types'

defineProps<{
  stat: Stats
}>()

const value = ref(100)
const audioStore = useAudioStore()
const updateValue = (newValue: number) => {
  audioStore.playAudio('click')
  value.value = value.value + newValue
}
</script>

<template>
  <div class="pp-input" py-2>
    <button @click="updateValue(-1)">
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
    <button @click="updateValue(1)">
      <div i-carbon-add />
    </button>
  </div>
</template>

<style scoped>
.pp-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
}

.pp-input button {
  font-size: 1rem;
  line-height: 1rem;
  color: var(--blue);
  background-color: var(--pink);
  border-radius: 50%;
  outline: 2px solid var(--black);
}

.pp-input input {
  border-color: var(--black);
  height: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
