<template>
  <div class="signup__background">
    <div class="auth__back__btn">
      <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="signup__page">
      <div class="signup__border" :class="errorCode">
        <div class="signup__block" :class="errorCode">
          <div class="signup__block__container" :class="errorCode">
            <div class="signup__block__header">
              <h1>Введите код</h1>
              <p class="" :class="authPhone">
                Мы отправили вам смс с кодом подтвреждения, введите его для
                продожления регистрации.
              </p>
              <p class="" :class="authMail">
                Мы отправили вам код подтверждения на электронную почту для
                создания нового пароля.
              </p>
            </div>

            <div class="signup__block__numbers">
              <input class="block__item" maxlength="1" autofocus />
              <input class="block__item" maxlength="1" />
              <input class="block__item" maxlength="1" />
              <input class="block__item" maxlength="1" />
            </div>
              <p class="error__message" :class="errorCode">
                Неправильно введен код
              </p>
          </div>
        </div>
      </div>
      <div class="mobile__body">
        <div class="signup__block__container" :class="errorCode">
          <div class="signup__block__header">
            <h1>Введите код</h1>
            <p class="" :class="authPhone">
              Мы отправили вам смс с кодом подтвреждения, введите его для
              продожления регистрации.
            </p>
            <p class="" :class="authMail">
              Мы отправили вам код подтверждения на электронную почту для
              создания нового пароля.
            </p>
          </div>

          <div class="mobile__inputs">
            <div class="signup__block__numbers">
              <input class="block__item" maxlength="1" autofocus />
              <input class="block__item" maxlength="1" />
              <input class="block__item" maxlength="1" />
              <input class="block__item" maxlength="1" />
            </div>
            <p class="error__message" :class="errorCode">
              Неправильно введен код
            </p>
          </div>
        </div>
        <div class="signup__footer__box">
          <div class="signup__btn" :class="errorCode">Подтвердить</div>
          <p>Вспомнили пароль? <span> Войти</span></p>
        </div>
      </div>
      <div class="signup__footer__box web">
        <div class="signup__btn" :class="errorCode">Подтвердить</div>
        <p>Вспомнили пароль? <span> Войти</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phoneAuth: false,
      mailAuth: true,
      errorStatus: true,
    };
  },
  computed: {
    authPhone() {
      if (this.phoneAuth === true) {
        return "authPhone";
      }
      return "test";
    },
    authMail() {
      if (this.mailAuth === true) {
        return "authMail";
      }
      return "test";
    },
    errorCode() {
      if (this.errorStatus === true) {
        return "error__code";
      }
      return "test";
    },
  },
};
</script>
<style lang="scss" scoped>
.signup__border {
  border: 1px solid #2b66fb;
  width: 440px;
  height: 299px;
  margin-bottom: 157px;
  &.error__code {
    height: 331px;
  }
}
.signup__block {
  width: 416px;
  height: 275px;
  &.error__code {
    height: 307px;
  }
}
.signup__block__container {
  width: 320px;
  height: 179px;
  &.error__code {
    height: 211px;
  }
}
.signup__block__numbers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  height: 60px;
}
.signup__block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 87px;
  p {
    display: none;
    &.authPhone {
      display: inline-block;
    }
    &.authMail {
      display: inline-block;
    }
  }
}
.error__message {
  color: #2b66fb;
  display: none;
  &.error__code {
    display: inline-block;
  }
}
.signup__btn {
  &.error__code {
    background: #434447;
    color: rgba(255, 255, 255, 0.33);
  }
}
.block__item {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  outline: none;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  background-color: rgb(32, 34, 43);
  &:focus {
    border: #ffffff 1px solid;
  }
}
.signup__footer__box {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 236px;
  height: 93px;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    span {
      color: #ffffff;
    }
  }
}
p {
  span {
    margin-left: 3px;
  }
}
@media (max-width: 1200px) {
  .mobile__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .signup__block__container {
        height: 274px;

      &.error__code {
        height: 254px;
      }
    }
    .mobile__inputs {
      width: 336px;
      height: 104px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .signup__btn {
      width: 335px;
      height: 60px;
    }
    .signup__block__numbers {
      width: 335px;
    }
  }
  
  .signup__page {
    height: 385px;
  }
  .block__item {
    width: 72px;
    height: 72px;
  }
  .signup__footer__box {
    &.web {
      display: none;
    }
  }
}
</style>
