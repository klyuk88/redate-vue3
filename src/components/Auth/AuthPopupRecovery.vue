<template>
  <div class="signup__background">
    <slot name="backToAuth"></slot>
    <div class="mobileArrow">
      <slot name="backToAuthMobile"></slot>
    </div>
    <div class="signup__page">
      <div
        class="signup__border"
        :class="{ animated__border__pass: isClicked }"
      >
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__block__header">
              <h1>Забыли пароль?</h1>
              <p class="subTitle">
                Введите электронную почту. Мы отправим Вам
                код для восстановления пароля.
              </p>
            </div>
            <div class="signup__block__numbers">
              <input type="email" class="input" placeholder="example@example.ru" />
              <span class=""
                >Неправильно введена электронная почта. Перепроверьте данные.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__body">
        <div class="signup__block__header">
          <h1>Забыли пароль?</h1>
          <p>
            Введите электронную почту. Мы отправим Вам код
            для восстановления пароля.
          </p>
        </div>
        <div class="mobile__buttons">
          <div class="signup__block__numbers">
            <input class="input" placeholder="example@example.ru" />
            <span class=""
              >Неправильно введен номер телефона. Перепроверьте данные или
              введите электронную почту.</span
            >
            <span class=""
              >Неправильно введена электронная почта. Перепроверьте данные или
              введите номер телефона.</span
            >
          </div>
          <slot name="toCodeMobile"></slot>
          <p class="footer__text">
            Вспомнили пароль?
            <slot name="backToAuthSpan"></slot>
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="signup__btn web">Отправить</div> -->
    <div class="mobileFooter">
      <slot name="toCode"></slot>
      <p class="footer__text web">
        Вспомнили пароль?
        <slot name="backToAuthSpan"></slot>
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isClicked = ref(false);

// export default {
//   data() {
//     return {
//       hasError: false,
//       phoneError: true,
//       mailError: false,
//     };
//   },
//   computed: {
//     error() {
//       if (this.hasError === true) {
//         return "error";
//       }
//       return "test";
//     },
//     errorPhone() {
//       if (this.phoneError === true && this.hasError === true) {
//         return "error__phone";
//       }
//       return "test";
//     },
//     errorMail() {
//       if (this.mailError === true && this.hasError === true) {
//         return "error__mail";
//       }
//       return "test";
//     },
//   },
// };
</script>
<style lang="scss" scoped>
.mobileArrow {
  display: none;
}
.signup__page {
  margin-bottom: 169px;
}
.signup__background {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 101px;
}
.mobile__body {
  display: none;
  .signup__block__numbers {
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
  border-radius: 24px;
}
.signup__block {
  width: 422px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup__block__container {
  width: 326px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup__block__numbers {
  display: contents;
  &.error {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
    margin-top: 12px;
    margin-bottom: 32px;
  }
}
.input {
  margin: 0;
  font-family: "Mulish";
}
.signup__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  cursor: pointer;
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
  margin: 0;
  line-height: 132.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.33);
  span {
    cursor: pointer;
  }
}
.animated__border__pass {
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: borderanimation;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  // animation-iteration-count: infinite;
}
@keyframes borderanimation {
  0% {
    border: 1px solid #2965ff;
    border-radius: 30px;
    width: 425px;
    height: 276px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 428px;
    height: 290px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 304px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 450px;
    height: 320px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 466px;
    height: 335px;
  }
}
@media (max-width: 1200px) {
  .mobileArrow {
    display: flex;
  }
  .mobileFooter {
    display: none;
  }
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

    .signup__block__numbers {
      &.error {
        display: flex;
      }
    }
    .signup__block__header {
      display: flex;
      margin-bottom: 18.46vw;
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
      margin-bottom: 24px;
    }
  }
  .mobile__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 85.89vw;
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
