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
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__input__box">
              <input class="input" type="text" placeholder="Имя" />
              <TheSelect class="select__country" placeholder="Страна, Город" />
              <TheSelect class="select__nation" placeholder="Национальность" />
            </div>
            <div class="signup__footer">
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
              <div class="footer__desc">
                <div class="signup__params">
                  <div class="signup__params__item">
                    <p>Рост:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="170"
                      maxlength="3"
                    />
                  </div>
                  <div class="signup__params__item">
                    <p>Вес:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="50"
                      maxlength="3"
                    />
                  </div>
                  <div class="signup__params__item params__size">
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
      <div class="signup__btn">Продолжить</div>
    </div>
  </div>
</template>
<script>
import TheSelect from "../Form/TheSelect.vue";
export default {
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
}
.signup__block {
  height: 557px;
}
.signup__block__container {
  height: 461px;
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
  }
}
.signup__horizontal__line {
  width: 326px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.07);
}
.signup__params {
  display: flex;
  justify-content: space-between;
  width: 326px;
  height: 93px;
}
.signup__params__item {
  width: 60px;
  height: 93px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  &.params__size {
    width: 174px;
    &:focus {
      border: #ffffff 1px solid;
    }
  }
  input {
    width: 60px;
    height: 60px;
    text-align: center;
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
</style>
