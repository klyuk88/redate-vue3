<script setup>
const emit = defineEmits(['hideModal'])
</script>

<template>
  <div class="background__hide__sends" @click.self="emit('hideModal')">
    <div class="container__hide__sends">
      <h1>Скрыть рассылку пользователя</h1>
      <p>
        Удаляя рассылку выбранного пользователя Вы так же скрываете от себя все
        будущие его рассылки. Вы уверены что хотите это сделать?
      </p>
      <div class="checkbox__block">
        <input id="checkbox" type="checkbox" class="checkbox" />
        <label for="checkbox"></label>
        <p>Больше меня не спрашивать</p>
      </div>
      <div class="btn__block__hide__sends">
        <div class="btn" @click="emit('hideModal')">Отмена</div>
        <div class="btn blue">Скрыть</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__hide__sends {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  z-index: 99;
  .container__hide__sends {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid #2b66fb;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 153.5%;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      text-align: center;
      width: 254px;
      height: 72px;
      margin: 8px 0 16px 0;
    }
    .checkbox__block {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;
      .checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
      .checkbox + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
      }
      .checkbox + label::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
      }
      .checkbox:checked + label::before {
        border-color: #0b76ef;
        background-color: #0b76ef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }
      p {
        height: unset;
        width: unset;
        margin: 0;
        margin-left: 10px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .btn__block__hide__sends {
      display: flex;
      justify-content: center;
      gap: 16px;
      width: 256px;
      height: 34px;
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.33);
        border-radius: 11px;
        width: 120px;
        height: 34px;
        cursor: pointer;
        &.blue {
          background: #2b66fb;
          border: none;
        }
      }
    }
  }
}
</style>
