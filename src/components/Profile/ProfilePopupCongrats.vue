<template>
  <div class="congrats__background">
    <div class="congrats__block">
      <div class="congrats__content">
        <div class="congrats__header__border">
          <div class="congrats__header__title">Diamond</div>
        </div>
        <div class="congrats__body__container">
          <div class="congrats__logo">
            <img src="@/assets/images/main/diamond__logo.svg" alt="" />
          </div>
          <h1 class="congrats__title">Поздравляем!</h1>
          <p class="congrats__text">
            Администрация сайта присвоила Вам особый статус «DIAMOND».
          </p>
          <p class="congrats__desc">
            Теперь Ваш профиль стал золотого цвета, он сильно выделяется в общем
            поиске, начало диалога с Вами ценится гораздо дороже, чем с другими
            пользователями.
          </p>
          <p class="congrats__desc">
            Статус «DIAMOND» невозможно купить. Оставайтесь такой же красивой, приятных Вам знакомств.
          </p>
          <div class="congrats__btn">Посмотреть на свою анкету</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.congrats__background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  width: 100%;
  height: 100%;
}
.congrats__block {
  width: 408px;
  height: 377px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.congrats__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.congrats__header__border {
  width: 140px;
  height: 30px;
  background: rgba(36, 37, 41, 0.6);
  box-shadow: 0px 0px 10px rgba(255, 187, 84, 0.3);
  border-radius: 12px 12px 0px 0px;
  border: 1px solid #F9AE3F;
  display: flex;
  justify-content: center;
  align-items: center;
}
.congrats__header__title {
  font-family: "Palatino";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  letter-spacing: 0.19em;
  text-transform: uppercase;
  background: linear-gradient(
    132.27deg,
    #f9ae3f -0.77%,
    #ffdba5 36.67%,
    #ad6902 96.37%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 0px 10px rgba(255, 187, 84, 0.3);
}
.congrats__body__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 408px;
  height: 348px;
  background: rgba(36, 37, 41, 0.7);
  border-radius: 24px;
  border: 1px solid #F9AE3F;
}
.congrats__logo {
}
.congrats__title {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    132.27deg,
    #f9ae3f -0.77%,
    #ffdba5 36.67%,
    #ad6902 96.37%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.congrats__text {
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
.congrats__desc {
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
.congrats__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 244px;
  height: 34px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
}
@media (max-width: 1200px) {
  .congrats__content {
    width: 336px;
    height: 381px;
    .congrats__body__container {
      width: 336px;
      height: 352px;
    }
  }
}
</style>
