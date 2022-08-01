<script setup>
import { ref, computed } from 'vue'

const phoneAuth = ref(false)
const mailAuth = ref(true)

const authPhone = computed(() => {
  if (phoneAuth.value === true) {
    return 'authPhone'
  }
  return 'test'
})

const authMail = computed(() => {
  if (mailAuth.value === true) {
    return 'authMail'
  }
  return 'test'
})

</script>

<template>
  <div class="signup__background">
    <slot name="backToRecovery"></slot>
    <div class="mobileArrow">
      <slot name="backToRecoveryMobile"></slot>
    </div>
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__block__header">
              <h1>Введите код</h1>
              <p class="" :class="authMail">
                Мы отправили Вам код подтверждения на электронную почту для
                создания нового пароля.
              </p>
            </div>

            <div class="signup__block__numbers">
                <input
                  type="text"
                  class="block__item"
                  maxlength="1"
                  autofocus
                />
                <input type="text" class="block__item" maxlength="1" />
                <input type="text" class="block__item" maxlength="1" />
                <input type="text" class="block__item" maxlength="1" />
                <input type="text" class="block__item" maxlength="1" />
                <input type="text" class="block__item" maxlength="1" />
            </div>
            <p class="error__message">Неправильно введен код</p>
          </div>
        </div>
      </div>
      <div class="mobile__body">
        <div class="signup__block__container">
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
              <input type="text" class="block__item" maxlength="1" autofocus />
              <input type="text" class="block__item" maxlength="1" />
              <input type="text" class="block__item" maxlength="1" />
              <input type="text" class="block__item" maxlength="1" />
              <input type="text" class="block__item" maxlength="1" />
              <input type="text" class="block__item" maxlength="1" />
            </div>
            <p class="error__message">Неправильно введен код</p>
          </div>
        </div>
        <div class="signup__footer__box">
          <div class="signup__btn">Подтвердить</div>
          <slot name="toNewPasswordMobile"></slot>
          <p>
            Вспомнили пароль?
            <slot name="backToAuthSpan"></slot>
          </p>
        </div>
      </div>
      <div class="signup__footer__box web">
        <slot name="toNewPassword"></slot>
        <p>Вспомнили пароль? <slot name="backToAuthSpan"></slot></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobileArrow {
  display: none;
}
.signup__page {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.signup__border {
  border: 1px solid #2b66fb;
  margin-bottom: 153px;
  padding: 48px;
  gap: 10px;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
}
.signup__block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.signup__block__container {
  width: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.signup__block__numbers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 60px;
  margin-bottom: 16px;
}
.signup__block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 320px;
  p {
    display: none;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    margin: 0;
    line-height: 132.5%;
    color: rgba(255, 255, 255, 0.33);
    &.authPhone {
      display: inline-block;
    }
    &.authMail {
      display: inline-block;
      margin: 12px 0px 32px 0px;
    }
  }
}
.error__message {
  color: #2b66fb;
  display: none;
  margin: 0;
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
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  text-align: center;
  color: #ffffff;
  // background-color: rgb(32, 34, 43);
  background: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    border: #ffffff 1px solid;
  }
}
.mobile__body {
  display: none;
}
.signup__footer__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  margin-bottom: 101px;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    text-align: center;
    color: rgba(255, 255, 255, 0.33);
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
  .mobileArrow {
    display: flex;
  }
  .mobile__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .signup__block__container {
      .signup__block__header {
        .authMail {
          margin-bottom: 72px;
          margin-top: 16px;
        }
      }
    }
    .mobile__inputs {
      width: 85.89vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .signup__btn {
      display: none;
      width: 85.89vw;
      height: 15.384vw;
    }
    .signup__block__numbers {
      // width: 85.89vw;
      width: 375px;
      margin-bottom: 48px;
    }
  }

  .signup__border {
    display: none;
  }
  .signup__page {
  }
  .block__item {
    // width: 18.461vw;
    // height: 18.461vw;
  }
  .signup__footer__box {
    margin-bottom: 261px;
    &.web {
      display: none;
    }
  }
}
</style>
