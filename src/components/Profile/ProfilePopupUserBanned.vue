<script setup>
import MobileBurger from '../MobileBurger.vue'
</script>

<template>
  <div class="background__banned">
    <div class="mobile__ui">
      <div class="arrow__back">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
      <MobileBurger style="margin-right: 20px" />
    </div>
    <div class="container__banned">
      <h1>Пользователь заблокирован</h1>
      <p>
        Администрация сайта была вынуждена временно заблокировать анкету
        пользователя по причине:
      </p>
      <div class="plate__banned">
        <p>Подозрение в мошенничестве</p>
      </div>
      <div class="btn">Назад</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__banned {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  .mobile__ui {
    display: none;
  }
  .container__banned {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    border: 1px solid #2b66fb;
    h1 {
      font-weight: 600;
      font-size: 34px;
      line-height: 43px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #3e74ff;
      width: 452px;
      margin-bottom: 16px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      text-align: center;
      width: 400px;
    }
    .plate__banned {
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 11px;
      width: 400px;
      margin: 12px 0 32px 0;
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 153.5%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .btn {
    padding: 7px 34px;
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-radius: 11px;
    cursor: pointer;
  }
}
@media (max-width: 1200px) {
  .background__banned {
    flex-direction: column;
    .auth__back__btn__title {
      font-weight: 700;
      font-size: 14px;
      line-height: 132.5%;
    }
    .mobile__ui {
      display: flex;
      justify-content: space-between;
      position: fixed;
      top: 55px;
      width: 100%;
      align-items: center;
      .arrow__back {
        display: flex;
        align-items: center;
        margin-left: 20px;
      }
    }
    .container__banned {
      h1 {
        font-weight: 600;
        font-size: 18px;
        width: unset;
        margin-bottom: 0;
      }
      width: 335px;
      .plate__banned {
        width: 287px;
        margin: 8px 0 16px 0;
        p {
          width: 287px;
        }
      }
      p {
        width: 287px;
      }
    }
  }
}
</style>
