<template>
  <div class="diamond__background">
    <div class="diamond__popup__block">
      <div class="diamond__popup__content">
        <div class="diamond__info">
          <h2 class="diamond__title">Premium Аккаунт</h2>
          <p class="diamond__text">
            У вас стоит лимит до 10 сообщений в день. Снять ограничения можно
            купив “Premium” подписку.
          </p>
        </div>
        <div class="diamond__button__block">
          <div class="diamond__button__cancel">Отмена</div>
          <div class="diamond__button__store">Магазин</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
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
  width: 304px;
  height: 184px;
  background: rgba(36, 37, 41, 0.6);
  border-radius: 24px;
}
.diamond__popup__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0px;
  gap: 4px;
  width: 242px;
  height: 136px;
}
.diamond__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 242px;
  height: 86px;
}
.diamond__title {
  font-family: "Mulish";
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
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}
.diamond__button__block {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 16px;
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
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
}
.diamond__button__store {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
  width: 120px;
  height: 34px;
  border: 1px solid;
  border-image: linear-gradient(
    132.27deg,
    #f9ae3f -0.77%,
    #ffdba5 36.67%,
    #ad6902 96.37%
  );
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
