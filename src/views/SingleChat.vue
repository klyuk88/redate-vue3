<template>
  <section id="dialog" class="single-chat">
    <div id="di-mobile-content">
      <div class="di-mob-decor"></div>

      <div class="di-mob-header single-chat-header blur">
        <BackLink @click="$router.go(-1)" />
        <div class="dialog-status-wrap">
          <p class="name">Александр</p>
          <span class="status">Онлайн</span>
        </div>
        <div class="dialog-mob-avatar-wrap">
          <img
            src="https://densegodnya.ru/thumb/2/JxPhNSBaYxUAWgsbD-ltUw/r/d/snezhnyy_bars.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="mobile-message-list with-scroll">
        <MobileMessageItem
          :right="true"
          :message="'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus omnis, nulla sed atque provident eius natus repellat at libero praesentium illo, velit quam reiciendis quaerat vel asperiores dolore voluptatum ea.'"
        />
        <MobileMessageItem />
        <MobileMessageItem :right="true" />
        <MobileMessageItem />
        <MobileMessageItem :right="true" />
        <MobileMessageItem />
        <MobileMessageItem :right="true" />
        <MobileMessageItem />
        <MobileMessageItem :right="true" />
        <MobileMessageItem />
        <MobileMessageItem :right="true" />
        <MobileMessageItem />
        <MobileMessageItem :right="true" />
      </div>

      <NewMessageMobile />
    </div>

    <div class="grid">
      <div class="content">
        <div class="s-ch-back-avatar-wrap">
          <img
            src="https://i.pinimg.com/736x/e0/2f/f2/e02ff20675915081bcefabdf095b9113--beauty-shoot-beauty-tips.jpg"
            alt=""
          />
        </div>

        <div class="search-results">
          <img src="@/assets/images/back_arr.svg" alt="" class="s-ch-back" @click="$router.go(-1)"/>
          <div class="s-ch-status-data">
            <div class="s-ch-avatar-wrap">
              <img
                src="https://i.pinimg.com/236x/e1/ee/46/e1ee462e266376e66763b057596c62cf.jpg"
                alt=""
              />
            </div>
            <div class="s-ch-name">
              <h6>Александр</h6>
              <span>|</span>
              <p class="s-ch-status">Онлайн</p>
            </div>
          </div>
          <MoreActions />
        </div>

        <div class="message-list with-scroll">
          <MessageItem v-for="(item, index) in 30" :key="index" />
        </div>

        <NewMessage />
      </div>
      <div class="sidebar">
        <DialogSidebar />
      </div>
    </div>
  </section>
</template>

<script setup>
import DialogSidebar from "@/components/Chat/DialogSidebar.vue";
import MobileBurger from "@/components/MobileBurger.vue";
import BackLink from "@/components/Search/BackLink.vue";
import NewMessage from "@/components/Chat/NewMessage.vue";
import MessageItem from "@/components/Chat/MessageItem.vue";
import MoreActions from "@/components/Chat/MoreActions.vue";
import NewMessageMobile from "@/components/Chat/NewMessageMobile.vue";
import MobileMessageItem from "@/components/Chat/MobileMessageItem.vue";

import { computed, ref, onMounted, onUnmounted } from "vue";

const message = ref(null);
</script>

<style lang="scss" scoped>
#dialog {
  #di-mobile-content {
    display: none;
    position: relative;
    .dialog-status-wrap {
      text-align: center;
      .name {
        font-size: 15px;
        font-weight: 600;
      }
      .status {
        font-size: 12px;
        color: #3e74ff;
        font-weight: 600;
      }
    }
    .di-mob-decor {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 50%;
      opacity: 0.3;
      pointer-events: none;
      width: 300px;
      height: 300px;
      transform: translateY(-100%) translateX(-50%);
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
    .di-mob-header.single-chat-header {
      padding-bottom: 10px;
    }
    .di-mob-items {
      padding-top: 140px;
      max-height: 85vh;
      overflow-y: scroll;
      width: 100%;
    }
    .dialog-mob-avatar-wrap {
      width: 36px;
      height: 36px;
      position: relative;
      border-radius: 50%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .mobile-message-list {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 140px;
      height: calc(100vh - 78px);
      overflow-y: auto;
      gap: 8px;
      align-items: flex-start;
    }
  }
  margin: 0 auto;
  padding-left: 100px;
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
        width: 90%;
        z-index: 2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(28, 29, 33, 0.01);
        backdrop-filter: blur(50px);
        .s-ch-back {
          cursor: pointer;
        }
        .results {
          opacity: 0.3;
        }
      }
      .dialog-items {
        padding-top: 150px;
        margin: 0 auto;
        max-height: 90vh;
        overflow-y: scroll;
        width: 100%;
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

#dialog.single-chat {
  .s-ch-avatar-wrap {
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 50%;
    margin-right: 25px;
    img {
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .more-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .message-list {
    padding: 160px 60px 0 60px;
    height: calc(100% - 90px);
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
  }
  .search-results {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100% !important;
    padding-left: 30px;
    padding-right: 30px;
    .s-ch-status-data {
      display: flex;
      align-items: center;
    }
    .s-ch-name {
      display: flex;
      align-items: center;
      gap: 10px;
      h6 {
        font-size: 16px;
        font-weight: 600;
      }
      p {
        font-style: 15px;
        color: #3e74ff;
      }
    }
  }
  .grid {
    .content {
      position: relative;
      .s-ch-back-avatar-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgba($color: #1c1d21, $alpha: 1);
        z-index: -1;
        
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          left: 0;
          top: 0;
          filter: saturate(0) blur(15px);
          opacity: 0.15;

        }
      }
    }
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