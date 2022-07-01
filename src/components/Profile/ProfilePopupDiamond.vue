<script>
export default {}
</script>

<template>
  <div class="diamond__background">
    <div class="diamond__popup__block">
      <div class="diamond__popup__content">
        <div class="diamond__info">
          <h2 class="diamond__title">Открыть диалог с «Цио Хао»?</h2>
          <p class="diamond__text">
            После оплаты сообщения автоматически переносятся в раздел «Диалог»
          </p>
        </div>
        <div class="diamond__button__block">
          <div class="diamond__button__cancel">Отмена</div>
          <div class="diamond__button__store">Оплатить $25</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.diamond__background {
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
.diamond__popup__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 16px;
  width: 310px;
  background: rgba(36, 37, 41, 0.6);
  border-radius: 24px;
  border: 1px solid #f9ae3f;
}
.diamond__popup__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 4px;
  width: 262px;
}
.diamond__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 262px;
}
.diamond__title {
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
.diamond__text {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  width: 246px;
  margin-bottom: 16px;
}
.diamond__button__block {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 256px;
  height: 34px;
}
.diamond__button__cancel {
  width: 120px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
}
.diamond__button__store {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
  width: 120px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 11px;
  border: 1px solid #f9ae3f;
}
</style>
