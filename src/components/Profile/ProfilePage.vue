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
        <div class="photo">
          <img
            class="main__avatar"
            src="../../assets/images/main/nate-J5U-22o1ubw-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="profile__info__list__carousel mobile">
          <div class="profile__mini__avatar">
            <img
              src="../../assets/images/main/woman__mini__avatar1.png"
              alt=""
            />
          </div>
          <div class="profile__mini__avatar">
            <img
              src="../../assets/images/main/woman__mini__avatar1.png"
              alt=""
            />
          </div>
          <div class="profile__mini__avatar">
            <img
              src="../../assets/images/main/woman__mini__avatar1.png"
              alt=""
            />
          </div>
          <div class="profile__mini__avatar">
            <img
              src="../../assets/images/main/woman__mini__avatar1.png"
              alt=""
            />
          </div>
        </div>
        <div class="buttons__block">
          <div class="inner__buttons__block">
            <div class="big__buttons">
              <div class="send__message">Написать</div>
              <div class="icon__btn">
                <img src="@/assets/images/main/star.svg" alt="" />
              </div>
              <div class="icon__btn">
                <img src="@/assets/images/main/heart.svg" alt="" />
              </div>
            </div>
            <div class="more">
              <img src="@/assets/images/main/btn_more.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right__side">
      <div class="profile" @click.self="close">
        <div class="profile__info">
          <div class="profile__info__title">
            <div class="profile__name">Владимир</div>
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
            <div class="profile__info__list__carousel">
              <div class="profile__mini__avatar">
                <img
                  src="../../assets/images/main/woman__mini__avatar1.png"
                  alt=""
                />
              </div>
              <div class="profile__mini__avatar">
                <img
                  src="../../assets/images/main/woman__mini__avatar1.png"
                  alt=""
                />
              </div>
              <div class="profile__mini__avatar">
                <img
                  src="../../assets/images/main/woman__mini__avatar1.png"
                  alt=""
                />
              </div>
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
export default {

};
</script>
<style lang="scss">
.text {
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
}
.profile__page {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  // width: 100vw;
}
.left__side {
  width: 1048px;
  // width: 54.58vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right__side {
  width: 688px;
  // width: 35.8vw;
}
// .photo__container {
//   width: 608px;
//   height: 816px;
//   border: 1px solid rgba(255, 255, 255, 0.33);
//   filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
//   border-radius: 24px;
// }
.background {
  width: 817px;
  height: 100%;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-bottom: none;
  border-top: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.buttons__block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 7px 8px;
  position: relative;
  width: 421px;
  height: 68.57px;
  left: -10px;
  top: -35px;
  background: rgba(40, 37, 42, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  .inner__buttons__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 405px;
    height: 54.57px;
    .big__buttons {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 8px;
      width: 369px;
      height: 56px;
      .send__message {
        display: flex;
        align-items: center;
        padding: 14px 82px;
        width: 241px;
        height: 56px;
        background: rgba(255, 255, 255, 0.14);
        border: 1px solid rgba(255, 255, 255, 0.33);
        border-radius: 18px;
        cursor: pointer;
      }
      .icon__btn {
        width: 56px;
        height: 56px;
        background: rgba(255, 255, 255, 0.14);
        border: 1px solid rgba(255, 255, 255, 0.33);
        border-radius: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
.profile {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.down__arrow {
  display: none;
}
.photo {
  width: 608px;
  height: 816px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
  border-radius: 24px;
  display: flex;
  // align-items: center;
  // justify-content: center;
}
.profile__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 488px;
  height: 834px;
  .buttons__block {
    display: none;
  }
}

.profile__name {
  @extend .text;
  font-weight: 500;
  font-size: 48px;
}
.profile__subtext {
  width: 278px;
  height: 23px;
  display: flex;
  justify-content: space-between;
}
.profile__location {
  @extend .text;
  color: rgba(255, 255, 255, 0.45);
}
.profile__vertical__line {
  @extend .text;
  width: 5px;
  height: 21px;
  color: rgba(255, 255, 255, 0.33);
}
.profile__horizontal__line {
  width: 440px;
  border: 1px solid rgba(255, 255, 255, 0.33);
}
.hobby__chips__box {
  display: none;
}
.mobile__more__info__title {
  display: none;
}
.mobile__about__desc {
  display: none;
}
.nav__box {
  display: none;
}
.profile__info__filter__block {
  display: flex;
  align-items: center;
}
.profile__online__status {
  @extend .text;
  color: #3e74ff;
}
.profile__info__filter {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 383px;
  height: 121px;
}
.profile__info__filter__icon {
  margin-right: 12px;
  cursor: pointer;
}
.profile__info__filter__description {
  @extend .text;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 8px;
}
.profile__info__filter__tags__block {
  width: 383px;
  height: 82px;
  display: flex;
  flex-wrap: wrap;
}
.profile__info__filter__tag {
  @extend .text;
  height: 35px;
  display: inline-block;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  border-radius: 13px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  margin-right: 12px;
}
.profile__info__list__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 488px;
  height: 520px;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(15px);
  border-radius: 24px;
}
.profile__info__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 356px;
  height: 168px;
}
.main__avatar {
  width: 608px;
  height: 816px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
  border-radius: 24px;
}
.profile__info__list__stats {
  display: flex;
  @extend .text;
  color: rgba(255, 255, 255, 0.33);
}
.profile__info__list__icon {
  margin-right: 12px;
}
.profile__info__list__title {
  display: flex;
  margin-right: 8px;
}
.profile__info__list__status {
  color: #ffffff;
}
.main__heightweight {
  display: flex;
  justify-content: space-between;
  .female__version {
    display: flex;
  }
}
.profile__info__list__heightweight {
  display: flex;
  width: 188px;
  height: 23px;
  justify-content: space-between;
}
.profile__info__list__height__block {
  display: flex;
}
.profile__info__list__height {
  display: flex;
  @extend .text;
  color: rgba(255, 255, 255, 0.33);
}
.profile__info__list__height__stat {
  margin-left: 8px;
}
.profile__info__list__weight__block {
  display: flex;
}
.profile__info__list__weight {
  display: flex;
  @extend .text;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 8px;
}
.profile__info__list__hobby__block {
  display: flex;
}
.profile__info__list__hobby {
  @extend .text;
  display: flex;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 8px;
}
.profile__info__list__about__block {
  display: flex;
  width: 440px;
  height: 46px;
}
.profile__info__list__about {
  @extend .text;
  display: inline-block;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 8px;
}
.profile__info__list__about__description {
  color: #ffffff;
}
.profile__info__list__carousel {
  display: flex;
  // justify-content: flex-start;
  align-items: center;
  width: 440px;
  height: 88px;
  background: rgba(40, 37, 42, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  &.mobile {
    display: none;
  }
  .profile__mini__avatar {
    width: 64px;
    height: 64px;
    margin-left: 12px;
  }
}
.logo__title {
  display: none;
}
@media (max-width: 1200px) {
  .profile__page {
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 96px;
    .nav__box {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 335px;
      .more_mobile {
        transform: rotate(90deg);
        width: 24px;
        height: 24px;
      }
      .auth__back__btn {
        align-items: center;
        display: flex;
        img {
          width: 24px;
          height: 24px;
        }
        h1 {
          font-weight: 700;
          font-size: 14px;
          line-height: 132.5%;
        }
      }
    }
    .left__side {
      width: 335px;
      flex-direction: column;
      .background {
        .profile__info__list__carousel {
          display: flex;
          position: relative;
          width: 311px;
          height: 76px;
          left: 0px;
          top: -38px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(50px);
          border-radius: 24px;
        }
        background: none;
        border: none;
        width: 335px;
        height: 552px;
        .photo {
          border: #2965ff 1px solid;
          width: 335px;
          height: 462px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
        }
        .main__avatar {
          width: 335px;
          height: 462px;
        }
        .buttons__block {
          display: none;
        }
      }
    }
    .right__side {
      width: 335px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo__title {
        display: contents;
        h1 {
          font-family: "Myanmar MN";
          font-style: normal;
          font-weight: 400;
          font-size: 16.1842px;
          line-height: 153.5%;
          letter-spacing: 0.245em;
          color: #ffffff;
          margin-bottom: 25px;
          margin-top: 90px;
        }
      }
      .profile {
        background: none;
        .profile__info {
          align-items: center;
          width: 335px;
          height: 862px;
          .buttons__block {
            &.mobile {
              display: flex;
              background: none;
              border: none;
              backdrop-filter: none;
              box-shadow: none;
              position: unset;
              width: 335px;
              align-items: center;
              .inner__buttons__block {
                width: 335px;
              }
              .send__message {
                width: 224px;
                height: 56px;
              }
              .icon__btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 103px;
                height: 56px;
                background: rgba(255, 255, 255, 0.05);
                .vertical__line {
                  width: 32px;
                  height: 0px;
                  border: 1px solid rgba(255, 255, 255, 0.33);
                  transform: rotate(90deg);
                }
              }
            }
          }
          .down__arrow {
            display: flex;
          }
          .profile__info__title {
            width: 267px;
            height: 63px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .profile__name {
              font-weight: 600;
              font-size: 32px;
              line-height: 40px;
            }
            .profile__subtext {
              .profile__location {
                color: #ffffff;
                font-weight: 700;
                font-size: 14px;
                line-height: 132.5%;
              }
              .profile__age {
                font-weight: 700;
                font-size: 14px;
                line-height: 132.5%;
              }
              .profile__status {
                font-weight: 700;
                font-size: 14px;
                line-height: 132.5%;
              }
            }
          }
          .profile__info__filter {
            width: 335px;
            .profile__info__filter__description {
              //   font-weight: 600;
              //   font-size: 15px;
              //   line-height: 153.5%;
            }
          }
          .hobby__chips__box {
            display: flex;
            flex-wrap: wrap;
            width: 335px;
          }
          .chips {
            padding: 4px 10px;
            border: 1px solid #ffffff;
            border-radius: 8px;
            margin-right: 8px;
            margin-bottom: 4px;
          }
          .profile__info__list__container {
            background: none;
            border: none;
            backdrop-filter: none;
            align-items: center;
            width: 335px;
            .profile__horizontal__line {
              display: none;
            }
            .mobile__more__info__title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 335px;
              height: 23px;
              p {
                font-weight: 600;
                font-size: 15px;
                line-height: 153.5%;
                color: rgba(255, 255, 255, 0.33);
              }
              .mobile__horizontal__line {
                width: 140px;
                height: 0px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                &.main {
                  width: 250px;
                }
                &.hobby {
                  width: 244px;
                }
                &.about {
                  width: 270px;
                }
              }
            }
            .mobile__about__desc {
              display: flex;
              width: 333px;
              height: 46px;
              p {
                font-weight: 600;
                font-size: 15px;
                line-height: 153.5%;
              }
            }
            .main__heightweight {
              width: 335px;
              display: flex;
              justify-content: space-between;
              .profile__info__list__heightweight {
                width: 149px;
                height: 23px;
              }
              .female__version {
                display: flex;
              }
            }
            .profile__info__list__hobby__block {
              display: none;
            }
            .profile__info__list__about__block {
              display: none;
            }
            .profile__info__list {
              width: 335px;
              height: 205px;
            }
            .profile__info__list__carousel {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
