<template>
  <div class="signup__background">
    <div class="auth__back__btn">
      <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__block__header">
              <h1>Введите код</h1>
              <p>
                Мы отправили вам смс с кодом подтвреждения, введите его для
                продожления регистрации.
              </p>
            </div>
            <div class="signup__block__numbers">
              <input class="block__item" maxlength="1" autofocus />
              <input class="block__item" maxlength="1" />
              <input class="block__item" maxlength="1" />
              <input class="block__item" maxlength="1" />
            </div>
          </div>
        </div>
      </div>
      <div class="signup__btn">Подтвердить</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.signup__border {
  border: 1px solid #2b66fb;
  width: 440px;
  height: 299px;
  margin-bottom: 157px;
}
.signup__block {
  width: 416px;
  height: 275px;
}
.signup__block__container {
  width: 320px;
  height: 179px;
}
.signup__block__numbers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  height: 60px;
}
.signup__block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 87px;
}
.block__item {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  outline: none;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  background-color: rgb(32, 34, 43);
  &:focus {
    border: #ffffff 1px solid;
  }
}
</style>
