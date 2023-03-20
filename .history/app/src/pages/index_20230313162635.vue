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
    <section>
      upgrade
    </section>
    <section>
      equip
    </section>
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
}
.pp header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  /* text-align: center; */
}
</style>
