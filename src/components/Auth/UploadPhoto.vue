<template>
  <div class="signup__background">
    <div class="signup__navigation">
      <div class="navigation__item active"></div>
    </div>
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="signup__page">
      <div class="signup__border" :class="male">
        <div class="signup__block" :class="male">
          <div class="signup__block__container" :class="male">
            <div class="photo__block">
              <div class="photo__border">
                <div class="inner__border" :class="added">
                  <div class="add__btn">
                    <img
                      src="@/assets/images/main/add__photo__btn.svg"
                      alt=""
                    />
                  </div>
                </div>
                <img src="@/assets/images/main/upload__photo__male.svg" alt="" :class="added">
              </div>
            </div>
            <p>
              Вы можете добавите от 3 до 10 фотографий, после этогов одну из них
              Вы сможете поставить на свою аватарку. Остальные фотографии будут
              отображаться в Вашей гелерее.
            </p>
            <div class="btn__block web" :class="male">
              <div class="upload__btn">Загрузить с компьютера</div>
              <div class="random__btn" :class="male">Выбрать случайную</div>
            </div>
            <div class="btn__block mobile" :class="male">
              <div class="btn__box">
                <div class="upload">Загрузить</div>
                <div class="make__photo">Сделать снимок</div>
              </div>
              <div class="random__btn" :class="male">Выбрать случайную</div>
              <div class="btn__continue web" :class="added">Продолжить</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn__continue web">Продолжить</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      malePage: true,
      randomPhotoAdded: true,
    };
  },
  computed: {
    male() {
      if (this.malePage === true) {
        return "male";
      }
      return "test";
    },
    added() {
      if (this.randomPhotoAdded === true) {
        return "added";
      }
      return "test";
    },
  },
};
</script>
<style lang="scss" scoped>
.signup__navigation {
  position: fixed;
  top: 80px !important;
  margin-left: 50px;
}
.navigation__item {
  width: 128px;
}
.signup__border {
  width: 454px;
  height: 583px;
  &.male {
    height: 630px;
  }
  .signup__block {
    width: 430px;
    height: 559px;
    &.male {
      height: 606px;
    }
    .signup__block__container {
      width: 334px;
      height: 463px;
      &.male {
        height: 510px;
      }
    }
  }
}

p {
  font-weight: 600;
  font-size: 12px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.signup__navigation {
  position: fixed;
  top: 64px;
  margin-left: 50px;
}
.photo__block {
  background: none;
}
.photo__border {
  width: 308px;
  height: 308px;
  border: 1px solid #ffffff;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  >img {
    display: none;
  }
}
.inner__border {
  width: 230px;
  height: 230px;
  border: 1px dashed rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  &.male {
    width: 228px;
    height: 82px;
  }
  &.mobile {
    display: none;
  }
}
.upload__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 228px;
  height: 35px;
  background: #2b66fb;
  border-radius: 11px;
  cursor: pointer;
}
.random__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 197px;
  height: 35px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
  display: none;
  &.male {
    display: inline-flex;
  }
}
.btn__continue {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
}
@media (max-width: 1200px) {
  .signup__navigation {
    margin-left: 0;
  }
  .navigation__item {
    &.active {
      width: 176px;
    }
  }
  .btn__block {
    &.web {
      display: none;
    }
    &.male {
      height: 82px;
    }
  }
  .signup__page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup__border {
    display: flex;
    border: none;
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__block__container {
    width: 335px;
    height: 467px;
    &.male {
      height: 616px !important;
    }
  }
  .inner__border {
    &.added {
      display: none;
    }
  }
  .btn__continue {
    &.web {
      display: none;
      &.added {
        display: flex;
        width: 335px;
        height: 60px;
      }
    }
  }
  .photo__border {
    img {
      &.added {
        display: flex;
      }
    }
  }
  .btn__block {
    &.mobile {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      height: 190px;
    }
  }
  .btn__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 305px;
    height: 35px;
  }
  .upload {
    width: 126px;
    height: 35px;
    background: #2b66fb;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .make__photo {
    width: 167px;
    height: 35px;
    background: #2b66fb;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .random__btn {
    width: 197px;
    height: 35px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    margin-bottom: 30px;
  }
}
</style>
