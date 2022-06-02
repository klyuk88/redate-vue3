<template>
  <section id="sendings-mobile">

    <MobileSorting v-if="mobileSorting" />

    <div class="decor"></div>
    <div class="header" :class="{ blur: onBlur }">
      <BackLink @click="$router.go(-1)" />

      <h1 class="title">Мои рассылки</h1>

      <div class="actions">
        <img
          src="@/assets/images/main/settings-icon.svg"
          alt=""
          class="settings"
          @click="openMobileSorting"
        />
        <MobileBurger />
      </div>
    </div>

    <div class="content">
      <SendSlider />
      <button class="mob-new-send-btn">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="plus-icon"
        >
          <path
            d="M8.41499 0.880302L6.95368 0.880301L6.95368 7.76934L0.0646402 7.76934L0.0646402 9.23066L6.95368 9.23066L6.95368 16.1197L8.41499 16.1197L8.41499 9.23066L15.304 9.23066L15.304 7.76934L8.41499 7.76934L8.41499 0.880302Z"
            fill="white"
          />
        </svg>
        <span>Создать рассылку</span>
      </button>

      <div class="items">
        <SendItem />
        <SendItem />
        <SendItem />
        <SendItem />
      </div>
    </div>
  </section>
</template>
<script setup>
import BackLink from "@/components/Search/BackLink.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import MobileSorting from "@/components/Search/MobileSorting.vue";
import SendSlider from "@/components/Sends/SendSlider.vue";
import SendItem from '@/components/Sends/SendItem.vue'

import { ref, computed, onUnmounted } from 'vue'
import {useStore} from 'vuex'

const store = useStore();
const mobileSorting = computed(() => {
  return store.state.mobileSorting;
});
const openMobileSorting = () => {
  store.commit("openMobileSorting");
};

const openNewSendWindow = () => {
  store.commit("openNewSendWindow");
};
const scrollValue = ref(0);

const onBlur = computed(() => {
  return scrollValue.value > 20 ? true : false;
});

//scroll
window.addEventListener("scroll", heandleScroll);

function heandleScroll(e) {
  scrollValue.value = window.pageYOffset;
}
onUnmounted(() => {
  window.removeEventListener("scroll", heandleScroll);
});



</script>
<style lang="scss">
#sendings-mobile {
  display: none;
}
@media (max-width: 1200px) {
  #sendings-mobile {
    display: block;
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
        margin-left: 10px;
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
    .content {
      margin-top: 100px;
      .mob-new-send-btn {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
          271.17deg,
          #292a2f -1.65%,
          #1c264d 60.4%,
          #242529 99.3%
        );
        border: 1px solid rgba(255, 255, 255, 0.33);
        font-size: 15px;
        font-weight: 600;
        color: #fff;
        .plus-icon {
          margin-right: 10px;
        }
      }
      .items {
        margin-top: 16px;
      }
    }
  }
}
</style>