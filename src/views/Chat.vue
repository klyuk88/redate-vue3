<script setup>
import { computed, reactive } from 'vue'
import DialogSidebar from '@/components/Chat/DialogSidebar.vue'
import ChatsTabContent from '@/components/Chat/ChatsTabContent.vue'
import AppsTabContent from '@/components/Chat/AppsTabContent.vue'
import ChatMobile from '@/components/Chat/ChatMobile.vue'

const tabs = reactive({
  chats: true,
  apps: false,
})

const activeTab = computed(() => {
  if (tabs.chats) {
    return ChatsTabContent
  } else if (tabs.apps) {
    return AppsTabContent
  }

  return null
})

const tabActive = (param) => {
  if (param === 'chats') {
    tabs.chats = true
    tabs.apps = false
  } else if (param === 'apps') {
    tabs.apps = true
    tabs.chats = false
  }
}
</script>

<template>
  <section id="dialog">
    <div class="grid">
      <div class="content">
        <div v-if="false" class="search-results">
          <p class="label">Диалоги: <span class="results">222</span></p>
        </div>

        <div v-if="true" class="tab-header">
          <div class="tab" :class="{ active: tabs.chats }">
            <p class="title" @click="tabActive('chats')">Диалоги</p>
          </div>
          <div class="tab" :class="{ active: tabs.apps }">
            <p class="title" @click="tabActive('apps')">Заявки + 15</p>
          </div>
          <div class="active-line" :class="{ active: tabs.apps }"></div>
        </div>

        <component :is="activeTab"></component>
      </div>

      <div class="sidebar">
        <DialogSidebar />
      </div>
    </div>

    <ChatMobile />
  </section>
</template>

<style lang="scss">
#dialog {
  padding-left: 100px;
  margin: 0 auto;
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
        background: rgba(28, 29, 33, 0.01);
        backdrop-filter: blur(50px);
        .label {
          font-size: 18px;
          font-weight: 700;
        }
        .results {
          opacity: 0.3;
        }
      }
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
  }
}
</style>
