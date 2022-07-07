<script>
export default {}
</script>

<template>
  <div class="signup__background">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__header">
              <h1>Верификация</h1>
              <p>
                Модератор проверяет Ваш запрос. Мы Вас уведомим по завершению.
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

<style lang="scss" scoped>
.signup__background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
}
.signup__border {
  border: none;
  background: none;
  .signup__block {
    border: 1px solid #2b66fb;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    .signup__block__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      .signup__header {
        width: 244px;
        margin: 0;
        text-align: center;
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
          color: rgba(255, 255, 255, 0.6);
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
