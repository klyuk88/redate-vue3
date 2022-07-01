<script setup>
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()

const logout = () => {
  auth.logout()
}
</script>

<template>
  <div class="page__background">
    <router-link to="/account/vasya">
      <div class="auth__back__btn">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
    </router-link>
    <div class="settings__container">
      <div class="settings__content">
        <div class="settings__header">
          <h1>Настройки анкеты</h1>
          <div class="horizontal__line"></div>
        </div>
        <div class="settings__body">
          <span class="span__desc hide"
            >Необходимо подтвердить смену учетной записи. Введите код полученный
            из сообщения, которого мы Вам отправили.</span
          >
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
          <button class="logout" @click="logout()">Выйти из аккаунта</button>
          <div class="delete__profile">Удалить профиль</div>
          <div class="cancel__changes hide">Отмена</div>
          <div class="save__changes hide">Сохранить</div>
        </div>
      </div>
    </div>

    <div class="mobile__settings">
      <div class="mobile__header">
        <div class="header__title__block">
          <router-link to="/profile">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          </router-link>
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
          <button class="btn" @click="logout()">Выйти из аккаунта</button>
          <button class="btn blue">Удалить профиль</button>
          <!-- <div class="btn">Отмена</div>
          <div class="btn ">Сохранить</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

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
  margin: 24px 0 24px 0;

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
    margin: 0;
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
  margin-top: 24px;

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
    background: transparent;

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
        width: 100vw;
        height: 22.82vw;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 4.358vw;
          line-height: 153.5%;
          color: #ffffff;
        }
        .header__title__block {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2.564vw;
          img {
            position: absolute;
            left: 3.333vw;
            cursor: pointer;
          }
        }
      }
    }
    .mobile__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-top: 5.128vw;
      margin-bottom: 8.205vw;
      height: unset;
      .mail__block {
        span {
          font-weight: 400;
          font-size: 3.333vw;
          line-height: 4.1vw;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          width: 85.89vw;
          margin: 0;
          margin-bottom: 4.102vw;
          &.timer {
            color: #ffffff;
            font-size: 3.589vw;
            width: auto;
          }
        }
        .phone__box__options {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4.102vw;
          p {
            font-weight: 400;
            font-size: 3.333vw;
            line-height: 4.1vw;
            display: flex;
            align-items: center;
            color: rgba(255, 255, 255, 0.4);
            width: 41.25vw;
            margin: 0;
          }
          .btn {
            &.send__code {
              border: 0.256vw solid #ffffff;
              border-radius: 2.82vw;
              gap: 3.076vw;
              height: 15.38vw;
              width: 40.76vw;
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
          width: 68.461vw;
          margin-bottom: 4.102vw;
          .input {
            width: 40.769vw;
            height: 15.384vw;
            margin: 0;
            text-align: center;
          }
          .input__inner__box {
            display: flex;
            width: 23.589vw;
            justify-content: space-between;
            align-items: center;
            margin-left: 4.102vw;
            .counter__btn {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              align-items: center;
              height: 10.256vw;
              width: 5.128vw;
              img {
                height: 5.128vw;
                width: 5.128vw;
              }
            }
            .success__logo {
              width: 14.3589vw;
              height: 10.256vw;
              border-left: 0.256vw solid rgba(255, 255, 255, 0.2);
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        p {
          font-weight: 500;
          font-size: 3.589vw;
          line-height: 153.5%;
          color: #ffffff;
          text-align: initial;
          margin-bottom: 4.102vw;
        }
        .input {
          margin-bottom: 4.102vw;
        }
        .horizontal__line {
          border: 0.256vw solid rgba(255, 255, 255, 0.05);
          height: 0;
          width: 85.89vw;
        }
      }
    }
    .phone__block {
      margin-top: 4.102vw;
      .phone__box__options {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4.102vw;
        p {
          font-weight: 400;
          font-size: 3.33vw;
          line-height: 4.102vw;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          width: 41.0256vw;
          margin: 0;
        }
        .btn {
          &.send__code {
            border: 0.256vw solid #ffffff;
            border-radius: 2.82vw;
            gap: 3.0769vw;
            height: 15.38vw;
            width: 40.769vw;
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
        width: 68.46vw;
        margin-bottom: 4.102vw;
        .input {
          width: 40.769vw;
          height: 15.384vw;
          margin: 0;
          text-align: center;
        }
        .input__inner__box {
          display: flex;
          width: 23.589vw;
          justify-content: space-between;
          align-items: center;
          margin-left: 4.1vw;
          .counter__btn {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            height: 10.256vw;
            img {
              height: 5.128vw;
              width: 5.128vw;
            }
          }
          .success__logo {
            width: 14.358vw;
            height: 10.256vw;
            border-left: 0.256vw solid rgba(255, 255, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      p {
        font-weight: 500;
        font-size: 3.589vw;
        line-height: 153.5%;
        color: #ffffff;
        text-align: initial;
        margin-bottom: 4.102vw;
      }
      .input {
        margin-bottom: 4.102vw;
      }
      .horizontal__line {
        border: 0.256vw solid rgba(255, 255, 255, 0.05);
        height: 0;
        width: 85.89vw;
      }
    }
    .password__block {
      margin-top: 4.102vw;

      p {
        font-weight: 500;
        font-size: 3.589vw;
        line-height: 153.5%;
        color: #ffffff;
        text-align: initial;
        margin-bottom: 4.102vw;
      }
      .input {
        margin-bottom: 4.102vw;
      }
    }
    .mobile__footer {
      border-top: 0.256vw solid rgba(255, 255, 255, 0.14);
      .btn__block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 85.89vw;
        margin-top: 6.153vw;
        margin-bottom: 43.076vw;
        .btn {
          padding: 1.7948vw 3.333vw;
          gap: 2.564vw;
          height: 8.461vw;
          border: 0.256vw solid rgba(255, 255, 255, 0.14);
          border-radius: 2.82vw;
          font-weight: 700;
          font-size: 3.589vw;
          line-height: 132.5%;
          &.blue {
            border: 0.256vw solid #3e74ff;
            color: #3e74ff;
          }
        }
      }
    }
  }
}
</style>
