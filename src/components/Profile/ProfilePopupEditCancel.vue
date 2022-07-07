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
              <h1>Редактирование</h1>
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
  .signup__block {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    border: 1px solid #2b66fb;
    .signup__block__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 342px;
      .signup__header {
        width: 244px;
        height: 86px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 18px 0 18px 0;
        text-align: center;
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
      margin: 0 0 18px 0;

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
      width: 77.948vw;
      height: 47.179vw;
      background: rgba(36, 37, 41, 0.6);
      .signup__block__container {
        width: 62.56vw;
        height: 34.87vw;
        .signup__header {
          width: 62.56vw;
          height: 22.051vw;
          h1 {
            font-weight: 600;
            font-size: 4.615vw;
            line-height: 153.5%;
            color: #3e74ff;
            text-align: center;
            width: 58.205vw;
            height: 21.538vw;
            span {
              font-weight: 600;
              font-size: 4.615vw;
              line-height: 153.5%;
              color: #ffffff;
            }
          }
          p {
            font-weight: 400;
            font-size: 3.589vw;
            line-height: 4.615vw;
            width: 67.69vw;
            height: 23.07vw;
          }
        }
      }
      .btn__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 65.64vw;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30.769vw;
          height: 8.717vw;
          border: 0.256vw solid rgba(255, 255, 255, 0.33);
          border-radius: 2.82vw;
          cursor: pointer;
        }
        .btn__del {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30.769vw;
          height: 8.717vw;
          background: #2b66fb;
          border-radius: 2.82vw;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
