<script>
export default {}
</script>

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
            Теперь ваш профиль выделяется золотой рамкой и увеличилось
            количество доступных диалогов в день. Вы выделяетесь из поиска и
            начало диалога с Вами цениться гораздо дороже, чем с обычными
            пользователями сайта.
          </p>
          <div class="congrats__btn">Посмотреть на свою анкету</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.congrats__background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
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
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px rgba(255, 187, 84, 0.3);
  border-radius: 12px 12px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.congrats__header__border:before {
  background: linear-gradient(
    103.31deg,
    #f9ae3f 100%,
    #ffdba5 100%,
    #ad6902 100%
  );
}
.congrats__header__border:before {
  content: '';
  width: 140px;
  height: 30px;
  position: absolute;
  border-radius: 12px 12px 0px 0px;
  padding: 1px;
  -webkit-mask: linear-gradient(#fff, #fff 0) content-box,
    linear-gradient(#fff, #fff 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.congrats__header__title {
  font-family: 'Palatino';
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
  margin-top: 5px;
  margin-left: 3px;
}
.congrats__body__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 408px;
  height: 348px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 24px;
}
.congrats__body__container:before {
  background: linear-gradient(
    103.31deg,
    #f9ae3f 100%,
    #ffdba5 100%,
    #ad6902 100%
  );
}
.congrats__body__container:before {
  content: '';
  width: 408px;
  height: 348px;
  position: absolute;
  border-radius: 24px;
  padding: 1px;
  -webkit-mask: linear-gradient(#fff, #fff 0) content-box,
    linear-gradient(#fff, #fff 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.congrats__logo {
  margin: 24px 0 16px 0;
}
.congrats__title {
  font-family: 'Mulish';
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
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin: 4px 0 18px 0;
}
.congrats__desc {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  width: 306px;
}
.congrats__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 244px;
  height: 34px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
  margin: 16px 0 24px 0;
}
@media (max-width: 1200px) {
  .congrats__content {
    width: 85.89vw;
    height: 97.69vw;
    .congrats__body__container {
      width: 85.89vw;
      height: 90.256vw;
      p {
        width: 300px;
      }
    }
  }
  .congrats__body__container:before {
    content: '';
    width: 335px;
  }
}
</style>
