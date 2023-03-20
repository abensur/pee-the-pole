<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
</script>

<template>
  <div>
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
