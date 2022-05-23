<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
      <div class="navigation__item active"></div>
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
              <div class="block">
                <p>Отношение к алкоголю:</p>
                <div class="block__choose">
                  <div class="choose__list">
                    <p>Негативное</p>
                    <div class="vertical__line"></div>
                    <p>Нейтральное</p>
                    <div class="vertical__line"></div>
                    <p>Хорошее</p>
                  </div>
                </div>
              </div>
              <div class="horizontal__line"></div>
              <div class="block">
                <p>Отношение к курению:</p>
                <div class="block__choose">
                  <div class="choose__list">
                    <p>Негативное</p>
                    <div class="vertical__line"></div>
                    <p>Нейтральное</p>
                    <div class="vertical__line"></div>
                    <p>Хорошее</p>
                  </div>
                </div>
              </div>
              <div class="horizontal__line"></div>
              <div class="block skills">
                <p>Увлечения:</p>
                <input class="input" type="text" />
              </div>
              <div class="horizontal__line"></div>
              <div class="block skills">
                <p>Знание языков:</p>
                <input class="input" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="signup__btn">Продолжить</div>
      <p id="skip">Пропустить</p>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.signup__border {
  width: 446px;
  height: 592px;
}

.signup__block {
  width: 422px;
  height: 568px;
}
.signup__block__container {
  width: 326px;
  height: 472px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.signup__input__box {
  height: 472px;
}
.block {
  width: 326px;
  height: 87px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: #ffffff;
  }
  .skills {
    height: 77px;
  }
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
}
.input {
  margin: 0;
  height: 47px;
}
.signup__btn {
  margin-bottom: 24px;
}
#skip {
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  text-decoration-line: underline;
  color: #ffffff;
  cursor: pointer;
}
</style>
