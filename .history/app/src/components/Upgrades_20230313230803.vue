<script lang="ts" setup>
import { Stats } from '~/types'

const freePoints = ref(0)
</script>

<template>
  <div class="upgrades" px-2>
    <h2 text-center py-4 uppercase>
      upgrades <small>({{ freePoints }})</small>
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

      <div class="item">
        <div flex items-center>
          Bladder
          <div
            ml-auto i-carbon-information-square
          />
        </div>
        <pp-range :stat="Stats.Bladder" />
      </div>

      <div class="item">
        <div flex items-center>
          Ureters
          <div
            ml-auto i-carbon-information-square
          />
        </div>
        <pp-range :stat="Stats.Ureters" />
      </div>
    </div>
    <div class="summary" display-table>
      Daily P: 100ml
      <br>
      P Range: 10m
      <br>
      Max P: 10% (10ml)
      <br>
      P Speed: 10s
    </div>
  </div>
</template>

<style scoped>
.list > div {
  margin-bottom: 2rem;
}

.summary {
  font-size: 10px;
}
</style>
