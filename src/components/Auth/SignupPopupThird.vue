<script setup>
import SignupHobby from '@/components/Auth/SignupHobby.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
router.push({ name: 'Registration', query: { stage: 'three' } })
const isClicked = ref(false)
const modalHobbyVisible = ref(false)
</script>

<template>
  <SignupHobby
    v-if="modalHobbyVisible"
    @hide-modal-hobby="modalHobbyVisible = false"
  />
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
    </div>
    <div class="auth__back__btn">
      <slot name="backPhaseTwo"></slot>
    </div>
    <div class="mobileArrow">
      <slot name="backPhaseTwoMobile"></slot>
    </div>
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
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
              <div class="block skills">
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
                <div class="input">
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
          </div>
        </div>
      </div>
      <div class="webBtn">
        <slot name="fourthPhase"></slot>
      </div>
      <div class="mobileBtn">
        <slot name="fourthPhaseMobile"> </slot>
      </div>
      <p class="skip web">Пропустить</p>
    </div>
    <div class="mobileSkip">
      <slot name="mobileSkip"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobileBtn {
  display: none;
}
.mobileSkip {
  display: none;
  p {
    display: none;
  }
}
.signup__navigation {
  margin-top: 64px;
  margin-bottom: 100px;
  width: 176px;
  height: 4px;
  display: flex;
  justify-content: space-between;
}
.navigation__item {
  width: 32px;
  height: 4px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.33);
  &.active {
    background: #2b66fb;
    cursor: pointer;
  }
}
.signup__background {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
.signup__page {
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.signup__border {
  width: 446px;
  border: none;
  margin-bottom: 61px;
}
.signup__block {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 48px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  border-radius: 24px;
}
.signup__block__container {
  width: 326px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mobileArrow {
  display: none;
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
    margin-bottom: 12px;
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
  color: #f2ebebbf;
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
  margin-bottom: 32px;
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
  .auth__back__btn {
    display: none;
  }
  .mobileSkip {
    display: flex;
  }
  .signup__navigation {
    margin-bottom: 62px;
  }
  .mobileArrow {
    display: flex;
  }
  .mobileBtn {
    display: flex;
  }
  .signup__page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .webBtn {
    display: none;
  }
  .signup__border {
    display: flex;
    border: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: unset;
  }
  .block {
    &.first {
      margin-top: 0;
    }
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
  }
  .signup__block__container {
    width: 85.89vw;
    display: flex;
    justify-content: center;
    align-items: center;
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
