<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
router.push({ name: 'Registration', query: { stage: 'one' } })

const isClicked = ref(false)
const focusInput = ref(false)
const focusInputRepeat = ref(false)

const regForm = reactive({
  email: null,
  password: null,
  password2: null,
})
const submit = () => {
  const isEmailExist = regForm.email && regForm.email.length
  const isPasswordExist = regForm.password && regForm.password.length
  const isPassword2Exist = regForm.password2 && regForm.password2.length

  if (!isEmailExist) {
    return alert('email')
  }
  if (!isPasswordExist) {
    return alert('password')
  }
  if (!isPassword2Exist) {
    return alert('password2')
  }
  if (
    (regForm.password.length < 6 && isPasswordExist) ||
    (regForm.password2.length < 6 && isPassword2Exist)
  ) {
    return alert('length < 6')
  }
  if (regForm.password !== regForm.password2) {
    return alert('pass not matching')
  }
  return alert('done')
}

function showPass() {
  let inputType = document.querySelectorAll('#input')
  inputType.forEach((e) => {
    e.type === 'password' ? (e.type = 'text') : (e.type = 'password')
  })
}
function showPassRepeat() {
  let inputType = document.querySelectorAll('#inputRepeat')
  inputType.forEach((e) => {
    e.type === 'password' ? (e.type = 'text') : (e.type = 'password')
  })
}
</script>

<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
    </div>
    <router-link to="/">
      <div class="auth__back__btn">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
    </router-link>
    <form @submit.prevent="submit()">
      <div class="central__content">
        <div class="signup__page">
          <div
            class="animated__border"
            :class="{ animated__border__sign: isClicked }"
          ></div>
          <div class="signup__border">
            <div class="signup__block">
              <div class="signup__block__container">
                <div class="signup__header">
                  <h1>Регистрация</h1>
                  <p>
                    Начните новые знакомства после быстрой регистрации. Ваши
                    данные будут защищены.
                  </p>
                </div>
                <div class="signup__input__box">
                  <input
                    v-model="regForm.email"
                    class="input"
                    type="email"
                    placeholder="Электронная почта"
                    @focus="
                      ;(isClicked = true),
                        (focusInputRepeat = false),
                        (focusInput = false)
                    "
                  />
                  <div class="input__password middle">
                    <input
                      id="input"
                      v-model="regForm.password"
                      class="input pass"
                      type="password"
                      placeholder="Пароль"
                      @focus=";(focusInput = true), (focusInputRepeat = false)"
                    />
                    <input
                      id="eye"
                      class="eye"
                      type="checkbox"
                      @click="showPass()"
                    />
                    <label for="eye" :class="{ visible: focusInput }"></label>
                  </div>
                  <div class="input__password last">
                    <input
                      id="inputRepeat"
                      v-model="regForm.password2"
                      class="input pass__repeat"
                      type="password"
                      placeholder="Повторите пароль"
                      @focus=";(focusInputRepeat = true), (focusInput = false)"
                    />
                    <input
                      id="eyeSecond"
                      class="eye"
                      type="checkbox"
                      @click="showPassRepeat()"
                    />
                    <label
                      for="eyeSecond"
                      :class="{ visible: focusInputRepeat }"
                    ></label>
                  </div>
                  <span class="error__message">{{}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile__body">
            <div class="signup__block__container">
              <div class="signup__header">
                <h1>Регистрация</h1>
                <p>
                  Начните новые знакомства после быстрой регистрации. Ваши
                  данные будут защищены.
                </p>
              </div>
              <div class="signup__input__box">
                <input
                  class="input"
                  type="text"
                  placeholder="Электронная почта"
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
          <div class="signup__footer mobile">
            <slot name="secondPhaseMobile"></slot>
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
        <div class="signup__footer web">
          <slot name="secondPhase"> </slot>
          <button style="font-size: 24px">test</button>
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
    </form>
  </div>
</template>

<style lang="scss" scoped>
.mobile__body {
  display: none;
}
.text {
  font-family: 'Mulish';
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
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 45px;
}
.signup__block {
}
p {
  font-weight: 600;
  font-size: 14px;
  line-height: 132.5%;
  color: rgba(255, 255, 255, 0.33);
}
.signup__page {
  @extend .flex__center;
  flex-direction: column;
  margin-bottom: 96px;
}
.central__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
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
  width: 176px;
  height: 4px;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 220px;
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
  p {
    margin: 0;
    margin-top: 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    text-align: center;
    color: rgba(255, 255, 255, 0.33);
  }
}
.input {
  margin: 0;
  font-family: 'Mulish';
  font-size: 15px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
  outline: none;
  background-color: rgb(32, 34, 43);
  width: 326px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  padding: 12px;
  &.pass {
    margin: 0;
    border: none;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    position: absolute;
    z-index: 1;
  }
  &.pass__repeat {
    margin: 0;
    border: none;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    position: absolute;
    z-index: 1;
  }
  &:focus {
    color: #ffffff;
    border: #ffffff solid 1px;
  }
}
.signup__border {
  @extend .flex__center;
  width: 446px;
  border-radius: 32px;
}
.input__password {
  font-family: 'Mulish';
  font-size: 15px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
  outline: none;
  background-color: rgb(32, 34, 43);
  width: 326px;
  height: 60px;
  border-radius: 11px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.middle {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  &.last {
    margin-bottom: 32px;
  }
}
.error__message {
  font-weight: 600;
  font-size: 12px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2b66fb;
  margin-bottom: 48px;
}
.signup__block {
  position: relative;
  z-index: 1;
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
.eye {
  position: relative;
  z-index: -1;
  opacity: 0;
}
label {
  position: relative;
  z-index: 2;
  right: -130px;
}
.eye + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  display: none;
  &.visible {
    display: inline-flex;
  }
  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../../assets/images/eye__open.svg);
  }
}
.eye:checked + label::before {
  background-image: url(../../assets/images/eye__close.svg);
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
  &.mobile {
    display: none;
  }
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
  align-items: baseline;
  height: 21px;
  span {
    cursor: pointer;
    margin-left: 5px;
  }
}
.signup__footer__terms {
  @extend .flex__center;
  width: 340px;
  height: 32px;
  p {
    font-size: 12px;
    line-height: 132.5%;
    margin: 0;
    text-align: center;
  }
  span {
    font-size: 12px;
    line-height: 132.5%;
    color: #2b66fb;
  }
}
.animated__border {
  position: absolute;
  z-index: 0;
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
    width: 428px;
    height: 425px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 430px;
    height: 430px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 436px;
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
    width: 450px;
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
  .signup__navigation {
    margin-bottom: 38px;
  }
  .signup__page {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  .signup__background {
    margin: 0;
  }
  .mobile__body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85.89vw;
    .signup__header {
      width: 77.435vw;
      margin: 0;
      h1 {
        margin: 0;
        margin-bottom: 4.1vw;
      }
      p {
        margin: 0;
        margin-bottom: 18.46vw;
      }
    }
    .signup__input__box {
      width: 85.89vw;
      .input {
        width: 85.89vw;
        margin-bottom: 4.1vw;
        &:focus {
          border: #ffffff 0.256vw solid;
        }
      }
    }

    .signup__block__container {
      justify-content: space-between;
    }
  }
  .signup__footer {
    height: unset;
    &.web {
      display: none;
    }
    &.mobile {
      display: flex;
    }
    .signup__btn {
      width: 85.89vw;
      height: 15.38vw;
      margin-top: 8.2vw;
      margin-bottom: 6.15vw;
    }
    .signup__footer__menu {
      margin-bottom: 22.564vw;
    }
    .signup__footer__terms {
      margin-bottom: 15.64vw;
    }
  }
}
</style>
