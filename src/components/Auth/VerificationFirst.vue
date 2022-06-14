<template>
  <div class="signup__background">
    <router-link to="/profile" class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </router-link>
    <div class="verification__page">
      <div class="verification__block__container">
        <h1>Верификация</h1>
        <div class="verification__body">
          <div class="photo__block">
            <img src="@/assets/images/main/verification__avatar.svg" alt="" />
          </div>
          <div class="verification__desc">
            <p>
              Для использования нашего ресурса Вам нужно пройти верификацию,
              таким образом мы исключаем возможность появления фейков и
              мошенников. Верификация проходит автоматически с помощью
              искусственного интеллекта. Фотография не будет отображаться в
              Вашем аккаунте, после прохождения, либо отклонения верификации она
              будет автоматически удалена.
            </p>
            <p>Спасибо за понимание, приятных знакомств.</p>
          </div>
        </div>
        <router-link to="/verification/photo">
          <div class="btn__continue">Продолжить</div>
        </router-link>
        <router-link to="/profile">
          <div class="btn__later">Пройти позже</div>
        </router-link>
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
  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 153.5%;
  }
}
.verification__body {
  width: 649px;
  height: 327px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 280px;
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
@media (max-width: 1200px) {
  .verification__page {
    height: 184.358vw;
    width: 78.974vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .verification__block__container {
    height: 184.3589vw;
    border: none;
    background: none;
    h1 {
      font-weight: 600;
      font-size: 4.615vw;
      line-height: 153.5%;
    }
  }
  .verification__body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 137.948vw;
    width: 78.974vw;
  }
  li {
    p {
      font-weight: 600 !important;
      font-size: 3.0769vw !important;
      line-height: 3.8461vw !important;
    }
  }
  .verification__nav {
    display: none;
  }
  .verification__desc {
    width: 78.9743vw;
    height: 55.128vw;
    p {
      font-weight: 600;
      font-size: 3.0769vw;
      line-height: 3.846vw;
    }
    h4 {
      font-weight: 600;
      font-size: 4.61538vw;
      line-height: 153.5%;
    }
  }
  .btn__continue {
    width: 85.89vw;
    height: 15.3846vw;
  }
  .btn__later {
    border: none;
    background: none;
    font-weight: 500;
    font-size: 3.489vw;
    line-height: 4.615vw;
    width: 25.128vw;
    height: 4.6153vw;
    text-decoration: underline;
    top: 1.282vw;
  }
}
</style>
