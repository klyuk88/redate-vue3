<script>
export default {}
</script>

<template>
  <div class="signup__background__delete__acc__count">
    <div class="container__delete__acc__count">
      <div class="header__delete__acc__count">
        <p>Аккаунт был удален</p>
      </div>
      <p>Вы можете восстановить свой аккаунт в течегии</p>
      <div class="delete__acc__counter">21 дней</div>
      <div class="btn__block">
        <div class="btn">Выйти</div>
        <div class="btn blue">Восстановить</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signup__background__delete__acc__count {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .container__delete__acc__count {
    padding: 24px;
    background: rgba(36, 37, 41, 0.7);
    border-radius: 24px;
    border: 1px solid #2b66fb;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      width: 342px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      margin: 4px 0 4px 0;
    }
    .delete__acc__counter {
      margin-bottom: 16px;
    }
    .header__delete__acc__count {
      p {
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
        color: #2b66fb;
        margin: 0;
        display: flex;
        justify-content: center;
      }
    }
    .btn__block {
      display: flex;
      .btn {
        width: 120px;
        height: 34px;
        border: 1px solid rgba(255, 255, 255, 0.33);
        border-radius: 11px;
        font-weight: 700;
        font-size: 14px;
        line-height: 132.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        &.blue {
          background-color: #2b66fb;
          border: none;
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
