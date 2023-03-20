<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
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
