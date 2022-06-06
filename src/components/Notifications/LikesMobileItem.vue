<template>
  <div class="likes-mobile-item">
    <div
      class="m-mess_item"
      :class="{ 'm-new': false }"
      v-touch:swipe.left="swipeHandlerLeft"
      v-touch:swipe.right="swipeHandlerRight"
    >
      <div class="m-mess_item-img">
        <div class="m-mess_item-img m-online"></div>
        <img
          src="https://densegodnya.ru/thumb/2/JxPhNSBaYxUAWgsbD-ltUw/r/d/snezhnyy_bars.jpg"
          alt=""
        />
      </div>
      <div class="m-mess_start">
        <div class="name">Александр</div>
        <div class="meta-block">
          <p class="note">Понравилась ваша анкета</p>
          <p class="time">15 минут назад</p>
        </div>
      </div>
      <div class="m-mess_end">
        <img
          src="@/assets/images/message-icon.svg"
          alt=""
          class="new-mess-icon"
        />
      </div>
    </div>
    <div class="delite-block" :class="{ deliteShow: deliteShow }">
      <div class="delite-btn">Удалить</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const deliteShow = ref(false);

const swipeHandlerLeft = () => {
  deliteShow.value = true;
};
const swipeHandlerRight = () => {
  deliteShow.value = false;
};
</script>

<style lang="scss">
.likes-mobile-item {
  display: flex;
  gap: 2px;
  margin-top: 2px;
  align-items: stretch;
  justify-content: end;
  width: 100%;
  transition: transform 0.2s ease;
  position: relative;
  cursor: pointer;
  .delite-block {
    display: flex;
    align-items: stretch;
    gap: 2px;
  }
  .delite-block:hover,
  .delite-block.deliteShow {
    .m-mess_del {
      width: 0;
      opacity: 0;
      overflow: hidden;
      border: none;
    }
    .delite-btn {
      width: 100px;
    }
  }

  .delite-btn {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 2px;
    font-size: 12px;
    font-weight: 700;
    width: 0;
    overflow: hidden;
    transition: width 0.2s ease;
  }
  .m-mess_del-mob {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    align-items: center;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, width 0.2s ease;
    width: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: none;
  }

  .m-mess_item {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    background: linear-gradient(#414141, #414141),
      linear-gradient(#414141, #414141);
    background-size: 90.5% 1px;
    background-repeat: no-repeat, no-repeat;
    background-position: right bottom;
    transition: transform 0.2s ease;
  }

  .m-new {
    background: rgba(255, 255, 255, 0.05) !important;
  }

  .m-mess_item-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: top;
    position: relative;
    flex-shrink: 0;
  }

  .m-mess_item-img img {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .m-mess_start {
    display: inline-block;
    margin-left: 12px;
    margin-right: auto;
  }

  .name {
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 3px;
  }

  .meta-block {
    .note {
      font-size: 13px;
      font-weight: 600;
      opacity: 0.6;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .time {
      font-size: 13px;
      font-weight: 500;
      opacity: 0.3;
    }
  }

  .m-mess_time {
    font-size: 14px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.33);
  }

  .m-mess_new {
    width: 20px;
    text-align: center;
    line-height: 20px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 40px;
    color: #fff;
    font-size: 12px;
    margin-left: auto;
    font-weight: 600;
  }

  .m-mess_end {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58.75px;
    height: 39px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 14px;
  }

  .m-mess_del {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #fff;
    align-items: center;
    cursor: pointer;
    width: 40px;
    box-sizing: border-box;
    border: 1px solid #434447;
    border-radius: 2px;
    transition: width 0.2s ease;
  }

  .m-online {
    content: "";
    position: absolute;
    background: #2b66fb;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    bottom: 1px;
    right: 4px;
    z-index: 1;
  }

  .m-information {
    max-width: 200px;
    text-align: center;
    margin-top: 50px;
  }

  .m-information_text {
    font-size: 15px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
  }

  .m-information_btn {
    color: #2b66fb;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid #2b66fb;
    border-radius: 11px;
    text-align: center;
    width: 120px;
    margin: 0 auto;
    margin-top: 20px;
    line-height: 34px;
    cursor: pointer;
  }
}

@media (max-width: 1200px) {
  .likes-mobile-item {
    .m-mess_item {
      width: 100%;
      background-position: bottom;
    }
    .m-mess_del {
      display: none;
    }
    .m-mess_wrapper {
      gap: 0;
    }
  }
}
</style>