<template>
  <div class="signup__background">
    <div class="auth__back__btn">
      <img src="../../assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="verification__page">
      <div class="verification__block__container">
        <h1>Верификация</h1>
        <div class="verification__body">
          <div class="photo__block">
            <img
              src="../../assets/images/main/verification__avatar.png"
              alt=""
            />
          </div>
          <div class="verification__desc">
            <h3>Как сделать?</h3>
            <p>
              Для прохождениия верификации Вам необходимо сделать фотографии с
              вашим пасспортом в профиль и анфас. Так же в той же одежде и том
              же месте сделать фотографию с листом А4 с надписью от руки “Для
              верификации” и датой.
            </p>
            <ul>
              <h4>Что дает?</h4>
              <li><p>Полный доступ к сайту</p></li>
              <li><p>Возможность найти пару</p></li>
              <li><p>Прыгать с парашюта</p></li>
              <li><p>Плавать в пустом море</p></li>
            </ul>
          </div>
        </div>
        <div class="btn__continue">Продолжить</div>
        <div class="btn__later">Пройти позже</div>
      </div>
      <div class="verification__nav">
        <div class="nav__footer">
          <div class="nav__stage">
            <div class="nav__disc">
              <img
                class="choosed"
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
            <div class="horizontal__line"></div>
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
                class=""
                src="@/assets/images/main/verification__chooser.svg"
                alt=""
              />
            </div>
          </div>
          <div class="nav__title choosed">
            <p class="choosed">Условия</p>
            <p class="">Фотография</p>
            <p class="">Модерация</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.verification__page {
  height: 755px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.verification__block__container {
  width: 784px;
  height: 642px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 48px;
    line-height: 153.5%;
    color: #ffffff;
  }
}
.verification__body {
  width: 649px;
  height: 327px;
  display: flex;
  justify-content: space-between;
}
.photo__block {
  width: 308px;
  height: 308px;
  background: linear-gradient(0deg, #4075ff, #4075ff);
  background-blend-mode: color, normal;
  border-radius: 24px;
}
.verification__desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 295px;
  height: 327px;
  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 153.5%;
  }
  p {
    text-align: start;
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #ffffff;
  }
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 153.5%;
  }

  li {
    list-style-type: disc;
    margin-left: 27px;
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 153.5%;
    }
  }
}
.btn__continue {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 314px;
  height: 59px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  cursor: pointer;
}
.btn__later {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 129px;
  height: 39px;
  background: #27282c;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  position: relative;
  top: 20px;
  cursor: pointer;
}
.verification__nav {
  width: 790px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__footer {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 772px;
  height: 53px;
}
.nav__stage {
  width: 710px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__disc {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.33);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    display: none;
    &.choosed {
      display: inline;
    }
  }
}
.horizontal__line {
  width: 283px;
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.33);
 
}
.nav__title {
  display: flex;
  justify-content: space-between;
  width: 772px;
  //   margin-left: 31px;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 153.5%;
    color: rgba(255, 255, 255, 0.33);
    &.choosed {
      color: #ffffff;
    }
  }
}
</style>
