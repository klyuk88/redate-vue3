<template>
  <div class="auth__background">
    <div class="auth__page">
      <router-link to="/">
        <div class="auth__back__btn">
          <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </router-link>
      <form @submit.prevent="authorization" class="auth-form">
        <div class="auth__block">
          <div class="" :class="{ animated__border: isClicked }"></div>
          <div class="auth__input__box">
            <div class="auth__inner__box">
              <div class="auth__inner__content">
                <div class="auth__header">
                  <h1>Вход</h1>
                  <p class="subTitle">
                    Введите данные для входа в учетеную запись
                  </p>
                </div>
                <div class="inputs">
                  <input
                    class="input"
                    type="text"
                    placeholder="Электронная почта"
                    v-model="authForm.login"
                    @focus="focusInput = false"
                  />
                  <div class="input__password">
                    <input
                      class="input pass"
                      type="password"
                      placeholder="Пароль"
                      v-model="authForm.password"
                      id="myInput"
                      @focus="focusInput = true"
                    />
                    <input
                      id="eye"
                      class="eye"
                      type="checkbox"
                      @click="showPass"
                    />
                    <label for="eye" :class="{visible : focusInput}"></label>
                  </div>
                  <span :class="{ error__auth: useAuth.error }">{{
                    useAuth.error
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__auth__block">
          <div class="mobile__recovery">
            <slot name="toRecovery"></slot>
          </div>
          <button class="auth__btn">Войти</button>
        </div>
      </form>
      <div class="auth__footer__signup">
        <p class="auth__no__acc">Нет учетной записи?</p>
        <router-link to="/">
          <span>Регистрация</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { ref, reactive, onMounted } from "vue";
const useAuth = useAuthStore();
const authForm = reactive({
  login: null,
  password: null,
});
const authorization = () => {
  useAuth.authUser(authForm);
};
const isClicked = ref(false);
const focusInput = ref(false)

function showPass() {
  let inputType = document.querySelectorAll("#myInput");
  inputType.forEach((e) => {
    e.type === "password" ? (e.type = "text") : (e.type = "password");
  });
}
</script>

<script>
// export default {
//   data() {
//     return {
//       hasError: true,
//       isClicked: false,
//     };
//   },
//   computed: {
//     error() {
//       if (this.hasError === true) {
//         return "error__auth";
//       }
//       return "test";
//     },
//     waveAnim() {
//       return (this.isClicked = !this.isClicked);
//     },
//   },
// };
</script>
<style lang="scss">
.auth__back__btn {
  @extend .flex__center;

  cursor: pointer;
  position: fixed;
  top: 70px;
  left: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  h1 {
    font-weight: 700;
    font-size: 14px;
    line-height: 132.5%;
  }
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
.auth-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: unset;
}
.text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  // line-height: 43px;
}
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth__background {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 101px;
}
.auth__page {
  @extend .flex__center;
  flex-direction: column;
}
.auth__block {
  @extend .flex__center;
  margin-bottom: 37px;
  position: relative;
  width: 446px;
}
// .animated__border {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation-name: borderanimation;
//   animation-duration: 0.7s;
//   animation-fill-mode: forwards;
//   animation-iteration-count: infinite;
//   position: absolute;
//   z-index: 0;
// }
.auth__input__box {
  @extend .flex__center;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
  border-radius: 24px;
}
.auth__inner__box {
  @extend .flex__center;
}
.auth__inner__content {
  @extend .flex__center;
  justify-content: space-between;
  flex-direction: column;
  width: 326px;
  margin: 48px 48px 32px 48px;
  position: relative;
  z-index: 1;
}
.auth__header {
  flex-direction: column;
  width: 286px;
  h1 {
    text-align: center;
    margin-bottom: 8px;
  }
}
.subTitle {
  font-size: 12px;
  line-height: 132.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.33);
  margin-bottom: 32px;
}

.auth__forgot {
  font-size: 14px;
  margin-bottom: 84px;
  cursor: pointer;
}
.auth__no__acc {
  font-size: 14px;
  font-weight: 500;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.4);
}
span {
  font-size: 14px;
}
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
  span {
    display: none;
    color: #2b66fb;
    text-align: center;
    &.error__auth {
      display: inline-block;
    }
  }
}
.input__password {
  font-family: "Mulish";
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
}
.input {
  font-family: "Mulish";
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
  margin-bottom: 16px;
  &.pass {
    margin: 0;
    border: none;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    position: absolute;
    z-index: 1;
    &:focus {
      color: #ffffff;
      // border: none;
    }
  }
  &:focus {
    color: #ffffff;
    border: #ffffff solid 1px;
  }
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
    content: "";
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
.auth__btn {
  @extend .flex__center;
  width: 236px;
  height: 47px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  margin-bottom: 24px;
  cursor: pointer;
  border: none;
  color: #fff;
}

.auth__footer__signup {
  @extend .flex__center;
  justify-content: space-between;
  width: 236px;
  height: 21px;
  align-items: baseline;
}

@keyframes borderanimation {
  0% {
    border: 1px solid #2965ff;
    border-radius: 30px;
    width: 425px;
    height: 366px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 428px;
    height: 367px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 371px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 450px;
    height: 386px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 466px;
    height: 390px;
  }
}

@media (max-width: 1200px) {
  .flex__center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .auth__back__btn {
    display: none !important;
  }
  .subTitle {
    margin-bottom: 88px;
  }
  .auth__background {
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .auth__page {
    @extend .flex__center;
    flex-direction: column;
    width: 100vw;
    position: relative;
    justify-content: space-between;
    top: 0;
  }
  .auth__block {
    @extend .flex__center;
    margin-bottom: 0;
    position: relative;
    width: 114.358vw;
    border: none;
  }
  .auth__input__box {
    @extend .flex__center;
    width: 108.205vw;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 6.1538vw;
  }
  .auth__inner__box {
    @extend .flex__center;
  }
  .auth__inner__content {
    @extend .flex__center;
    justify-content: space-between;
    flex-direction: column;
    width: 83.589vw;
  }
  .auth__header {
    flex-direction: column;
    width: 79.44vw;
    h1 {
      text-align: center;
      margin-bottom: 2.051vw;
    }
  }
  p {
    font-size: 3.0769vw;
    line-height: 132.5%;
    text-align: center;
    color: rgba(255, 255, 255, 0.33);
  }
  .mobile__recovery {
    margin-bottom: 180px;
  }
  .auth__forgot {
    font-size: 3.589vw;
    position: relative;
  }
  .auth__no__acc {
    font-size: 3.589vw;
  }
  span {
    font-size: 3.589vw;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 83.589vw;
    span {
      display: none;
      color: #2b66fb;
      text-align: center;
      font-weight: 600;
      font-size: 3.0769vw;
      line-height: 3.846vw;
      width: 70.256vw;
      &.error__auth {
        display: inline-block;
      }
    }
  }
  .input {
    font-size: 3.846vw;
    line-height: 153.5%;
    color: rgba(255, 255, 255, 0.33);
    outline: none;
    background: none;
    width: 83.589vw;
    height: 15.384vw;
    border: 0.256vw solid rgba(255, 255, 255, 0.14);
    border-radius: 2.82vw;
    padding: 3.0769vw;
    &:focus {
      color: #ffffff;
    }
  }
  .footer__auth__block {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  .auth__btn {
    @extend .flex__center;
    width: 85.89vw;
    height: 15.384vw;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 2.82vw;
    margin-bottom: 24px;
    position: relative;
    top: 0;
  }

  .auth__footer__signup {
    @extend .flex__center;
    justify-content: space-between;
    width: 60.512vw;
    height: 5.384vw;
  }
}
</style>
