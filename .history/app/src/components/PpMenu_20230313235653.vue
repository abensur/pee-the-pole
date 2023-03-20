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
  width: 58px;
  padding-top: 10px;
}

.pee-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 58px;
  height: calc(100% - 10px);
  background: var(--black);
  /* background: red; */
  border-radius: 50%;
}
</style>
