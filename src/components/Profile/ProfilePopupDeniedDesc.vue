<template>
  <div class="background__denied__desc">
    <div class="content__denied">
      <div class="container__denied">
        <div class="header__denied">
          <h1>Уведомление</h1>
          <p>
            Администрация сайта была вынуждена отказать Вам в изминении данных.
          </p>
          <span>Причина отказа:</span>
        </div>
        <div class="plate__info">
          <p>Нарушение правил сайта</p>
        </div>
        <div class="plate__info">
          <p>
            Попытка предоставить свои личные контактные данные в информации “о
            себе”
          </p>
        </div>
        <p>
          Ваши данные были возвращены к прежнему состоянию. При некорректном
          заполнении анкеты, в следующий раз, она может быть заблокирована.
        </p>
        <div class="btn__to__profile">Посмотреть свою анкету</div>
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
        margin: 4px 0 4px 0;
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
      color: rgba(255, 255, 255, 0.6);
      width: 432px;
    }
    .btn__to__profile {
      padding: 7px 34px;
      gap: 10px;
      border: 1px solid rgba(255, 255, 255, 0.33);
      border-radius: 11px;
      font-weight: 700;
      font-size: 14px;
      line-height: 132.5%;
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
        margin: 10px 0 16px 0;
      }
    }
  }
}
</style>
