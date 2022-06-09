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
              <!-- <input class="code__input" type="text" maxlength="4" />
              <div class="resend__block ">
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
              </div> -->
            </div>
            <div class="horizontal__line"></div>
          </div>
          <span class="span__desc hide"
            >Необходимо подтвердить смену учетной записи. Введите код полученный
            из сообщения, которого мы Вам отправили.</span
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

              <div class="send__phone__code">Отправить</div>

              <div class="sms__code hide">
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
            <div class="horizontal__line"></div>
          </div>
          <div class="settings">
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
          <div class="settings change__password hide">
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
          <div class="logout">Выйти из аккаунта</div>
          <div class="delete__profile">Удалить профиль</div>
          <div class="cancel__changes hide">Отмена</div>
          <div class="save__changes hide">Сохранить</div>
        </div>
      </div>
    </div>

    <div class="mobile__settings">
      <div class="mobile__header">
        <div class="header__title__block">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <p>Настройки анкеты</p>
        </div>
      </div>
      <div class="mobile__body">
        <div class="mail__block">
          <p>Электронная почта</p>
          <input class="input" type="text" />
          <span
            >Введите код полученный из сообщения, которого мы Вам
            отправили.</span
          >
          <div class="phone__box__options">
            <div class="btn send__code">Отправить код</div>
            <p>Необходимо подтвердить смену учетной записи.</p>
          </div>
          <div class="phone__box__input">
            <input class="input" type="text" maxlength="4" />
            <div class="input__inner__box">
              <div class="counter__btn">
                <img
                  src="../../assets/images/main/myprofile__settings__resend.svg"
                  alt=""
                />
                <span class="timer">59</span>
              </div>
              <div class="success__logo">
                <img
                  src="../../assets/images/main/myprofile__settings__done.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="horizontal__line"></div>
        </div>
        <div class="phone__block">
          <p>Номер телефона</p>
          <input class="input" type="text" />
          <div class="phone__box__options">
            <div class="btn send__code">Отправить код</div>
            <p>Необходимо подтвердить смену номера телефона.</p>
          </div>
          <div class="phone__box__input">
            <input class="input" type="text" maxlength="4" />
            <div class="input__inner__box">
              <div class="counter__btn">
                <img
                  src="../../assets/images/main/myprofile__settings__resend.svg"
                  alt=""
                />
                <span>59</span>
              </div>
              <div class="success__logo">
                <img
                  src="../../assets/images/main/myprofile__settings__done.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="horizontal__line"></div>
        </div>
        <div class="password__block">
          <p>Пароль</p>
          <p>Смена пароля</p>
          <input class="input" type="text" placeholder="**********" />
          <input
            class="input"
            type="text"
            placeholder="Введите старый пароль"
          />
          <input class="input" type="text" placeholder="Новый пароль" />
        </div>
      </div>
      <div class="mobile__footer">
        <div class="btn__block">
          <div class="btn">Выйти из аккаунта</div>
          <div class="btn blue">Удалить профиль</div>
          <!-- <div class="btn">Отмена</div>
          <div class="btn ">Сохранить</div> -->
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
  width: 100vw;
  display: flex;
  justify-content: center;
  .settings__container {
    @extend .flex__center;
    justify-content: space-between;
    flex-direction: column;
    width: 62.53vw;
    height: 100vh;
    background: rgba(196, 196, 196, 0.05);
    border: 0.06vw solid rgba(255, 255, 255, 0.33);
    border-top: none;
    border-bottom: none;
    .settings__content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      height: 31.62vw;
      margin-top: 4.21vw;
      .horizontal__line {
        width: 47.289vw;
        height: 0px;
        border: 0.06vw solid rgba(255, 255, 255, 0.14);
      }
      .settings__header {
        @extend .flex__center;
        flex-direction: column;
        h1 {
          font-weight: 600;
          font-size: 1.084vw;
          line-height: 153.5%;
          display: flex;
          align-items: center;
          color: #ffffff;
          margin-bottom: 0.722vw;
        }
        .horizontal__line {
          width: 51vw;
          height: 0px;
          border: 0.06vw solid rgba(255, 255, 255, 0.33);
        }
      }
      .settings__body {
        width: 36vw;
        height: 14vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 10.84vw;
        .span__desc {
          font-weight: 600;
          font-size: 0.722vw;
          line-height: 132.5%;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          width: 22.289vw;
          height: 1.92vw;
          margin-left: 16.38vw;
          &.hide {
            display: none;
          }
        }
      }
    }
  }
}
.mobile__settings {
  display: none;
}
.settings {
  // @extend .flex__center;
  justify-content: space-between;
  display: flex;
  &.change__mail {
    width: 49.698vw;
    .horizontal__line {
      display: none;
    }
    .inputs__box {
      width: 33.25vw;
      .block {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .code__input {
        padding: 1.084vw 3.012vw;
        width: 8.192vw;
        height: 3.554vw;
        border: 0.06vw solid #ffffff;
        border-radius: 0.662vw;
        background: none;
        outline: none;
        font-weight: 600;
        font-size: 0.903vw;
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
    .horizontal__line {
      display: none;
    }
    width: 49.698vw;
    .inputs__box {
      width: 33.25vw;
      .sms__code {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 12.95vw;
        &.hide {
          display: none;
        }
        .code__input {
          padding: 1.084vw 3.012vw;
          width: 8.19vw;
          height: 3.554vw;
          border: 0.06vw solid #ffffff;
          border-radius: 0.662vw;
          background: none;
          outline: none;
          font-weight: 600;
          font-size: 0.903vw;
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
    border: 0.06vw solid #ffffff;
    border-radius: 0.662vw;
    width: 10.48vw;
    height: 3.61vw;
    font-weight: 600;
    font-size: 0.903vw;
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
    width: 49.09vw;
    &.hide {
      display: none;
    }
  }
  .settings__desc {
    display: flex;
    align-items: center;
  }
  .inputs__box {
    width: 32.77vw;
    height: 5.06vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .vertical__line {
      margin-top: 1.807vw;
      width: 0px;
      height: 2.409vw;
      border: 0.06vw solid rgba(255, 255, 255, 0.2);
    }
    .logo__done {
      margin-top: 1.807vw;
    }
  }
  .title {
    font-weight: 500;
    font-size: 0.8433vw;
    line-height: 153.5%;
    color: rgba(255, 255, 255, 0.4);
    margin-left: 0.722vw;
  }
  .input__block {
    width: 15.06vw;
    height: 5.06vw;
    span {
      font-weight: 600;
      font-size: 0.722vw;
      line-height: 132.5%;
      color: rgba(255, 255, 255, 0.4);
    }
  }
  .input {
    width: 19.638vw;
    height: 3.61vw;
    border: 0.06vw solid rgba(255, 255, 255, 0.14);
    border-radius: 0.662vw;
    background: none;
    outline: none;
    padding: 0.722vw;
    &.change__password {
      margin-top: 0.48vw;
      width: 15.06vw;
    }
    &::placeholder {
      color: #ffffff;
    }
  }
}
.settings__footer {
  display: flex;
  justify-content: space-between;
  width: 47.4698vw;
  .logout {
    padding: 0.42vw 0.783vw;
    height: 2vw;
    border: 0.06vw solid rgba(255, 255, 255, 0.14);
    border-radius: 0.662vw;
    font-weight: 700;
    font-size: 0.8433vw;
    line-height: 132.5%;
    color: #ffffff;
    cursor: pointer;

    &.hide {
      display: none;
    }
  }
  .delete__profile {
    display: inline-flex;
    padding: 0.421vw 0.783vw;
    height: 1.9879vw;
    border: 0.06vw solid #3e74ff;
    border-radius: 0.662vw;
    font-weight: 700;
    font-size: 0.8433vw;
    line-height: 132.5%;
    color: #3e74ff;
    cursor: pointer;
    &.hide {
      display: none;
    }
  }
  .cancel__changes {
    display: flex;
    align-items: center;
    padding: 0.421vw 0.7831vw;
    height: 2vw;
    border: 0.06vw solid rgba(255, 255, 255, 0.14);
    border-radius: 0.662vw;
    &.hide {
      display: none;
    }
  }
  .save__changes {
    display: flex;
    align-items: center;
    padding: 0.421vw 0.783vw;
    height: 2vw;
    border: 0.06vw solid rgba(255, 255, 255, 0.14);
    border-radius: 0.66vw;
    &.hide {
      display: none;
    }
  }
}
@media (max-width: 1200px) {
  .page__background {
    .settings__container {
      display: none;
    }
    .mobile__settings {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .mobile__header {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(30px);
        width: 390px;
        height: 89px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 17px;
          line-height: 153.5%;
          color: #ffffff;
        }
        .header__title__block {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          img {
            position: absolute;
            left: 13px;
          }
        }
      }
    }
    .mobile__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      margin-bottom: 32px;
      height: unset;
      .mail__block {
        span {
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          width: 335px;
          margin: 0;
          margin-bottom: 16px;
          &.timer {
            color: #ffffff;
            font-size: 14px;
            width: auto;
          }
        }
        .phone__box__options {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          p {
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            display: flex;
            align-items: center;
            color: rgba(255, 255, 255, 0.4);
            width: 160px;
            margin: 0;
          }
          .btn {
            &.send__code {
              border: 1px solid #ffffff;
              border-radius: 11px;
              gap: 12px;
              height: 60px;
              width: 159px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .phone__box__input {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 267px;
          margin-bottom: 16px;
          .input {
            width: 159px;
            height: 60px;
            margin: 0;
            text-align: center;
          }
          .input__inner__box {
            display: flex;
            width: 92px;
            justify-content: space-between;
            align-items: center;
            margin-left: 16px;
            .counter__btn {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              align-items: center;
              height: 40px;
              width: 20px;
              img {
                height: 20px;
                width: 20px;
              }
            }
            .success__logo {
              width: 56px;
              height: 40px;
              border-left: 1px solid rgba(255, 255, 255, 0.2);
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 153.5%;
          color: #ffffff;
          text-align: initial;
          margin-bottom: 16px;
        }
        .input {
          margin-bottom: 16px;
        }
        .horizontal__line {
          border: 1px solid rgba(255, 255, 255, 0.05);
          height: 0;
          width: 335px;
        }
      }
    }
    .phone__block {
      margin-top: 16px;
      .phone__box__options {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        p {
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          width: 160px;
          margin: 0;
        }
        .btn {
          &.send__code {
            border: 1px solid #ffffff;
            border-radius: 11px;
            gap: 12px;
            height: 60px;
            width: 159px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .phone__box__input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 267px;
        margin-bottom: 16px;
        .input {
          width: 159px;
          height: 60px;
          margin: 0;
          text-align: center;
        }
        .input__inner__box {
          display: flex;
          width: 92px;
          justify-content: space-between;
          align-items: center;
          margin-left: 16px;
          .counter__btn {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            height: 40px;
            img {
              height: 20px;
              width: 20px;
            }
          }
          .success__logo {
            width: 56px;
            height: 40px;
            border-left: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 153.5%;
        color: #ffffff;
        text-align: initial;
        margin-bottom: 16px;
      }
      .input {
        margin-bottom: 16px;
      }
      .horizontal__line {
        border: 1px solid rgba(255, 255, 255, 0.05);
        height: 0;
        width: 335px;
      }
    }
    .password__block {
      margin-top: 16px;

      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 153.5%;
        color: #ffffff;
        text-align: initial;
        margin-bottom: 16px;
      }
      .input {
        margin-bottom: 16px;
      }
      .horizontal__line {
      }
    }
    .mobile__footer {
      border-top: 1px solid rgba(255, 255, 255, 0.14);
      .btn__block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 335px;
        margin-top: 24px;
        margin-bottom: 168px;
        .btn {
          padding: 7px 13px;
          gap: 10px;
          height: 33px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          font-weight: 700;
          font-size: 14px;
          line-height: 132.5%;
          &.blue {
            border: 1px solid #3e74ff;
            color: #3e74ff;
          }
        }
      }
    }
  }
}
</style>
