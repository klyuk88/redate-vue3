<template>
  <div id="di-mobile-content">
    <div class="di-mob-decor"></div>

    <div class="di-mob-header" :class="{ blur: onBlur }" v-if="false">
      <BackLink @click="$router.go(-1)" />
      <h1 class="di-mob-title">Диалоги</h1>
      <MobileBurger />
    </div>

    <div class="tab-header" :class="{ blur: onBlur }" v-if="true">
      <BackLink @click="$router.go(-1)" />
      <div class="actions">
        <MobileBurger />
      </div>
      <div class="tabs-block">
        <div
          class="tab"
          :class="{ active: tabs.chat }"
          @click="changeTab('chat')"
        >
          Диалоги
        </div>
        <div
          class="tab"
          :class="{ active: tabs.apps }"
          @click="changeTab('apps')"
        >
          Заявки
        </div>
        <div
          class="active-line"
          :style="{
            transform: tabs.apps ? 'translateX(100%)' : 'translateX(0)',
          }"
        ></div>
      </div>
    </div>

    <component :is="activeTab"></component>
  </div>
</template>
<script setup>
import DialogItem from "@/components/Chat/DialogItem.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import BackLink from "@/components/Search/BackLink.vue";
import AppsMobileTabContent from '@/components/Chat/AppsMobileTabContent.vue'
import ChatMobileTabContent from '@/components/Chat/ChatMobileTabContent.vue'
import { ref, computed, reactive, onUnmounted } from "vue";

const tabs = reactive({
  chat: true,
  apps: false
})
const changeTab = (param) => {
  if (param === "chat") {
    tabs.chat = true;
    tabs.apps = false;
  } else if (param === "apps") {
    tabs.apps = true;
    tabs.chat = false;
  }
}

const activeTab = computed(() => {
  if(tabs.chat) {
    return ChatMobileTabContent
  } else if (tabs.apps) {
    return AppsMobileTabContent
  }
})

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
#di-mobile-content {
  display: none;
  position: relative;
  overflow-x: hidden;
  .di-mob-decor {
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
  .di-mob-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 375px;
    padding: 50px 20px;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.14);
    z-index: 2;
    .di-mob-title {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .di-mob-header.blur {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
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
  // .tab-header + .tab-content {
  //   margin-top: 130px;
  // }
}

@media (max-width: 1200px) {
  #di-mobile-content {
    display: block;
  }
}
</style>