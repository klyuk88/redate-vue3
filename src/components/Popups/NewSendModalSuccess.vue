<script setup>
import { ref } from 'vue'
import { useStore } from '@/stores/main.js'

const store = useStore()

const popup = ref(null)

const clickOutsideHandler = (event) => {
  if (event.target === popup.value) {
    store.newSendWindowSuccess = false
  }
}

const clickCloseHandler = () => {
  store.newSendWindowSuccess = false
}
</script>

<template>
  <div
    ref="popup"
    class="diamond__lost__background"
    @click="clickOutsideHandler($event)"
  >
    <div class="diamond__lost__block">
      <div class="diamond__lost__content">
        <div class="diamond__lost__info">
          <h1 class="diamond__lost__title">Ваша рассылка создана!</h1>
          <p class="diamond__lost__text">
            Ваша рассылка создана и отправлена на проверку в модерацию. После
            проверки она будет опубликована.
          </p>
        </div>
        <div class="diamond__lost__buttons">
          <div class="diamond__lost__store" @click="clickCloseHandler()">
            Продолжить
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  text-align: center;
  color: #ffffff;
}
.diamond__lost__background {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  z-index: 1000;
}
.diamond__lost__block {
  padding: 24px;
  width: 314px;

  background: rgba(36, 37, 41, 0.6);
  border-radius: 24px;
  border: 1px solid #2b66fb;
}
.diamond__lost__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.diamond__lost__info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.diamond__lost__title {
  margin-bottom: 4px;
  @extend .text;
}
.diamond__lost__text {
  @extend .text;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
}
.diamond__lost__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 256px;
  height: 34px;
}
.diamond__lost__cancel {
  @extend .text;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  cursor: pointer;
}
.diamond__lost__store {
  @extend .text;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 34px;
  border-radius: 11px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  border: 1px solid #2b66fb;
  background: #2b66fb;
  cursor: pointer;
}
</style>
