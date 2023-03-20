<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const openedMenu = ref('upgrade')
</script>

<template>
  <div class="pp">
    <header>
      infos
    </header>
    <main>
      <section
        class="upgrade"
        :class="{
          '--open': openedMenu === 'upgrade'
        }"
      >
        upgrade
      </section>
      <section class="ppbot">
        ppbot
        <button class="toggle left">
          &gt;
        </button>
        <button class="toggle right">
          &lt;
        </button>
      </section>
      <section class="equip">
        equip
      </section>
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
  z-index: 2;
  background: red;
}
.pp main {
  height: 100%;
  flex: 1;
  background: pink;
  position: relative;
  overflow: hidden;
}

.pp main section {
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.pp footer {
  flex: 0 80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.25);
  line-height: 80px;
}

.upgrade {
  left: -100%;
}
.equip {
  right: -100%;
}

.ppbot {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.ppbot .toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.toggle.left {
  left: 0
}
.toggle.right {
  right: 0
}
</style>
