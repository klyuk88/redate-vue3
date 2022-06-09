<template>
  <div class="signup__background">
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="verification__page">
      <div class="verification__block__container">
        <div class="verification__content">
          <h1>Готово!</h1>
          <div class="verification__body">
            <div class="logo__container">
              <div class="left__side"></div>
              <div class="right__side"></div>
            </div>
            <div class="desc__container">
              <div class="mobile__desc">
                <p class="title__mobile">Спасибо!</p>
                <div>
                  <p class="text__mobile">
                    Ваша заявка отправлена на модерацию.
                  </p>
                  <p class="text__mobile"> За ответом можно следить
                    в своем профиле.</p>

                </div>
              </div>
              <h4>
                Спасибо! Ваша заявка отправлена на модерацию. За ответом можно
                следить в своем профиле.
              </h4>
              <div class="horizontal__line"></div>
              <p>
                <span>Примечание:</span> Администрация сайта может отклонить
                модерацию и верефикацию Вашей анкеты без объяснения причин, в
                таком случае Вы не сможете пользоваться нашим ресурсом и Ваша
                анкета будет автоматически удалена.
              </p>
            </div>
          </div>
          <div class="btn__continue">Перейти на главную</div>
        </div>
      </div>
      <div class="verification__nav">
        <div class="nav__footer">
          <div class="nav__stage">
            <div class="nav__disc choosed">
              <img
                class=""
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
            <div class="horizontal__line choosed"></div>
            <div class="nav__disc">
              <img
                class=""
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
            <div class="horizontal__line"></div>
            <div class="nav__disc">
              <img
                class="choosed"
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
          </div>
          <div class="nav__title choosed">
            <p class=""></p>
            <p class=""></p>
            <p class="choosed">Модерация</p>
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
.verification__block__container {
  display: flex;
  justify-content: center;
}
.verification__content {
  height: 589px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.logo__container {
  width: 246px;
  height: 246px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 0px 46px rgba(43, 102, 251, 0.32);
  display: flex;
  border: #2b66fb 2px solid;
}
.desc__container {
  height: 254px;
  width: 298px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 153.5%;
    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #ffffff;
    text-align: start;
  }
  span {
    color: #2b66fb;
  }
}
.horizontal__line {
  width: 293px;
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.14);
}
.nav__disc {
  width: 18px;
  height: 18px;
  background: #2b66fb;
}
.nav__stage {
  .horizontal__line {
    border: 1px solid #2b66fb;
  }
}

.left__side {
  position: relative;
  width: 25.7px;
  height: 103.63px;
  background: linear-gradient(
    153.8deg,
    #1741b0 18.26%,
    #2c58cb 64.12%,
    #1e49b8 94.17%
  );
  transform: rotate(135deg);
  left: 85px;
  top: 95px;
}
.right__side {
  position: relative;
  width: 25.61px;
  height: 214.45px;
  background: linear-gradient(
    153.8deg,
    #1741b0 18.26%,
    #2c58cb 64.12%,
    #1e49b8 94.17%
  );
  transform: rotate(-135deg);
  left: 155px;
}
.mobile__desc {
  display: none;
}
@media (max-width: 1200px) {
  .verification__content {
    height: 731px;
  }
  .logo__container {
    width: 198px;
    height: 198px;
  }
  .btn__continue {
    width: 335px;
    height: 60px;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
  .verification__body {
    align-items: center;
  }
  .desc__container {
    width: 335px;
    h4 {
      display: none;
    }
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 153.5%;
      color: rgba(255, 255, 255, 0.33);
      span {
        margin-right: 200px;
      }
    }
  }
  .horizontal__line {
    width: 335px;
  }
  .mobile__desc {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 345px;
    height: 92px;
    p {
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      line-height: 153.5%;
      color: #ffffff;
    }
  }

  .left__side {
  width: 20.7px;
  height: 83.63px;
  left: 57px;
  top: 76px;
}
.right__side {
  width: 20.61px;
  height: 172.45px;
  left: 113px;
}
}
</style>
