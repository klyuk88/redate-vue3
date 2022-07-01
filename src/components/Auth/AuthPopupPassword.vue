<template>
  <div class="signup__background">
    <slot name="backToCode"></slot>
    <div class="arrowMobile">
      <slot name="backToCodeMobile"></slot>
    </div>
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__block__header">
              <h1>Новый пароль</h1>
              <p>Введите новый пароль и подтвердите его</p>
            </div>
            <div class="signup__block__numbers">
              <div class="input__password middle">
                <input
                  id="input"
                  class="input pass"
                  type="password"
                  placeholder="Пароль"
                  @focus="(focusInput = true), (focusInputRepeat = false)"
                />
                <input id="eye" class="eye" type="checkbox" @click="showPass" />
                <label for="eye" :class="{ visible: focusInput }"></label>
              </div>
              <div class="input__password last">
                <input
                  id="inputRepeat"
                  class="input pass__repeat"
                  type="password"
                  placeholder="Повторите пароль"
                  @focus="(focusInputRepeat = true), (focusInput = false)"
                />
                <input
                  id="eyeSecond"
                  class="eye"
                  type="checkbox"
                  @click="showPassRepeat"
                />
                <label
                  for="eyeSecond"
                  :class="{ visible: focusInputRepeat }"
                ></label>
              </div>
              <p class="">Неправильно введен повторный пароль</p>
            </div>
          </div>
        </div>
      </div>
      <div class="webBtn">
        <slot name="toComplete"></slot>
      </div>
      <div class="mobileBtn">
        <slot name="toCompleteMobile"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from "vue";
const focusInput = ref(false);
const focusInputRepeat = ref(false);

function showPass() {
  let inputType = document.querySelectorAll("#input");
  inputType.forEach((e) => {
    e.type === "password" ? (e.type = "text") : (e.type = "password");
  });
}
function showPassRepeat() {
  let inputType = document.querySelectorAll("#inputRepeat");
  inputType.forEach((e) => {
    e.type === "password" ? (e.type = "text") : (e.type = "password");
  });
}
</script>
<style lang="scss" scoped>
.mobileBtn {
  display: none;
}
.arrowMobile {
  display: none;
}
.signup__page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signup__border {
  width: 446px;
  display: flex;
  justify-content: center;
  padding: 48px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
  border-radius: 24px;
  margin-bottom: 139px;
}
.signup__block {
  width: 422px;
  display: flex;
  justify-content: center;
}
.signup__block__container {
  width: 326px;
}
.signup__block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 320px;
  p {
    margin: 0;
    margin: 12px 0 32px 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    text-align: center;
    color: rgba(255, 255, 255, 0.33);
  }
  h1 {
    font-weight: 600;
    font-size: 34px;
    line-height: 43px;
  }
}
.signup__block__numbers {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 326px;
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    text-align: center;
    color: #2b66fb;
    display: none;
    &.error__password {
      display: inline-block;
    }
  }
}
.signup__btn {
  &.error__password {
    background: #434447;
    color: rgba(255, 255, 255, 0.33);
  }
}
.input {
    &.pass {
    margin: 0;
    border: none;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    position: absolute;
    z-index: 1;
  }
  &.pass__repeat {
    margin: 0;
    border: none;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    position: absolute;
    z-index: 1;
  }
}

.input__password {
  font-family: "Mulish";
  font-size: 15px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
  outline: none;
  background-color: rgb(32, 34, 43);
  width: 326px;
  height: 60px;
  border-radius: 11px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;  
}

.eye {
  position: relative;
  z-index: -1;
  opacity: 0;
}
label {
  position: relative;
  z-index: 2;
  right: -130px;
}
.eye + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  display: none;
  &.visible {
    display: inline-flex;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../../assets/images/eye__open.svg);
  }
}
.eye:checked + label::before {
  background-image: url(../../assets/images/eye__close.svg);
}
@media (max-width: 1200px) {
  .arrowMobile {
    display: flex;
  }
  .webBtn {
    display: none;
  }
  .mobileBtn {
    display: flex;
  }
  .signup__page {
    height: 110.769vw;
    margin-bottom: 60.05vw;
  }
  .signup__border {
    display: flex;
    border: none;
    margin: 0;
    background: none;
    padding: 0;
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__block__header {
    width: 83.0769vw;
    p {
      margin: 16px 0 88px 0;
    }
  }
  .signup__block__numbers {
    width: 85.89vw;
  }
  .signup__btn {
    width: 85.89vw;
    height: 15.38vw;
  }
}
</style>
