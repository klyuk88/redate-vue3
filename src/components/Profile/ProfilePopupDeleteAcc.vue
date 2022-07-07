<script setup>

const emit = defineEmits(['hideModalDelete'])

</script>

<template>
  <div class="signup__background__delete__acc" @click.self="emit('hideModalDelete')">
    <div class="container__delete__acc">
      <div class="header__delete__acc">
        <p>Аккаунт будет удален через:<span> 30 дней</span></p>
      </div>
      <p>
        Вы можете восстановить свой аккаунт в течении этого времени. В ином
        случае аккаунт будет навсегда удален и восстановлению не подлежит.
      </p>
      <div class="btn__block">
        <div class="btn" @click="emit('hideModalDelete')">Выйти</div>
        <div class="btn blue">Удалить</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signup__background__delete__acc {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  .container__delete__acc {
    padding: 24px;
      background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
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
      margin: 4px 0 16px 0;
    }
    .header__delete__acc {
      p {
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
        color: #2b66fb;
        margin: 0;
        span {
          margin-left: 8px;
          color: #ffffff;
        }
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
        cursor: pointer;
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
