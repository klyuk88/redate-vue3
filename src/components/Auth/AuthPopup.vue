<template>
  <div class="auth__background">
    <div class="auth__page" :class="error">
      <router-link to="/start">
        <div class="auth__back__btn">
          <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </router-link>
      <form @submit.prevent="authorization" class="auth-form">
        <div class="auth__block" :class="error">
          <div class="" :class="{ animated__border: isClicked }"></div>
          <div class="auth__input__box" :class="error">
            <div class="auth__inner__box" :class="error">
              <div class="auth__inner__content" :class="error">
                <div class="auth__header">
                  <h1>Вход</h1>
                  <p>Введите данные для входа в учетеную запись</p>
                </div>

                <div class="inputs" :class="error">
                  <input
                    class="input"
                    type="text"
                    placeholder="Телефон / Электронная почта"
                    v-model="authForm.login"
                  />
                  <input
                    class="input"
                    type="password"
                    placeholder="Пароль"
                    v-model="authForm.password"
                  />
                  <span :class="{ error__auth: useAuth.error }">{{
                    useAuth.error
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__auth__block">
          <router-link to="/auth/recovery">
            <p class="auth__forgot">Забыли пароль?</p>
          </router-link>
          <button class="auth__btn" @click="isClicked = true">Войти</button>
          <!-- <div class="auth__btn" @click="waveAnim">Войти</div> -->
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
import { ref, reactive } from "vue";
const useAuth = useAuthStore();
const authForm = reactive({
  login: null,
  password: null,
});
const authorization = () => {
  useAuth.authUser(authForm);
};
const isClicked = ref(false);
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
  @extend .text;
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
  line-height: 43px;
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
.animated__border {
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: borderanimation;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  // animation-iteration-count: infinite;
  position: absolute;
  z-index: 0;
}
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
    @extend .text;
    text-align: center;
    margin-bottom: 8px;
  }
}
p {
  @extend .text;
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
.input {
  @extend .text;
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
  &:focus {
    color: #ffffff;
  }
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
  .auth__background {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .auth__page {
    @extend .flex__center;
    flex-direction: column;
    height: 166.66vw;
    width: 100vw;
    position: relative;
    justify-content: space-between;
    top: 0;
    &.error__auth {
      height: 166.66vw;
      justify-content: space-between;
    }
  }
  .auth__block {
    @extend .flex__center;
    margin-bottom: 0;
    position: relative;
    width: 114.358vw;
    height: 91.538vw;
    border: none;
    &.error__auth {
      height: 95.64vw;
    }
  }
  .auth__input__box {
    @extend .flex__center;
    width: 108.205vw;
    height: 84.87vw;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 6.1538vw;
    &.error__auth {
      height: 95.641vw;
    }
  }
  .auth__inner__box {
    @extend .flex__center;
    &.error__auth {
      height: 60.256vw;
    }
  }
  .auth__inner__content {
    @extend .flex__center;
    justify-content: space-between;
    flex-direction: column;
    width: 83.589vw;
    height: 76.923vw;
    &.error__auth {
      height: 87.69vw;
    }
  }
  .auth__header {
    flex-direction: column;
    width: 79.44vw;
    height: 17.179vw;
    h1 {
      @extend .text;
      text-align: center;
      margin-bottom: 2.051vw;
    }
  }
  p {
    @extend .text;
    font-size: 3.0769vw;
    line-height: 132.5%;
    text-align: center;
    color: rgba(255, 255, 255, 0.33);
  }

  .auth__forgot {
    font-size: 3.589vw;
    margin-bottom: 0;
    position: relative;
    bottom: 0px;
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
    height: 34.871vw;
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
    &.error__auth {
      height: 45.64vw;
    }
  }
  .input {
    @extend .text;
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
    height: 26.92vw;
    margin-bottom: 24.3589vw;
  }
  .auth__btn {
    @extend .flex__center;
    width: 85.89vw;
    height: 15.384vw;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 2.82vw;
    margin-bottom: 0;
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
