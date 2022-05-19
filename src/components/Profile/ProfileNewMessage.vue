<template>
  <div class="profile__message__block" @click.self="close">
    <div class="progile__message__box">
      <div class="profile__message__container">
        <div class="profile__message__container__content">
          <div class="profile__message__title">Новое сообщение</div>
          <div class="profile__message__text__block">
            <textarea
              class="profile__message__text"
              placeholder="Привет!"
            ></textarea>
            <div class="profile__message__description">
              * После отправления, ваше сообщение будет перенесено в раздел
              «Диалоги»
            </div>
          </div>
          <div class="profile__message__button">
            <div class="button__box">
              <div class="button__text">Отправить</div>
              <div class="bitton__options">(1 из 10)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="profile__message__close__button" @click="close">
        <img src="@/assets/images/main/close-message.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$store.commit('closeNewMessageWindow')
    },
  },
};
</script>
<style lang="scss">
.text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
}
.profile__message__block {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.progile__message__box {
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
  background: rgba(36, 37, 41, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.14);
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
  background: rgba(36, 37, 41, 0.6);
  border-radius: 11px;
  padding: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
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
.bitton__options {
  @extend .text;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.33);
}
.profile__message__close__button {
  margin-left: 24px;
  color: #ffffff;
  cursor: pointer;
}
</style>
