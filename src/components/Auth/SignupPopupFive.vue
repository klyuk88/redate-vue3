<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

router.push({ name: 'Registration', query: { stage: 'five' } })
const femalePage = ref(false)
const uploaded = ref(false)
const isClicked = ref(false)
const randomPhoto = ref(true)
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
      <slot name="backPhaseFour"></slot>
    </div>
    <div class="mobileArrow">
      <slot name="backPhaseFourthMobile"></slot>
    </div>
    <div class="signup__page">
      <div
        class="signup__border"
        :class="{ animated__border__upload: isClicked }"
      >
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="photo__block">
              <div class="photo__border">
                <div class="inner__border">
                  <div class="add__btn">
                    <img
                      src="@/assets/images/main/add__photo__btn.svg"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="@/assets/images/main/upload__photo__male.svg"
                  alt=""
                />
              </div>
            </div>
            <p v-if="!uploaded">
              Вы можете добавите от 3 до 10 фотографий, после этогов одну из них
              Вы сможете поставить на свою аватарку. Остальные фотографии будут
              отображаться в Вашей гелерее.
            </p>
            <p v-if="uploaded">
              Выберите фотографию, которая будет вашей аватаркой
            </p>
            <div class="btn__block web">
              <!-- <div class="upload__btn">Загрузить с компьютера</div> -->
              <slot name="choosePhase"></slot>
              <div v-if="!femalePage" class="random__btn">
                Выбрать случайную
              </div>
            </div>
            <div class="btn__block mobile">
              <div class="btn__box" :class="{ replace: uploaded }">
                <div v-if="!uploaded || randomPhoto" class="upload">
                  Загрузить
                </div>
                <div v-if="!uploaded || randomPhoto" class="make__photo">
                  Сделать снимок
                </div>
                <div v-if="uploaded" class="replace__photo">
                  Очистить фотографии
                </div>
              </div>
              <div v-if="!femalePage && !uploaded" class="random__btn">
                Выбрать случайную
              </div>
              <div class="btn__continue web">Продолжить</div>
            </div>
          </div>
        </div>
        <router-link to="/main">
          <div v-if="!femalePage" class="btn__male__continue">Продолжить</div>
        </router-link>
        <router-link to="/main">
          <div v-if="femalePage && uploaded" class="btn__male__continue">
            Продолжить
          </div>
        </router-link>
        <router-link to="/main">
          <div v-if="uploaded || randomPhoto" class="btn__mobile__continue">
            Зарегистрироваться
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.replace__photo {
  display: none;
}
.btn__mobile__continue {
  display: none;
}
.mobileArrow {
  display: none;
}
.signup__navigation {
  height: 4px;
  width: 176px;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 158px;
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
.signup__background {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup__page {
}
.signup__border {
  display: flex;
  flex-direction: column;
  align-items: center;
  .signup__block {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 48px;
    gap: 10px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.0384) 0%,
      rgba(95, 133, 228, 0.05) 68.75%
    );
    border: 1px solid #2b66fb;
    border-radius: 24px;
    .signup__block__container {
      width: 334px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

p {
  font-weight: 600;
  font-size: 12px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 32px;
}

.photo__block {
  background: none;
}
.photo__border {
  width: 308px;
  height: 308px;
  border: 1px solid #ffffff;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    display: none;
  }
}
.inner__border {
  width: 230px;
  height: 230px;
  border: 1px dashed rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  &.male {
    width: 228px;
    height: 82px;
  }
  &.mobile {
    display: none;
  }
}
.upload__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 228px;
  height: 35px;
  background: #2b66fb;
  border-radius: 11px;
  cursor: pointer;
}
.random__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 197px;
  height: 35px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
  margin-top: 12px;
  cursor: pointer;
  &.male {
    display: inline-flex;
  }
}
.btn__continue {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  cursor: pointer;
}
.btn__male__continue {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  margin-top: 42px;
  cursor: pointer;
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
    width: 431px;
    height: 559px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 440px;
    height: 570px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 451px;
    height: 580px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 461px;
    height: 590px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 471px;
    height: 600px;
  }
}
@media (max-width: 1200px) {
  .replace__photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 213px;
    height: 35px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
  }
  .btn__mobile__continue {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 335px;
    height: 60px;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 11px;
    margin-top: 48px;
  }
  .btn__male__continue {
    display: none;
  }
  .auth__back__btn {
    display: none;
  }
  .mobileArrow {
    display: flex;
  }
  .signup__navigation {
    margin-left: 0;
    margin-bottom: 72px;
  }
  .btn__block {
    &.web {
      display: none;
    }
    &.male {
      height: 21.025vw;
    }
  }
  .signup__page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup__border {
    display: flex;
    border: none;
    .signup__block {
      border: none;
      background: none;
      box-shadow: none;
      padding: 0;
    }
  }
  .signup__block__container {
    width: 85.89vw;
  }
  .inner__border {
    &.added {
      display: none;
    }
  }
  .btn__continue {
    &.web {
      display: none;
      &.added {
        display: flex;
        width: 85.89vw;
      }
    }
  }
  .photo__border {
    img {
      &.added {
        display: flex;
      }
    }
  }
  .btn__block {
    &.mobile {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
  }
  .btn__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 78.205vw;
    height: 8.974vw;
    &.replace {
      justify-content: center;
    }
  }
  .upload {
    width: 32.3vw;
    height: 8.974vw;
    background: #2b66fb;
    border-radius: 2.82vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .make__photo {
    width: 42.82vw;
    height: 8.974vw;
    background: #2b66fb;
    border-radius: 2.82vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .random__btn {
    width: 50.512vw;
    height: 8.974vw;
    border: 0.256vw solid rgba(255, 255, 255, 0.14);
    border-radius: 2.82vw;
  }
}
</style>
