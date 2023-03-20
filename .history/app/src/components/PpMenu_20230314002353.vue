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
  display: flex;
}
.pp-menu footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
}

.pp-menu button {
  color: var(--blue);
  background-color: var(--pink);
  outline: 4px solid var(--black);
  padding: 0.5rem 0.75rem;
  margin: auto;
  margin-top: 1rem;
}

.pp-menu button div {
}
</style>
