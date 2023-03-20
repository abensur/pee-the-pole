<script setup lang="ts">
import type { Stats } from '~/types'

defineProps<{
  stat: Stats
}>()

const value = ref(100)
</script>

<template>
  <div class="pp-input" py-2>
    <button @click="value--">
      <div i-carbon-subtract />
    </button>
    <input
      v-model="value"
      type="range"
      min="0"
      max="10"
      v-bind="$attrs"
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
  justify-content: space-between;
  /* border: 1px solid black; */
}

.pp-input button {
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: var(--blue);
  background-color: var(--lavender);
  border-radius: 50%;
}

.pp-input input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  flex: 1;
}

input[type=range] {
  height: 40px;
  -webkit-appearance: none;
  margin: 10px 0;
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
  box-shadow: 0px 0px 0px #000000;
  background: #3071A9;
  border-radius: 0px;
  border: 2px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 2px solid #000000;
  height: 32px;
  width: 15px;
  border-radius: 0px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #3071A9;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 15px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #3071A9;
  border-radius: 0px;
  border: 2px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 2px solid #000000;
  height: 32px;
  width: 15px;
  border-radius: 0px;
  background: #FFFFFF;
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
  background: #3071A9;
  border: 2px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #3071A9;
  border: 2px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 2px solid #000000;
  height: 32px;
  width: 15px;
  border-radius: 0px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071A9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #3071A9;
}
</style>
