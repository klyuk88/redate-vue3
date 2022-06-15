<template>
  <div class="signup__background">
    <router-link to="/auth">
      <div class="auth__back__btn">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
    </router-link>
    <div class="signup__page">
      <div class="signup__border" :class="error">
        <div class="signup__block" :class="error">
          <div class="signup__block__container" :class="error">
            <div class="signup__block__header">
              <h1>Забыли пароль?</h1>
              <p>
                Введите электронную почту или номер телефона. Мы отправим Вам
                код для восстановления пароля.
              </p>
            </div>
            <div class="signup__block__numbers" :class="error">
              <input class="input" placeholder="+7 (438) 943 82 94" />
              <span class="" :class="errorPhone"
                >Неправильно введён номер телефона. Перепроверьте данные или
                введите электронную почту.</span
              >
              <span class="" :class="errorMail"
                >Неправильно введена электронная почта. Перепроверьте данные или
                введите номер телефона.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__body" :class="error">
        <div class="signup__block__header">
          <h1>Забыли пароль?</h1>
          <p>
            Введите электронную почту или номер телефона. Мы отправим Вам код
            для восстановления пароля.
          </p>
        </div>
        <div class="mobile__buttons" :class="error">
          <div class="signup__block__numbers" :class="error">
            <input class="input" placeholder="Телефон / Электронная почта" />
            <span class="" :class="errorPhone"
              >Неправильно введен номер телефона. Перепроверьте данные или
              введите электронную почту.</span
            >
            <span class="" :class="errorMail"
              >Неправильно введена электронная почта. Перепроверьте данные или
              введите номер телефона.</span
            >
          </div>
          <div class="signup__btn" :class="(errorPhone, errorMail)">
            Отправить
          </div>
          <p class="footer__text">
            Вспомнили пароль?
            <router-link to="/auth">
              <span> Войти</span>
            </router-link>
          </p>
        </div>
      </div>
      <div class="signup__btn web" :class="(errorPhone, errorMail)">
        Отправить
      </div>
      <p class="footer__text web">
        Вспомнили пароль?
        <router-link to="/auth">
          <span> Войти</span>
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hasError: false,
      phoneError: true,
      mailError: false,
    };
  },
  computed: {
    error() {
      if (this.hasError === true) {
        return "error";
      }
      return "test";
    },
    errorPhone() {
      if (this.phoneError === true && this.hasError === true) {
        return "error__phone";
      }
      return "test";
    },
    errorMail() {
      if (this.mailError === true && this.hasError === true) {
        return "error__mail";
      }
      return "test";
    },
  },
};
</script>
<style lang="scss" scoped>
.signup__page {
  justify-content: center;
}
.mobile__body {
  .signup__block__numbers {
    &.error {
      display: none;
    }
  }
  .signup__block__header {
    display: none;
  }
  .signup__block__numbers {
    // display: none;
  }
}
span {
  margin-left: 3px;
  color: #ffffff;
}
.signup__border {
  width: 446px;
  height: 299px;
  border: none;
  animation: borderanimation 0.7s infinite;
  &.error {
    height: 341px;
  }
}
.signup__block {
  width: 422px;
  height: 275px;
  &.error {
    height: 317px;
  }
}
.signup__block__container {
  width: 326px;
  height: 179px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.error {
    height: 221px;
  }
}
.signup__block__numbers {
  display: contents;
  &.error {
    height: 102px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  span {
    text-align: center;
    color: #2b66fb;
    display: none;
    &.error__phone {
      margin-left: 0;
      display: inline-block;
      font-weight: 600;
      font-size: 12px;
      line-height: 132.5%;
    }
    &.error__mail {
      margin-left: 0;
      display: inline-block;
      font-weight: 600;
      font-size: 12px;
      line-height: 132.5%;
    }
  }
}
.signup__block__header {
  width: 306px;
  height: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.signup__btn {
  margin-bottom: 24px;
  &.error__phone {
    background: #434447;
    color: rgba(255, 255, 255, 0.33);
  }
  &.error__mail {
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  }
}
.footer__text {
  font-weight: 500;
  font-size: 14px;
  span {
  cursor: pointer;

  }
}
@keyframes borderanimation {
  0% {
    border: 1px solid #2965ff;
    border-radius: 30px;
    width: 425px;
    height: 376px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 428px;
    height: 377px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 381px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 450px;
    height: 406px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 466px;
    height: 420px;
  }
}
@media (max-width: 1200px) {
  .signup__page {
    .footer__text {
      &.web {
        display: none;
      }
    }
    .signup__btn {
      &.web {
        display: none;
      }
    }
  }
  .auth__back__btn {
    left: 3.33vw;
  }
  .signup__block__numbers {
    display: contents;
    width: 85.89vw;
    height: 15.38vw;
  }
  .auth__back__btn__title {
    display: none;
  }

  .signup__border {
    display: none;
  }
  .mobile__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 85.89vw;
    height: 95.64vw;
    &.error {
      height: 107.948vw;
    }

    .signup__block__numbers {
      &.error {
        display: flex;
      }
    }
    .signup__block__header {
      display: flex;
      span {
        text-align: center;
        color: #2b66fb;
        display: none;
        &.error__phone {
          margin-left: 0;
          display: inline-block;
          font-weight: 600;
          font-size: 3.0769vw;
          line-height: 132.5%;
        }
        &.error__mail {
          margin-left: 0;
          display: inline-block;
          font-weight: 600;
          font-size: 3.0769vw;
          line-height: 132.5%;
        }
      }
    }
    .signup__block__header {
      width: 83.076vw;
      height: 22.564vw;
      h1 {
        font-weight: 600;
      }
      p {
        font-weight: 400;
        font-size: 3.33vw;
        line-height: 4.102vw;
      }
    }
    .input {
      width: 85.89vw;
    }
  }
  .mobile__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 85.89vw;
    height: 54.6153vw;

    &.error {
      height: 66.923vw;
    }

    p {
      line-height: 153.5%;
    }
    .signup__btn {
      width: 85.89vw;
      height: 15.384vw;
    }
  }
}
</style>
