<script setup>
import { onMounted } from 'vue'
// import router from '@/router'
import { useUserStore } from '@/stores/user.js'
import SideBar from '@/components/SideBars/SideBar.vue'
import MobileSideBar from '@/components/SideBars/MobileSideBar.vue'

const user = useUserStore()

onMounted(async () => {
  await user.getInformation()

  // const userError = user.information.error?.status

  // if (userError) {
  //   router.push('/500')
  // }

  const userSex = user.information.data?.sex

  if (userSex === 1) {
    await user.getCurrentTariff()
  } else {
    // await user.getRegistrationStatus()
  }

  // TODO Заменить логику
})
</script>

<template>
  <div class="page-content">
    <SideBar />
    <MobileSideBar />

    <router-view />
  </div>
</template>

<style lang="sass">
.page-content
    display: flex
    align-items: flex-start
    position: relative

.page-content > .shape
    position: absolute
    background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
    mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
    -webkit-mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
    opacity: 0.3
    pointer-events: none
    bottom: -300px
    left: -300px
    width: 800px
    height: 800px
    @media (max-width: 1200px)
      display: none
</style>
