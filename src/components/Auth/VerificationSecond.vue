<template>
  <div class="signup__background">
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="verification__page">
      <div class="verification__block__container">
        <div class="verification__content">
          <h1>Проверка личности</h1>
          <div class="verification__body">
            <div class="add__photo__block">
              <img
                class=""
                src="@/assets/images/main/Verification__add__photo.svg"
                alt=""
              />
              <div class="inner__add__photo__block added">
                <img
                  src="@/assets/images/main/add__photo__btn.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="photo__block">
              <img
                src="@/assets/images/main/verification__avatar.png"
                alt=""
              />
            </div>
          </div>
          <p class="added">
            Отобразите позу, которая указана на картинке справа
          </p>
          <div class="btn__update">Обновить снимок</div>
          <div class="btn__continue added">Продолжить</div>
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
          </div>
          <div class="nav__title choosed">
            <p class=""></p>
            <p class="choosed">Фотография</p>
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
<style lang="scss" scoped>
.add__photo__block {
  width: 308px;
  height: 308px;
  border: 1px solid #ffffff;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.added {
    border: 1px solid #2b66fb;
    border-radius: 24px;
  }
}
.verification__content {
  height: 574px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.verification__block__container {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    text-align: center;
    color: #ffffff;
    width: 242px;
    height: 42px;
    &.added {
      display: none;
    }
  }
}
.inner__add__photo__block {
  width: 230px;
  height: 230px;
  border: 1px dashed rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.added {
    display: none;
  }
}
.horizontal__line {
  &.choosed {
    border: 1px solid #2b66fb;
  }
}
.nav__disc {
  &.choosed {
    width: 18px;
    height: 18px;
    background: #2b66fb;
  }
}
.nav__title {
  p {
    &.choosed {
      margin-left: 90px;
    }
  }
}
.btn__update {
  width: 177px;
  height: 35px;
  border: 1px solid #ffffff;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn__continue {
  width: 228px;
  height: 35px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  text-align: right;
  color: #ffffff;
  &.added {
    width: 314px;
    height: 59px;
  }
}
@media (max-width: 1200px) {
   .verification__page {
    height: 719px;
    width: 308px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .verification__block__container {
    height: 719px;
    border: none;
    background: none;
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 153.5%;
    }
  }
  .verification__body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 538px;
    width: 308px;
  }

  .verification__nav {
    display: none;
  }

  .btn__continue {
    width: 335px;
    height: 60px;
  }
.btn__update {
  display: none;
}
}

</style>
