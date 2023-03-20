<script lang="ts" setup>

</script>

<template>
  <div class="pp-menu">
    <button>
      <span>pee</span>
    </button>

    <footer text-center>
      <small>
        0 poles availables
      </small>
    </footer>
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
  padding: 0 1rem;
  color: var(--blue);
  background-color: var(--pink);
  outline: 2px solid var(--black);
}

.pp-menu button div {
}
</style>
