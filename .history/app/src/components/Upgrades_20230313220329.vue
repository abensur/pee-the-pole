<script lang="ts" setup>
import { Stats } from '~/types'
</script>

<template>
  <div class="upgrades" px-2>
    <h2 text-center py-4 uppercase>
      upgrades
    </h2>
    <div class="list">
      <small italic opacity-40>unlimited</small>
      <div class="item">
        <div flex items-center>
          Kidneys
          <div
            ml-auto i-carbon-information-square
          />
        </div>
        <pp-input :stat="Stats.Kidneys" />
      </div>

      <div flex items-center>
        <div class="item">
          <div flex items-center>
            Urethra
            <div
              ml-auto i-carbon-information-square
            />
          </div>
          <pp-input :stat="Stats.Urethra" />
        </div>
        <small italic opacity-40>limited</small>
      </div>
      <div flex items-center>
        Bladder  <div ml-auto i-carbon-information-square />
      </div>
      <div flex items-center>
        Ureters  <div ml-auto i-carbon-information-square />
      </div>
    </div>
  </div>
</template>

<style scoped>
.list > div {
  margin-bottom: 2rem;
}
</style>
