<script setup>
import { ref } from 'vue'

const maleActive = ref(false)
const femaleActive = ref(false)
const maleMobileActive = ref(false)
const femaleMobileActive = ref(false)
const sex = ref(localStorage.getItem('sex') || null)

// const changeBackMale = () => {
//   return (maleActive.value = !maleActive.value)
// }
// const changeBackFemale = () => {
//   return (femaleActive.value = !femaleActive.value)
// }
const chooseMaleMobile = () => {
  return (maleMobileActive.value = !maleMobileActive.value)
}
const chooseFemaleMobile = () => {
  return (femaleMobileActive.value = !femaleMobileActive.value)
}

const setSex = (sex) => {
  localStorage.setItem('sex', sex)
}
</script>

<template>
  <div class="background">
    <img
      src="../../assets/images/main/2stage.png"
      style="display: none"
      alt=""
    />
    <img
      src="../../assets/images/main/3stage.png"
      style="display: none"
      alt=""
    />
    <img
      src="../../assets/images/main/shadowStage.png"
      style="display: none"
      alt=""
    />
    <div class="content__container__auth">
      <div
        class="animation__ball male-side"
        :class="{ pink: femaleActive, blue: maleActive }"
      ></div>
      <div
        class="animation__ball middle-side"
        :class="{ pink: femaleActive, blue: maleActive }"
      ></div>
      <div
        class="animation__ball female-side"
        :class="{ pink: femaleActive, blue: maleActive }"
      ></div>
      <div
        class="img__test"
        :class="{
          maleStyle: maleActive,
          femaleStyle: femaleActive,
        }"
      ></div>
      <div class="male__side">
        <div class="male__img"></div>
        <router-link to="/registration"  @click="setSex(1)">
          <div
            class="btn"
            @mouseenter="maleActive = true"
            @mouseleave="maleActive = false"
          >
            Мужчина
          </div>
        </router-link >
      </div>
      <div class="middle__menu">
        <div class="logo">
          <img
            class="web"
            src="../../assets/images/main/main_page__logo.svg"
            alt=""
          />
        </div>
        <div class="signin__btn__block">
          <router-link v-if="sex !== null" to="/auth">
            <div class="btn">Войти</div>
          </router-link>
          <div class="mobile__btn__block">
            <h1>Абсолютно новый формат знакомств</h1>
          </div>
        </div>
        <h1 class="choose">Выберите свой пол:</h1>
      </div>
      <div class="female__side">
        <div class="female__img"></div>
        <div>
          <router-link to="/registration" v
            class="btn"
            @mouseenter="femaleActive = true"
            @mouseleave="femaleActive = false"
            @click="setSex(2)"
          >
            ДЕВУШКА
          </router-link>
        </div>
      </div>
    </div>
  </div>
    <div class="mobile__start__page">
      <div class="mobile__start__logo">
        <img
          class="mobile"
          src="../../assets/images/main/mobileStartLogo.svg"
          alt=""
        />
        <router-link v-if="sex !== null" to="/auth">
          <div class="btn">Войти</div>
        </router-link>
      </div>
      <div class="mobile__main__screen">
        <div class="header">
          <img
            class="mobile"
            src="../../assets/images/main/main__page__mobile__logo.svg"
            alt=""
          />
          <router-link to="/auth">
            <div class="btn">Войти</div>
          </router-link>
        </div>
        <h1>Абсолютно новый формат знакомств</h1>
        <div class="btn__box">
          <router-link to="/registration" @click="setSex(1)">
            <div class="mobile__btn male" @click="chooseMaleMobile()">
              Мужчина
            </div>
          </router-link>
          <router-link to="/registration" @click="setSex(2)">
            <div
              class="mobile__btn female"
              :class="{ btnMale: maleMobileActive }"
              @click="chooseFemaleMobile()"
            >
              ДЕВУШКА
            </div>
          </router-link>
        </div>
      </div>
      <div class="background__anim">
        <div class="male"></div>
        <div class="female"></div>
      </div>
      <div class="glow"></div>
      <div class="glow two"></div>
    </div>
</template>

<style lang="scss" scoped>
// .v-enter-active,
// .v-leave-active {
//   transition: opacity 0.5s ease;
// }

// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
// }
.mobile__start__page {
  display: none;
}
.btn {
  padding: 11px 44px;
  height: 47px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(0px 32px 83px rgba(18, 34, 74, 0.5));
  border-radius: 11px;
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  animation-name: backgroundAnim;
  animation-duration: 5s;
  animation-fill-mode: forwards;
}
h1 {
  width: 220px;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  // background: linear-gradient(
  //   239.3deg,
  //   #ffffff 2.37%,
  //   rgba(255, 255, 255, 0.21) 135.92%
  // );
  background: #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.animation__ball {
  position: fixed;
  width: 100px;
  height: 200px;
  background-color: rgb(43, 102, 251);
  border-radius: 70%;

  z-index: 2;
  &.male-side {
    bottom: 0;
    opacity: 0.8;
    animation-name: startingAnim;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    transition: 1s;
    filter: blur(300px);

    &.pink {
      animation-name: middleFemaleActive;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      transition: 1s;
    }
  }
  &.middle-side {
    top: 35%;
    left: 48%;
    animation-name: middleFade;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    filter: blur(300px);
    transition: 1s;

    &.pink {
      animation-name: middleFemaleActive;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      transition: 1s;
      filter: blur(300px);
    }
    &.blue {
      animation-name: middleMaleActive;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      transition: 1s;
      filter: blur(300px);
    }
  }
  &.female-side {
    height: 300px;
    right: 0;
    opacity: 0.8;
    animation-name: startingAnim;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    transition: 1s;
    filter: blur(300px);

    &.pink {
      animation-name: middleFemaleActive;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      transition: 1s;
      background-color: rgb(233, 33, 141);
      box-shadow: 0 0 90px 25px rgb(233, 33, 141),
        0 0 100px 130px rgb(233, 33, 141), 0 0 140px 160px rgb(233, 33, 141);
      filter: blur(300px);
    }
  }
  &.blue {
    animation-name: middleMaleActive;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    filter: blur(300px);
  }
}
.img__test {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  animation-name: changeStartBack;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  &.femaleStyle {
    animation-name: changebackgroundfemale;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  &.maleStyle {
    animation-name: changebackgroundmale;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

}
.background {
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;

  .content__container__auth {
    display: flex;
    justify-content: space-between;
    .male__side {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      position: relative;
      .btn {
        width: 177px;
        z-index: 2;
        position: relative;
        bottom: 137px;
        left: -40px;
        transition: background-color 1s;

        &:hover {
          background: #2b66fb;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
        }
      }
    }
    .middle__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      height: 731px;
      position: relative;
      top: -64px;
      z-index: 3;
      margin-top: 100px;
      h1 {
        animation-name: backgroundAnim;
        animation-duration: 2s;
        animation-fill-mode: forwards;
      }

      .logo {
        animation-name: logoScale;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        // animation-iteration-count: infinite;
        .mobile {
          display: none;
        }
      }
      .signin__btn__block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 139px;
        h1 {
          animation-name: textScale;
          animation-duration: 2s;
          animation-fill-mode: forwards;
          // animation-iteration-count: infinite;
        }
        .btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.5s;
          &:hover {
            background: #2b66fb;
            border: 1px solid rgba(255, 255, 255, 0.14);
            box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
          }
        }
      }
    }
    .female__side {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      .btn {
        width: 177px;
        z-index: 2;
        position: relative;
        bottom: 137px;
        right: -40px;

        transition: background-color 1s;
        &:hover {
          background: rgb(233, 33, 141);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
          border-radius: 11px;
        }
      }
    }
  }
}
.mobile__btn {
  display: none;
}
@keyframes changeStartBack {
  0% {
    background: url(../../assets/images/main/shadowStage.png);
    background-size: cover;
    background-position: center;

  }
  50% {
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-position: center;
  }
  100% {
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-position: center;
  }
}
@keyframes middleFade {
  0% {
    opacity: 0.4;
  }
  25% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}
@keyframes transGlowWebMale {
  0% {
  }
  100% {
    transform: translate(0, -300px);
    opacity: 0.8;
    // height: 250px;
    border-radius: 40%;
  }
}
@keyframes fadeFemaleGlow {
  0% {
  }
  100% {
    width: 0px;
    height: 0px;
    transform: translate(0, 200px);
  }
}
@keyframes transGlowWebFemale {
  0% {
  }
  100% {
    opacity: 0.7;
    border-radius: 40%;
    width: 180px;
    height: 200px;
    transform: translate(0, 200px);

  }
}
@keyframes startingAnim {
  0% {
    height: 0;
    widows: 0;
    opacity: 0;
  }
  100% {
  }
}
@keyframes middleFemaleActive {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes middleMaleActive {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes changebackgroundfemale {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-position: center;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/3stage.png);
    background-size: cover;
    background-position: center;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/3stage.png);
    background-size: cover;
    background-position: center;
  }
}
@keyframes changebackgroundmale {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-position: center;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/2stage.png);
    background-size: cover;
    background-position: center;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/2stage.png);
    background-size: cover;
    background-position: center;
  }
}

@keyframes logoScale {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes textScale {
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backgroundAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 1200px) {
  .mobile__start__page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-height: -webkit-fill-available;
    flex-direction: column;
    .glow {
      width: 230px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 0 0 60px 90px #2965ff, 0 0 80px 110px #3e6bde;
      background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
      filter: blur(200px);
      position: fixed;
      bottom: -35px;
      opacity: 1;
      animation-name: glowingAnim;
      animation-duration: 5s;
      animation-fill-mode: forwards;
      &.two {
        top: -55px;
        animation-name: glowingAnimSecond;
      }
    }
    .background__anim {
      display: flex;
      position: fixed;
      z-index: 1;
      .male {
        background: url(../../assets/images/main/1.png);
        height: 100vh;
        width: 100vw;
        background-size: cover;
        animation-name: maleAnim;
        animation-duration: 5s;
        animation-fill-mode: forwards;
      }
      .female {
        background: url(../../assets/images/main/2.png);
        height: 100vh;
        width: 100vw;
        background-size: cover;
        animation-name: femaleAnim;
        animation-duration: 5s;
        animation-fill-mode: forwards;
      }
    }
    .mobile__start__logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      .mobile {
        animation-name: mobileLogoScale;
        animation-duration: 4s;
        animation-fill-mode: forwards;
      }
    }
    h1 {
      font-size: 20px;
      width: 236px;
      animation-name: mobileTextScale;
      animation-duration: 6s;
      animation-fill-mode: forwards;
    }
    .mobile__main__screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      z-index: 2;
      height: 679px;
      h1 {
        width: 226px;

        font-size: 16px;
        animation-name: mobileMainPageText;
        animation-duration: 5s;
        animation-fill-mode: forwards;
      }
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        .btn {
          animation-name: mobileMainPageLogin;
          animation-duration: 5s;
          animation-fill-mode: forwards;
        }
        .mobile {
          animation-name: logoFade;
          animation-duration: 6s;
          animation-fill-mode: forwards;
        }
      }
      .btn__box {
        animation-name: mobileMainPageBtns;
        animation-duration: 5s;
        animation-fill-mode: forwards;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 110px;
      }
      .mobile__btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        border: 0.256vw solid rgba(255, 255, 255, 0.33);
        filter: drop-shadow(0px 32px 83px rgba(18, 34, 74, 0.5));
        border-radius: 2.82vw;
        padding: 2.82vw 11.79vw;
        height: 12.051vw;
        width: 46.41vw;
        font-weight: 600;
        font-size: 4.1vw;
        line-height: 153.5%;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
  .background {
    display: none;
  }
  @keyframes mobileLogoScale {
    0% {
    }
    33% {
      transform: scale(2);
    }
    66% {
      transform: translate(0, -300px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(0, -300px);
    }
  }
  @keyframes mobileTextScale {
    0% {
      opacity: 0;
      transform: translate(0, 300px);
    }
    20% {
      opacity: 0;
    }
    40% {
      transform: translate(0, 0px);
      opacity: 1;
    }
    60% {
      opacity: 0;
      transform: translate(0, 100px);
    }
    80% {
      opacity: 0;
      // transform: translate(0, 300px);
    }
    100% {
      opacity: 0;
      transform: translate(0, 100px);
    }
  }
  @keyframes logoFade {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    37% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    63% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    87% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translate(0, -30px);
    }
  }
  @keyframes mobileMainPageLogin {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    37% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    63% {
      opacity: 0;
    }
    75% {
      opacity: 0;
      transform: translate(0, -80px);
    }
    87% {
      opacity: 0.5;
    }
    100% {
      transform: translate(0, -10px);
      opacity: 1;
    }
  }
  @keyframes mobileMainPageBtns {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    37% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    63% {
      opacity: 0;
    }
    75% {
      opacity: 0;
      transform: translate(0, 200px);
    }
    87% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      transform: translate(0, 0px);
    }
  }
  @keyframes mobileMainPageText {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    37% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    63% {
      opacity: 0;
    }
    75% {
      opacity: 0;
      transform: translate(0, 80px);
    }
    87% {
      opacity: 0.5;
    }
    100% {
      transform: translate(0, 175px);
      opacity: 1;
    }
  }
  @keyframes maleAnim {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    37% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    63% {
      opacity: 0;
    }
    75% {
      opacity: 0;
      transform: translate(-300px, 0);
    }
    87% {
      opacity: 1;
    }
    100% {
      transform: translate(-20px, 0);
      opacity: 1;
    }
  }
  @keyframes femaleAnim {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    37% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    63% {
      opacity: 0;
    }
    75% {
      opacity: 0;
      transform: translate(300px, 0);
    }
    87% {
      opacity: 1;
    }
    100% {
      transform: translate(20px, 0);
      opacity: 1;
    }
  }
  @keyframes glowingAnim {
    0% {
    }
    12% {
    }
    25% {
    }
    37% {
    }
    49% {
    }
    63% {
    }
    75% {
      transform: translate(-170px, 0);
    }
    87% {
    }
    100% {
      transform: translate(170px, 0);
    }
  }
  @keyframes glowingAnimSecond {
    0% {
    }
    12% {
    }
    25% {
    }
    37% {
    }
    49% {
    }
    63% {
    }
    75% {
      transform: translate(170px, 0);
    }
    87% {
    }
    100% {
      transform: translate(-170px, 0);
    }
  }
  @keyframes mobileMainPage {
    0% {
      opacity: 0;
      transform: translate(0, -50px);
    }
    100% {
      transform: translate(0, 20px);
      opacity: 1;
    }
  }
}
</style>
