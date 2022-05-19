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
              <h1>Забыли пароль?</h1>
              <p>
                Введите электронную почту или номер телефон. Мы отправим вам код
                для восстановления пароля.
              </p>
            </div>
            <div class="signup__block__numbers">
              <input class="input" placeholder="+7 (438) 943 82 94" />
            </div>
          </div>
        </div>
      </div>
      <div class="signup__btn">Отправить</div>
      <p class="footer__text">Вспомнили пароль? <span> Войти</span></p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.signup__border {
  width: 446px;
  height: 299px;
}
.signup__block {
  width: 422px;
  height: 275px;
}
.signup__block__container {
  width: 326px;
  height: 179px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.signup__block__header {
  width: 306px;
  height: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.signup__btn {
  margin-bottom: 24px;
}
.footer__text {
  font-weight: 500;
font-size: 14px;
}
span {
  margin-left: 3px;
  color: #ffffff;
}


</style>
