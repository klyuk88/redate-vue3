<template>
  <div class="profile__page">
    <div class="left__side">
      <div class="background">
        <div class="container">
          <div class="header">
            <div class="nav__box">
              <div class="auth__back__btn">
                <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
                <h1 class="auth__back__btn__title">Назад</h1>
              </div>
              <h1>Мой профиль</h1>
              <!-- <div class="more_mobile">
                <img src="@/assets/images/main/btn_more.svg" alt="" />
              </div> -->
              <MobileBurger />
            </div>
            <h1 class="web">Мой профиль</h1>
            <div class="horizontal__line"></div>

            <div class="mobile__photo__block">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <div class="mobile__horizontal__line"></div>
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
                <div class="vertical__line"></div>
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
            <!-- <div class="footer">
              <div class="btn">
                <div class="container">
                  <img src="@/assets/images/main/myprofile__edit.svg" alt="" />
                  <p>Редактирование анкеты</p>
                </div>
                <div class="arrow__next">
                  <img
                    src="../../assets/images/profile_edit_logo/footer__arrow.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="mobile__horizontal__line"></div>
              <div class="btn">
                <div class="container">
                  <img
                    src="@/assets/images/main/myprofile__setting.svg"
                    alt=""
                  />
                  <p>Настройки входа</p>
                </div>
                <div class="arrow__next">
                  <img
                    src="../../assets/images/profile_edit_logo/footer__arrow.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="mobile__horizontal__line"></div>
              <div class="btn">
                <div class="container">
                  <img
                    src="@/assets/images/main/myprofile__support.svg"
                    alt=""
                  />
                  <p>Техническая поддержка</p>
                </div>
                <div class="arrow__next">
                  <img
                    src="../../assets/images/profile_edit_logo/footer__arrow.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="mobile__horizontal__line"></div>
              <div class="btn mobile">
                <div class="container">
                  <img
                    src="../../assets/images/profile_edit_logo/profile__icon.svg"
                    alt=""
                  />
                  <p>Смотреть профиль</p>
                </div>
                <div class="arrow__next">
                  <img
                    src="../../assets/images/profile_edit_logo/footer__arrow.svg"
                    alt=""
                  />
                </div>
              </div>
            </div> -->
            <div class="female__verification__block">
              <div class="verification__status">
                <div class="status__header">
                  <div class="left__side__header">
                    <img
                      src="../../assets/images/main/myprofile__verification__logo.svg"
                      alt=""
                    />
                    <h2>Верификация</h2>
                  </div>
                  <div class="horizontal__line"></div>
                  <div class="right__side__header">
                    <!-- <div class="status__error">
                      <h2>Ошибка</h2>
                      <img
                        src="../../assets/images/main/myprofile__verification__status__error.svg"
                        alt=""
                      />
                    </div> -->
                    <!-- <div class="status__error">
                      <h2>Ожидание</h2>
                      <img
                        src="../../assets/images/main/myprofile__verification__pending.svg"
                        alt=""
                      />
                    </div> -->
                    <div class="status__error">
                      <h2>Отложено</h2>
                      <img
                        src="../../assets/images/main/myprofile__verification__delayed.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="status__desc">
                  <span
                    >Мы отправили вам уведомление с данными, которые необходимо
                    изменить для подтверждения верификации.</span
                  >
                </div>
                <!-- <div class="status__desc show__error">
                  <span
                    >Необходимо пройти верификацию для дальнейшего использования
                    сайта.</span
                  >
                </div> -->
              </div>
              <div class="verification__action">
                <h2>Заполнить заново</h2>
              </div>
              <!-- <div class="verification__action help show__error">
                <img src="@/assets/images/main/myprofile__headset__logo.svg" alt="">
                <h2>Техническая поддержка</h2>
              </div> -->
              <!-- <div class="verification__action ">
                <h2>Пройти верификацию</h2>
              </div> -->
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
import MobileBurger from "../MobileBurger.vue";
export default { components: { MobileBurger } };
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
  .background {
    width: 47.06vw;
  }
  .container {
    @extend .flex__center;
    height: 46.77vw;
    justify-content: space-between;
    .header {
      height: 2.534vw;
      @extend .flex__center;
      justify-content: space-between;
      .mobile__photo__block {
        display: none;
      }

      h1 {
        font-weight: 600;
        font-size: 1.036vw;
        line-height: 153.5%;
      }
      .horizontal__line {
        width: 38.5944vw;
        height: 0px;
        border: 0.057vw solid rgba(255, 255, 255, 0.33);
      }
    }
    .main {
      width: 35.25vw;
      height: 41.47vw;
      @extend .flex__center;
      justify-content: space-between;
      .cash__container {
        width: 35vw;
        height: 23.04vw;
        background: rgba(255, 255, 255, 0.05);
        border: 0, 057vw solid rgba(255, 255, 255, 0.14);
        border-radius: 40px;
        @extend .flex__center;
        justify-content: space-evenly;
        .mobile__horizontal__line {
          display: none;
        }
        .block {
          width: 32.258vw;
          height: 5.184vw;
          background: rgba(27, 28, 30, 0.5);
          border: 0.057vw solid rgba(255, 255, 255, 0.14);
          border-radius: 1.382vw;
          @extend .flex__center;
          justify-content: space-between;
          flex-direction: row;
          padding: 0.691vw;
          .options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;
            font-size: 0.921vw;
            line-height: 153.5%;
            color: rgba(255, 255, 255, 0.33);
            img {
              margin-right: 0.69vw;
            }
            span {
              color: #ffffff;
              margin-left: 0.69vw;
            }
          }
          .btn {
            @extend .flex__center;
            width: 8.06vw;
            height: 3.341vw;
            background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
            border-radius: 0.806vw;
            &.gold {
              border: #ad6902 0.057vw solid;
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
          width: 32.258vw;
          height: 7.834vw;
          background: rgba(27, 28, 30, 0.5);
          border: 0.057vw solid rgba(255, 255, 255, 0.14);
          border-radius: 1.382vw;
          padding: 1.152vw;
          .vertical__line {
            width: 5.99vw;
            height: 0px;
            border: 0.057vw solid rgba(255, 255, 255, 0.14);
            transform: rotate(90deg);
          }
          .item__price {
            position: relative;
            z-index: 0;
            p {
              span {
                margin-left: 0.288vw;
                margin-right: 0.288vw;
              }
            }
            .days {
              font-weight: 700;
              font-size: 1.382vw;
              line-height: 153.5%;
            }
            .price {
              text-align: center;
              border: #ad6902 0.057vw solid;
              padding: 0.403vw 1.497vw;
              border-radius: 0.633vw;
              font-weight: 600;
              font-size: 0.864vw;
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
              width: 9.21vw;
              height: 1.382vw;
              background: linear-gradient(
                89.71deg,
                rgba(255, 255, 255, 0.93) 0.25%,
                rgba(255, 255, 255, 0.86) 46.83%,
                #ffffff 65.55%,
                rgba(255, 255, 255, 0.2) 65.56%,
                rgba(255, 255, 255, 0.2) 99.75%
              );
              border-radius: 0.23vw;
            }
            p {
              display: none;
            }
            &.active {
              position: relative;
              z-index: 1;
              width: 11.175vw;
              height: 8.294vw;
              filter: drop-shadow(4px 0px 11px rgba(43, 102, 251, 0.37));
              background: linear-gradient(
                137.15deg,
                #2965ff 0%,
                #2e66f5 99.89%
              );
              border: 0.057vw solid rgba(255, 255, 255, 0.14);
              border-radius: 1.382vw;
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
        width: 35.02vw;
        height: 7.834vw;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 1.382vw;
        .gallery__block {
          display: flex;
          justify-content: space-between;
          width: 32.258vw;
          .add__btn {
            @extend .flex__center;
            width: 5.069vw;
            height: 5.069vw;
            background: rgba(255, 255, 255, 0.05);
            border: 0.057vw solid rgba(255, 255, 255, 0.14);
            border-radius: 1.382vw;
            cursor: pointer;
          }
          .carousel__block {
            @extend .flex__center;
            flex-direction: row;
            width: 26.267vw;
            height: 5.069vw;
            background: rgba(40, 37, 42, 0.2);
            border: 0.057vw solid rgba(255, 255, 255, 0.33);
            border-radius: 1.382vw;
            .carousel {
              @extend .flex__center;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              width: 23.271vw;
              height: 3.686vw;
              border-radius: 0.806vw;
              //   overflow-x: auto;
              .item {
                width: 3.686vw;
                height: 3.686vw;
                border-radius: 0.921vw;
              }
            }
          }
        }
      }
      .footer {
        @extend .flex__center;
        justify-content: space-between;
        flex-direction: row;
        width: 35.02vw;
        height: 7.834vw;
        .btn {
          @extend .flex__center;
          width: 11.05vw;
          height: 7.834vw;
          background: rgba(255, 255, 255, 0.05);
          border: 0.057vw solid rgba(255, 255, 255, 0.14);
          border-radius: 1.382vw;
          cursor: pointer;
          .arrow__next {
            display: none;
          }
          &.mobile {
            display: none;
          }
          .container {
            justify-content: center;
          }
          p {
            margin-top: 0.691vw;
            font-weight: 600;
            font-size: 0.921vw;
            line-height: 1.152vw;
          }
        }
      }
      .female__verification__block {
        @extend .flex__center;
        flex-direction: row;
        justify-content: space-between;
        width: 35.25vw;
        height: 7.834vw;
        .verification__status {
          background: rgba(255, 255, 255, 0.05);
          border: 0.057vw solid rgba(255, 255, 255, 0.14);
          border-radius: 1.382vw;
          width: 26.26vw;
          height: 7.834vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .status__header {
            width: 21.08vw;
            height: 1.44vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 1.2vw;
            .left__side__header {
              display: flex;
              img {
                margin-right: 0.69vw;
              }
            }
            .right__side__header {
              display: flex;
              img {
                margin-left: 0.46vw;
              }
              .status__error {
                display: flex;
              }
            }
            h2 {
              font-weight: 700;
              font-size: 0.921vw;
              line-height: 153.5%;
              display: flex;
              align-items: center;
              text-align: center;
              color: #ffffff;
            }
            .horizontal__line {
              width: 2.3vw;
              height: 0px;
              border: 0.057vw solid #ffffff;
              transform: rotate(180deg);
            }
          }
          .status__desc {
            width: 22.06vw;
            height: 1.843vw;
            span {
              font-weight: 600;
              font-size: 0.69vw;
              line-height: 132.5%;
              color: rgba(255, 255, 255, 0.4);
            }
          }
        }
      }
      .verification__action {
        @extend .flex__center;
        width: 7.834vw;
        height: 7.834vw;
        background: #2b66fb;
        border: 0.057vw solid rgba(255, 255, 255, 0.14);
        border-radius: 1.382vw;
        display: none;
        &.help {
          background: none;
        }
        &.show__error {
          display: flex;
        }
        h2 {
          font-weight: 600;
          font-size: 0.864vw;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
}
.right__side {
  .profile {
    margin-top: 4.0322vw;
    align-items: baseline;
    .profile__info {
      height: 41.82vw;
      .profile__title {
        display: flex;
        align-items: center;

        .profile__name {
          margin-right: 4.953vw;
        }
        .status__premium {
          @extend .flex__center;
          width: 8.064vw;
          height: 1.728vw;
          filter: drop-shadow(0px 0px 10px rgba(255, 187, 84, 0.3));
          border-radius: 0.691vw;
          font-family: "Palatino";
          font-style: normal;
          font-weight: 400;
          font-size: 0.921vw;
          line-height: 132.5%;
          letter-spacing: 0.19em;
          text-transform: uppercase;
          border: #ad6902 0.057vw solid;
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
          text-shadow: 0px 0px 0.575vw rgba(255, 187, 84, 0.3);
        }
      }
    }
  }
  .profile__info__list__container {
    width: 28.11vw;
    height: 23.73vw;
    .main__heightweight {
      align-items: center;
      .profile__info__list__heightweight {
        align-items: center;
        .profile__info__list__height__block {
          align-items: center;
        }
        .profile__info__list__weight__block {
          align-items: center;
        }
      }
      .female__version {
        align-items: center;
        .profile__info__list__weight__stat {
          font-size: 0.86vw;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .profile__page {
    margin: 0;
    .nav__box {
      // display: none;
      h1 {
          font-size: 3.589vw;

      }
      .auth__back__btn {
        h1 {
          font-weight: 500;
          font-size: 3.589vw;
          line-height: 153.5%;
        }
      }
    }
  }
  .right__side {
    display: none;
  }
  .left__side {
    height: 186.66vw;
    .background {
      height: 217.69vw;
      margin-bottom: 10.769vw;
      .container {
        width: 85.59vw;
        height: 175.89vw;
        .header {
          justify-content: end;
          height: 81.28vw;
          width: 96.15vw;
          background: linear-gradient(
            180deg,
            rgba(131, 131, 131, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
          border: 0.256vw solid rgba(255, 255, 255, 0.14);
          border-radius: 0px 0px 10.256vw 10.256vw;
          h1 {
            &.web {
              display: none;
            }
          }
          .horizontal__line {
            display: none;
          }
          .mobile__photo__block {
            height: 58.46vw;
            width: 85.89vw;
            border: 0.256vw solid rgba(255, 255, 255, 0.14);
            border-radius: 6.153vw;
            display: flex;
            flex-direction: column;
            justify-content: end;
            background: url(../../assets/images/profile_edit_logo/mobile__avatar.png);
            background-size: contain;
            margin-bottom: 5.128vw;
            .photo__gallery {
              width: 85.89vw;
              height: 19.48vw;
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(50px);
              border-radius: 6.153vw;
              align-items: center;
              display: flex;
              justify-content: center;
              .gallery__block {
                width: 81.79vw;
                height: 15.38vw;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .add__btn {
                  width: 15.38vw;
                  height: 15.38vw;
                  border: 0.256vw solid rgba(255, 255, 255, 0.14);
                  border-radius: 4.1vw;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  img {
                    width: 5.64vw;
                    height: 5.64vw;
                  }
                }
                .carousel__block {
                  width: 64.61vw;
                  .carousel {
                    display: flex;
                    justify-content: space-between;
                  }
                }
              }
            }
          }
        }
        .main {
          justify-content: space-between;
          height: 88.46vw;
          width: 96.15vw;
          .cash__container {
            width: 85.89vw;
            height: 56.153vw;
            background: rgba(27, 28, 30, 0.5);
            border: 0.256vw solid rgba(255, 255, 255, 0.14);
            border-radius: 6.153vw;
            .block {
              height: 8.2vw;
              width: 73.84vw;
              border: none;
              background: none;
              margin-top: 2.56vw;
              padding: 0;

              .options {
                width: 47.307vw;
                height: 4.871vw;
                justify-content: unset;
                p {
                  width: inherit;
                  font-weight: 700;
                  font-size: 3.589vw;
                  line-height: 132.5%;
                  height: 4.87vw;
                  display: flex;
                }
              }
              .btn {
                width: 22.82vw;
                height: 7.94vw;
                font-weight: 600;
                font-size: 3.07vw;
                line-height: 132.5%;
                border-radius: 2.05vw;
              }
            }

            .subscription {
              width: 85.89vw;
              height: 23.33vw;
              bottom: -2.307vw;
              position: relative;
              padding: 0;
              .vertical__line {
                display: none;
              }
              .item__price {
                width: 20.512vw;
                height: 14.98vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                &.active {
                  background: linear-gradient(
                    137.15deg,
                    #2965ff 0%,
                    #2e66f5 99.89%
                  );
                  height: 23.33vw;
                  width: 2.87vw;
                  border: 0.256vw solid rgba(255, 255, 255, 0.14);
                  box-shadow: 0px 0px 10px rgba(43, 102, 251, 0.37);
                  border-radius: 6.15vw;
                  .progress__bar {
                    width: 20.51vw;
                    height: 5.128vw;
                  }
                  .price {
                    display: none;
                  }
                  p {
                    font-weight: 600;
                    font-size: 3.076vw;
                    line-height: 132.5%;
                    color: rgba(255, 255, 255, 0.6);
                  }
                }
                .days {
                  font-weight: 600;
                  font-size: 3.846vw;
                  line-height: 153.5%;
                }
                .price {
                  width: 20.51vw;
                  height: 8.205vw;
                  display: flex;
                  align-items: center;
                }
              }
            }
            .mobile__horizontal__line {
              height: 0px;
              width: 304px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              display: flex;
            }
          }
          .photo__gallery {
            display: none;
          }
          .footer {
            width: 85.89vw;
            height: 56.92vw;
            flex-direction: column;
            justify-content: space-evenly;
            background: rgba(255, 255, 255, 0.05);
            border: 0.256vw solid rgba(255, 255, 255, 0.14);
            border-radius: 6.15vw;
            .btn {
              width: 78.20vw;
              height: 6.15vw;
              border: none;
              background: none;
              flex-direction: row;
              cursor: pointer;
              .arrow__next {
                display: flex;
              }
              &.mobile {
                display: flex;
              }
              .container {
                flex-direction: row;
                align-items: end;
                justify-content: left;

                width: 78.20vw;
                height: 6.153vw;
                img {
                  width: 6.15vw;
                  height: 6.15vw;
                  margin-right: 3.07vw;
                }
                p {
                  font-weight: 700;
                  font-size: 3.589vw;
                  line-height: 132.5%;
                  height: unset;
                }
              }
            }
            .mobile__horizontal__line {
              height: 0px;
              width: 77.948vw;
              border: 0.256vw solid rgba(255, 255, 255, 0.05);
              display: flex;
            }
          }
        }
        .female__verification__block {
          width: 85.89vw;
          height: 26.15vw;
          .verification__status {
            width: 56.66vw;
            height: 26.15vw;
            .status__header {
              width: 48.20vw;
              height: 15.897vw;
              flex-direction: column;
              margin: 0;
              margin-top: 11.53vw;
              .left__side__header {
                margin-bottom: 3.07vw;
                h2 {
                  font-size: 3.589vw;
                  line-height: 132.5%;
                }
                img {
                  height: 4.1vw;
                  width: 4.1vw;
                }
              }
              .right__side__header {
                .status__error {
                  flex-direction: row-reverse;
                }
                h2 {
                  font-size: 3.589vw;
                  line-height: 132.5%;
                  margin-left: 2.051vw;
                }
                img {
                  width: 4.1vw;
                  height: 4.1vw;
                }
              }
              .horizontal__line {
                width: 48.2vw;
                height: 0px;
                border: 0.256vw solid rgba(255, 255, 255, 0.05);
                margin-bottom: 3.07vw;
              }
            }
            .status__desc {
              position: relative;
              top: 8.974vw;
              left: 14.35vw;
              text-align: center;
              width: 68.71vw;
              height: 11.538vw;
            }
          }
          .verification__action {
            display: flex;
            width: 26.84vw;
            height: 26.84vw;
            h2 {
              font-weight: 600;
              font-size: 3.33vw;
              line-height: 132.5%;
            }
          }
        }
      }
    }
  }
}
</style>
