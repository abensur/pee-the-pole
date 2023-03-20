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
    <small italic opacity-40>summary</small>
    <div class="summary">
      <div>
        <span>Pee Prod <small>(ml/day)</small></span>
        <div>
          100
        </div>
      </div>
      <div>
        <span>Pee Range <small>(km)</small></span>
        <div>
          0.01
        </div>
      </div>
      <div>
        <span>Max. Use <small>(%)</small></span>
        <div>
          10
        </div>
      </div>
      <div>
        <span>Pee Speed <small>(ml/s)</small></span>
        <div>
          10
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list > div {
  margin-bottom: 2rem;
}

.summary {
  font-size: 9px;
}
.summary > div {
  padding: 0.5rem 0;
  display: flex;
  flex-flow: row wrap;
}
.summary > div > div {
  flex: 40px;
}
.summary span {
  text-transform: uppercase;
}
.summary span small {
  text-transform: lowercase;
}
</style>
