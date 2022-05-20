<template>
  <div class="auth__background">
    <div class="auth__page" :class="error">
      <div class="auth__back__btn">
        <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
      <div class="auth__block" :class="error" >
        <div class="auth__input__box" :class="error" >
          <div class="auth__inner__box" :class="error">
            <div class="auth__inner__content" :class="error">
              <div class="auth__header">
                <h1>Вход</h1>
                <p>Введите данные для входа в учетеную запись</p>
              </div>
              <div class="inputs" :class="error">
                <input
                  class="input"
                  type="text"
                  placeholder="Телефон / Электронная почта"
                />
                <input class="input" type="password" placeholder="Пароль" />
                <span class="" :class="error">Неверное имя пользователя или пароль. Проверьте правильность введеных данных.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="auth__forgot">Забыли пароль?</p>
      <div class="auth__btn">Войти</div>
      <div class="auth__footer__signup">
        <p class="auth__no__acc">Нет учетной записи?</p>
        <span>Регистрация</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hasError: true,
    };
  },
  computed: {
    error() {
      if (this.hasError === true) {
        return "error__auth";
      }
      return "test";
    },
  }
};
</script>
<style lang="scss">
.text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 43px;
}
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth__background {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth__page {
  @extend .flex__center;
  flex-direction: column;
  height: 577px;
  position: relative;
  top: 8%;
  &.error__auth {
    height: 585px
  }
}
.auth__block {
  @extend .flex__center;
  margin-bottom: 23px;
  position: relative;
  width: 446px;
  height: 356.91px;
  border: 1px solid #2b66fb36;
  border-radius: 32px;
    &.error__auth {
      height: 373px;
    }
}
.auth__input__box {
  @extend .flex__center;
  width: 422px;
  height: 331px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
  border-radius: 24px;
  &.error__auth {
    height: 373px;
  }
}
.auth__inner__box {
  @extend .flex__center;
  &.error__auth {
    height: 235px;
  }
}
.auth__inner__content {
  @extend .flex__center;
  justify-content: space-between;
  flex-direction: column;
  width: 326px;
  height: 235px;
  &.error__auth {
    height: 277px;
  }
}
.auth__header {
  flex-direction: column;
  width: 286px;
  height: 67px;
  h1 {
    @extend .text;
    text-align: center;
    margin-bottom: 8px;
  }
}
  p {
    @extend .text;
    font-size: 12px;
    line-height: 132.5%;
    text-align: center;
    color: rgba(255, 255, 255, 0.33);
  }

.auth__forgot {
  font-size: 14px;
  margin-bottom: 84px;
}
.auth__no__acc {
  font-size: 14px;
}
span {
  font-size: 14px;
}
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
  height: 136px;
  span {
    display: none;
   color:  #2B66FB;
   text-align: center;
   &.error__auth {
     display: inline-block;
   }
  }
  &.error__auth {
  height: 178px;

  }
}
.input {
  @extend .text;
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
  }
}
.auth__btn {
  @extend .flex__center;
  width: 236px;
  height: 47px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  margin-bottom: 24px;
}

.auth__footer__signup {
  @extend .flex__center;
  justify-content: space-between;
  width: 236px;
  height: 21px;
}
</style>
