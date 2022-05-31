<template>
  <section id="dialog">
    <div id="di-mobile-content">
      <div class="di-mob-decor"></div>
      <div class="di-mob-header" :class="{ blur: onBlur }">
        <BackLink @click="$router.go(-1)" />
        <h1 class="di-mob-title">Диалоги</h1>
        <MobileBurger />
      </div>

      <div class="di-mob-items" ref="diMobItems" @scroll="heandleScroll">
        <DialogItem v-for="(item, idx) in 20" :key="idx" />
        <button class="delite-dialogs">Удалить все диалоги</button>
      </div>
    </div>

    <div class="grid">
      <div class="content">
        <div class="search-results">
          <h6 class="label">Диалоги: <span class="results">222</span></h6>
        </div>
        <PerfectScrollbar>
            <DialogItem v-for="(item, idx) in 20" :key="idx" />
            <button class="delite-dialogs">Удалить все диалоги</button>
        </PerfectScrollbar>
      </div>
      <DialogSidebar />
    </div>
  </section>
</template>


<script setup>
import DialogItem from "@/components/Chat/DialogItem.vue";
import DialogSidebar from "@/components/Chat/DialogSidebar.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import BackLink from "@/components/Search/BackLink.vue";
import { computed, ref, onMounted, onUnmounted } from "vue";

const scrollValue = ref(0);

const diMobItems = ref(null);

const onBlur = computed(() => {
  return scrollValue.value > 20 ? true : false;
});

function heandleScroll(e) {
  scrollValue.value = diMobItems.value.scrollTop;
}
</script>

<style lang="scss">
#dialog {
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
    .di-mob-items {
      padding-top: 140px;
      height: 100vh;
      overflow-y: auto;
      width: 100%;
      padding-bottom: 50px;
    }
  }
  margin: 0 auto;
  padding-left: 130px;
  .grid {
    display: flex;
    align-items: center;
    .content {
      border-left: 1px solid #ffffff54;
      border-right: 1px solid #ffffff54;
      background: rgba(196, 196, 196, 0.05);
      width: 1000px;
      position: relative;
      z-index: 1;
      padding: 0 17px;
      height: 100vh;
      @media (max-width: 1400px) {
        width: 700px;
      }
      .search-results {
        font-size: 18px;
        color: #fff;
        text-align: center;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        padding-bottom: 20px;
        padding-top: 70px;
        position: absolute;
        width: 100%;
        z-index: 2;
        top: 0;
        left: 0;
        background: rgba(28, 29, 33, 0.01);
        backdrop-filter: blur(50px);
        .results {
          opacity: 0.3;
        }
      }
      .ps {
        height: 100vh;
        padding-bottom: 50px;
        padding: 150px 30px 50px 30px;
        position: relative;
        .ps__rail-y {
          margin-top: 150px;
          margin-right: 5px;
          width: 2px;
          background: rgba($color: #fff, $alpha: 0.3);
          border-radius: 0;
          .ps__thumb-y {
            width: 2px;
            background-color: #fff;
            border-radius: 0;
            right: 0;
          }
        }
      }
    }
  }
  .delite-dialogs {
    margin: 0 auto;
    display: block;
    text-align: center;
    font-size: 14px;
    color: #2b66fb;
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    margin-top: 24px;
  }
}

@media (max-width: 1200px) {
  #dialog {
    padding: 0;
    width: 100%;
    .grid {
      display: none;
    }
    #di-mobile-content {
      display: block;
    }
  }
}
</style>