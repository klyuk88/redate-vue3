<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item"></div>
      <div class="navigation__item"></div>
    </div>
    <div class="auth__back__btn">
      <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="signup__page">
      <div class="signup__border" :class="male">
        <div class="signup__block" :class="male">
          <div class="signup__block__container" :class="male">
            <div class="signup__input__box">
              <input class="input" type="text" placeholder="Имя" />
              <TheSelect class="select__country" placeholder="Страна, Город" />
              <TheSelect class="select__nation" placeholder="Национальность" />
            </div>
            <div class="signup__footer" :class="male">
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
              <div class="footer__desc" :class="male">
                <div class="signup__params" :class="male">
                  <div class="signup__params__block" :class="male">
                    <div class="signup__params__item" :class="male">
                      <p>Рост:</p>
                      <input
                        class="input"
                        type="text"
                        placeholder="170"
                        maxlength="3"
                      />
                    </div>
                    <div class="signup__params__item" :class="male">
                      <p>Вес:</p>
                      <input
                        class="input"
                        type="text"
                        placeholder="50"
                        maxlength="3"
                      />
                    </div>
                  </div>
                  <div class="signup__params__item params__size" :class="male">
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
      <div class="signup__btn web" :class="error">Продолжить</div>
      <div class="mobile__body">
        <div class="signup__block__container" :class="male">
          <div class="signup__input__box">
            <input class="input" type="text" placeholder="Имя" />
            <TheSelect class="select__country" placeholder="Страна, Город" />
            <TheSelect class="select__nation" placeholder="Национальность" />
          </div>
          <div class="signup__footer" :class="male">
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
            <div class="footer__desc" :class="male">
              <div class="signup__params" :class="male">
                <div class="signup__params__block" :class="male">
                  <div class="signup__params__item" :class="male">
                    <p>Рост:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="170"
                      maxlength="3"
                    />
                  </div>
                  <div class="signup__params__item" :class="male">
                    <p>Вес:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="50"
                      maxlength="3"
                    />
                  </div>
                </div>
                <div class="signup__params__item params__size" :class="male">
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
        <div class="signup__btn" :class="error">Продолжить</div>
      </div>
    </div>
  </div>
</template>
<script>
import TheSelect from "../Form/TheSelect.vue";
export default {
  data() {
    return {
      malePage: false,
      hasError: false,
    };
  },
  computed: {
    male() {
      if (this.malePage === true) {
        return "male";
      }
      return "test";
    },
    error() {
      if (this.hasError === true) {
        return "error";
      }
      return "test";
    },
  },
  components: { TheSelect },
};
</script>
<style lang="scss" scoped>
.signup__background {
  position: fixed;
  top: -40px;
}
.signup__border {
  height: 581px;
  &.male {
    height: 548px;
  }
}
.signup__block {
  height: 557px;
  &.male {
    height: 524px;
  }
}
.signup__block__container {
  height: 461px;
  &.male {
    height: 428px;
  }
}
.signup__input__box {
  height: 212px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.input {
  cursor: pointer;
  width: 326px;
  height: 60px;
  background: none;

  &:focus {
    border: #ffffff 1px solid;
  }
}
.select__country {
  width: 326px;
  height: 60px;
  z-index: 2;
  margin: 0;
}
.select__nation {
  width: 326px;
  height: 60px;
  z-index: 1;
  margin: 0;
}
.signup__footer {
  height: 225px;
  &.male {
    height: 192px;
  }
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
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #ffffff;
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
  height: 93px;
  &.male {
    height: 60px;
  }
}
.signup__params__item {
  width: 60px;
  height: 93px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
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
  height: 117px;
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
@media (max-width: 1200px) {
  .signup__background {
    top: 0;
  }
  .signup__btn {
    &.web {
      display: none;
    }
  }
  .mobile__body {
    flex-direction: column;
    justify-content: space-between;
    height: 561px;
          .signup__btn {
        width: 335px;
        height: 60px;
      }
    .select__country {
      width: 335px;
    }
    .select__nation {
      width: 335px;
    }
    .signup__input__box {
      .input {
        width: 335px;
      }
    }
    .signup__footer {
      width: 335px;
      .signup__age__block  {
        width: 335px;
      }
      .signup__horizontal__line {
        width: 335px;
      }
      .footer__desc {
        width: 335px;
      }

    }
  }
}
</style>
