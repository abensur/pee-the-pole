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
        <div>Pee Prod <small>(ml/day)</small></div>
        <div>
          100
        </div>
      </div>
      <div>
        <div>Pee Range <small>(km)</small></div>
        <div>
          0.01
        </div>
      </div>
      <div>
        <div>Max. Use <small>(%)</small></div>
        <div>
          10
        </div>
      </div>
      <div>
        <div>Pee Speed <small>(ml/s)</small></div>
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
.summary > div > div:nth-child(2) {
  flex: 0 40px;
  margin-left: auto;
  text-align: right;
  color: var(--blue);
}

.summary > div {
  text-transform: uppercase;
}

.summary > div > div:first-child {
  opacity: 0.8;
  color: var(--pink);
}

.summary > div small {
  text-transform: lowercase;
}
</style>
