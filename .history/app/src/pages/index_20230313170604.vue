<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
enum Menu {
  Upgrade = 'upgrade',
  Equip = 'equip',
}
const openedMenu = ref<Menu>(Menu.Upgrade)
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
          '--open': openedMenu === Menu.Upgrade,
        }"
        @click="openedMenu = Menu.Upgrade"
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
      <section
        class="equip"
        :class="{
          '--open': openedMenu === Menu.Equip,
        }"
        @click="openedMenu = Menu.Equip"
      >
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
  width: 50vw;
  height: 100%;
  position: absolute;
  z-index: 1;
}
.pp main section.ppbot {
  width: 100vw;
}

.pp footer {
  flex: 0 80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.25);
  line-height: 80px;
}

.upgrade {
  left: -50vw;
}
.upgrade.--open {
  left: 0;
}
.equip {
  right: -50vw;
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
