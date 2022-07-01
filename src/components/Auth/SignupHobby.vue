<script setup>
import { ref } from 'vue'

const emit = defineEmits([ 'hideModalHobby' ])

const isClicked = ref(false)
</script>

<template>
  <div class="signup__background" @click.self="emit('hideModalHobby')">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__header__block">
              <div class="signup__return__btn" @click="emit('hideModalHobby')">
                <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
              </div>
              <p>Выберете до 5 увлечений:</p>
            </div>
            <div class="signup__body__block">
              <p>Выбрано:<span>2</span></p>
              <div class="signup__options__block" @click="isClicked = true">
                <div class="chips choosed">Спорт</div>
                <div class="chips">Вино</div>
                <div class="chips choosed">Деньги</div>
                <div class="chips">Животные</div>
                <div class="chips choosed">Технологии</div>
                <div class="chips">Книги</div>
                <div class="chips choosed">Кефейни</div>
                <div class="chips">Вечерние прогулки</div>
                <div class="chips choosed">Живопись</div>
                <div class="chips">Рестораны</div>
                <div class="chips choosed">Петь</div>
                <div class="chips">Вкусно поесть</div>
                <div class="chips choosed">Спорт</div>
                <div class="chips">Вино</div>
                <div class="chips choosed">Деньги</div>
                <div class="chips">Животные</div>
                <div class="chips choosed">Технологии</div>
                <div class="chips">Книги</div>
                <div class="chips choosed">Кефейни</div>
                <div class="chips">Вечерние прогулки</div>
                <div class="chips choosed">Живопись</div>
                <div class="chips">Рестораны</div>
                <div class="chips choosed">Петь</div>
                <div class="chips">Вкусно поесть</div>
                <div class="chips choosed">Спорт</div>
                <div class="chips">Вино</div>
                <div class="chips choosed">Деньги</div>
                <div class="chips">Животные</div>
                <div class="chips choosed">Технологии</div>
                <div class="chips">Книги</div>
                <div class="chips choosed">Кефейни</div>
                <div class="chips">Вечерние прогулки</div>
                <div class="chips choosed">Живопись</div>
                <div class="chips">Рестораны</div>
                <div class="chips choosed">Петь</div>
                <div class="chips">Вкусно поесть</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="signup__btn" @click.self="emit('hideModalHobby')">Выбрать</div>
  </div>
</template>

<style lang="scss" scoped>
.signup__page {
}
.signup__background {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 109;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
}
.flex__center {
  display: flex;
  //   justify-content: center;
  align-items: center;
}
.signup__border {
  width: 504px;
  padding: 48px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
}
.signup__block {
  width: 480px;
  display: flex;
  justify-content: center;
}
.signup__block__container {
  width: 384px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.signup__options__block {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  padding-top: 24px;
  overflow-y: scroll;
  height: 384px;
  &::-webkit-scrollbar {
    width: 1px;
    // background-color: red;
  }
  // &::-webkit-scrollbar-thumb {
  //   color: white;
  //   width: 2px;
  // }
}
.chips {
  padding: 8px 12px;
  margin-bottom: 14px;
  margin-left: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 13px;
  cursor: pointer;
  &:active {
    background: linear-gradient(137.15deg, #1e51d5 0%, #153fab 99.89%);
    box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  }
  &.choosed {
    border: 1px solid #2965ff;
    box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  }
}
.signup__header__block {
  @extend .flex__center;

  width: 382px;
  height: 28px;
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 153.5%;
    color: #ffffff;
    text-align: center;
    margin: 0;
    margin-bottom: 24px;
  }
}
.signup__return__btn {
  align-items: center;
  margin-right: 60px;
  margin-bottom: 21px;
  cursor: pointer;
}
.signup__btn {
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 107px;
}
.signup__body__block {
  @extend .flex__center;
  flex-direction: column;
  justify-content: space-between;
  width: 384px;
  height: 500px;
  p {
    display: flex;
    justify-content: space-between;
    width: 68px;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: rgba(255, 255, 255, 0.33);
    margin: 0;
    span {
      color: #ffffff;
    }
  }
}
.signup__options__block {
  width: 384px;
  height: 456px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
}
.animated__border__hobby {
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
    width: 482px;
    height: 562px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 485px;
    height: 577px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 495px;
    height: 600px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 510px;
    height: 615px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 525px;
    height: 625px;
  }
}
@media (max-width: 1200px) {
  .signup__return__btn {
    margin-left: 3.33vw;
  }
  .signup__header__block {
    height: unset;
  }
  .signup__page {
    height: 159.23vw;
  }
  .signup__border {
    display: flex;
    border: none;
    margin: 0;
  }
  .signup__block__container {
    height: 131.53vw;
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__body__block {
    height: 138vw;
    p {
      margin-bottom: 17.7vw;
    }
  }
  .signup__options__block {
    border: none;
    overflow: scroll;
  }
  .signup__btn {
    width: 85.89vw;
    height: 15.384vw;
  }
}
</style>
