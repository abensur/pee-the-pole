<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="pp">
    <header>
      infos
    </header>
    <main>
      <section>
        upgrade
      </section>
      <section>
        equip
      </section>
      main
    </main>
    <footer>
      menu
    </footer>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
.pp {
  position: relative;
  height: 100%;
}
.pp header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.pp main {
  height: 100%;
}
</style>
