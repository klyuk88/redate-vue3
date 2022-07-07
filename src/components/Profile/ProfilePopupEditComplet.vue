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
              <h1>Редактирование анкеты</h1>
              <p>
                Вы уверены что хотите выйти из редактирования анкеты? Данные
                останутся без сохранения.
              </p>
            </div>
            <div class="btn__block">
              <div class="btn">Выйти</div>
              <div class="btn__del">Сохранить</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signup__background {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
}
.signup__border {
  border: none;
  background: none;
  display: flex;
  .signup__block {
    width: 304px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    border: 1px solid #2b66fb;
    .signup__block__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .signup__header {
        text-align: center;
        width: 244px;
        margin: 0;
        margin: 18px 0 18px 0;
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
      margin-bottom: 18px;
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
</style>
