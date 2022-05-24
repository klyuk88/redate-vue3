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
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="photo__container">
              <div class="photo__main">
                <img
                  class="avatar"
                  src="@/assets/images/main/woman__main__avatar.png"
                  alt=""
                />
              </div>
              <div class="photo__mini__block">
                <div class="photo__mini__item">
                  <img
                    src="@/assets/images/main/woman__mini__avatar1.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
                <div class="photo__mini__item">
                  <img
                    src="@/assets/images/main/woman__mini__avatar3.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
                <div class="photo__mini__item choosed">
                  <img
                    src="@/assets/images/main/woman__mini__avatar2.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
                <div class="photo__mini__item">
                  <img
                    src="@/assets/images/main/woman__mini__avatar4.png"
                    alt=""
                  />
                  <img
                    class="delete"
                    src="@/assets/images/main/cross__delete__photo.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p>Выберите фотографию, которая будет вашей аватаркой</p>
            <div class="upload__btn web">Загрузить с компьютера</div>
            <div class="replace__photo">Очистить фотографии</div>
            <div class="continue__btn">Продолжить</div>
          </div>
        </div>
      </div>
      <div class="signup__btn web">Зарегистрироваться</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.continue__btn {
  display: none;
}
.replace__photo {
  display: none;
}
.signup__navigation {
  position: fixed;
  top: 80px;
  margin-left: 50px;
}
.navigation__item {
  width: 128px;
}
.signup__border {
  width: 428px;
  height: 623px;
}
.signup__block {
  width: 404px;
  height: 595px;
}
.signup__block__container {
  width: 308px;
  height: 499px;
}
.avatar {
  margin-top: 14px;
}
.delete {
  position: fixed;
  margin-left: 20px;
  cursor: pointer;
}
.photo__container {
  width: 308px;
  height: 376px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.photo__main {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2b66fb;
  filter: drop-shadow(0px 8px 25px rgba(43, 102, 251, 0.17));
  border-radius: 24px;
  width: 308px;
  height: 308px;
}
.photo__mini__block {
  width: 305px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.photo__mini__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  cursor: pointer;

  &.choosed {
    border: 1px solid #2b66fb;
    filter: drop-shadow(0px 2px 16px rgba(43, 102, 251, 0.44));
    border-radius: 14px;
  }
}
p {
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  line-height: 132.5%;
}
.upload__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 228px;
  height: 35px;
  border: 1px solid #ffffff;
  border-radius: 11px;
  cursor: pointer;
}
.signup__btn {
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: #ffffff;
}
@media (max-width: 1200px) {
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
    height: 594px;
  }
  .signup__btn {
    &.web {
      display: none;
    }
  }
  .upload__btn {
    &.web {
      display: none;
    }
  }
  .replace__photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 213px;
    height: 35px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
  }
  .continue__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
    height: 60px;
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 11px;
    margin-top: 20px;
  }
}
</style>
