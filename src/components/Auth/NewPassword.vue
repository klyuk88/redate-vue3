<template>
  <div class="signup__background">
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="signup__page">
      <div class="signup__border" :class="newpassError">
        <div class="signup__block" :class="newpassError">
          <div class="signup__block__container" :class="newpassError">
            <div class="signup__block__header">
              <h1>Новый пароль</h1>
              <p>Введите новый пароль и подтвердите его</p>
            </div>
            <div class="signup__block__numbers" :class="newpassError">
              <input class="input" placeholder="Новый пароль" />
              <input class="input" placeholder="Повторите пароль" />
              <p class="" :class="newpassError">
                Неправильно введен повторный пароль
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="signup__btn" :class="newpassError">Сохранить</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hasError: false,
    };
  },
  computed: {
    newpassError() {
      if (this.hasError === true) {
        return "error__password";
      }
      return "test";
    },
  },
};
</script>
<style lang="scss" scoped>
.signup__border {
  width: 446px;
  height: 359px;
  &.error__password {
    height: 391px;
  }
}
.signup__block {
  width: 422px;
  height: 335px;
  &.error__password {
    height: 367px;
  }
}
.signup__block__container {
  width: 326px;
  height: 239px;
  &.error__password {
    height: 271px;
  }
}
.signup__block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 71px;
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
  height: 136px;
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
  &.error__password {
    height: 168px;
  }
}
.signup__btn {
  &.error__password {
    background: #434447;
    color: rgba(255, 255, 255, 0.33);
  }
}
@media (max-width: 1200px) {
  .signup__page {
    height: 432px;
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
  .signup__block__header {
    width: 324px;
    height: 72px;
  }
  .signup__block__numbers {
    width: 335px;
    height: 136px;
  }
  .signup__btn {
    width: 335px;
    height: 60px;
  }
}
</style>
