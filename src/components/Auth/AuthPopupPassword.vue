<template>
  <div class="signup__background">
    <slot name="backToCode"></slot>
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
      <slot name="toComplete"></slot>
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
background: linear-gradient(180deg, rgba(255, 255, 255, 0.0384) 0%, rgba(95, 133, 228, 0.05) 68.75%);
border: 1px solid #2B66FB;
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
@media (max-width: 1200px) {
  .signup__page {
    height: 110.769vw;
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
    width: 83.0769vw;
    height: 18.461vw;
  }
  .signup__block__numbers {
    width: 85.89vw;
    height: 34.871vw;
  }
  .signup__btn {
    width: 85.89vw;
    height: 15.38vw;
  }
}
</style>
