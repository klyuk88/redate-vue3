<template>
  <section id="favorites-mobile">
    <div class="decor"></div>
    <div class="header" :class="{ blur: onBlur }">
      <BackLink @click="$router.go(-1)" />
      <h1 class="title">Избранное</h1>
      <div class="actions">
        <MobileBurger />
      </div>
    </div>
    <div class="items-block">
      <PotrncialPartnerMobile v-for="(items, idx) in 8" :key="idx" />
    </div>

  </section>  
</template>
<script setup>
import BackLink from "@/components/Search/BackLink.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import PotrncialPartnerMobile from '@/components/PotencialPartners/PotrncialPartnerMobile.vue'
import { ref, computed, onUnmounted, reactive } from "vue";

//scroll
const onBlur = computed(() => {
  return scrollValue.value > 20 ? true : false;
});
const scrollValue = ref(0);
window.addEventListener("scroll", heandleScroll);

function heandleScroll(e) {
  scrollValue.value = window.pageYOffset;
}
onUnmounted(() => {
  window.removeEventListener("scroll", heandleScroll);
});
</script>
<style lang="scss">
#favorites-mobile {
  display: none;
  position: relative;
  width: 100%;
  .decor {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 50%;
    opacity: 0.3;
    pointer-events: none;
    width: 300px;
    height: 300px;
    transform: translateY(-50%) translateX(-50%);
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    mask-image: radial-gradient(
      ellipse 100% 100% at 50% 50%,
      black 10%,
      transparent 50%
    );
    -webkit-mask-image: radial-gradient(
      ellipse 100% 100% at 50% 50%,
      black 10%,
      transparent 50%
    );
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 375px;
    padding: 50px 20px 20px 20px;
    z-index: 2;
    .title {
      font-size: 17px;
      font-weight: 600;
    }
    .actions {
      display: flex;
      align-items: center;
      .settings {
        margin-right: 10px;
      }
    }
  }
  .header.blur {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
  }
  .items-block {
    padding-top: 100px;
  }
}
@media (max-width: 1200px) {
  #favorites-mobile {
    display: block;
  }
}
</style>