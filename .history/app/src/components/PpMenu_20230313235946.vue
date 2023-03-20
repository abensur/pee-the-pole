<script lang="ts" setup>

</script>

<template>
  <div class="pp-menu">
    <div class="pee-btn">
      <div i-carbon-rain-drop />
    </div>
    0 poles availables
  </div>
</template>

<style scoped>
.pp-menu {
  color: var(--blue);
  position: relative;
}

.pee-btn {
  text-align: center;
  font-size: 3.5rem;
  margin: 0 auto;
  position: relative;
  top: -40px;
  z-index: 2;
  width: 80px;
  height: 80px;
}

.pee-btn > div {
  text-align: center;
  margin: 0 auto;
}

.pee-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  background: var(--blue);
  background: red;
  background: var(--pink);
  border-radius: 50%;
  border: 4px solid var(--black);
}
</style>
