<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
    </div>
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <TheFormats class="format" />
            <div class="container__cash">
              <div class="desc__logo">
                <img src="@/assets/images/main/description.svg" alt="" />
              </div>
              <p class="" :class="female">Трачу в месяц:</p>
              <p class="" :class="male">Доход в месяц:</p>
              <div class="cash__border">
                <input class="input" type="text" />
                <span class="money__logo"> $ </span>
              </div>
            </div>
            <div class="horizontal__line"></div>
            <textarea class="about" placeholder="Расскажите о себе"></textarea>
            <div class="signup__btn mobile">Продолжить</div>
          </div>
        </div>
      </div>
      <div class="signup__btn web">Продолжить</div>
    </div>
  </div>
</template>
<script>
import TheFormats from "../Form/TheFormats.vue";
export default {
  data() {
    return {
      femalePage: true,
      malePage: false,
    };
  },
  computed: {
    female() {
      if (this.femalePage === true) {
        return "show";
      }
      return "test";
    },
    male() {
      if (this.malePage === true) {
        return "show";
      }
      return "test";
    },
  },
  components: { TheFormats },
};
</script>
<style lang="scss" scoped>
.signup__border {
  width: 446px;
  height: 566px;
}
.signup__block {
  width: 422px;
  height: 542px;
}
.signup__block__container {
  width: 326px;
  height: 446px;
}
.container__cash {
  width: 326px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .show {
    display: inline-block;
  }
  p {
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    display: none;
  }
  align-items: center;
}
.desc__logo {
  display: flex;
}
.cash__border {
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  width: 186px;
  height: 60px;
}
.input {
  background: none;
  width: 152px;
  height: 60px;
  border: none;
}
.money__logo {
  font-weight: 600;
}
.horizontal__line {
  width: 326px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.07);
}
.signup__btn {
  &.mobile {
    display: none;
  }
}
.format {
  
}
.about {
  width: 326px;
  height: 254px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.33);
  outline: none;
  resize: none;
  background: none;
  padding: 12px;
}
@media (max-width: 1200px) {
  .container__cash {
    
    width: 335px;
  }
  .cash__border {
    input {
      width: 155px;
    }
  }
  .about {
    width: 335px;
    height: 248px;
  }
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
    width: 335px;
    height: 540px;
  }
  .input {
    width: 335px;
    background: none;
    height: 60px;
  }

  .signup__btn {
    &.mobile {
      display: flex;
      width: 335px;
      height: 60px;
      margin-top: 15px;
    }
    &.web {
      display: none;
    }
  }
  .horizontal__line {
    margin-top: 15px;
    margin-bottom: 15px;

  }
}
</style>
