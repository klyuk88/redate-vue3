<template>
  <section id="sendings">
    <div class="sendings-grid">
      <div class="main-content">
        <div class="scrollbar-container" ref="scrollbarContainer">
          <div class="scrollbar" ref="scrollbar"></div>
        </div>
        <div class="header">
          <h1 class="title">Новые рассылки</h1>
        </div>
        <div class="items" ref="items" @scroll="scrollHeandler">
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
          </div>
        </div>
      </div>
      <div class="sidebar">
        <Sorting />
        <div class="create-new-send">Создать новую рассылку</div>
      </div>
    </div>
  </section>
</template>
<script setup>
import NewSend from "../components/NewSend.vue";
import SendItem from "../components/Sends/SendItem.vue";
import Sorting from "../components/Sends/Sorting.vue";
import { ref, computed, onMounted } from "vue";

const scrollbar = ref(null);
const scrollbarContainer = ref(null);
const items = ref(null);

const scrollHeandler = () => {
  scrollbar.value.style.top =
    (scrollbarContainer.value.clientHeight * items.value.scrollTop) /
      items.value.scrollHeight +
    "px";
};

onMounted(() => {
  scrollbar.value.style.height =
    (scrollbarContainer.value.clientHeight * items.value.clientHeight) /
      items.value.scrollHeight +
    "px";
});
</script>
<style lang="scss">
#sendings {
  padding-left: 130px;
  margin: 0 auto;
  .sendings-grid {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(750px, 1057px) 376px;
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
      .items {
        padding-top: 150px;
        position: relative;
        height: 100vh;
        overflow-y: auto;
        scrollbar-width: none;
        .mansoryContainer {
          margin: 0 auto;
        }
      }
      .items::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-container {
        position: absolute;
        right: 5px;
        bottom: 5px;
        top: 150px;
        width: 1px;
        background: rgba($color: #fff, $alpha: 0.3);
        .scrollbar {
          position: absolute;
          right: 0;
          height: 100px;
          width: 2px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 1);
        }
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
</style>