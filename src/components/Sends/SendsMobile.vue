<template>
  <section id="sendings-mobile">
    <MobileSorting v-if="mobileSorting" />

    <div class="decor"></div>

    <!-- <div class="header" :class="{ blur: onBlur }">
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
    </div> -->

    <div class="tab-header" :class="{ blur: onBlur }">
      <BackLink @click="$router.go(-1)" />
      <div class="actions">
        <img
          src="@/assets/images/main/settings-icon.svg"
          alt=""
          class="settings"
          @click="openMobileSorting"
        />
        <MobileBurger />
      </div>
      <div class="tabs-block">
        <div class="tab" :class="{active: tabs.sends}" @click="changeTab('sends')">Новые рассылки</div>
        <div class="tab" :class="{active: tabs.answers}" @click="changeTab('answers')">Ответы +15</div>
        <div class="active-line" :style="{transform: tabs.answers ? 'translateX(100%)' : 'translateX(0)'}"></div>
      </div>
    </div>
    <component :is="activeTab"></component>
  </section>
</template>
<script setup>
import BackLink from "@/components/Search/BackLink.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import MobileSorting from "@/components/Search/MobileSorting.vue";
import SendsMobileTabContent from "@/components/Sends/SendsMobileTabContent.vue";
import AnswersMobileTabContent from '@/components/Sends/AnswersMobileTabContent.vue'

import { ref, computed, onUnmounted, reactive } from "vue";
import { useStore } from "vuex";

const tabs = reactive({
  sends: true,
  answers: false
})
const changeTab = (param) => {
  if (param === "sends") {
    tabs.sends = true;
    tabs.answers = false;
  } else if (param === "answers") {
    tabs.answers = true;
    tabs.sends = false;
  }
}

const activeTab = computed(() => {
  if(tabs.sends) {
    return SendsMobileTabContent
  } else if (tabs.answers) {
    return AnswersMobileTabContent
  }
})

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
    .header + .tab-content {
      margin-top: 100px;
    }
    .header.blur {
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
    .tab-header + .tab-content {
      margin-top: 130px;
    }
  }
}
</style>