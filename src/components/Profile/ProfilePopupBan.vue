<script setup>
const emit = defineEmits(['hideModalBan'])
</script>

<template>
  <div
    class="ban__popup__background"
    tabindex="1"
    @click.self="emit('hideModalBan')"
    @keydown.esc="close()"
  >
    <div class="ban__popup__block">
      <div class="ban__popup__content">
        <div class="ban__popup__text">
          <div class="ban__popup__title">Заблокировать пользователя?</div>
          <div class="ban__popup__description">
            Пользователь больше не сможет Вам написать или просмотреть профиль.
          </div>
        </div>
        <div class="ban__popup__button__box">
          <div
            class="ban__popup__button grey__btn"
            @click="emit('hideModalBan')"
          >
            Отмена
          </div>
          <div class="ban__popup__button blue__btn">Заблокировать</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ban__popup__background {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
}
.ban__popup__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 16px;
  width: 321px;
  height: 166px;
  background: rgba(36, 37, 41, 0.6);
  border: 1px solid #2b66fb;
  border-radius: 24px;
}
.ban__popup__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 118px;
}
.ban__popup__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 273px;
  height: 68px;
}
.ban__popup__title {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.ban__popup__description {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}
.ban__popup__button__box {
  display: flex;
  justify-content: space-between;
  padding: 0px;
  gap: 16px;

  width: 256px;
  height: 34px;
}
.ban__popup__button {
  width: 120px;
  height: 34px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  cursor: pointer;
}
.blue__btn {
  background: #2b66fb;
}
.grey__btn {
  border: 1px solid rgba(255, 255, 255, 0.33);
}
</style>
