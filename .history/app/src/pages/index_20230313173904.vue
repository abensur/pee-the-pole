<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
enum Menu {
  Upgrade = 'upgrade',
  Equip = 'equip',
}
const openedMenu = $ref<Menu>()
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
      >
        upgrade
        <p>
          bladder <br>
          kidney <br>
          ureter <br>
          urethra
        </p>

        <button class="toggle left" @click="openedMenu = Menu.Upgrade">
          &gt;
        </button>
      </section>
      <section class="ppbot text-center" @click="openedMenu = undefined">
        <div class="map">map</div>
        ppbot <br>({{ openedMenu }})
      </section>
      <section
        class="equip"
        :class="{
          '--open': openedMenu === Menu.Equip,
        }"
      >
        <button class="toggle right" @click="openedMenu = Menu.Equip">
          &lt;
        </button>
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
  background: var(--pink);
  position: relative;
  overflow: hidden;
}

.pp main section {
  width: 50vw;
  height: 100%;
  position: absolute;
}
.pp main section.ppbot {
  width: 100vw;
}

.pp footer {
  flex: 0 80px;
  text-align: center;
  background: var(--black);
  line-height: 80px;
  color: var(--lavender);
}

.upgrade {
  left: -50vw;
  background: var(--lavender);
  z-index: 2;
  transition: left 0.3s ease;
}
.upgrade.--open {
  left: 0;
}
.equip {
  right: -50vw;
  background: var(--blue);
  z-index: 2;
  transition: right 0.3s ease;
}
.equip.--open {
  right: 0;
}

.ppbot {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.ppbot .map {
  width: 10rem;
  height: 10rem;
  background: green;
  border-radius: 50%;
  line-height: 10rem;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
}

.toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.5s;
  font-size: 2rem;
  background: transparent;
  line-height: 1;
  padding-top: 3px;
  width: 80px;
  height: 80px;
  font-weight: bold;
  color: var(--black);

}
.toggle.left {
  right: -80px;
}
.toggle.right {
  left: -80px;
}
.--open .left,
.--open .right {
  transform: translateY(-50%) scaleX(-1);
}
</style>
