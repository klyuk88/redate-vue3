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
  .auth__back__btn {
    z-index: 1;
    top: 12.3vw;
    left: 3.33vw;
  }
  .page__background {
    .settings__container {
      border: none;
      background: none;
      .settings__content {
        width: 100vw;
        margin: 0;
        min-height: 140vw;
        position: absolute;
        left: 0;
        .horizontal__line {
          display: flex;
          width: 85.89vw;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .settings__header {
          width: 100vw;
          height: 22.8vw;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(30px);
          justify-content: end;
          h1 {
            font-size: 4.35vw;
          }
          .horizontal__line {
            width: 100vw;
          }
        }
        .settings__body {
          width: 85.89vw;
          min-height: 91vw;
          margin: 0;
          .settings {
            flex-direction: column;
            width: 85.89vw;
            min-height: 24.87vw;
            .settings__desc {
              img {
                display: none;
              }
              .title {
                margin: 0;
                color: #ffffff;
                font-weight: 500;
                font-size: 3.589vw;
                line-height: 153.5%;
              }
            }
            .input {
              border-radius: 2.82vw;
              width: 85.89vw;
              height: 15.38vw;
              font-size: 3.846vw;
              padding: 3.07vw;
            }
            .inputs__box {
              width: 85.89vw;
              min-height: 15.38vw;
              flex-direction: column;

              .input {
                border-radius: 2.82vw;
                width: 85.89vw;
                height: 15.38vw;
                font-size: 3.846vw;
              }
              .send__phone__code {
                width: 161.5px;
                height: 60px;
                font-size: 12px;
              }
            }
            &.change__mail {
              width: 85.89vw;
            }
          }
        }
        .settings__footer {
          width: 85.89vw;
          .logout {
            padding: 1.79vw 3.33vw;
            height: 8.46vw;
            border: 0.25vw solid rgba(255, 255, 255, 0.14);
            border-radius: 2.82vw;
            font-weight: 700;
            font-size: 3.589vw;
            line-height: 132.5%;
            color: #ffffff;
            cursor: pointer;

            &.hide {
              display: none;
            }
          }
          .delete__profile {
            display: inline-flex;
            padding: 1.79vw 3.33vw;
            height: 8.46vw;
            border: 0.25vw solid #3e74ff;
            border-radius: 2.82vw;
            font-weight: 700;
            font-size: 3.589vw;
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
            padding: 1.79vw 3.33vw;
            height: 8.46vw;
            border: 0.25vw solid rgba(255, 255, 255, 0.14);
            border-radius: 2.82vw;
            font-weight: 700;
            font-size: 3.589vw;
            line-height: 132.5%;
            &.hide {
              display: none;
            }
          }
          .save__changes {
            display: flex;
            align-items: center;
            padding: 1.79vw 3.33vw;
            height: 8.46vw;
            border: 0.25vw solid rgba(255, 255, 255, 0.14);
            border-radius: 2.82vw;
            font-weight: 700;
            font-size: 3.589vw;
            line-height: 132.5%;
            &.hide {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
