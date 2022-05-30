<template>
  <div class="page__background">
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="settings__container">
      <div class="settings__content">
        <div class="settings__header">
          <h1>Настройки анкеты</h1>
          <div class="horizontal__line"></div>
        </div>
        <div class="settings__body">
          <div class="settings change__mail">
            <div class="settings__desc">
              <img
                src="@/assets/images/main/myprofile__settings__email.svg"
                alt=""
              />
              <div class="title">Электронная почта:</div>
            </div>
            <div class="inputs__box">
              <input
                class="input"
                type="text"
                placeholder="Bomba@mail.com"
                disabled
              />
              <input class="code__input" type="text" maxlength="4" />
              <div class="resend__block">
                <img
                  src="../../assets/images/main/myprofile__settings__resend.svg"
                  alt=""
                />
                <div class="resend__counter">59</div>
              </div>
              <div class="vertical__line"></div>
              <div class="logo__done">
                <img
                  src="../../assets/images/main/myprofile__settings__done.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <span class="span__desc hide"
            >Необходимо подтвердить смену учетной записи. Введите код полученный
            из сообщения, которого мы вам отправили.</span
          >
          <div class="settings change__phone">
            <div class="settings__desc">
              <img
                src="@/assets/images/main/myprofile__settings__phone.svg"
                alt=""
              />

              <div class="title">Номер телефона:</div>
            </div>
            <div class="inputs__box">
              <input
                class="input"
                type="text"
                placeholder="+7 (435) 495 59 34"
                disabled
              />
              <div class="send__phone__code hide">Отправить</div>
              <div class="sms__code">
                <input class="code__input" type="text" maxlength="4" />
                <div class="resend__block">
                  <img
                    src="../../assets/images/main/myprofile__settings__resend.svg"
                    alt=""
                  />
                  <div class="resend__counter">59</div>
                </div>
                <div class="vertical__line"></div>
                <div class="logo__done">
                  <img
                    src="../../assets/images/main/myprofile__settings__done.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="settings hide">
            <div class="settings__desc">
              <img
                src="@/assets/images/main/myprofile__settings__lock.svg"
                alt=""
              />

              <div class="title">Пароль:</div>
            </div>
            <input
              class="input"
              type="password"
              placeholder="************"
              disabled
            />
          </div>
          <div class="settings change__password">
            <div class="settings__desc">
              <img
                src="@/assets/images/main/myprofile__settings__lock.svg"
                alt=""
              />
              <div class="title">Пароль:</div>
            </div>
            <div class="inputs__box">
              <div class="input__block">
                <span>Старый пароль</span>
                <input
                  class="input change__password"
                  type="password"
                  placeholder="************"
                  disabled
                />
              </div>
              <div class="input__block">
                <span>Новый пароль</span>
                <input
                  class="input change__password"
                  type="password"
                  placeholder="************"
                  disabled
                />
              </div>
              <div class="vertical__line"></div>
              <div class="logo__done">
                <img
                  src="../../assets/images/main/myprofile__settings__done.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="horizontal__line"></div>
        <div class="settings__footer">
          <div class="logout hide">Выйти из аккаунта</div>
          <div class="delete__profile hide">Удалить профиль</div>
          <div class="cancel__changes">Отмена</div>
          <div class="save__changes">Сохранить</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page__background {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .settings__container {
    @extend .flex__center;
    justify-content: space-between;
    flex-direction: column;
    width: 55%;
    height: 100vh;
    background: rgba(196, 196, 196, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-top: none;
    border-bottom: none;
    .settings__content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      height: 525px;
      margin-top: 70px;
      .horizontal__line {
        width: 785px;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.14);
      }
      .settings__header {
        @extend .flex__center;
        flex-direction: column;
        h1 {
          font-weight: 600;
          font-size: 18px;
          line-height: 153.5%;
          display: flex;
          align-items: center;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .horizontal__line {
          width: 847px;
          height: 0px;
          border: 1px solid rgba(255, 255, 255, 0.33);
        }
      }
      .settings__body {
        width: 598px;
        height: 232px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 180px;
        .span__desc {
          font-weight: 600;
          font-size: 12px;
          line-height: 132.5%;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          width: 370px;
          height: 32px;
          margin-left: 272px;
          &.hide {
            display: none;
          }
        }
      }
    }
  }
}
.settings {
  // @extend .flex__center;
  justify-content: space-between;
  display: flex;
  &.change__mail {
    width: 825px;
    .inputs__box {
      width: 552px;
      .block {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .code__input {
        padding: 18px 50px;
        width: 136px;
        height: 59px;
        border: 1px solid #ffffff;
        border-radius: 11px;
        background: none;
        outline: none;
        font-weight: 600;
        font-size: 15px;
        line-height: 153.5%;
        display: flex;
        align-items: center;
        color: #ffffff;
        &.hide {
          display: none;
        }
      }
      .vertical__line {
        margin-top: 0;
        &.hide {
          display: none;
        }
      }
      .logo__done {
        margin-top: 0;
        &.hide {
          display: none;
        }
      }
      .resend__block {
        &.hide {
          display: none;
        }
      }
    }
  }
  &.change__phone {
      width: 825px;
    .inputs__box {
      width: 552px;
      .sms__code {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 215px;
           .code__input {
        padding: 18px 50px;
        width: 136px;
        height: 59px;
        border: 1px solid #ffffff;
        border-radius: 11px;
        background: none;
        outline: none;
        font-weight: 600;
        font-size: 15px;
        line-height: 153.5%;
        display: flex;
        align-items: center;
        color: #ffffff;
        &.hide {
          display: none;
        }
      }
      .vertical__line {
        margin-top: 0;
        &.hide {
          display: none;
        }
      }
      .logo__done {
        margin-top: 0;
        &.hide {
          display: none;
        }
      }
      .resend__block {
        &.hide {
          display: none;
        }
      }
      }
    }
  }
  .send__phone__code {
    @extend .flex__center;
    border: 1px solid #ffffff;
    border-radius: 11px;
    width: 174px;
    height: 60px;
    font-weight: 600;
    font-size: 15px;
    line-height: 153.5%;
    color: #ffffff;
    &.hide {
      display: none;
    }
  }
  &.hide {
    display: none;
  }
  &.change__password {
    width: 815px;
    &.hide {
      display: none;
    }
  }
  .settings__desc {
    display: flex;
    align-items: center;
  }
  .inputs__box {
    width: 544px;
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .vertical__line {
      margin-top: 30px;
      width: 0px;
      height: 40px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .logo__done {
      margin-top: 30px;
    }
  }
  .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: rgba(255, 255, 255, 0.4);
    margin-left: 12px;
  }
  .input__block {
    width: 250px;
    height: 84px;
    span {
      font-weight: 600;
      font-size: 12px;
      line-height: 132.5%;
      color: rgba(255, 255, 255, 0.4);
    }
  }
  .input {
    width: 326px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    background: none;
    outline: none;
    padding: 12px;
    &.change__password {
      margin-top: 8px;
      width: 250px;
    }
    &::placeholder {
      color: #ffffff;
    }
  }
}
.settings__footer {
  display: flex;
  justify-content: space-between;
  width: 788px;
  .logout {
    padding: 7px 13px;
    height: 33px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    font-weight: 700;
    font-size: 14px;
    line-height: 132.5%;
    color: #ffffff;
    &.hide {
      display: none;
    }
  }
  .delete__profile {
    display: inline-flex;
    padding: 7px 13px;
    height: 33px;
    border: 1px solid #3e74ff;
    border-radius: 11px;
    font-weight: 700;
    font-size: 14px;
    line-height: 132.5%;
    color: #3e74ff;
    &.hide {
      display: none;
    }
  }
  .cancel__changes {
    display: flex;
    align-items: center;
    padding: 7px 13px;
    height: 33px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    &.hide {
      display: none;
    }
  }
  .save__changes {
    display: flex;
    align-items: center;
    padding: 7px 13px;
    height: 33px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    &.hide {
      display: none;
    }
  }
}
</style>
