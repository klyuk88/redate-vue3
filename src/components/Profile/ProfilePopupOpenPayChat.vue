<template>
  <div class="background__pay__chat">
    <div class="container__pay__chat">
      <h1>Открыть специальный диалог с «Цио Хао»?</h1>
      <p>
        Это не обычный диалог, Цио Хао, инициировала желание как можно скорее
        найти свою вторую половинку, потому начало контакта с ней будет стоить
        для Вас меньше обычного.
      </p>
      <div class="btn__block">
        <div class="btn">Отмена</div>
        <div class="btn blue">Удалить 1.000₽</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.background__pay__chat {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  position: fixed;
  top: 0;
}
.container__pay__chat {
  padding: 24px 39px;
  background: rgba(36, 37, 41, 0.6);
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
  .container__pay__chat {
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
