<script setup>
import { ref } from 'vue'

const isClicked = ref(true)
</script>

<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
    </div>
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <router-link to="/registration/photo">
        <h1 class="auth__back__btn__title">Назад</h1>
      </router-link>
    </div>
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="photo__container">
              <div class="photo__main">
                <img
                  class="avatar"
                  src="@/assets/images/main/woman__main__avatar.png"
                  alt=""
                />
              </div>
              <div class="photo__mini__block">
                <div class="photo__mini__item">
                  <img
                    src="@/assets/images/main/woman__mini__avatar1.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
                <div class="photo__mini__item">
                  <img
                    src="@/assets/images/main/woman__mini__avatar3.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
                <div class="photo__mini__item choosed">
                  <img
                    src="@/assets/images/main/woman__mini__avatar2.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
                <div class="photo__mini__item">
                  <img
                    src="@/assets/images/main/woman__mini__avatar4.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p class="description">
              Выберите фотографию, которая будет Вашей аватаркой
            </p>
            <div class="upload__btn web">Загрузить с компьютера</div>
            <div class="replace__photo">Очистить фотографии</div>
            <div class="continue__btn">Продолжить</div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/verification">
      <div class="signup__btn web" @click="isClicked = true">
        Зарегистрироваться
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.auth__back__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: 70px;
  left: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.auth__back__btn__mobile {
  cursor: pointer;
  position: fixed;
  top: 55px;
  left: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.auth__back__btn__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.signup__background {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .signup__page {
    margin-bottom: 49px;
    .signup__border {
      .signup__block {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.0384) 0%,
          rgba(95, 133, 228, 0.05) 68.75%
        );
        border: 1px solid #2b66fb;
        border-radius: 24px;
        .signup__block__container {
          display: flex;
          align-items: center;
          flex-direction: column;
          .photo__main {
            margin: 48px 48px 0 48px;
            img {
              width: 308px;
              height: 308px;
            }
          }
          .photo__container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
          align-items: center;
          .description {
            width: 246px;
            text-align: center;
            margin-bottom: 32px;
          }
          .upload__btn {
            &.web {
              margin-bottom: 48px;
            }
          }
        }
      }
    }
  }
  .signup__btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.continue__btn {
  display: none;
}
.replace__photo {
  display: none;
}

.signup__navigation {
  height: 4px;
  width: 176px;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 133px;
}
.navigation__item {
  width: 32px;
  height: 4px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.33);
  &.active {
    background: #2b66fb;
  }
}
.navigation__item {
  width: 128px;
}

.avatar {
  margin-top: 14px;
}
.delete {
  position: fixed;
  margin-left: 20px;
  cursor: pointer;
}

.photo__main {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // border: 1px solid #2b66fb;
  // filter: drop-shadow(0px 8px 25px rgba(43, 102, 251, 0.17));
  // border-radius: 24px;
  // width: 308px;
  // height: 308px;
}
.photo__mini__block {
  width: 305px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.photo__mini__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  cursor: pointer;

  &.choosed {
    border: 1px solid #2b66fb;
    filter: drop-shadow(0px 2px 16px rgba(43, 102, 251, 0.44));
    border-radius: 14px;
  }
}
p {
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  line-height: 132.5%;
}
.upload__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 228px;
  height: 35px;
  border: 1px solid #ffffff;
  border-radius: 11px;
  cursor: pointer;
}
.signup__btn {
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: #ffffff;
}
.animated__border__upload {
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
    width: 404px;
    height: 595px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 414px;
    height: 615px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 424px;
    height: 625px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 434px;
    height: 635px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 444px;
    height: 645px;
  }
}
@media (max-width: 1200px) {
  .signup__page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup__border {
    display: flex;
    border: none;
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__block__container {
    width: 85.89vw;
    height: 152.3vw;
  }
  .signup__btn {
    &.web {
      display: none;
    }
  }
  .upload__btn {
    &.web {
      display: none;
    }
  }
  .replace__photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54.61vw;
    height: 8.974vw;
    border: 0.256vw solid rgba(255, 255, 255, 0.14);
    border-radius: 2.82vw;
  }
  .continue__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85.89vw;
    height: 15.38vw;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 2.82vw;
    margin-top: 5.128vw;
  }
}
</style>
