<template>
  <div class="background__denied__desc">
    <div class="content__denied">
      <div class="container__denied">
        <div class="header__denied">
          <h1>Уведомление</h1>
          <p>Администрация сайта была вынуждена отказатьВам в Верификации.</p>
          <span>Причина отказа:</span>
        </div>
        <div class="plate__info">
          <p>
            Фотография с верификации и загруженные фотографии в галерею
            отличаются.
          </p>
        </div>
        <p>Пройти верификацию заново можно в личном кабинете.</p>
        <div class="btn__to__profile">Перейти в “Мой профиль”</div>
      </div>
      <img src="../../assets/images/close-new-send.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background__denied__desc {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  position: fixed;
  top: 0;
  img {
    width: 16px;
    height: 16px;
    margin-left: 24px;
    cursor: pointer;
  }
  .content__denied {
    display: flex;
  }
  .container__denied {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #1c1d21;
    border-radius: 24px;
    border: 1px solid #2b66fb;
    padding: 24px;
    p {
      margin: 10px 0 34px 0;
    }
    .header__denied {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 8px;
      h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #3e74ff;
      }
      p {
        font-weight: 700;
        font-size: 14px;
        line-height: 132.5%;
        color: #ffffff;
        margin: 4px 0 16px 0;
      }
      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .plate__info {
      text-align: center;
      padding: 10px;
      gap: 10px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 11px;
      margin-bottom: 4px;
      font-weight: 500;
      font-size: 14px;
      line-height: 153.5%;
      color: #ffffff;
      p {
        width: 400px;
        display: flex;
        justify-content: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 153.5%;
        color: #ffffff;
        margin: 0;
      }
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.6);
      width: 432px;
    }
    .btn__to__profile {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 54px;
      width: 452px;
      background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
      border-radius: 11px;
      cursor: pointer;
    }
  }
}
@media (max-width: 1200px) {
  img {
    display: none;
  }

  .background__denied__desc {
    .container__denied {
      .header__denied {
        p {
          width: 264px;
          margin: 8px 0 8px 0;
        }
      }
      .plate__info {
        width: 314px;
        display: flex;
        justify-content: center;
        p {
          width: 240px;
          display: flex;
          justify-content: center;
          font-weight: 500;
          font-size: 14px;
          line-height: 153.5%;
          color: #ffffff;
        }
      }
      p {
        width: 314px;
        margin: 4px 0 16px 0;
      }
      .btn__to__profile {
        width: 269px;
        height: 33px;
        border-radius: 11px;
      }
    }
  }
}
</style>
