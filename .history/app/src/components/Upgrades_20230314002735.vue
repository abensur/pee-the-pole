<script lang="ts" setup>
import { Stats } from '~/types'

const freePoints = ref(10)
</script>

<template>
  <div class="upgrades" px-2>
    <h2 text-center py-4 uppercase>
      upgrades <small lowercase>({{ freePoints }} ppp)</small>
    </h2>
    <div class="list">
      <small italic opacity-40>unlimited 1:1</small>
      <div class="item">
        <div flex items-center>
          Kidneys
        </div>
        <pp-input :stat="Stats.Kidneys" />
      </div>

      <div class="item">
        <div flex items-center>
          Urethra
        </div>
        <pp-input :stat="Stats.Urethra" />
      </div>

      <small italic opacity-40>limited 10:1</small>

      <div class="item">
        <div flex items-center>
          Bladder
        </div>
        <pp-range :stat="Stats.Bladder" />
      </div>

      <div class="item">
        <div flex items-center>
          Ureters
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
  color: var(--black);
  font-size: 0.75rem;
  position: relative;
  top: -0.125rem;
}

.summary > div {
  text-transform: uppercase;
}

.summary > div > div:first-child {
  color: var(--purple);
}

.summary > div small {
  text-transform: lowercase;
}
</style>
