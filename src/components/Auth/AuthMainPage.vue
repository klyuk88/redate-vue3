<script setup>
import { ref } from 'vue'

const maleActive = ref(false)
const femaleActive = ref(false)
const maleMobileActive = ref(false)
const femaleMobileActive = ref(false)

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
        class="img__test"
        :class="{
          maleStyle: maleActive,
          femaleStyle: femaleActive,
          maleStyleFade: !maleActive,
          femaleStyleFade: !femaleActive,
        }"
      ></div>
      <div class="male__side">
        <div
          class="web__glow male"
          :class="{ fade: maleActive, pink: femaleActive }"
        ></div>
        <div class="male__img"></div>
        <router-link to="/registration" @click="setSex(1)">
          <div
            class="btn"
            @mouseenter="maleActive = true"
            @mouseleave="maleActive = false"
          >
            Мужчина
          </div>
        </router-link>
      </div>
      <div class="middle__menu">
        <div
          class="web__glow middle"
          :class="{ fade: maleActive, pink: femaleActive }"
        ></div>
        <div class="logo">
          <img
            class="web"
            src="../../assets/images/main/main_page__logo.svg"
            alt=""
          />
        </div>
        <div class="signin__btn__block">
          <router-link to="/auth">
            <div class="btn">Войти</div>
          </router-link>
          <div class="mobile__btn__block">
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
        </div>
        <h1 class="choose">Выберите свой пол:</h1>
      </div>
      <div class="female__side">
        <div
          class="web__glow female"
          :class="{ fade: maleActive, pink: femaleActive }"
        ></div>
        <div class="female__img"></div>
        <router-link to="/registration">
          <div
            class="btn"
            @mouseenter="femaleActive = true"
            @mouseleave="femaleActive = false"
            @click="setSex(2)"
          >
            ДЕВУШКА
          </div>
        </router-link>
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
      <h1>Абсолютно новый формат знакомств</h1>
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
.img__test {
  // background: url(../../assets/images/main/1stage.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  animation-name: changeStartBack;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  //   &.femaleStyleFade {
  //       animation-name: changeStartBackFemale;
  //     animation-duration: 3s;
  //     animation-fill-mode: forwards;
  //   }
  // &.maleStyleFade {
  //   animation-name: changeStartBackMale;
  //   animation-duration: 3s;
  //   animation-fill-mode: forwards;
  // }
  &.femaleStyle {
    animation-name: changebackgroundfemale;
    animation-duration: 2s;
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
  // background: url(../../assets/images/main/shadowStage.png);
  // background: url(../../assets/images/main/1.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  // position: relative;
  // z-index: 999;
  left: 0;
  top: 0;

  .content__container__auth {
    display: flex;
    justify-content: space-between;
    // align-items: center;

    .male__side {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      position: relative;
      // z-index: 2;
      // .web__glow {
      //   width: 90px;
      //   height: 800px;
      //   background-color: #2965FF;
      //   border-radius: 70%;
      //   box-shadow: 0 0 90px 200px #2965FF;
      //   opacity: 0.8;
      //   position: relative;
      //   left: -400px;
      //   top: 200px;
      //   z-index: 1;
      // }
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
        animation-duration: 5s;
        animation-fill-mode: forwards;
      }

      .logo {
        animation-name: logoScale;
        animation-duration: 1s;
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
          animation-duration: 1s;
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

.web__glow {
  width: 90px;
  height: 180px;
  background-color: rgb(43, 102, 251);
  border-radius: 70%;
  box-shadow: 0 0 90px 180px rgba(41, 102, 255), 0 0 220px 310px #2966ff57,
    0 0 270px 360px #2966ff1c;
  opacity: 0.4;
  position: fixed;
  // left: -400px;
  top: 300px;
  z-index: -1;
  transition: 2s;
  &.middle {
    animation-name: fadeGlowWeb;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    &.fade {
      animation-name: fadeMiddleGlow;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
    &.pink {
      animation-name: pinkMiddleGlow;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      transition: 1s;
      background-color: rgb(233, 33, 141);
      box-shadow: 0 0 90px 25px rgb(233, 33, 141),
        0 0 100px 130px rgb(233, 33, 141), 0 0 140px 160px rgb(233, 33, 141);
    }
  }
  &.male {
    left: -100px;
    top: 900px;
    animation-name: transGlowWebMale;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    box-shadow: 0 0 50px 250px rgb(41, 101, 255), 0 0 100px 360px #2966ff57,
      0 0 170px 360px #2966ff1c;
    &.fade {
      z-index: 2;
      animation-name: fadeMaleGlow;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
    &.pink {
      z-index: 2;
      animation-name: pinkMaleGlow;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      transition: 1s;
      background-color: rgb(233, 33, 141);
      box-shadow: 0 0 90px 25px rgb(233, 33, 141),
        0 0 100px 130px rgb(233, 33, 141), 0 0 140px 160px rgb(233, 33, 141);
    }
  }
  &.female {
    right: 0;
    top: -150px;
    z-index: -1;
    animation-name: transGlowWebFemale;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    &.fade {
      z-index: 2;
      animation-name: fadeFemaleGlow;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
    &.pink {
      z-index: 2;
      animation-name: pinkFemaleGlow;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      transition: 1s;
      background-color: rgb(233, 33, 141);
      box-shadow: 0 0 90px 25px rgb(233, 33, 141),
        0 0 100px 130px rgb(233, 33, 141), 0 0 140px 160px rgb(233, 33, 141);
    }
  }
}
@keyframes fadeMaleGlow {
  0% {
    opacity: 0.8;
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 50px);
  }
  100% {
    // opacity: 0;
    // width: 0px;
    // height: 0px;
    transform: translate(0, 100px);
  }
}
@keyframes pinkMaleGlow {
  0% {
  }
  100% {
    transform: translate(0, 0);
    height: 20px;
    width: 150px;
  }
}
@keyframes fadeMiddleGlow {
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 0.4;
  }
}
@keyframes pinkMiddleGlow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
}
@keyframes fadeGlowWeb {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
    height: 0px;
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
@keyframes changeStartBack {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/shadowStage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
}
@keyframes changeStartBackMale {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/2stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
}
@keyframes changeStartBackFemale {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/3stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
}
@keyframes changebackgroundfemale {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/3stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/3stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
}
@keyframes changebackgroundmale {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/2stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/2stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
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
    flex-direction: column;
    .glow {
      width: 230px;
      height: 30px;
      background-color: #2965ff;
      border-radius: 50%;
      box-shadow: 0 0 60px 90px #2965ff;
      position: fixed;
      bottom: -35px;
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
        // 1 stage
      }
    }
    h1 {
      font-size: 20px;
      width: 236px;
      animation-name: mobileTextScale;
      animation-duration: 6s;
      animation-fill-mode: forwards;
      // 1 stage
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
}
// .btnMale {
//   background-color: #e9218d;
// }
.mobileMaleStyle {
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
@keyframes btnPink {
  0% {
    background-color: none;
  }
  50% {
    background-color: #e9218cb9;
  }
  100% {
    background-color: #e9218d;
  }
}
@keyframes changeStartBackMobile {
  0% {
    opacity: 1;
    background: url(../../assets/images/main/1.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    transform: translate(-120px, 0);
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/1.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    transform: translate(-60px, 0);
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/main/1.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
  }
}
</style>
