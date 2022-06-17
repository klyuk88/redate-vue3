<template>
  <div class="page-content">
    <SideBar />
    <MobileSideBar/>
    <slot/>
    <!-- <div class="shape"></div> -->
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBars/SideBar.vue";
import MobileSideBar from "@/components/SideBars/MobileSideBar.vue";
import { computed } from "vue";
</script>

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