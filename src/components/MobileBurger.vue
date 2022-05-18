<template>
  <div id="mobile-menu"
  :style="styles"
  >
    <img
      src="@/assets/images/main/mob-menu-icon.svg"
      alt=""
      class="menu-icon"
      @click="openMobMenu"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const props = defineProps({
  styles: {
    type: Object,
    default: {}
  }
})
const store = useStore();
const openMobMenu = () => {
  store.commit("openMobileMenu");
};
</script>

<style lang="scss">
#mobile-menu {
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
}

</style>