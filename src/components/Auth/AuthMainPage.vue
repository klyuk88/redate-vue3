<script setup>
import { ref } from 'vue'

const maleActive = ref(false)
const femaleActive = ref(false)
const maleMobileActive = ref(false)
const femaleMobileActive = ref(false)

const changeBackMale = () => {
  return (maleActive.value = !maleActive.value)
}
const changeBackFemale = () => {
  return (femaleActive.value = !femaleActive.value)
}
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
  <div
    class="background"
    :class="{
      maleStyle: maleActive,
      femaleStyle: femaleActive,
      maleMobileStyle: maleMobileActive,
    }"
  >
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
      <div class="male__side">
        <router-link to="/registration" @click="setSex(1)">
          <div
            class="btn"
            @mouseenter="changeBackMale()"
            @mouseleave="changeBackMale()"
          >
            Мужчина
          </div>
        </router-link>
      </div>
      <div class="middle__menu">
        <div class="logo">
          <img
            class="web"
            src="../../assets/images/main/main_page__logo.svg"
            alt=""
          />
          <img
            class="mobile"
            src="../../assets/images/main/main__page__mobile__logo.svg"
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
        <h1 class="choose">Выбирите свой пол:</h1>
      </div>
      <div class="female__side">
        <router-link to="/registration">
          <div
            class="btn"
            @mouseenter="changeBackFemale()"
            @mouseleave="changeBackFemale()"
            @click="setSex(2)"
          >
            ДЕВУШКА
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  background: linear-gradient(
    239.3deg,
    #ffffff 2.37%,
    rgba(255, 255, 255, 0.21) 135.92%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.background {
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/main/shadowStage.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  animation-name: changeStartBack;
  animation-duration: 6s;
  animation-fill-mode: forwards;

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
          background: #e9218d;
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
.maleStyle {
  animation-name: changebackgroundmale;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
.femaleStyle {
  animation-name: changebackgroundfemale;
  animation-duration: 2s;
  animation-fill-mode: forwards;
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
// @keyframes backgroundShadow {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }

@media (max-width: 1200px) {
  .background {
    width: 100%;
    height: 100vh;
    background: url(../../assets/images/main/mobile__background__mainpage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    animation-name: changeStartBackMobile;
    .content__container__auth {
      align-items: unset;
      .male__side {
        display: none;
        width: 33%;
        height: 100vh;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .btn {
          display: none;
        }
      }
      .middle__menu {
        margin-top: 12.82vw;
        height: 173.846vw;
        top: 0;
        width: 33%;
        .choose {
          display: none;
        }

        .logo {
          .web {
            display: none;
          }
          .mobile {
            display: flex;
          }
        }
        .signin__btn__block {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          height: 160vw;
          .mobile__btn__block {
            height: 51.282vw;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            .btn__box {
              height: 28.2vw;
              width: 46.41vw;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
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
          .btn {
            width: 38.46vw;
          }
        }
      }
      .female__side {
        width: 33%;
        height: 100vh;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .btn {
          display: none;
        }
      }
    }
  }
}
.btnMale {
  background-color: #e9218d;
}
.mobileMaleStyle {
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
    background: url(../../assets/images/main/shadowStage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height:100%;
  }
  50% {
    opacity: 1;
    background: url(../../assets/images/main/1stage.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height:100%;
  }
  100% {
    opacity: 1;
    background: url(../../assets/images/test/Group3825.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height:100%;
  }
}
// @keyframes changeStartBackMobile {
//   0% {
//     opacity: 1;
//     background: url(../../assets/images/main/male.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     transform: translate(0,  );
//     width: 100%;
//     height: 70vh;
//   }
//   50% {
//     opacity: 1;
//     background: url(../../assets/images/main/male.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     width: 100%;
//     height: 70vh;
//   }
//   100% {
//     opacity: 1;
//     background: url(../../assets/images/test/male.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     width: 100%;
//     height: 70vh;
//   }
// }
</style>
