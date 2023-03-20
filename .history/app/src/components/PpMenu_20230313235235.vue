<script lang="ts" setup>

</script>

<template>
  <div class="pp-menu">
    <div class="pee-btn" i-carbon-rain-drop />
    0 poles availables
  </div>
</template>

<style scoped>
.pp-menu {
  text-align: center;
  color: var(--lavender);
  position: relative;
}

.pee-btn {
  font-size: 3rem;
  margin: 0 auto;
  position: relative;
  top: -30px;
  z-index: 2;
}

.pee-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--blue);
  border-radius: 50%;
}
</style>
