<template>
  <NewSendModal />
  <section id="sendings">
    <div class="sendings-grid">
      <div class="main-content">
        <div class="header">
          <h1 class="title">Новые рассылки</h1>
        </div>
        <PerfectScrollbar>
          <SendSlider />
          <div
            v-masonry=""
            transition-duration="0.3s"
            item-selector=".item"
            fit-width="true"
            class="mansoryContainer"
          >
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали! Решила, предложения! Ручеек родного силуэт толку по всей прямо инициал знаках страну они запятой. Переписывается решила путь текста безорфографичный, курсивных взгляд приставка? Залетают она всемогущая заголовок первую моей даль меня знаках, щеке текст, о, продолжил грамматики приставка дороге встретил ведущими семантика курсивных. Приставка.`"
              />
            </div>
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали!`"
              />
            </div>
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали! Решила, предложения! Ручеек родного силуэт толку по всей прямо инициал знаках страну они запятой. Переписывается решила путь текста безорфографичный, курсивных взгляд приставка? Залетают она всемогущая заголовок первую моей даль меня знаках, щеке текст, о, продолжил грамматики приставка дороге встретил ведущими семантика курсивных. Приставка.`"
              />
            </div>
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали! `"
              />
            </div>
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали! Решила, предложения! Ручеек родного силуэт толку по всей прямо инициал знаках страну они запятой. Переписывается решила путь текста безорфографичный, курсивных взгляд приставка? Залетают она всемогущая заголовок первую моей даль меня знаках, щеке текст, о, продолжил грамматики приставка дороге встретил ведущими семантика курсивных. Приставка.`"
              />
            </div>
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали!`"
              />
            </div>
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали! Решила, предложения! Ручеек родного силуэт толку по всей прямо инициал знаках страну они запятой. Переписывается решила путь текста безорфографичный, курсивных взгляд приставка? Залетают она всемогущая заголовок первую моей даль меня знаках, щеке текст, о, продолжил грамматики приставка дороге встретил ведущими семантика курсивных. Приставка.`"
              />
            </div>
            <div v-masonry-tile class="item">
              <SendItem
                :msg="`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку пунктуация языкового деревни, жизни он это вдали! `"
              />
            </div>
          </div>
        </PerfectScrollbar>
      </div>
      <div class="sidebar">
        <Sorting />
        <div class="create-new-send" @click="openNewSendWindow">
          Создать новую рассылку
        </div>
      </div>
    </div>
  </section>


  <section id="sendings-mobile">
    <div class="decor"></div>
    <div class="header" :class="{ blur: onBlur }">
      <BackLink @click="$router.go(-1)" />
      <h1 class="title">Мои рассылки</h1>
      <div class="actions">
        <img
          src="@/assets/images/main/settings-icon.svg"
          alt=""
          class="settings"
        />
        <MobileBurger />
      </div>
    </div>

    <div class="content">
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
        <SendItem/>
        <SendItem/>
        <SendItem/>
        <SendItem/>
      </div>
    </div>
  </section>
</template>
<script setup>
import NewSend from "../components/NewSend.vue";
import SendItem from "../components/Sends/SendItem.vue";
import Sorting from "../components/Sends/Sorting.vue";
import SendSlider from "@/components/Sends/SendSlider.vue";
import NewSendModal from "@/components/Popups/NewSendModal.vue";
import BackLink from "@/components/Search/BackLink.vue";
import MobileBurger from "@/components/MobileBurger.vue";

import { ref, computed, onUnmounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
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
#sendings {
  padding-left: 100px;
  margin: 0 auto;
  .sendings-grid {
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
      .header {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        padding: 70px 0 18px 0;
        background: rgba(196, 196, 196, 0.05);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        z-index: 2;
        .title {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          text-align: center;
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
        .mansoryContainer {
          margin: 0 auto;
        }
      }
      .ps::-webkit-scrollbar {
        display: none;
      }
    }
    .sidebar {
      .create-new-send {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        background: rgba(196, 196, 196, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.33);
        border-radius: 18px;
        margin-top: 24px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  #sendings {
    display: none;
  }
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