<template>
  <div class="background__send__chat">
    <div class="container__send__chat">
      <h1 class="web">Ваша рассылка создана!</h1>
      <h1 class="mobile">Уведомление</h1>
      <p>
        Ваша рассылка создана и отправлена на проверку в модерацию. После
        проверки она будет опубликована.
      </p>
      <div class="btn__block">
        <div class="btn blue">Продолжить</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__send__chat {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
}
.container__send__chat {
  padding: 24px 39px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid #2b66fb;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .mobile {
    display: none;
  }
  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 153.5%;
    color: #ffffff;
    display: flex;
    align-items: center;
    text-align: center;
    width: 225px;
  }
  p {
    font-weight: 400;
    width: 264px;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    margin: 4px 0 16px 0;
  }
  .btn__block {
    display: flex;
    .btn {
      padding: 7px 41px;
      gap: 10px;
      height: 33px;
      border: 1px solid rgba(255, 255, 255, 0.33);
      border-radius: 11px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 14px;
      line-height: 132.5%;
      justify-content: center;
      &.blue {
        border: none;
        background: #2b66fb;
        padding: 7px 18px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .container__send__chat {
    .web {
      display: none;
    }
    width: 312px;
    .mobile {
      width: unset;
      display: flex;
      color: #2b66fb;
    }
    .btn__block {
      .btn {
        width: 145px;
      }
    }
  }
}
</style>
