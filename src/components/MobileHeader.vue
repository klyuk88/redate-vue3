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
  margin-bottom: 20px
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
  width: 100px
  height: 100px
  background: #2965FF
  left: 50%
  top: 0
  transform: translateX(-50%)
  z-index: -1
  filter: blur(70px)
  -webkit-filter: blur(70px)
</style>