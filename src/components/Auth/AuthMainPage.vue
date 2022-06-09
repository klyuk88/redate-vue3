<template>
  <div
    class="background"
    :class="{
      maleStyle: maleActive,
      femaleStyle: femaleActive,
      maleMobileStyle: maleMobileActive
    }"
  >
    <div class="content__container">
      <div class="male__side">
        <div
          class="btn"
          @mouseenter="changeBackMale"
          @mouseleave="changeBackMale"
        >
          Мужчина
        </div>
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
          <div class="btn">Войти</div>
          <div class="mobile__btn__block">
            <h1>Абсолютно новый формат знакомств</h1>
            <div class="btn__box">
              <div class="mobile__btn male" @click="chooseMaleMobile">Мужчина</div>
              <div class="mobile__btn female" @click="chooseFemaleMobile" :class="{ btnMale : maleMobileActive}">ДЕВУШКА</div>
            </div>
          </div>
        </div>
        <h1 class="choose">Выбирите свой пол:</h1>
      </div>
      <div class="female__side">
        <div
          class="btn"
          @mouseenter="changeBackFemale"
          @mouseleave="changeBackFemale"
        >
          ДЕВУШКА
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maleActive: false,
      femaleActive: false,
      maleMobileActive: false,
      femaleMobileActive: false
    };
  },
  methods: {
    changeBackMale() {
      return (this.maleActive = !this.maleActive);
    },
    changeBackFemale() {
      return (this.femaleActive = !this.femaleActive);
    },
    chooseMaleMobile() {
      return (this.maleMobileActive = !this.maleMobileActive)
    },
        chooseFemaleMobile() {
      return (this.femaleMobileActive = !this.femaleMobileActive)
    }
  },
};
</script>
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
  text-fill-color: transparent;
}

.background {
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/main/1stage.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;

  .content__container {
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
      .logo {
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
        .btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
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
.resetBack {
  animation-name: resetBackground;
  animation-duration: 2s;
  animation-fill-mode: forwards;
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
// @keyframes resetBackground {
//   0% {
//     opacity: 1;
//     background: url(../../assets/images/main/3stage.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     width: 100%;
//     height: 100vh;
//   }
//   50% {
//     opacity: 1;
//     background: url(../../assets/images/main/1stage.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     width: 100%;
//     height: 100vh;
//   }
//   100% {
//     opacity: 1;
//     background: url(../../assets/images/main/1stage.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     width: 100%;
//     height: 100vh;
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

    .content__container {
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
        margin-top: 50px;
        height: 678px;
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
          height: 624px;
          .mobile__btn__block {
            height: 200px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            .btn__box {
              height: 110px;
              width: 181px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .mobile__btn {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                border: 1px solid rgba(255, 255, 255, 0.33);
                filter: drop-shadow(0px 32px 83px rgba(18, 34, 74, 0.5));
                border-radius: 11px;
                padding: 11px 46px;
                height: 47px;
                width: 181px;
                font-weight: 600;
                font-size: 16px;
                line-height: 153.5%;
                text-align: center;
                text-transform: uppercase;
                color: #ffffff;
                cursor: pointer;
              }
            }
          }
          .btn {
            width: 150px;
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
</style>
