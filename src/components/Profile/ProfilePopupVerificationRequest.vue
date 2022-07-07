<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const popup = ref(null)

const clickOutsideHandler = (event) => {
  if (event.target === popup.value) {
    emit('close')
  }
}

const clickCloseHandler = () => {
  emit('close')
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
          <h1 class="diamond__lost__title">Верификация</h1>
          <p class="diamond__lost__text">
            Необходимо пройти верификацию, для полного открытия доступа.
          </p>
        </div>
        <div class="diamond__lost__buttons">
          <div class="diamond__lost__cancel" @click="clickCloseHandler()">
            Назад
          </div>
          <div class="diamond__lost__store">Пройти</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.signup__background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
}
.signup__border {
  border: none;
  background: none;
  .signup__block {
    border: 1px solid #2b66fb;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    .signup__block__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      .signup__header {
        width: 244px;
        margin: 0;
        text-align: center;
        h1 {
          font-weight: 600;
          font-size: 18px;
          line-height: 153.5%;
        }
        p {
          text-align: center;
          width: 244px;
          height: 54px;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
    .btn__block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 256px;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 34px;
        border: 1px solid rgba(255, 255, 255, 0.33);
        border-radius: 11px;
        cursor: pointer;
      }
      .btn__del {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 34px;
        background: #2b66fb;
        border-radius: 11px;
        cursor: pointer;
      }
    }
  }
}
@mixin rings($duration, $delay) {
  opacity: 0;
}
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
}
.diamond__lost__block {
  padding: 24px;
  width: 304px;

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
  width: 246px;
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
  width: 246px;
  margin-bottom: 16px;
}
.diamond__lost__buttons {
  display: flex;
  justify-content: space-between;
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
