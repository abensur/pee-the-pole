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
  height: 100%;
}
.pp-menu footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
}

.pp-menu button {
  display: flex;
  flex-flow: column;
  color: var(--blue);
  background-color: var(--pink);
  outline: 2px solid var(--black);

  margin: auto;
}

.pp-menu button div {
}
</style>
