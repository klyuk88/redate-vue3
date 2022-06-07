<template>
  <section id="notifications-mobile">
    <div class="decor"></div>
    <div class="tab-header" :class="{ blur: onBlur }">
      <BackLink @click="$router.go(-1)" />
      <h1 class="title">Уведомления</h1>
      <div class="actions">
        <MobileBurger />
      </div>
      <div class="tabs-block">
        <div
          class="tab"
          :class="{ active: tabs.likes }"
          @click="tabActive('likes')"
        >
          Лайки +5
        </div>
        <div
          class="tab"
          :class="{ active: tabs.views }"
          @click="tabActive('views')"
        >
          Просмотр профиля +5
        </div>
        <div
          class="active-line"
          :style="{
            transform: tabs.views ? 'translateX(100%)' : 'translateX(0)',
          }"
        ></div>
      </div>
    </div>
    <component :is="activeTab"></component>
  </section>
</template>
<script setup>
import BackLink from "@/components/Search/BackLink.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import LikesMobileTabContent from "@/components/Notifications/LikesMobileTabContent.vue";
import ViewsMobileTabContent from "@/components/Notifications/ViewsMobileTabContent.vue";
import { ref, computed, onUnmounted, reactive } from "vue";

const tabs = reactive({
  likes: true,
  views: false,
});
const activeTab = computed(() => {
  if (tabs.likes) {
    return LikesMobileTabContent;
  } else if (tabs.views) {
    return ViewsMobileTabContent;
  }
});
const tabActive = (param) => {
  if (param === "likes") {
    tabs.likes = true;
    tabs.views = false;
  } else if (param === "views") {
    tabs.views = true;
    tabs.likes = false;
  }
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
#notifications-mobile {
  display: none;
}
@media (max-width: 1200px) {
  #notifications-mobile {
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

    .tab-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      position: fixed;
      top: 0;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      max-width: 375px;
      padding: 30px 0 0 0;
      z-index: 2;
      .tabs-block {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        padding: 30px 0 10px 0;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.4);
        .active-line {
          position: absolute;
          bottom: -1px;
          width: 50%;
          height: 2px;
          background: #fff;
          left: 0;
          transition: all 0.3s ease;
        }
        .active-line.active {
          transform: translateX(100%);
        }
        .tab {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }
        .tab.active {
          color: #fff;
        }
      }
      .back-btn {
        padding-left: 20px;
      }
      .actions {
        display: flex;
        align-items: center;
        padding-right: 20px;
        .settings {
          margin-right: 10px;
        }
      }
    }
    .tab-header.blur {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(30px);
    }
  }
}
</style>