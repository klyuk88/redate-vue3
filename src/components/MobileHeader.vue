<template>
  <div class="mob-header">
    <h1 class="title">Главная</h1>
    <img
      src="@/assets/images/main/mob-menu-icon.svg"
      alt=""
      class="menu-icon"
      @click="openMobMenu"
    />
    <div class="decor-shape"></div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const openMobMenu = () => {
  store.commit("openMobileMenu");
};
</script>

<style lang="sass">
.mob-header
  text-align: center
  position: relative
  width: 100%
  margin-bottom: 40px
  z-index: 1
  display: none
  @media (max-width: 1200px)
    display: block

.mob-header > .title
  font-size: 17px
  font-weight: 600

.mob-header .menu-icon
  position: absolute
  right: 0
  top: 50%
  transform: translateY(-50%)

.mob-header > .decor-shape
  position: absolute
  width: 200px
  height: 200px
  left: 50%
  top: 0
  z-index: -1
  transform: translate(-50%, -50%)
  background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
  mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
  -webkit-mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
  opacity: 0.3
  pointer-events: none
</style>