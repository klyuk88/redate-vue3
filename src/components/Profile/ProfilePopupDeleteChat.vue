<template>
  <div class="background__delete__chat">
    <div class="container__delete__chat">
      <h1>Удалить диалог у обоих</h1>
      <p>Вы можете удалить диалог не только у себя, но у и собеседника</p>
      <div class="btn__block">
        <div class="btn">Отмена</div>
        <div class="btn blue">Удалить 1.000₽</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__delete__chat {
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
.container__delete__chat {
  padding: 24px 39px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid #2b66fb;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 153.5%;
    color: #ffffff;
    display: flex;
    align-items: center;
    text-align: center;
    width: 215px;
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
      &.blue {
        border: none;
        background: #2b66fb;
        padding: 7px 18px;
        margin-left: 16px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .container__delete__chat {
    width: 335px;
    .btn__block {
      .btn {
        width: 145px;
        &.blue {
        }
      }
    }
  }
}
</style>
