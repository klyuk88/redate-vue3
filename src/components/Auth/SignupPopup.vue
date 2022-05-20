<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
    </div>
    <div class="auth__back__btn">
      <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__header">
              <h1>Регистрация</h1>
              <p>
                Начните новые знакомства после быстрой регистрации. Ваши данные
                будут защищены.
              </p>
            </div>
            <div class="signup__input__box">
              <input
                class="input"
                type="text"
                placeholder="Телефон / Электронная почта"
              />
              <input class="input" type="password" placeholder="Пароль" />
              <input
                class="input"
                type="password"
                placeholder="Повторите пароль"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="signup__footer">
        <div class="signup__btn">Продолжить</div>
        <div class="signup__footer__menu">
          <p>Есть учетная запись?</p>
          <span>Войти</span>
        </div>
        <div class="signup__footer__terms">
          <p>
            Продолжая, вы принимаете
            <span> Пользовательское соглашение</span>
            и
            <span>Политику конфиденциальности</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
}
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup__background {
  @extend .flex__center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 100;
  flex-direction: column;
}
.signup__page {
  @extend .flex__center;
  flex-direction: column;
}
.auth__back__btn {
  @extend .flex__center;
  @extend .text;
  cursor: pointer;
  position: fixed;
  top: 70px;
  left: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.auth__back__btn__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;

}
.signup__navigation {
  position: fixed;
  top: 64px;
  width: 176px;
  height: 4px;
  display: flex;
  justify-content: space-between;
}
.navigation__item {
  width: 32px;
  height: 4px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.33);
  &.active {
    background: #2b66fb;
    cursor: pointer;
  }
}
.signup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 314px;
  height: 83px;
}
.signup__border {
  @extend .flex__center;
  width: 446px;
  height: 447px;
  border: 1px solid rgba(43, 102, 251, 0.4);
  border-radius: 32px;
  margin-bottom: 83px;
  margin-top: 208px;
}
.signup__block {
  @extend .flex__center;
  width: 422px;
  height: 423px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
  border-radius: 24px;
}
.signup__block__container {
  @extend .flex__center;
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
  height: 327px;
}

.signup__input__box {
  @extend .flex__center;
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
  height: 212px;
}
.signup__footer {
  @extend .flex__center;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  height: 148px;
}
.signup__btn {
  @extend .flex__center;
  width: 236px;
  height: 47px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  cursor: pointer;
}
.signup__footer__menu {
  @extend .flex__center;
  justify-content: space-between;
  width: 194px;
  height: 21px;
}
.signup__footer__terms {
  @extend .flex__center;
  width: 340px;
  height: 32px;
  p {
    font-size: 12px;
    line-height: 132.5%;
  }
  span {
    font-size: 12px;
    line-height: 132.5%;
    color: #2b66fb;
  }
}
</style>
