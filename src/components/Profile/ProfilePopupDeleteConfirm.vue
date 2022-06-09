<template>
  <div class="signup__background">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__header">
              <h1>
                Аккаунт был удален. Вы можете восстановить его в течении:<span>
                  30 дней</span
                >
              </h1>
              <p>
                Вы сможете восстановить свой аккаунт в течении этого времени. В
                ином случае Ваш аккаунт будет навсегда удален и восстановлению
                не подлежит.
              </p>
            </div>
            <div class="btn__block">
              <div class="btn">Выйти</div>
              <div class="btn__del">Восстановить</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.signup__background {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
}
.signup__border {
  border: none;
  background: none;
  .signup__block {
    width: 408px;
    background: rgba(36, 37, 41, 0.7);
    .signup__block__container {
      width: 342px;
      .signup__header {
        width: 342px;
        margin: 0;
        margin-bottom: 18px;
        margin-top: 18px;

        h1 {
          font-weight: 600;
          font-size: 18px;
          line-height: 153.5%;
          color: #3e74ff;
          span {
            color: #ffffff;
            font-weight: 600;
            font-size: 18px;
            line-height: 153.5%;
          }
        }
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    .btn__block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 256px;
      margin-bottom: 18px ;
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
    border: none;
    background: none;
    display: flex;
    .signup__block {
      width: 312px;
      height: 276px;
      background: rgba(36, 37, 41, 0.6);
      .signup__block__container {
        width: 264px;
        height: 228px;
        .signup__header {
          width: 264px;
          height: 178px;
          h1 {
            font-weight: 600;
            font-size: 18px;
            line-height: 153.5%;
            color: #3e74ff;
            text-align: center;
            width: 227px;
            height: 84px;
            span {
              font-weight: 600;
              font-size: 18px;
              line-height: 153.5%;
              color: #ffffff;
            }
          }
          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            width: 264px;
            height: 90px;
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
}
</style>
