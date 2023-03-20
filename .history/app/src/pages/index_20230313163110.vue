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
        ppbot
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
  display: flex;
  flex-flow: column wrap;
}
.pp header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.pp main {
  height: 100%;
  flex: 1;
  background: pink;
  position: relative;
}

.pp footer {
  flex: 0 80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.25);
  line-height: 80px;
}
</style>
