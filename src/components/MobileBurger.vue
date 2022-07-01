<script setup>
import { useStore } from '@/stores/main.js'

defineProps({
  styles: {
    type: Object,
    default: () => {},
  },
})

const store = useStore()

const openMobMenu = () => {
  store.mobileMenu = true
}
</script>

<template>
  <div id="mobile-menu" :style="styles">
    <img
      src="@/assets/images/main/mob-menu-icon.svg"
      alt=""
      class="menu-icon"
      @click="openMobMenu()"
    />
  </div>
</template>

<style lang="scss">
#mobile-menu {
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
}
</style>
