<template>
  <div class="signup__background">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__block__header">
              <h1>Новый пароль</h1>
              <p>Введите новый пароль и подтвердите его</p>
            </div>
            <div class="signup__block__numbers">
              <input class="input" placeholder="Новый пароль" />
              <input class="input" placeholder="Повторите пароль" />
              <p>Неправильно введен повторный пароль</p>
            </div>
          </div>
        </div>
      </div>
      <div class="signup__btn">Сохранить</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.signup__border {
  width: 446px;
  height: 391px;
}
.signup__block {
  width: 422px;
  height: 367px;
}
.signup__block__container {
  width: 326px;
  height: 271px;
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
  height: 168px;
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    text-align: center;
    color: #2b66fb;
  }
}
.grey__btn {
  background: #434447;
}
</style>
