<script lang="ts" setup>

</script>

<template>
  <div class="pp-menu">
    <button>
      <div i-carbon-touch-2-filled />
      <span>pee</span>
    </button>

    <div text-center>
      <small>
        0 poles availables
      </small>
    </div>
  </div>
</template>

<style scoped>
.pp-menu {
  color: var(--blue);
  position: relative;
}

.pp-menu button {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1rem;
  height: 2.5rem;
  padding: 0 1rem;
  color: var(--blue);
  background-color: var(--pink);
  outline: 2px solid var(--black);
}

.pp-menu button div {
  font-size: 3rem;
}
</style>
