<script setup lang="ts">
import type { Stats } from '~/types'

defineProps<{
  stat: Stats
}>()

const value = ref(5)
</script>

<template>
  <div class="pp-range" py-2>
    <button
      :disabled="value === 0"
      @click="value--"
    >
      <div i-carbon-subtract />
    </button>
    <input
      v-model="value"
      type="range"
      min="0"
      max="10"
      step="1"
      v-bind="$attrs"
      focus:outline-none
      pointer-events-none
    >
    <button
      :disabled="value === 10"
      @click="value++"
    >
      <div i-carbon-add />
    </button>
  </div>
</template>

<style scoped>
.pp-range {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
}

.pp-range button {
  font-size: 1rem;
  line-height: 1rem;
  color: var(--blue);
  background-color: var(--lavender);
  border-radius: 50%;
  outline: 2px solid var(--black);
}

.pp-range button:disabled {
  opacity: 0.35;
}

.pp-range input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  flex: 1;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

input[type=range] {
  height: 2rem;
  -webkit-appearance: none;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 15px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px var(--black);
  background: var(--blue);
  border-radius: 0px;
  border: 2px solid var(--black);
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px var(--black);
  border: 2px solid var(--black);
  height: 32px;
  width: 15px;
  border-radius: 0px;
  background: var(--pink);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: var(--blue);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 15px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px var(--black);
  background: var(--blue);
  border-radius: 0px;
  border: 2px solid var(--black);
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px var(--black);
  border: 2px solid var(--black);
  height: 32px;
  width: 15px;
  border-radius: 0px;
  background: var(--pink);
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 15px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: var(--blue);
  border: 2px solid var(--black);
  border-radius: 0px;
  box-shadow: 0px 0px 0px var(--black);
}
input[type=range]::-ms-fill-upper {
  background: var(--blue);
  border: 2px solid var(--black);
  border-radius: 0px;
  box-shadow: 0px 0px 0px var(--black);
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px var(--black);
  border: 2px solid var(--black);
  height: 32px;
  width: 15px;
  border-radius: 0px;
  background: var(--pink);
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: var(--blue);
}
input[type=range]:focus::-ms-fill-upper {
  background: var(--blue);
}
</style>
