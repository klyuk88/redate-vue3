<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
    </div>
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <router-link to="/registration/3">
        <h1 class="auth__back__btn__title">Назад</h1>
      </router-link>
    </div>
    <div class="signup__page">
      <div
        class="signup__border"
        :class="{ animated__border__sign__fours: isClicked }"
      >
        <div class="signup__block">
          <div class="signup__block__container">
            <TheFormats class="format" />
            <div class="container__cash">
              <div class="desc__logo">
                <img src="@/assets/images/main/description.svg" alt="" />
              </div>
              <p class="" :class="female">Трачу в месяц:</p>
              <p class="" :class="male">Доход в месяц:</p>
              <div class="cash__border">
                <input class="input" type="text" @click="isClicked = true" />
                <span class="money__logo"> ₽ </span>
              </div>
            </div>
            <div class="horizontal__line"></div>
            <textarea class="about" placeholder="Расскажите о себе" @click="isClicked = true"></textarea>
            <div class="signup__btn mobile">Продолжить</div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/registration/photo">
      <div class="signup__btn web" @click="isClicked = true">Продолжить</div>
    </router-link>
  </div>
</template>
<script setup>
import TheFormats from "../Form/TheFormats.vue";
import AuthPopup from "@/components/Auth/AuthPopup.vue";
import SignupHobby from "@/components/Auth/SignupHobby.vue";
import SignupPopupVue from "@/components/Auth/SignupPopup.vue";
import { ref } from "vue";
const isClicked = ref(false);
// export default {
//   data() {
//     return {
//       femalePage: true,
//       malePage: false,
//     };
//   },
//   computed: {
//     female() {
//       if (this.femalePage === true) {
//         return "show";
//       }
//       return "test";
//     },
//     male() {
//       if (this.malePage === true) {
//         return "show";
//       }
//       return "test";
//     },
//   },
//   components: { TheFormats },
// };
</script>
<style lang="scss" scoped>
.signup__page {
  height: 800px;
}
.signup__border {
  width: 446px;
  height: 566px;
  border: none;
  margin: 0;
  position: absolute;
}
.signup__block {
  width: 422px;
  height: 542px;
}
.signup__block__container {
  width: 326px;
  height: 446px;
}
.container__cash {
  width: 326px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .show {
    display: inline-block;
  }
  p {
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    display: none;
  }
  align-items: center;
}
.desc__logo {
  display: flex;
}
.cash__border {
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  width: 186px;
  height: 60px;
}
.input {
  background: none;
  width: 152px;
  height: 60px;
  border: none;
}
.money__logo {
  font-weight: 600;
}
.horizontal__line {
  width: 326px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.07);
}
.signup__btn {
  &.mobile {
    display: none;
  }
}
.format {
}
.about {
  width: 326px;
  height: 254px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  color: #ffffff;
  outline: none;
  resize: none;
  background: none;
  padding: 12px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.33);
  }
}
.animated__border__sign__fours {
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
    width: 428px;
    height: 545px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 428px;
    height: 555px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 570px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 445px;
    height: 585px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 466px;
    height: 600px;
  }
}
@media (max-width: 1200px) {
  .container__cash {
    width: 85.89vw;
  }
  .cash__border {
    input {
      width: 39.743vw;
    }
  }
  .about {
    width: 85.89vw;
    height: 63.589vw;
    font-weight: 600;
    font-size: 3.846vw;
    line-height: 153.5%;
  }
  .signup__page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup__border {
    display: flex;
    border: none;
    margin-top: 72px;
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__block__container {
    width: 85.89vw;
    height: 138.461vw;
  }
  .input {
    width: 85.89vw;
    background: none;
    height: 15.384vw;
  }

  .signup__btn {
    font-weight: 600;
    font-size: 4.102vw;
    line-height: 153.5%;
    &.mobile {
      display: flex;
      width: 85.89vw;
      height: 15.384vw;
      margin-top: 3.846vw;
    }
    &.web {
      display: none;
    }
  }
  .horizontal__line {
    margin-top: 3.846vw;
    margin-bottom: 3.846vw;
  }
}
</style>
