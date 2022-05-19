<template>
  <ProfileNewMessage v-if="newMessageWindow" />
  <section id="search" :class="{ hidden: mobileSorting }">
    <div id="mobile-content">
      <!-- header -->

      <div class="blur-header" :class="{ blur: onBlur}">
        <div class="top">
          <BackLink @click="closeMobileSorting" />
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
          <h6 class="label">
            Результаты поиска: <span class="results">229 992</span>
          </h6>
        </div>
        <div class="search-items">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
      <SearchPageSidebar />
    </div>
  </section>
</template>

<script setup>
import SearchItem from "@/components/Search/SearchItem.vue";
import SearchPageSidebar from "@/components/SideBars/SearchPageSidebar.vue";
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
const closeMobileSorting = () => {
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
  return scrollValue.value > 20 ? true : false 
})

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
  padding-left: 130px;
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
    display: flex;
    align-items: center;
    .content {
      border-left: 1px solid #ffffff54;
      border-right: 1px solid #ffffff54;
      padding: 0 17px;
      background: rgba(196, 196, 196, 0.05);
      flex-grow: 1;
      position: relative;
      z-index: 1;
      .search-results {
        font-size: 18px;
        color: #fff;
        text-align: center;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        padding-bottom: 20px;
        padding-top: 70px;
        position: absolute;
        width: 90%;
        z-index: 2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(28, 29, 33, 0.01);
        backdrop-filter: blur(50px);
        .results {
          opacity: 0.3;
        }
      }
      .search-items {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        gap: 33px;
        max-width: 1050px;
        margin: 0 auto;
        overflow-y: scroll;
        max-height: 100vh;
        padding-top: 150px;
      }
      .search-items::-webkit-scrollbar {
        width: 2px;
      }
      .search-items::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.14);
      }
      .search-items::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 1);
        border-radius: 2px;
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