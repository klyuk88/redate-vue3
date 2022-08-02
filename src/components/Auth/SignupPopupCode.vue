<!-- <script setup>

</script> -->

<template>
  <div class="backgound__codeconfirm">
    <slot name="backPhaseOne"></slot>
    <div class="container__codeconfirm">
      <form name="verifyForm">
        <div class="content">
          <h1>Введите код</h1>
          <p>
            Мы отправили вам код на электронную почту, введите его для
            продожления регистрации.
          </p>
          <div class="input__box">
            <input type="text" name="n1" maxlength="1" tabindex="1" autofocus />
            <input type="text" name="n2" maxlength="1" tabindex="2" />
            <input type="text" name="n3" maxlength="1" tabindex="3" />
            <input type="text" name="n4" maxlength="1" tabindex="4" />
            <input type="text" name="n5" maxlength="1" tabindex="5" />
            <input type="text" name="n6" maxlength="1" tabindex="6" />
          </div>
          <!-- <span v-if="error" class="error__message">{{ errorMessage }}</span> -->
        </div>
        <slot name="thirdPhase"></slot>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backgound__codeconfirm {
  .container__codeconfirm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 146px;
    form {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .content {
      margin: 362px 0 169px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.0384) 0%,
        rgba(95, 133, 228, 0.05) 68.75%
      );
      border: 1px solid #2b66fb;
      box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
      border-radius: 24px;
      h1 {
        font-weight: 600;
        font-size: 34px;
        line-height: 43px;
        color: #ffffff;
      }
      p {
        font-weight: 600;
        font-size: 12px;
        line-height: 132.5%;
        text-align: center;
        color: rgba(255, 255, 255, 0.33);
        margin: 12px 0 32px 0;
        width: 320px;
      }
      .input__box {
        width: 400px;
        display: flex;
        justify-content: space-between;
        input {
          outline: none;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          background: none;
          font-weight: 600;
          font-size: 18px;
          line-height: 153.5%;
          text-align: center;
          color: #ffffff;
          &:focus {
            border: 1px solid #ffffff;
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .backgound__codeconfirm {
    .container__codeconfirm {
      margin-bottom: 306px;
      .content {
        border: none;
        background: none;
        box-shadow: none;
        margin: 166px 0 48px 0;
        padding: 0;

        .input__box {
          width: 375px;
        }
      }
    }
  }
}
</style>
