<template>
  <section id="notifications">
    <div class="grid">
      <div class="main-content">
        <!-- <SendsHeader/> -->

        <div class="tab-header">
          <div class="tab" :class="{ active: tabs.likes }">
            <p class="title" @click="tabActive('likes')">Лайки +15</p>
          </div>
          <div class="tab" :class="{ active: tabs.views }">
            <p class="title" @click="tabActive('views')">
              Просмотры профиля + 15
            </p>
          </div>
          <div class="active-line" :class="{ active: tabs.views }"></div>
        </div>

        <component :is="activeTab"></component>
      </div>

      <div class="sidebar">
        <SpecialProposal/>
      </div>
    </div>
  </section>
  <NotificationsMobile/>
</template>
<script setup>
import LikesTabContent from '@/components/Notifications/LikesTabContent.vue'
import ViewsTabContent from '@/components/Notifications/ViewsTabContent.vue'
import SpecialProposal from '@/components/SpecialProposal.vue'
import NotificationsMobile from '@/components/Notifications/NotificationsMobile.vue'
import { ref, reactive, computed } from "vue";
const tabs = reactive({
  likes: true,
  views: false,
});
const activeTab = computed(() => {
  if(tabs.likes) {
    return LikesTabContent
  } else if (tabs.views) {
    return ViewsTabContent
  }
})
const tabActive = (param) => {
  if (param === "likes") {
    tabs.likes = true;
    tabs.views = false;
  } else if (param === "views") {
    tabs.views = true;
    tabs.likes = false;
  }
};
</script>
<style lang="scss">
#notifications {
  padding-left: 100px;
  margin: 0 auto;
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(860px, 1057px) minmax(300px, 376px);
    column-gap: 30px;
    align-items: center;
    .main-content {
      position: relative;
      background: rgba(196, 196, 196, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.33);
      height: 100vh;
      .tab-header {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        position: absolute;
        top: 0;
        left: 0;
        padding: 70px 0 18px 0;
        background: rgba(196, 196, 196, 0.05);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        z-index: 10;
        .tab {
          cursor: pointer;
          .title {
            font-size: 18px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.33);
          }
        }
        .tab.active {
          .title {
            font-size: 18px;
            font-weight: 600;
            color: #fff;
          }
        }
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
      }
    }
    // .sidebar {
    // }
  }
}
@media (max-width: 1200px) {
  #notifications {
    display: none;
  }
}
</style>