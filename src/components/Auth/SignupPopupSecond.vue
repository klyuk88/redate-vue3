<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
    </div>
    <div class="auth__back__btn">
      <slot name="backPhaseOne"></slot>
    </div>
    <div class="mobileArrow">
      <slot name="backPhaseOneMobile"></slot>
    </div>
    <div class="signup__page">
      <div class="signup__border" >
        <div class="signup__block" >
          <div class="signup__block__container" >
            <div class="signup__input__box">
              <input class="input" type="text" placeholder="Имя" @click="isClicked = true"/>
              <TheSelect class="select__country" placeholder="Страна, Город"  @click="isClicked = true" />
              <TheSelect class="select__nation" placeholder="Национальность" @click="isClicked = true"/>
            </div>
            <div class="signup__footer" >
              <div class="signup__age__block">
                <p>Дата рождения:</p>
                <div class="age__input__block" @click="isClicked = true">
                  <input
                    class="input"
                    type="text"
                    placeholder="01"
                    maxlength="2"
                  />
                  <div class="vertical__line"></div>
                  <input class="input" placeholder="01" maxlength="2" />
                  <div class="vertical__line"></div>
                  <input class="input year" placeholder="2000" maxlength="4" />
                </div>
              </div>
              <div class="signup__horizontal__line"></div>
              <div class="footer__desc" >
                <div class="signup__params" >
                  <div class="signup__params__block"  @click="isClicked = true">
                    <div class="signup__params__item"  >
                      <p>Рост:</p>
                      <input
                        class="input"
                        type="text"
                        placeholder="170"
                        maxlength="3"
                      />
                    </div>
                    <div class="signup__params__item" >
                      <p>Вес:</p>
                      <input
                        class="input"
                        type="text"
                        placeholder="50"
                        maxlength="3"
                      />
                    </div>
                  </div>
                  <div class="signup__params__item params__size" >
                    <p>Параметры:</p>
                    <div class="params__input__box">
                      <input
                        class="input"
                        type="text"
                        placeholder="90"
                        maxlength="3"
                      />
                      <div class="vertical__line"></div>

                      <input
                        class="input"
                        type="text"
                        placeholder="60"
                        maxlength="3"
                      />
                      <div class="vertical__line"></div>

                      <input
                        class="input"
                        type="text"
                        placeholder="90"
                        maxlength="3"
                      />
                    </div>
                  </div>
                </div>
                <span>*Необязательно для заполнения</span>
              </div>
            </div>
            <slot name="thirdPhaseMobile"></slot>
          </div>
        </div>
      </div>
      <div class="mobile__body">
        <div class="signup__block__container" >
          <div class="signup__input__box">
            <input class="input" type="text" placeholder="Имя" />
            <TheSelect class="select__country" placeholder="Страна, Город" />
            <TheSelect class="select__nation" placeholder="Национальность" />
          </div>
          <div class="signup__footer" >
            <div class="signup__age__block">
              <p>Дата рождения:</p>
              <div class="age__input__block">
                <input
                  class="input"
                  type="text"
                  placeholder="01"
                  maxlength="2"
                />
                <div class="vertical__line"></div>
                <input class="input" placeholder="01" maxlength="2" />
                <div class="vertical__line"></div>
                <input class="input year" placeholder="2000" maxlength="4" />
              </div>
            </div>
            <div class="signup__horizontal__line"></div>
            <div class="footer__desc" >
              <div class="signup__params" >
                <div class="signup__params__block" >
                  <div class="signup__params__item" >
                    <p>Рост:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="170"
                      maxlength="3"
                    />
                  </div>
                  <div class="signup__params__item" >
                    <p>Вес:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="50"
                      maxlength="3"
                    />
                  </div>
                </div>
                <div class="signup__params__item params__size" >
                  <p>Параметры:</p>
                  <div class="params__input__box">
                    <input
                      class="input"
                      type="text"
                      placeholder="90"
                      maxlength="3"
                    />
                    <div class="vertical__line"></div>

                    <input
                      class="input"
                      type="text"
                      placeholder="60"
                      maxlength="3"
                    />
                    <div class="vertical__line"></div>

                    <input
                      class="input"
                      type="text"
                      placeholder="90"
                      maxlength="3"
                    />
                  </div>
                </div>
              </div>
              <span>*Необязательно для заполнения</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="webBtn">
      <slot name="thirdPhase" ></slot>
    </div>
    
      <!-- <div class="signup__btn web" :class="error">Продолжить</div> -->

  </div>
</template>
<script setup>
import TheSelect from "../Form/TheSelect.vue";
import { ref } from "vue";

const isClicked = ref(false);
</script>
<style lang="scss" scoped>
.mobileArrow {
  display: none;
}
.signup__navigation {
  margin-top: 64px;
  margin-bottom: 153px;
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
  flex-direction: column;
  align-items: center;
}
.signup__page {
    padding: 48px;
  gap: 10px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.0384) 0%, rgba(95, 133, 228, 0.05) 68.75%);
border: 1px solid #2B66FB;
border-radius: 24px;
margin-bottom: 67px;
}
.signup__border {
  border: none;
  position: absolute;
  display: none;
}

.signup__block {

}
.signup__block__container {

}
.signup__input__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.input {
  font-family: "Mulish";
  cursor: pointer;
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
  &:focus {
    color: #ffffff;
    border: #ffffff solid 1px;
  }
  margin: 0;
  &:focus {
    border: #ffffff 1px solid;
  }
}
.select__country {
  width: 326px;
  height: 60px;
  z-index: 2;
  margin: 0;
  margin-top: 16px;
  margin-bottom: 16px;
}
.select__nation {
  width: 326px;
  height: 60px;
  z-index: 1;
  margin: 0;
}
.signup__footer {
  // height: 225px;
  position: unset;

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: rgba(255, 255, 255, 0.4);
  }
}
.vertical__line {
  height: 18px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.14);
}

.signup__age__block {
  width: 326px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #ffffff;
    margin: 0;
  }
  input {
    text-align: center;
    border: none;
    width: 43.5px;
    height: 43.5px;
    background: none;

    &.year {
      width: 87px;
      height: 43.5px;
    }
  }
}
.age__input__block {
  width: 186px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  align-items: center;
  display: flex;
  &:hover {
    border: #ffffff 1px solid;
  }
  .input {
    border: none;
    background: none;
  }
}
.signup__horizontal__line {
  width: 326px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.07);
  margin-bottom: 24px;
}
.signup__params__block {
  width: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.male {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 281px;
    height: 60px;
  }
}
.signup__params {
  display: flex;
  justify-content: space-between;
  width: 326px;
  margin-bottom: 8px;
}
.signup__params__item {
  width: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 12px;
  }
  &.male {
    flex-direction: row;
    width: 121px;
  }

  &.params__size {
    &.male {
      display: none;
    }
    width: 174px;
    &:focus {
      border: #ffffff 1px solid;
    }
  }
  input {
    width: 60px;
    height: 60px;
    text-align: center;
    background: none;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #ffffff;
  }
}
.footer__desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.male {
    height: 84px;
  }
}
.params__input__box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  &:hover {
    border: #ffffff 1px solid;
  }
  input {
    border: none;
    width: 57px;
    &:focus {
      border: none;
    }
  }
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
}
.signup__btn {
  &.error {
    color: rgba(255, 255, 255, 0.33);
    background: #434447;
  }
}
.animated__border__sign__two {
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
    height: 565px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 428px;
    height: 570px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 434px;
    height: 576px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 445px;
    height: 582px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 466px;
    height: 590px;
  }
}
@media (max-width: 1200px) {
  .auth__back__btn {
    display: none;
  }
  .mobileArrow {
    display: flex;
  }
  .signup__background {
    top: 0;
  }
  .webBtn {
    display: none;
  }
  .signup__navigation {
    margin-bottom: 37px;
  }
  .signup__border {
    display: flex;
  }
  .mobile__body {
    display: none;
  }
  .signup__btn {
    &.web {
      display: none;
    }
  }
  .signup__page {
    margin-top: 37px;
    display: flex;
    justify-content: center;
    border: none;
    background: none;
    margin: 0;
    padding: 0;
  }
  .mobile__body {
    flex-direction: column;
    justify-content: space-between;
    height: 143.846vw;
          .signup__btn {
        width: 85.89vw;
        height: 15.384vw;
      }
    .select__country {
      width: 85.89vw;
    }
    .select__nation {
      width: 85.89vw;
    }
    .signup__input__box {
      .input {
        width: 85.89vw;
      }
    }
    .signup__footer {
      width: 85.89vw;
      .signup__age__block  {
        width: 85.89vw;
      }
      .signup__horizontal__line {
        width: 85.89vw;
      }
      .footer__desc {
        width: 85.89vw;
      }

    }
  }
}

</style>
