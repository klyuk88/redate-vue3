<script setup>
const emit = defineEmits(['hideModalHide'])
</script>

<template>
  <div class="hide__popup__background" @click.self="emit('hideModalHide')">
    <div class="hide__popup__block">
      <div class="hide__popup__content">
        <div class="hide__popup__text">
          <div class="hide__popup__title">Скрыть пользователя?</div>
          <div class="hide__popup__description">
            Пользовател больше не появится в Ваших запросах и рассылках.
          </div>
        </div>
        <div class="hide__popup__button__box">
          <div
            class="hide__popup__button grey__btn"
            @click="emit('hideModalHide')"
          >
            Отмена
          </div>
          <div class="hide__popup__button blue__btn">Скрыть</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hide__popup__background {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hide__popup__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 16px;
  width: 312px;
  height: 166px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid #2b66fb;
  border-radius: 24px;
}
.hide__popup__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 118px;
}
.hide__popup__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 264px;
  height: 68px;
}
.hide__popup__title {
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
.hide__popup__description {
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
.hide__popup__button__box {
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 256px;
  height: 34px;
}
.hide__popup__button {
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
