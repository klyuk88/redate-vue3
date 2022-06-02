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
export default {};
</script>
<style lang="scss">
.text {
  font-weight: 600;
  font-size: 0.86vw;
  line-height: 153.5%;
}
.profile__page {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  // width: 100vw;
}
.left__side {
  width: 60.36vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right__side {
  width: 39.63vw;
  .profile {

    .profile__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      width: 28.11vw;
      height: 48vw;
      .buttons__block {
        display: none;
      }
      .profile__info__list__container {
        width: 28.11vw;
        height: 29.95vw;
      }
    }
  }
}
// .photo__container {
//   width: 608px;
//   height: 816px;
//   border: 1px solid rgba(255, 255, 255, 0.33);
//   filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
//   border-radius: 24px;
// }
.background {
  width: 47.06vw;
  height: 100%;
  background: rgba(196, 196, 196, 0.05);
  border: 0.057vw solid rgba(255, 255, 255, 0.33);
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
  padding: 0.403vw 0.46vw;
  position: relative;
  width: 24.25vw;
  height: 3.91vw;
  left: -0.57vw;
  top: -2.01vw;
  background: rgba(40, 37, 42, 0.2);
  border: 0.057vw solid rgba(255, 255, 255, 0.33);
  box-shadow: 0px 0.23vw 1.497vw rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 1.497vw;
  .inner__buttons__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 23.329vw;
    height: 3.11vw;
    .big__buttons {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 0.46vw;
      width: 21.2557vw;
      height: 3.2258vw;
      .send__message {
        display: flex;
        align-items: center;
        padding: 0.806vw 4.723vw;
        width: 13.88vw;
        height: 3.22vw;
        background: rgba(255, 255, 255, 0.14);
        border: 0.057vw solid rgba(255, 255, 255, 0.33);
        border-radius: 1.036vw;
        cursor: pointer;
      }
      .icon__btn {
        width: 3.22vw;
        height: 3.22vw;
        background: rgba(255, 255, 255, 0.14);
        border: 0.057vw solid rgba(255, 255, 255, 0.33);
        border-radius: 1.036vw;
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
  width: 35.023vw;
  height: 47vw;
  border: 0.057vw solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
  border-radius: 1.38vw;
  display: flex;
}

.profile__name {
  @extend .text;
  font-weight: 500;
  font-size: 2.76vw;
}
.profile__subtext {
  width: 16vw;
  height: 1.324vw;
  display: flex;
  justify-content: space-between;
}
.profile__location {
  @extend .text;
  color: rgba(255, 255, 255, 0.45);
}
.profile__vertical__line {
  @extend .text;
  width: 0.288vw;
  height: 1.209vw;
  color: rgba(255, 255, 255, 0.33);
}
.profile__horizontal__line {
  width: 25.34vw;
  border: 0.057vw solid rgba(255, 255, 255, 0.33);
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
  width: 22vw;
  height: 6.97vw;
}
.profile__info__filter__icon {
  margin-right: 0.69vw;
  cursor: pointer;
}
.profile__info__filter__description {
  @extend .text;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 0.46vw;
}
.profile__info__filter__tags__block {
  width: 22vw;
  height: 4.72vw;
  display: flex;
  flex-wrap: wrap;
}
.profile__info__filter__tag {
  @extend .text;
  height: 2vw;
  display: inline-block;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.46vw 0.69vw;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  box-shadow: 0px 0.23vw 1.15vw -0.691vw rgba(70, 122, 255, 0.4);
  border-radius: 0.7488vw;
  font-weight: 700;
  font-size: 0.806vw;
  line-height: 132.5%;
  margin-right: 0.691vw;
}
.profile__info__list__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.382vw;

  background: rgba(196, 196, 196, 0.05);
  border: 0.057vw solid rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(15px);
  border-radius: 1.382vw;
}
.profile__info__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 20.5vw;
  height: 9.677vw;
}
.main__avatar {
  width: 35.023vw;
  height: 47vw;
  border: 0.057vw solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
  border-radius: 1.382vw;
}
.profile__info__list__stats {
  display: flex;
  @extend .text;
  color: rgba(255, 255, 255, 0.33);
}
.profile__info__list__icon {
  margin-right: 0.691vw;
}
.profile__info__list__title {
  display: flex;
  margin-right: 0.46vw;
}
.profile__info__list__status {
  color: #ffffff;
}
.main__heightweight {
  display: flex;
  justify-content: space-between;
  width: 23.559vw;
  .female__version {
    display: flex;
  }
}
.profile__info__list__heightweight {
  display: flex;
  width: 10.829vw;
  height: 1.324vw;
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
  margin-left: 0.46vw;
}
.profile__info__list__weight__block {
  display: flex;
}
.profile__info__list__weight {
  display: flex;
  @extend .text;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 0.46vw;
}
.profile__info__list__hobby__block {
  display: flex;
}
.profile__info__list__hobby {
  @extend .text;
  display: flex;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 0.46vw;
}
.profile__info__list__about__block {
  display: flex;
  width: 25.34vw;
  height: 2.649vw;
}
.profile__info__list__about {
  @extend .text;
  display: inline-block;
  color: rgba(255, 255, 255, 0.33);
  margin-right: 0.46vw;
}
.profile__info__list__about__description {
  color: #ffffff;
}
.profile__info__list__carousel {
  display: flex;
  // justify-content: flex-start;
  align-items: center;
  width: 25.345vw;
  height: 5.06vw;
  background: rgba(40, 37, 42, 0.2);
  border: 0.057vw solid rgba(255, 255, 255, 0.33);
  border-radius: 1.382vw;
  &.mobile {
    display: none;
  }
  .profile__mini__avatar {
    width: 3.686vw;
    height: 3.686vw;
    margin-left: 0.691vw;
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
    margin-top: 24.61vw;
    .nav__box {
      margin-bottom: 6.153vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 85.89vw;

      .more_mobile {
        transform: rotate(90deg);
        width: 1.382vw;
        height: 1.382vw;
        margin-bottom: 12px;
      }
      .auth__back__btn {
        align-items: center;
        display: flex;
        img {
          width: 6.15vw;
          height: 6.15vw;
        }
        h1 {
          font-weight: 700;
          font-size: 3.589vw ;
          line-height: 132.5%;
        }
      }
    }
    .left__side {
      width: 85.89vw;
      flex-direction: column;
      .background {
        .profile__info__list__carousel {
          display: flex;
          position: relative;
          width: 79.74vw;
          height: 19.48vw;
          left: 0px;
          top: -9.74vw;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(50px);
          border-radius: 6.15vw;
          justify-content: center;
          .profile__mini__avatar {
            border-radius: 4.1vw;
            width: 15.38vw;
            height: 15.38vw;
            border: 0.256vw solid rgba(255, 255, 255, 0.14);
            img {
              width: 15.38vw;
              height: 15.38vw;
            }
          }
        }
        background: none;
        border: none;
        width: 85.89vw;
        height: 141.53vw;

        .photo {
          border: #2965ff 0.256vw solid;
          width: 85.89vw;
          height: 118.46vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          border-radius: 6.15vw;
        }
        .main__avatar {
          width: 85.89vw;
          height: 118.46vw;
          border-radius: 6.15vw;
        }
        .buttons__block {
          display: none;
        }
      }
    }
    .right__side {
      width: 85.89vw;
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
          font-size: 4.1vw;
          line-height: 153.5%;
          letter-spacing: 0.245em;
          color: #ffffff;
          margin-bottom: 6.41vw;
          margin-top: 23.07vw;
        }
      }
      .profile {
        background: none;
        .profile__info {
          align-items: center;
          width: 85.89vw;
          height: 225vw;
          .buttons__block {
            &.mobile {
              display: flex;
              background: none;
              border: none;
              backdrop-filter: none;
              box-shadow: none;
              position: unset;
              width: 85.89vw;
              align-items: center;
              .inner__buttons__block {
                width: 85.89vw;
                height: 14.3589vw;
                .big__buttons {
                  width: 85.89vw;
                  height: 14.3589vw;
                  gap: 2.05vw;
                  font-size: 3.589vw;
                }
              }
              .send__message {
                width: 57.43vw;
                height: 14.358vw;
                border-radius: 4.61vw;
              }
              .icon__btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 26.41vw;
                height: 14.358vw;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 4.61vw;
                img {
                  height: 4.87vw;
                  width: 4.87vw;
                }

                .vertical__line {
                  width: 8.2vw;
                  height: 0px;
                  border: 0.256vw solid rgba(255, 255, 255, 0.33);
                  transform: rotate(90deg);
                }
              }
            }
          }
          .down__arrow {
            display: flex;
          }
          .profile__info__title {
            width: 68.461vw;
            height: 16.15vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            .profile__name {
              font-weight: 600;
              font-size: 8.2vw;
              line-height: 10.25vw;
            }
            .profile__subtext {
              width: 68.46vw;
              height: 5.89vw;
              .profile__location {
                color: #ffffff;
                font-weight: 700;
                font-size: 3.589vw;
                line-height: 132.5%;
              }
              .profile__age {
                font-weight: 700;
                font-size: 3.589vw;
                line-height: 132.5%;
              }
              .profile__status {
                font-weight: 700;
                font-size: 3.589vw;
                line-height: 132.5%;
              }
              .profile__online__status {
                font-size: 3.589vw;
              }
              .profile__vertical__line {
                font-size: 3.07vw;
              }
            }
          }
          .profile__info__filter {
            width: 86.15vw;
            height: 28.97vw;
            .profile__info__filter__description {
              font-weight: 600;
              font-size: 3.846vw;
              line-height: 153.5%;
            }
            .profile__info__filter__tags__block {
              width: 85.89vw;
              height: 21.02vw;
              .profile__info__filter__tag {
                height: 8.97vw;
                font-size: 3.589vw;
                border-radius: 3.33vw;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2.05vw 3.07vw;
              }
            }
          }
          .hobby__chips__box {
            display: flex;
            flex-wrap: wrap;
            width: 85.89vw;
            .chips {
              padding: 1.025vw 2.56vw;
              border: 0.256vw solid #ffffff;
              border-radius: 2.05vw;
              margin-right: 2.05vw;
              margin-bottom: 1.0256vw;
              font-size: 3.589vw;
            }
          }
          .profile__info__list__container {
            background: none;
            border: none;
            backdrop-filter: none;
            align-items: center;
            width: 85.89vw;
            height: 130vw;
            .profile__horizontal__line {
              display: none;
            }
            .mobile__more__info__title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 85.89vw;
              height: 5.897vw;
              p {
                font-weight: 600;
                font-size: 3.846vw;
                line-height: 153.5%;
                color: rgba(255, 255, 255, 0.33);
              }
              .mobile__horizontal__line {
                width: 35.897vw;
                height: 0px;
                border: 0.256vw solid rgba(255, 255, 255, 0.2);
                &.main {
                  width: 64.1vw;
                }
                &.hobby {
                  width: 62.56vw;
                }
                &.about {
                  width: 69.23vw;
                }
              }
            }
            .mobile__about__desc {
              display: flex;
              width: 85.38vw;
              height: 11.79vw;
              p {
                font-weight: 600;
                font-size: 3.846vw;
                line-height: 153.5%;
              }
            }
            .main__heightweight {
              width: 85.89vw;
              display: flex;
              justify-content: space-between;
              .profile__info__list__heightweight {
                width: 38.205vw;
                height: 5.897vw;
                .profile__info__list__height {
                  font-size: 3.846vw;
                }

                .profile__info__list__height__stat {
                  font-size: 3.846vw;
                }
                .profile__info__list__weight {
                  font-size: 3.846vw;
                }
                .profile__info__list__weight__stat {
                  font-size: 3.846vw;
                }
              }
              .female__version {
                display: flex;
                .profile__info__list__weight {
                  font-size: 3.846vw;
                }
                .profile__info__list__weight__stat {
                  font-size: 3.846vw;
                }
              }
            }
            .profile__info__list__hobby__block {
              display: none;
            }
            .profile__info__list__about__block {
              display: none;
            }
            .profile__info__list {
              width: 85.89vw;
              height: 52.56vw;
              .profile__info__list__stats {
                height: 6.153vw;
                width: 89.74vw;
                .profile__info__list__title {
                  font-size: 3.846vw;
                }
                .profile__info__list__status {
                  font-size: 3.846vw;
                }
              }
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
