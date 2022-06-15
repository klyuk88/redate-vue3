<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
    </div>
    <router-link to="/start">
      <div class="auth__back__btn">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
    </router-link>
    <div class="signup__page">
      <div class="signup__border" :class="{ animated__border__sign: isClicked }">
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
                @click="isClicked = true"
              />
              <input
                class="input middle"
                type="password"
                placeholder="Пароль"
                @click="isClicked = true"
              />
              <input
                class="input last"
                type="password"
                placeholder="Повторите пароль"
                @click="isClicked = true"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__body">
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
      <div class="signup__footer">
        <div class="signup__btn" @click="isClicked = true">Продолжить</div>
        <div class="signup__footer__menu">
          <p>Есть учетная запись?</p>
          <router-link to="/auth">
            <span>Войти</span>
          </router-link>
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
<script setup>
import { ref } from "vue";

const isClicked = ref(false);
</script>
<style lang="scss">
.mobile__body {
  display: none;
}
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
  top: 80px;
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
  margin-bottom: 32px;
  margin-top: 48px;
}
.input {
  &.last {
    margin-bottom: 48px;
  }
  &.middle {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
.signup__border {
  @extend .flex__center;
  width: 446px;
  // border: 1px solid rgba(43, 102, 251, 0.4);
  border-radius: 32px;
  margin-bottom: 83px;
  margin-top: 208px;
}
.signup__block {
  @extend .flex__center;
  width: 422px;
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
}

.signup__input__box {
  @extend .flex__center;
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
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
  align-items: baseline;
  width: 179px;
  height: 21px;
  span {
    cursor: pointer;
  }
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
.animated__border__sign {
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: borderanimationsign;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  // animation-iteration-count: infinite;
}
@keyframes borderanimationsign {
  0% {
    border: 1px solid #2965ff;
    border-radius: 30px;
    width: 425px;
    height: 415px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 428px;
    height: 420px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 426px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 445px;
    height: 442px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 466px;
    height: 420px;
  }
}

@media (max-width: 1200px) {
  .auth__back__btn {
    left: 3.33vw;
  }
  .auth__back__btn__title {
    display: none;
  }
  .signup__border {
    display: none;
  }
  .signup__page {
    height: 165.38vw;
    display: flex;
    justify-content: space-between;
  }
  .mobile__body {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 95.384vw;
    width: 85.89vw;
    .signup__header {
      width: 77.435vw;
      height: 22.56vw;
    }
    .signup__input__box {
      width: 85.89vw;
      height: 54.358vw;

      .input {
        width: 85.89vw;
        height: 15.384vw;
        &:focus {
          border: #ffffff 0.256vw solid;
        }
      }
    }

    .signup__block__container {
      justify-content: space-between;
      height: 95.384vw;
    }
  }
  .signup__footer {
    height: 57.69vw;
    .signup__btn {
      width: 85.89vw;
      height: 15.384vw;
    }
    .signup__footer__menu {
      width: 44.615vw;
      height: 5.384vw;
      margin-top: 6.153vw;
      margin-bottom: 22.564vw;
    }
  }
}
</style>
