<script setup>
import { useStore } from '@/stores/main.js'
const store = useStore()
const close = () => {
  store.newMessageWindow = false
}
</script>

<template>
  <div
    class="profile__message__block"
    @click.self="close()"
    @keydown.esc="close()"
  >
    <div class="profile__message__box">
      <div class="profile__message__container">
        <div class="profile__message__container__content">
          <div class="profile__message__title">Новое сообщение</div>
          <div class="profile__message__text__block">
            <textarea
              class="profile__message__text"
              placeholder="Привет!"
            ></textarea>
            <div class="profile__message__description">
              * После отправления, Ваше сообщение будет перенесено в раздел
              «Диалоги»
            </div>
          </div>
          <div class="mobile__btn__box">
            <div class="button__close" @click="close()">Отмена</div>
            <div class="profile__message__button">
              <div class="button__box">
                <div class="button__text">Отправить</div>
                <div class="button__options">(1 из 10)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="profile__message__close__button" @click="close()">
        <img src="@/assets/images/main/close-message.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.text {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
}
.profile__message__block {
  position: fixed;
  z-index: 1002;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile__message__box {
  display: flex;
  justify-content: center;
}

.profile__message__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 387px;
  height: 403px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid #2b66fb;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
  border-radius: 24px;
}
.profile__message__container__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 339px;
  height: 355px;
}
.profile__message__title {
  @extend .text;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.profile__message__text__block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 339px;
  height: 241px;
}
.profile__message__text {
  @extend .text;
  width: 339px;
  height: 201px;
  outline: none;
  resize: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  background: none;
  border-radius: 11px;
  padding: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  color: #ffffff;
  &::placeholder {
    color: rgba(255, 255, 255, 0.33);
  }
}
.button__close {
  display: none;
}
.profile__message__description {
  @extend .text;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 339px;
  height: 32px;
  font-size: 12px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.33);
}
.profile__message__button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  width: 339px;
  height: 54px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
}
.button__box {
  width: 155px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.button__text {
  @extend .text;
  font-size: 16px;
  color: #ffffff;
}
.button__options {
  @extend .text;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.33);
}
.profile__message__close__button {
  margin-left: 24px;
  color: #ffffff;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .profile__message__close__button {
    display: none;
  }
  .profile__message__box {
    width: 85.89vw;
    height: 98.205vw;
    border: 0.256vw solid #2b66fb;
    border-radius: 6.153vw;
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    .profile__message__container {
      width: 73.589vw;
      height: 51.538vw;
      border-radius: 2.82vw;
      background: none;
      border: none;
      backdrop-filter: none;
      box-shadow: none;
      .profile__message__container__content {
        height: 85.89vw;
        width: 73.589vw;
        align-items: center;

        .mobile__btn__box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 76.153vw;
          height: 8.717vw;
          .button__close {
            width: 30.769vw;
            height: 8.717vw;
            border: 0.256vw solid rgba(255, 255, 255, 0.33);
            border-radius: 2.82vw;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .profile__message__text__block {
          width: 73.589vw;
          height: 61.79vw;
          .profile__message__text {
            width: 73.589vw;
            height: 51.538vw;
            background: none;
          }
        }
        .profile__message__button {
          width: 43.28vw;
          height: 8.46vw;
          border-radius: 2.82vw;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          .button__box {
            justify-content: space-evenly;
            align-items: center;
          }
          .button__text {
            font-weight: 700;
            font-size: 3.589vw;
            line-height: 132.5%;
          }
          .button__options {
            font-weight: 700;
            font-size: 3.0769vw;
            line-height: 132.5%;
          }
        }
      }
    }
  }
}
</style>
