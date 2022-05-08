<template>
  <div class="page-content">
    <SideBar />
    <MobileSideBar/>
    <div class="content">
      <slot />
    </div>
    <div class="shape"></div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import MobileSideBar from "@/components/MobileSideBar.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const mobMenu = computed(() => store.state.mobileMenu);
</script>

<style lang="sass">
.page-content
    display: flex
    align-items: flex-start
    position: relative
    > .content
        padding-left: 130px
        padding-top: 75px
        padding-bottom: 75px
        width: 100%
        @media (max-width: 1200px)
            padding-left: 0
            padding-top: 50px
            padding-bottom: 0
            min-height: auto

    > .shape
        position: absolute
        bottom: -100px
        left: -100px
        width: 300px
        height: 300px
        background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
        filter: blur(150px)
        -webkit-filter: blur(150px)
        @media (max-width: 1200px)
            display: none
</style>