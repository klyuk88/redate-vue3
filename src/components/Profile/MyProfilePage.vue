<template>
  <div class="profile__page">
    <div class="nav__box">
      <div class="auth__back__btn">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
      <div class="more_mobile">
        <img src="@/assets/images/main/btn_more.svg" alt="" />
      </div>
    </div>
    <div class="left__side">
      <div class="background">
        <div class="container">
          <div class="header">
            <h1>Мой профиль</h1>
            <div class="horizontal__line"></div>
          </div>
          <div class="main">
            <div class="cash__container">
              <div class="block">
                <div class="options">
                  <img
                    src="@/assets/images/main/profile__balance.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                  <p>Ваш баланс: <span>$6045</span></p>
                </div>
                <div class="btn">Пополнить</div>
              </div>
              <div class="block">
                <div class="options">
                  <img
                    src="@/assets/images/main/profile__premium_crown.svg"
                    width="24"
                    height="19"
                    alt=""
                  />
                  <p>Премиум: <span>Вкл</span></p>
                </div>
                <div class="btn gold">Продлить</div>
              </div>
              <div class="subscription">
                <div class="item__price active">
                  <div class="days">7 дней</div>
                  <div class="price">54$</div>
                  <div class="progress__bar"></div>
                  <p>Осталось <span>3</span> дня</p>
                </div>
                <!-- <div class="vertical__line"></div> -->
                <div class="item__price">
                  <div class="days">14 дней</div>
                  <div class="price">$96</div>
                  <div class="progress__bar"></div>
                  <p>Осталось <span>3</span> дня</p>
                </div>
                <div class="vertical__line"></div>
                <div class="item__price">
                  <div class="days">30 дней</div>
                  <div class="price">$160</div>
                  <div class="progress__bar"></div>
                  <p>Осталось<span> 3 </span>дня</p>
                </div>
              </div>
            </div>
            <div class="photo__gallery">
              <div class="gallery__block">
                <div class="add__btn">
                  <img
                    src="../../assets/images/main/myprofile__add__btn.svg"
                    alt=""
                  />
                </div>
                <div class="carousel__block">
                  <div class="carousel">
                    <img
                      src="../../assets/images/main/woman__mini__avatar1.png"
                      alt=""
                      class="item"
                    />
                    <img
                      src="../../assets/images/main/woman__mini__avatar1.png"
                      alt=""
                      class="item"
                    />
                    <img
                      src="../../assets/images/main/woman__mini__avatar1.png"
                      alt=""
                      class="item"
                    />
                    <img
                      src="../../assets/images/main/woman__mini__avatar1.png"
                      alt=""
                      class="item"
                    />
                    <img
                      src="../../assets/images/main/woman__mini__avatar1.png"
                      alt=""
                      class="item"
                    />
                  </div>
                  <div class="arrow">
                    <img
                      src="../../assets/images/main/myprofile__carousel__arrow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="btn">
                <div class="container">
                  <img src="@/assets/images/main/myprofile__edit.svg" alt="" />
                  <p>Редактирование анкеты</p>
                </div>
              </div>
              <div class="btn">
                <div class="container">
                  <img
                    src="@/assets/images/main/myprofile__setting.svg"
                    alt=""
                  />
                  <p>Настройки входа</p>
                </div>
              </div>
              <div class="btn">
                <div class="container">
                  <img
                    src="@/assets/images/main/myprofile__support.svg"
                    alt=""
                  />
                  <p>Техническая поддержка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right__side">
      <div class="profile" @click.self="close">
        <div class="profile__info">
          <div class="profile__info__title">
            <div class="profile__title">
              <div class="profile__name">Владимир</div>
              <div class="status__premium">DIAMOND</div>
            </div>
            <div class="profile__subtext">
              <div class="profile__location">Россия, Москва</div>
              <div class="profile__vertical__line">|</div>
              <div class="profile__age">31 год</div>
              <div class="profile__vertical__line">|</div>
              <div class="profile__online__status">Онлайн</div>
            </div>
          </div>
          <div class="buttons__block mobile">
            <div class="inner__buttons__block">
              <div class="big__buttons">
                <div class="send__message">Написать</div>
                <div class="icon__btn">
                  <img
                    src="@/assets/images/main/heart.svg"
                    width="17"
                    height="20"
                    alt=""
                  />
                  <div class="vertical__line"></div>
                  <img
                    src="@/assets/images/main/star.svg"
                    width="19"
                    height="20"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            class="down__arrow"
            src="../../assets/images/main/profile__mobile__down.svg"
            alt=""
          />
          <div class="profile__info__filter">
            <div class="profile__info__filter__block">
              <div
                class="profile__info__filter__icon"
                @click="modalDescrVisible"
              >
                <img src="@/assets/images/main/description.svg" alt="" />
              </div>
              <div class="profile__info__filter__description">
                Формат знакомств:
              </div>
              <div class="mobile__horizontal__line"></div>
            </div>
            <div class="profile__info__filter__tags__block">
              <div class="profile__info__filter__tag">Серьёзные отношения</div>
              <div class="profile__info__filter__tag">Онлайн общение</div>
              <div class="profile__info__filter__tag">Спонсорство</div>
              <div class="profile__info__filter__tag">Пойти на свидание</div>
            </div>
          </div>
          <div class="profile__info__list__container">
            <div class="profile__info__list">
              <div class="mobile__more__info__title">
                <p>Подробная информация</p>
                <div class="mobile__horizontal__line"></div>
              </div>
              <div class="profile__info__list__stats">
                <div class="profile__info__list__icon">
                  <img src="@/assets/images/main/nation.svg" alt="" />
                </div>
                <div class="profile__info__list__title">Национальность:</div>
                <div class="profile__info__list__status">Русская</div>
              </div>
              <div class="profile__info__list__stats">
                <div class="profile__info__list__icon">
                  <img src="@/assets/images/main/money.svg" alt="" />
                </div>
                <div class="profile__info__list__title">Доход в месяц:</div>
                <div class="profile__info__list__status">$ 20 000</div>
              </div>
              <div class="profile__info__list__stats">
                <div class="profile__info__list__icon">
                  <img src="@/assets/images/main/language.svg" alt="" />
                </div>
                <div class="profile__info__list__title">Знание языков:</div>
                <div class="profile__info__list__status">
                  Английский, Французский
                </div>
              </div>
              <div class="profile__info__list__stats">
                <div class="profile__info__list__icon">
                  <img src="@/assets/images/main/alcohol.svg" alt="" />
                </div>
                <div class="profile__info__list__title">
                  Отношение к алкоголю:
                </div>
                <div class="profile__info__list__status">Негативное</div>
              </div>
              <div class="profile__info__list__stats">
                <div class="profile__info__list__icon">
                  <img src="@/assets/images/main/smoke.svg" alt="" />
                </div>
                <div class="profile__info__list__title">
                  Отношение к курению:
                </div>
                <div class="profile__info__list__status">Нейтральное</div>
              </div>
            </div>
            <div class="profile__horizontal__line"></div>
            <div class="mobile__more__info__title">
              <p>Основное</p>
              <div class="mobile__horizontal__line main"></div>
            </div>
            <div class="main__heightweight">
              <div class="profile__info__list__heightweight">
                <div class="profile__info__list__height__block">
                  <div class="profile__info__list__height">Рост:</div>
                  <div class="profile__info__list__height__stat">181</div>
                </div>
                <div class="profile__info__list__weight__block">
                  <div class="profile__info__list__weight">Вес:</div>
                  <div class="profile__info__list__weight__stat">78</div>
                </div>
              </div>
              <div class="female__version">
                <div class="profile__info__list__weight">Параметры:</div>
                <div class="profile__info__list__weight__stat">90/60/90</div>
              </div>
            </div>
            <div class="profile__horizontal__line"></div>
            <div class="profile__info__list__hobby__block">
              <div class="profile__info__list__hobby">Увлечения:</div>
              <div class="profile__info__list__hobby__item">
                Спорт, Фильмы, Шахматы
              </div>
            </div>
            <div class="mobile__more__info__title">
              <p>Увлечения</p>
              <div class="mobile__horizontal__line hobby"></div>
            </div>
            <div class="hobby__chips__box">
              <div class="chips">Спорт</div>
              <div class="chips">Вино</div>
              <div class="chips">Путешествие</div>
            </div>
            <div class="profile__horizontal__line"></div>
            <div class="profile__info__list__about__block">
              <p class="profile__info__list__about">
                О себе:
                <span class="profile__info__list__about__description"
                  >Человек выского ума, занимаюсь бизнесом по продаже машин, ищу
                  спутницу жизни</span
                >
              </p>
            </div>
            <div class="mobile__more__info__title">
              <p>О себе</p>
              <div class="mobile__horizontal__line about"></div>
            </div>
            <div class="mobile__about__desc">
              <p>
                Человек выского ума, занимаюсь бизнесом по продаже машин, ищу
                спутницу жизни
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="logo__title">
        <h1>REDATE</h1>
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
  flex-direction: column;
  align-items: center;
}
.profile__page {
}
.left__side {
  .container {
    @extend .flex__center;
    height: 812px;
    justify-content: space-between;
    .header {
      height: 44px;
      @extend .flex__center;
      justify-content: space-between;
      h1 {
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
      }
      .horizontal__line {
        width: 670px;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.33);
      }
    }
    .main {
      width: 612px;
      height: 720px;
      @extend .flex__center;
      justify-content: space-between;
      .cash__container {
        width: 608px;
        height: 400px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 40px;
        @extend .flex__center;
        justify-content: space-evenly;
        .block {
          width: 560px;
          height: 90px;
          background: rgba(27, 28, 30, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 24px;
          @extend .flex__center;
          justify-content: space-between;
          flex-direction: row;
          padding: 12px;
          .options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;
            font-size: 16px;
            line-height: 153.5%;
            color: rgba(255, 255, 255, 0.33);
            img {
              margin-right: 12px;
            }
            span {
              color: #ffffff;
              margin-left: 12px;
            }
          }
          .btn {
            @extend .flex__center;
            width: 140px;
            height: 58px;
            background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
            border-radius: 14px;
            &.gold {
              border: #ad6902 1px solid;
              background: linear-gradient(
                132.27deg,
                #f9ae3f -0.77%,
                #ffdba5 36.67%,
                #ad6902 96.37%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
        }
        .subscription {
          @extend .flex__center;
          flex-direction: row;
          justify-content: space-between;
          width: 560px;
          height: 136px;
          background: rgba(27, 28, 30, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 24px;
          padding: 36px;
          .vertical__line {
            width: 104px;
            height: 0px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            transform: rotate(90deg);
          }
          .item__price {
            p {
              span {
                margin-left: 5px;
                margin-right: 5px;
              }
            }
            .days {
              font-weight: 700;
              font-size: 24px;
              line-height: 153.5%;
            }
            .price {
              text-align: center;
              border: #ad6902 1px solid;
              padding: 7px 26px;
              border-radius: 11px;
              font-weight: 600;
              font-size: 15px;
              line-height: 153.5%;
              background: linear-gradient(
                132.27deg,
                #f9ae3f -0.77%,
                #ffdba5 36.67%,
                #ad6902 96.37%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
            .progress__bar {
              display: none;
              width: 160.64px;
              height: 24.34px;
              background: linear-gradient(
                89.71deg,
                rgba(255, 255, 255, 0.93) 0.25%,
                rgba(255, 255, 255, 0.86) 46.83%,
                #ffffff 65.55%,
                rgba(255, 255, 255, 0.2) 65.56%,
                rgba(255, 255, 255, 0.2) 99.75%
              );
              border-radius: 4px;
            }
            p {
              display: none;
            }
            &.active {
              width: 194px;
              height: 144px;
              filter: drop-shadow(4px 0px 11px rgba(43, 102, 251, 0.37));
              background: linear-gradient(
                137.15deg,
                #2965ff 0%,
                #2e66f5 99.89%
              );
              border: 1px solid rgba(255, 255, 255, 0.14);
              border-radius: 24px;
              @extend .flex__center;
              .price {
                display: none;
              }
              .progress__bar {
                display: flex;
              }
              p {
                display: flex;
              }
            }
          }
        }
      }
      .photo__gallery {
        @extend .flex__center;
        width: 608px;
        height: 136px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 24px;
        .gallery__block {
          display: flex;
          justify-content: space-between;
          width: 560px;
          .add__btn {
            @extend .flex__center;
            width: 88px;
            height: 88px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 24px;
            cursor: pointer;
          }
          .carousel__block {
            @extend .flex__center;
            flex-direction: row;
            width: 456px;
            height: 88px;
            background: rgba(40, 37, 42, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.33);
            border-radius: 24px;
            .carousel {
              @extend .flex__center;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              width: 404px;
              height: 64px;
              border-radius: 14px;
              //   overflow-x: auto;
              .item {
                width: 64px;
                height: 64px;
                border-radius: 16px;
              }
            }
          }
        }
      }
      .footer {
        @extend .flex__center;
        justify-content: space-between;
        flex-direction: row;
        width: 608px;
        height: 136px;
        .btn {
          @extend .flex__center;
          width: 192px;
          height: 136px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 24px;
          cursor: pointer;
          .container {
            justify-content: center;
          }
          p {
            margin-top: 12px;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
.right__side {
  .profile {
    margin-top: 70px;
    align-items: baseline;
    .profile__info {
      height: 726px;
      .profile__title {
        display: flex;
        align-items: center;

        .profile__name {
          margin-right: 86px;
        }
        .status__premium {
          @extend .flex__center;
          width: 140px;
          height: 30px;
          filter: drop-shadow(0px 0px 10px rgba(255, 187, 84, 0.3));
          border-radius: 12px;
          font-family: "Palatino";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 132.5%;
          letter-spacing: 0.19em;
          text-transform: uppercase;
          border: #ad6902 1px solid;
          background: linear-gradient(
            132.27deg,
            #f9ae3f -0.77%,
            #ffdba5 36.67%,
            #ad6902 96.37%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          text-shadow: 0px 0px 10px rgba(255, 187, 84, 0.3);
        }
      }
    }
  }
  .profile__info__list__container {
    width: 488px;
    height: 412px;
  }
}
</style>
