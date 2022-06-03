<template>
  <div class="background">
    <div class="auth__back__btn">
      <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
      <h1 class="auth__back__btn__title">Назад</h1>
    </div>
    <div class="container">
      <div class="content__container">
        <div class="header">
          <h1>Редактирования профиля</h1>
          <div class="horizontal__line"></div>
        </div>
        <div class="myprofile__body">
          <div class="format__dating">
            <div class="left__side__options">
              <div class="logo">
                <img
                  src="../../assets/images/profile_edit_logo/format__dating.svg"
                  alt=""
                />
              </div>
              <span>Формат знакомств</span>
            </div>
            <div class="right__side__options">
              <div class="chips">
                Серьезные отношения
                <img
                  src="../../assets/images/profile_edit_logo/close__chips.svg"
                  alt=""
                />
              </div>
              <div class="chips">
                Отправиться в путешествие
                <img
                  src="../../assets/images/profile_edit_logo/close__chips.svg"
                  alt=""
                />
              </div>
              <div class="chips">
                Онлайн общение
                <img
                  src="../../assets/images/profile_edit_logo/close__chips.svg"
                  alt=""
                />
              </div>
              <div class="chips">
                Спонсорство
                <img
                  src="../../assets/images/profile_edit_logo/close__chips.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="horizontal__line"></div>
          <div class="information">
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img
                    src="../../assets/images/profile_edit_logo/name__birthday.svg"
                    alt=""
                  />
                </div>
                <span>Имя и дата рождения:</span>
              </div>
              <div class="input__block">
                <input class="input" type="text" placeholder="Ананстасия" />
                <div class="inputs__birth">
                  <input
                    class="input__day"
                    type="text"
                    placeholder="24"
                    disabled
                  />
                  <input
                    class="input__month"
                    type="text"
                    placeholder="12"
                    disabled
                  />
                  <input
                    class="input__year"
                    type="text"
                    placeholder="2000"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img
                    src="../../assets/images/profile_edit_logo/location__logo.svg"
                    alt=""
                  />
                </div>
                <span>Город</span>
              </div>
              <TheSelect class="select__city" placeholder="Россия, Москва" />
            </div>
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img
                    src="../../assets/images/profile_edit_logo/nation__logo.svg"
                    alt=""
                  />
                </div>
                <span>Национальность</span>
              </div>
              <TheSelect class="select__nation" placeholder="Русская" />
            </div>
          </div>
          <div class="horizontal__line short"></div>
          <div class="cash__education">
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img src="../../assets/images/main/money.svg" alt="" />
                </div>
                <span>Трачу в месяц:</span>
              </div>
              <div class="border">
                <input class="input" type="text" placeholder="Введите сумму" />
                <span>$</span>
              </div>
            </div>
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img src="../../assets/images/main/language.svg" alt="" />
                </div>
                <span>Знание языков: </span>
              </div>
              <div class="chips__box">
                <div class="chips">
                  Английский<img
                    src="../../assets/images/profile_edit_logo/close__chips.svg"
                    alt=""
                  />
                </div>
                <div class="chips">
                  Узбекский<img
                    src="../../assets/images/profile_edit_logo/close__chips.svg"
                    alt=""
                  />
                </div>
                <div class="add__lang">
                  <img
                    src="../../assets/images/profile_edit_logo/add__cross.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="horizontal__line"></div>
          <div class="alco__smoke">
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img src="../../assets/images/main/alcohol.svg" alt="" />
                </div>
                <span>Отношение к алкоголю: </span>
              </div>
              <div class="border">
                <div class="block">
                  <div class="block__choose">
                    <div class="choose__list">
                      <p>Негативное</p>
                      <div class="vertical__line"></div>
                      <p>Нейтральное</p>
                      <div class="vertical__line"></div>
                      <p>Хорошее</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img src="../../assets/images/main/smoke.svg" alt="" />
                </div>
                <span>Отношение к курению: </span>
              </div>
              <div class="border">
                <div class="block">
                  <div class="block__choose">
                    <div class="choose__list">
                      <p>Негативное</p>
                      <div class="vertical__line"></div>
                      <p>Нейтральное</p>
                      <div class="vertical__line"></div>
                      <p>Хорошее</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="horizontal__line short"></div>
          <div class="body__params">
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img
                    src="../../assets/images/profile_edit_logo/body.svg"
                    alt=""
                  />
                </div>
                <span>Данные тела: </span>
              </div>
              <div class="border">
                <div class="signup__params__block">
                  <div class="signup__params__item">
                    <p>Рост:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="170"
                      maxlength="3"
                    />
                  </div>
                  <div class="signup__params__item">
                    <p>Вес:</p>
                    <input
                      class="input"
                      type="text"
                      placeholder="50"
                      maxlength="3"
                    />
                  </div>
                </div>
                <div class="signup__params__item params__size">
                  <p>Параметры:</p>
                  <div class="params__input__box">
                    <input
                      class="input"
                      type="text"
                      placeholder="90"
                      maxlength="3"
                    />
                    <div class="vertical__line"></div>

                    <input
                      class="input"
                      type="text"
                      placeholder="60"
                      maxlength="3"
                    />
                    <div class="vertical__line"></div>

                    <input
                      class="input"
                      type="text"
                      placeholder="90"
                      maxlength="3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="horizontal__line short"></div>
          <div class="hobby">
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img
                    src="../../assets/images/profile_edit_logo/hobby__game.svg"
                    alt=""
                  />
                </div>
                <span>Увлечение:</span>
              </div>
              <div class="border">
                <div class="chips">
                  Вино<img
                    src="../../assets/images/profile_edit_logo/close__chips.svg"
                    alt=""
                  />
                </div>
                <div class="chips">
                  Кино<img
                    src="../../assets/images/profile_edit_logo/close__chips.svg"
                    alt=""
                  />
                </div>
                <div class="chips">
                  Волейбол<img
                    src="../../assets/images/profile_edit_logo/close__chips.svg"
                    alt=""
                  />
                </div>
                <div class="chips">
                  Прыжки с парашюта<img
                    src="../../assets/images/profile_edit_logo/close__chips.svg"
                    alt=""
                  />
                </div>
                <div class="add__lang">
                  <img
                    src="../../assets/images/profile_edit_logo/add__cross.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="horizontal__line"></div>
          <div class="about">
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img
                    src="../../assets/images/profile_edit_logo/about__me.svg"
                    alt=""
                  />
                </div>
                <span>О себе</span>
              </div>
              <textarea class="about__text__area">
Ищу интересную компанию на вечер!</textarea
              >
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="horizontal__line"></div>
          <div class="footer__btns">
            <div class="btn">Отмена</div>
            <div class="btn">Сохранить</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheSelect from "../Form/TheSelect.vue";
export default { components: { TheSelect } };
</script>
<style lang="scss" scoped>
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.background {
  width: 100%;
  height: 100%;
  @extend .flex__center;
}
.container {
  width: 1056px;
  height: 2205px;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  .content__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 2205px;

    .header {
      @extend .flex__center;
      flex-direction: column;
      margin-top: 75px;
      margin-bottom: 48px;
      .horizontal__line {
        width: 847px;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.33);
        margin-top: 16px;
      }
    }
    .myprofile__body {
      @extend .flex__center;
      flex-direction: column;
      justify-content: space-between;
      width: 784px;
      height: 1563px;
      .format__dating {
        height: 89px;
        width: 784px;
        @extend .flex__center;
        justify-content: space-between;
        .left__side__options {
          width: 165px;
          height: 24px;
          @extend .flex__center;
          span {
            margin-left: 12px;
          }
        }
        .right__side__options {
          height: 89px;
          width: 515px;
          @extend .flex__center;
          align-items: unset;
          flex-wrap: wrap;
          justify-content: flex-start;
          .chips {
            @extend .flex__center;
            padding: 8px 12px;
            background: #2b66fb;
            box-shadow: 0px 4px 20px -12px rgba(41, 101, 255, 0.4);
            border-radius: 13px;
            height: 38px;
            font-weight: 700;
            font-size: 14px;
            line-height: 132.5%;
            margin-left: 12px;
            img {
              margin-left: 10px;
              cursor: pointer;
            }
          }
        }
      }
      .horizontal__line {
        width: 784px;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        &.short {
          width: 513px;
          height: 0px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          margin-left: 271px;
        }
      }
      .info__bar {
        @extend .flex__center;
        justify-content: space-between;
        width: 784px;
        height: 60px;
      }
      .logo__title__group {
        display: flex;
        align-items: center;
        span {
          margin-left: 12px;
          font-weight: 500;
          font-size: 14px;
          line-height: 153.5%;
          color: rgba(255, 255, 255, 0.4);
        }
      }
      .information {
        @extend .flex__center;
        flex-direction: column;
        justify-content: space-between;
        height: 212px;
        .info__bar {
          .input__block {
            display: flex;
            justify-content: space-between;
            width: 512px;
          }
        }
        .input {
          width: 326px;
          height: 60px;
          background: none;
        }
        .inputs__birth {
          @extend .flex__center;
          width: 174px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          .input__day {
            width: 40px;
            background: none;
          }
          .input__month {
            width: 40px;
            background: none;
          }
          .input__year {
            width: 70px;
            background: none;
          }
        }

        .select__city {
          z-index: 2;
          width: 512px;
          height: 60px;
          margin-top: 18px;
        }
        .select__nation {
          z-index: 1;
          width: 512px;
          height: 60px;
          margin-top: 18px;
        }
      }
      .cash__education {
        width: 783px;
        height: 123px;
        @extend .flex__center;
        flex-direction: column;
        justify-content: space-between;
        .info__bar {
          @extend .flex__center;
          justify-content: space-between;
          width: 784px;
          height: 60px;

          .border {
            span {
              width: 50px;
              height: 50px;
              @extend .flex__center;
            }
          }
          .chips__box {
            @extend .flex__center;
            justify-content: flex-start;
            width: 512px;
            height: 60px;
            .chips {
              border: 1px solid rgba(255, 255, 255, 0.14);
              border-radius: 11px;
              padding: 12px 18px;
              margin-right: 12px;
              img {
                margin-left: 10px;
                cursor: pointer;
              }
            }
            .add__lang {
              @extend .flex__center;
              border: 1px solid #ffffff;
              border-radius: 11px;
              height: 47px;
              width: 47px;
              cursor: pointer;
            }
          }
          .border {
            width: 512px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 11px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .input {
              border: none;
              background: none;
            }
          }
        }
      }
      .alco__smoke {
        @extend .flex__center;
        flex-direction: column;
        justify-content: space-between;
        width: 784px;
        height: 136px;
        .border {
          width: 512px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          @extend .flex__center;

          .vertical__line {
            height: 18px;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.33);
          }
          .block {
            width: 512px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            p {
              font-size: 15px;
              color: rgba(255, 255, 255, 0.33);
            }

            .choose__list {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 414px;
              height: 23px;
              p {
                cursor: pointer;
              }
            }
          }
        }
      }
      .body__params {
        .border {
          width: 512px;
          height: 60px;
          display: flex;
          justify-content: space-between;
          .signup__params__block {
            width: 232px;
            @extend .flex__center;
            justify-content: space-between;
            .signup__params__item {
              @extend .flex__center;
              justify-content: space-between;
              width: 107px;
              height: 60px;

              .input {
                width: 60px;
                height: 60px;
                background: none;
              }
            }
          }
          .signup__params__item {
            &.params__size {
              @extend .flex__center;
              justify-content: space-between;
              width: 269px;
              height: 60px;
              .params__input__box {
                @extend .flex__center;
                width: 174px;
                height: 60px;
                border: 1px solid rgba(255, 255, 255, 0.14);
                border-radius: 11px;
                .vertical__line {
                  height: 18px;
                  width: 1px;
                  background-color: rgba(255, 255, 255, 0.14);
                }
                .input {
                  background: none;
                  width: 52px;
                  border: none;
                }
              }
            }
          }
        }
      }
      .hobby {
        .info__bar {
          height: 106px;
        }
        .border {
          width: 512px;
          min-height: 106px;
          @extend .flex__center;
          justify-content: flex-start;
          flex-wrap: wrap;
          .chips {
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 11px;
            padding: 12px 18px;
            margin-right: 12px;
            height: 47px;
            img {
              margin-left: 10px;
              cursor: pointer;
            }
          }
          .add__lang {
            @extend .flex__center;
            border: 1px solid #ffffff;
            border-radius: 11px;
            height: 47px;
            width: 47px;
            cursor: pointer;
          }
        }
      }
      .about {
        // width: 784px;
        height: 261px;
        @extend .flex__center;

        .about__text__area {
          background: none;
          outline: none;
          resize: none;
          color: #ffffff;
          width: 512px;
          height: 261px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          padding: 12px;
          font-weight: 500;
          font-size: 14px;
          line-height: 153.5%;
        }
      }
    }
    .footer {
      margin-top: 92px;
      @extend .flex__center;
      flex-direction: column;
      .horizontal__line {
        width: 784px;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.14);
      }
      .footer__btns {
        @extend .flex__center;
        justify-content: space-between;
        align-items: flex-end;
        width: 784px;
        height: 65px;
        .btn {
          @extend .flex__center;
          padding: 7px 13px;
          height: 33px;
          border: 1px solid #ffffff;
          border-radius: 11px;
          cursor: pointer;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  
}
</style>
