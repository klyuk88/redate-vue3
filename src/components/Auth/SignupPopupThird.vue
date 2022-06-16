<template>
<SignupHobby v-if="modalHobbyVisible" @hideModalHobby="modalHobbyVisible = false"/>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item"></div>
    </div>
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <router-link to="/registration/2">
        <h1 class="auth__back__btn__title">Назад</h1>
      </router-link>
    </div>
    <div class="signup__page">
      <div class="signup__border" :class="{ animated__border__sign__three: isClicked }">
        <div class="signup__block" >
          <div class="signup__block__container">
            <div class="signup__input__box">
              <div class="block first" @click="isClicked = true">
                <p>Отношение к алкоголю:</p>
                <div class="block__choose">
                  <div class="choose__list">
                    <p>Негативное</p>
                    <div class="vertical__line"></div>
                    <p>Нейтральное</p>
                    <div class="vertical__line"></div>
                    <p>Положительное</p>
                  </div>
                </div>
                
              </div>
              <div class="horizontal__line"></div>
              <div class="block" @click="isClicked = true">
                <p>Отношение к курению:</p>
                <div class="block__choose">
                  <div class="choose__list">
                    <p>Негативное</p>
                    <div class="vertical__line"></div>
                    <p>Нейтральное</p>
                    <div class="vertical__line"></div>
                    <p>Положительное</p>
                  </div>
                </div>
              </div>
              <div class="horizontal__line"></div>
              <div class="block skills" >
                <p>Увлечения:</p>
                <div class="input" @click="isClicked = true">
                  <div class="chips">
                    Спорт
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    Вино
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    Путешевствие
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    Ужасы
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="add" @click="modalHobbyVisible = true">+</div>
                </div>
              </div>
              <div class="horizontal__line"></div>
              <div class="block skills last">
                <p>Знание языков:</p>
                <div class="input"  >
                  <div class="chips">
                    Спорт
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    Вино
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    Путешевствие
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    Ужасы
                    <img
                      src="@/assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="add" @click="modalHobbyVisible = true">+</div>
                </div>
              </div>
            </div>
            <div class="signup__btn mobile">Продолжить</div>
            <p class="skip mobile">Пропустить</p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/registration/4">
      <div class="signup__btn web" @click="isClicked = true">Продолжить</div>
    </router-link>
    <router-link to="/registration/4">
      <p class="skip web">Пропустить</p>
      </router-link>
  </div>
</template>
<script setup>

import AuthPopup from "@/components/Auth/AuthPopup.vue";
import SignupHobby from "@/components/Auth/SignupHobby.vue";
import SignupPopupVue from "@/components/Auth/SignupPopup.vue";
  import { ref } from "vue";
const isClicked = ref(false);
const modalHobbyVisible = ref(false);

</script>
<style lang="scss" scoped>
.signup__page {
height: 715px;
margin: 0;
}
.signup__border {
  width: 446px;
  border: none;
  position: absolute;

}
.signup__block {
  width: 422px;
}
.signup__block__container {
  width: 326px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.signup__input__box {
}
.block {
  width: 326px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &.first {
  margin-top: 48px;
  }
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: #ffffff;
    margin-bottom:12px;
  }
  .skills {
    height: 77px;
  }
  &.last {
    margin-bottom: 48px;
  }
}
.chips {
  font-weight: 600;
  font-size: 12px;
  line-height: 132.5%;
  color: #ffffff;
  padding: 4px 10px;
  border: 1px solid #ffffff;
  border-radius: 8px;

  img {
    margin-left: 5px;
    cursor: pointer;
  }
}
.add {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px;
  width: 24px;
  height: 24px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 2px;
}
.block__choose {
  width: 326px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.33);
  }
}

.choose {
  color: #ffffff;
}
.choose__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 291px;
  height: 23px;
  p {
    cursor: pointer;
    font-size: 13px;
    margin: 0;
  }
}
.vertical__line {
  height: 18px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.33);
}
.horizontal__line {
  width: 326px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.07);
  margin-bottom: 24px;
margin-top: 24px;
}
.input {
  margin: 0;
  min-height: 47px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.signup__btn {
  &.mobile {
    display: none;
  }
}
.skip {
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  text-decoration-line: underline;
  color: #ffffff;
  cursor: pointer;
  margin-top: 24px;
  &.mobile {
    display: none;
  }
}
.animated__border__sign__three {
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
    height: 655px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 428px;
    height: 670px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 675px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 445px;
    height: 680px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 466px;
    height: 685px;
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
    margin: 0;

  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__block__container {
    width: 85.89vw;
  }
  .block__choose {
    width: 85.89vw;
  }
  .input {
    width: 85.89vw;
    background: none;
    min-height: 15.384vw;
  }

  .skip {
    &.mobile {
      display: flex;
    }
    &.web {
      display: none;
    }
  }
  .signup__btn {
    &.mobile {
      display: flex;
      width: 85.89vw;
      margin-top: 3.846vw;
    }
    &.web {
      display: none;
    }
  }
}
</style>
