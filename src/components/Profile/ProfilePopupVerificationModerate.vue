<template>
  <div class="signup__background">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__header">
              <h1>Верификация</h1>
              <p>
                Модератор проверяет ваш запрос. Мы вас уведомим по завершению.
              </p>
            </div>
            <div class="btn__block">
              <div class="btn">Назад</div>
              <div class="btn__del">Главная</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.signup__background {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
}
.signup__border {
  border: none;
  background: none;
  .signup__block {
    width: 304px;
    height: 166px;
    background: rgba(36, 37, 41, 0.6);
    .signup__block__container {
      width: 244px;
      height: 118px;
      .signup__header {
        width: 244px;
        height: 68px;
        h1 {
          font-weight: 600;
          font-size: 18px;
          line-height: 153.5%;
        }
        p {
          text-align: center;
          width: 244px;
          height: 54px;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    .btn__block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 256px;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 34px;
        border: 1px solid rgba(255, 255, 255, 0.33);
        border-radius: 11px;
        cursor: pointer;
      }
      .btn__del {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 34px;
        background: #2b66fb;
        border-radius: 11px;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 1200px) {
  .signup__border {
    display: flex;
  }
}
</style>
