<template>
  <ProfileNewMessage v-if="newMessageWindow" />
  <section id="search" :class="{ hidden: mobileSorting }">
    <div id="mobile-content">
      <!-- header -->

      <div class="blur-header" :class="{ blur: onBlur }">
        <div class="top">
          <BackLink @click="$router.go(-1)" />
          <MobileBurger />
        </div>
        <div class="bottom">
          <p class="results">Расширенный поиск: <span>294 399</span></p>
          <img
            src="@/assets/images/main/settings-icon.svg"
            alt=""
            class="filter"
            @click="openMobileSorting"
          />
        </div>
      </div>
      <!-- header end  -->

      <MobileSorting v-if="mobileSorting" />

      <div class="decor"></div>

      <div class="search-items">
        <PotrncialPartnerMobile v-for="(items, idx) in 8" :key="idx" />
      </div>
    </div>
    <div class="grid">
      <div class="content">
        <div class="search-results">
          <p class="label">
            Результаты поиска: <span class="results">229 992</span>
          </p>
        </div>
        <PerfectScrollbar>
          <div class="search-items">
            <SearchItem v-for="(items, idx) in 10" :key="idx" />
          </div>
        </PerfectScrollbar>
      </div>
      <div class="sidebar">
        <SearchPageSidebar />
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchItem from "@/components/Search/SearchItem.vue";
import SearchPageSidebar from "@/components/Search/SearchPageSidebar.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import PotrncialPartnerMobile from "@/components/PotencialPartners/PotrncialPartnerMobile.vue";
import ProfileNewMessage from "@/components/Profile/ProfileNewMessage.vue";
import MobileSorting from "@/components/Search/MobileSorting.vue";
import BackLink from "@/components/Search/BackLink.vue";
import { onUnmounted, ref } from "vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const openMobileSorting = () => {
  store.commit("openMobileSorting");
};

const newMessageWindow = computed(() => {
  return store.state.newMessageWindow;
});
const mobileSorting = computed(() => {
  return store.state.mobileSorting;
});
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
#search {
  margin: 0 auto;
  padding-left: 100px;
  #mobile-content {
    display: none;
    position: relative;
    overflow-x: hidden;
    .blur-header {
      position: fixed;
      max-width: 375px;
      width: 375px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 30px 10px 30px 10px;
      background: transparent;
      z-index: 1;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 23px;
        .results {
          font-size: 17px;
          font-weight: 600;
          line-height: 1;
          span {
            opacity: 0.3;
          }
        }
      }
    }
    .blur-header.blur {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(30px);
    }
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
    .search-items {
      margin-top: 140px;
    }
  }
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(860px, 1057px) minmax(300px, 376px);
    column-gap: 30px;
    align-items: center;
    .content {
      position: relative;
      background: rgba(196, 196, 196, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.33);
      height: 100vh;
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
        background: rgba(196, 196, 196, 0.05);
        backdrop-filter: blur(30px);
        .label {
          font-size: 18px;
          font-weight: 600;
        }
        .results {
          opacity: 0.3;
        }
      }
      .ps {
        padding-top: 150px;
        height: 100vh;
        overflow-y: auto;
        scrollbar-width: none;
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

      .search-items {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        gap: 33px;
        margin: 0 auto;
        max-height: 100vh;
        // padding-top: 150px;
      }
    }
  }
}

#search.hidden {
  height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: 1200px) {
  #search {
    width: 100%;
    padding: 0;
    // border: 1px solid red;
    #mobile-content {
      display: block;
    }
    .grid {
      display: none;
    }
  }
}
</style>