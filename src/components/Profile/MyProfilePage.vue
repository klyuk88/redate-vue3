<template>
  <ProfilePhotoCarousel v-if="showModal" @hideModal="showModal = false" />
  <div class="profile__page">
    <div class="left__side">
      <div class="background">
        <div
          class="container"
          :class="{ notification__unblur: notificationStatus }"
        >
          <div class="header">
            <div class="nav__box">
              <router-link to="/">
                <div class="auth__back__btn">
                  <img
                    src="@/assets/images/main/auth__back__arrow.svg"
                    alt=""
                  />
                  <h1 class="auth__back__btn__title">Назад</h1>
                </div>
              </router-link>
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
                      <router-link to="/profile/photogallery">
                        <img
                          src="../../assets/images/main/woman__mini__avatar1.png"
                          alt=""
                          class="item"
                        />
                      </router-link>
                      <router-link to="/profile/photogallery">
                        <img
                          src="../../assets/images/main/woman__mini__avatar1.png"
                          alt=""
                          class="item"
                        />
                      </router-link>
                      <router-link to="/profile/photogallery">
                        <img
                          src="../../assets/images/main/woman__mini__avatar1.png"
                          alt=""
                          class="item"
                        />
                      </router-link>
                      <router-link to="/profile/photogallery">
                        <img
                          src="../../assets/images/main/woman__mini__avatar1.png"
                          alt=""
                          class="item"
                        />
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main">
            <div
              class="cash__container"
              :class="{
                stageTwo: notificationStageTwo,
                stageThree: notificationStageThree,
                stageFour: notificationStageFour,
              }"
            >
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
                <div class="item__price">
                  <div class="inner__price__box">
                    <div class="days">7 дней</div>
                    <div class="price">54$</div>
                    <div class="progress__bar"></div>
                    <p>Осталось <span>3</span> дня</p>
                  </div>
                </div>
                <div
                  class="item__price center active"
                  :class="{ active: notificationStageTwo }"
                >
                  <div class="inner__price__box">
                    <div class="days">14 дней</div>
                    <div class="price">$96</div>
                    <div class="progress__bar"></div>
                    <p>Осталось <span>3</span> дня</p>
                  </div>
                </div>
                <div class="item__price">
                  <div class="inner__price__box">
                    <div class="days">30 дней</div>
                    <div class="price">$160</div>
                    <div class="progress__bar"></div>
                    <p>Осталось<span> 3 </span>дня</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="photo__gallery"
              :class="{ stageFive: notificationStageFive }"
            >
              <div class="gallery__block">
                <div class="add__btn">
                  <img
                    src="../../assets/images/main/myprofile__add__btn.svg"
                    alt=""
                  />
                </div>
                <div class="carousel__block">
                  <div class="carousel" @click="showModal = true">
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
              <div class="btn" :class="{ stageSix: notificationStageSix }">
                <div class="container">
                  <router-link to="/account/:user/settings" class="container">
                    <img
                      src="@/assets/images/main/myprofile__edit.svg"
                      alt=""
                    />
                    <p>Редактирование анкеты</p>
                  </router-link>
                </div>
                <div class="arrow__next">
                  <img
                    src="../../assets/images/profile_edit_logo/footer__arrow.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="mobile__horizontal__line"></div>
              <div class="btn" :class="{ stageSix: notificationStageSeven }">
                <div class="container">
                  <RouterLink to="/account/:user/edit" class="container">
                    <img
                      src="@/assets/images/main/myprofile__setting.svg"
                      alt=""
                    />
                    <p>Настройки входа</p>
                  </RouterLink>
                </div>
                <div class="arrow__next">
                  <img
                    src="../../assets/images/profile_edit_logo/footer__arrow.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="mobile__horizontal__line"></div>
              <div class="btn" :class="{ stageSix: notificationStageEight }">
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
            </div>
            <!-- <div class="female__verification__block">
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
                  <div class="right__side__header"> -->
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
            <!-- <div class="status__error">
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
                    >Мы отправили Вам уведомление с данными, которые необходимо
                    изменить для подтверждения верификации.</span
                  >
                </div> -->
            <!-- <div class="status__desc show__error">
                  <span
                    >Необходимо пройти верификацию для дальнейшего использования
                    сайта.</span
                  >
                </div> -->
            <!-- </div>
            <router-link to="/verification">
              <div class="verification__action">
                <h2>Заполнить заново</h2>
              </div>
            </router-link> -->
            <!-- <div class="verification__action help show__error">
                <img src="@/assets/images/main/myprofile__headset__logo.svg" alt="">
                <h2>Техническая поддержка</h2>
              </div> -->
            <!-- <router-link to="/verification">
                <div class="verification__action ">
                    <h2>Пройти верификацию</h2>
                  </div>
              </router-link> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div
        class="notification__blur"
        :class="{
          notification__unblur: notificationStatus,
          stageTwo: notificationStageTwo,
          stageThree: notificationStageThree,
          stageFour: notificationStageFour,
          stageFive: notificationStageFive,
          stageSix: notificationStageSix,
          stageSeven: notificationStageSeven,
          stageEight: notificationStageEight,
        }"
      >
        <div
          class="text__notification"
          :class="{ stageTwo: notificationStageTwo }"
        >
          <p>
            Баланс - Ваш внутренний кошелёк сайта. Положительный баланс
            позволяет приобретать подходящий тариф и пользоваться платными
            функциями сайта.
          </p>
        </div>
        <div
          class="text__notification__rate"
          :class="{ stageThree: notificationStageThree }"
        >
          <p>
            При выборе тарифа у Вас автоматически сниматеся суммы выбраного
            тарифного плана и начинается подписка на тариф “Премиум”
          </p>
        </div>
        <div
          class="text__notification__rate"
          :class="{ stageFour: notificationStageFour }"
        >
          <p>
            После выбора и оплаты тарифа в вашем профиле всегда будет обратный
            индикатор времени до момента завершенияоплаченного периода платного
            тарифа.
          </p>
          <p>
            Вы можете продлить этот период по прежней цене нажавкнопку
            “Продлить”
          </p>
        </div>
        <div
          class="text__notification__rate"
          :class="{ stageFive: notificationStageFive }"
        >
          <p>Поле редактирования галерее изображений.</p>
          <p>
            Чтобы начать редактирование галерее нажмите на любое из ваших ранее
            загруженных изображений.
          </p>
          <p>Чтобы добавить новые фотографии нажмите на кнопку с плюсом.</p>
        </div>
        <div
          class="text__notification__rate"
          :class="{ stageSix: notificationStageSix }"
        >
          <p>
            Редактирование анкеты приведет Вас в редактирование анкетных данных
            о вас. Город, дата рождения, параметры, интересы, интересующие вас
            форматы знакомств.
          </p>
        </div>
        <div
          class="text__notification__rate"
          :class="{ stageSeven: notificationStageSeven }"
        >
          <p>
            Настройки входа приведут Вас к окну настройки почты и пароля для
            входа на сайт.А так же к функциям удаления анкеты и выхода из
            профиля.
          </p>
        </div>
        <div
          class="text__notification__rate"
          :class="{ stageEight: notificationStageEight }"
        >
          <p>
            Техническая поодержка приведет Вас в диалоговое окно с службой
            поддержки для решенияваших вопросов и обращений.
          </p>
        </div>
        <div
          class="unblured__border"
          :class="{
            notification__unblur: notificationStatus,
            stageTwo: notificationStageTwo,
            stageThree: notificationStageThree,
            stageFour: notificationStageFour,
            stageFive: notificationStageFive,
            stageSix: notificationStageSix,
            stageSeven: notificationStageSeven,
            stageEight: notificationStageEight,
          }"
        >
          <div class="blur__footer">
            <p>
              Мой профиль - страница где вы можете посмотреть новые объявления и
              начать поиск пары.
            </p>
            <div class="notification__btn__block">
              <div class="noti__btn">Пропустить знакомство</div>
              <div class="noti__btn blue">Продолжить <span>(1 из 5)</span></div>
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
              <div class="profile__info__filter__icon">
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
                <div class="info__list__box">
                  <div class="profile__info__list__icon">
                    <img src="@/assets/images/main/nation.svg" alt="" />
                  </div>
                  <div class="profile__info__list__title">Национальность:</div>
                </div>
                <div class="profile__info__list__status">Русская</div>
              </div>
              <div class="profile__info__list__stats">
                <div class="info__list__box">
                  <div class="profile__info__list__icon">
                    <img src="@/assets/images/main/money.svg" alt="" />
                  </div>
                  <div class="profile__info__list__title">Доход в месяц:</div>
                </div>
                <div class="profile__info__list__status">200 000 ₽</div>
              </div>
              <div class="profile__info__list__stats">
                <div class="info__list__box">
                  <div class="profile__info__list__icon">
                    <img src="@/assets/images/main/alcohol.svg" alt="" />
                  </div>
                  <div class="profile__info__list__title">
                    Отношение к алкоголю:
                  </div>
                </div>
                <div class="profile__info__list__status">Негативное</div>
              </div>
              <div class="profile__info__list__stats">
                <div class="info__list__box">
                  <div class="profile__info__list__icon">
                    <img src="@/assets/images/main/smoke.svg" alt="" />
                  </div>
                  <div class="profile__info__list__title">
                    Отношение к курению:
                  </div>
                </div>
                <div class="profile__info__list__status">Нейтральное</div>
              </div>
              <div class="profile__info__list__stats">
                <div class="info__list__box">
                  <div class="profile__info__list__icon">
                    <img src="@/assets/images/main/language.svg" alt="" />
                  </div>

                  <div class="profile__info__list__title">Знание языков:</div>
                </div>
                <div class="profile__info__list__status">
                  Английский, Французский
                </div>
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
<script setup>
import MobileBurger from "../MobileBurger.vue";
import ProfilePhotoCarousel from "./ProfilePhotoCarousel.vue";

import { ref } from "vue";

const showModal = ref(false);
const notificationStatus = false;
const notificationStageTwo = false;
const notificationStageThree = false;
const notificationStageFour = false;
const notificationStageFive = false;
const notificationStageSix = false;
const notificationStageSeven = false;
const notificationStageEight = false;
</script>
<style lang="scss" scoped>
.notification__blur {
  display: none;
  &.notification__unblur {
    display: flex;
  }
  &.stageTwo {
    display: flex;
  }
  &.stageThree {
    display: flex;
  }
  &.stageFour {
    display: flex;
  }
  &.stageFive {
    display: flex;
  }
  &.stageSix {
    display: flex;
  }
  &.stageSeven {
    display: flex;
  }
  &.stageEight {
    display: flex;
  }
}
.flex__center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.profile__page {
  width: 100%;
}
.text__notification {
  position: relative;
  top: -100px;
  left: 350px;
  width: 487px;
  height: 115px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  backdrop-filter: blur(50px);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  p {
    display: block;
    margin-left: 36px;
  }
  &.stageTwo {
    display: flex;
  }
}
.text__notification__rate {
  position: relative;
  top: 0;
  left: 406px;
  width: 487px;
  height: 115px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  backdrop-filter: blur(50px);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  p {
    display: block;
    margin-left: 36px;
  }
  &.stageThree {
    display: flex;
  }
  &.stageFour {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    top: 210px;
    left: -400px;
    width: 490px;
    height: 193px;
    p {
      width: 420px;
      margin: 0;
    }
  }
  &.stageFive {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    top: 360px;
    left: -350px;
    width: 600px;
    height: 187px;
    p {
      width: 542px;
      margin: 0;
    }
  }
  &.stageSix {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 150px;
    left: -350px;
    width: 672px;
    height: 94px;
    p {
      width: 542px;
      margin: 0;
    }
  }
  &.stageSeven {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 150px;
    left: -350px;
    width: 672px;
    height: 94px;
    p {
      width: 542px;
      margin: 0;
    }
  }
  &.stageEight {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 150px;
    left: -350px;
    width: 672px;
    height: 94px;
    p {
      width: 542px;
      margin: 0;
    }
  }
}
.unblured__border {
  width: 815px;
  background: none;
  left: 320px;

  &.stageTwo {
  }
  .blur__footer {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 1458px;
    p {
      top: 44px;
    }
    .notification__btn__block {
    }
  }
}

.profile__info__list__hobby__block {
  width: 440px;
  display: flex;
}
.left__side {
  .background {
    width: 700px;
    // width: 100%;
    justify-content: flex-start;
  }
  .container {
    .container {
      height: 80px;
    }
    &.stageSix {
      position: relative;
      z-index: 100;
    }
    &.notification__unblur {
      position: relative;
      z-index: 100;
    }
    @extend .flex__center;
    height: 812px;
    justify-content: space-between;
    .header {
      height: 44px;
      @extend .flex__center;
      justify-content: space-between;
      .mobile__photo__block {
        display: none;
      }

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
        &.stageTwo {
          position: relative;
          z-index: 100;
        }
        &.stageThree {
          position: relative;
          z-index: 100;
        }
        &.stageFour {
          position: relative;
          z-index: 100;
        }
        @extend .flex__center;
        justify-content: space-evenly;
        .mobile__horizontal__line {
          display: none;
        }
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
            margin-left: 20px;
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
            width: 140px;
            height: 58px;
            background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
            border-radius: 14px;
            &.gold {
              border: #2965ff 1px solid;
              background: #bdd0ff;
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
          // padding: 20px;
          .vertical__line {
            width: 104px;
            height: 0px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            transform: rotate(90deg);
          }
          .item__price {
            position: relative;
            z-index: 0;
            width: 33%;
            @extend .flex__center;

            &.center {
              border-left: 1px grey solid;
              border-right: 1px grey solid;
            }
            .inner__price__box {
              @extend .flex__center;
              width: 114px;
              height: 104px;
            }
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
              border: #2965ff 1px solid;
              padding: 7px 26px;
              border-radius: 11px;
              font-weight: 600;
              font-size: 15px;
              line-height: 153.5%;
              width: 114.36px;
              height: 37px;
              margin-top: 10px;
              background: #bdd0ff;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
            .progress__bar {
              display: none;
              width: 160px;
              height: 24px;
              margin-top: 5px;
              margin-bottom: 5px;
              background: linear-gradient(
                89.71deg,
                #2965ff 0.25%,
                #2965ff 46.83%,
                #2965ff 65.55%,
                rgba(255, 255, 255, 0.2) 65.56%,
                rgba(255, 255, 255, 0.2) 99.75%
              );
              border-radius: 4px;
            }
            p {
              display: none;
            }
            &.active {
              z-index: 1;
              width: 194px;
              height: 134px;
              filter: drop-shadow(4px 0px 11px rgba(43, 102, 251, 0.37));

              border: 2px solid #2965ff;
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
        &.stageFive {
          position: relative;
          z-index: 100;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
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
            border-radius: 1.382vw;
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
                cursor: pointer;
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
        .btn {
          &.stageSix {
            position: relative;
            z-index: 100;
          }
          @extend .flex__center;
          width: 192px;
          height: 136px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 24px;
          cursor: pointer;
          .arrow__next {
            display: none;
          }
          &.mobile {
            display: none;
          }
          .container {
            justify-content: center;
            text-align: center;
          }
          p {
            margin-top: 12px;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
      .female__verification__block {
        @extend .flex__center;
        flex-direction: row;
        justify-content: space-between;
        width: 612px;
        height: 136px;
        .verification__status {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 24px;
          width: 456px;
          height: 136px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .status__header {
            width: 366px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 21px;
            .left__side__header {
              display: flex;
              img {
                margin-right: 12px;
              }
            }
            .right__side__header {
              display: flex;
              img {
                margin-left: 8px;
              }
              .status__error {
                display: flex;
              }
            }
            h2 {
              font-weight: 700;
              font-size: 16px;
              line-height: 153.5%;
              display: flex;
              align-items: center;
              text-align: center;
              color: #ffffff;
            }
            .horizontal__line {
              width: 40px;
              height: 0px;
              border: 1px solid #ffffff;
              transform: rotate(180deg);
            }
          }
          .status__desc {
            width: 383px;
            height: 32px;
            span {
              font-weight: 600;
              font-size: 12px;
              line-height: 132.5%;
              color: rgba(255, 255, 255, 0.4);
            }
          }
        }
      }
      .verification__action {
        @extend .flex__center;
        width: 136px;
        height: 136px;
        background: #2b66fb;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 24px;
        // display: none;
        &.help {
          background: none;
        }
        &.show__error {
          display: flex;
        }
        h2 {
          font-weight: 600;
          font-size: 15px;
          text-align: center;
          color: #ffffff;
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
      width: 488px;
      height: 730px;
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
          text-shadow: 0px 0px 10px rgba(255, 187, 84, 0.3);
        }
      }
    }
  }
  .profile__info__list__container {
    width: 488px;
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
          font-size: 15px;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .notification__blur {
    display: none;
  }
  .profile__page {
    .right__side {
      display: none;
    }
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

  .left__side {
    padding: 0;
    .background {
      margin-bottom: 10.769vw;
      padding: 0;
      width: unset;
      .container {
        width: 85.59vw;
        height: unset;
        .header {
          justify-content: end;
          height: 81.28vw;
          width: 100vw;
          margin-bottom: 6.153vw;
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
          justify-content: center;
          height: unset;
          width: 96.15vw;
          .cash__container {
            width: 85.89vw;
            height: 56.153vw;
            background: rgba(27, 28, 30, 0.5);
            border: 0.256vw solid rgba(255, 255, 255, 0.14);
            border-radius: 6.153vw;
            margin-bottom: 5.128vw;
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
                margin: 0;
                img {
                  margin-right: 8px;
                }
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
                width: 33%;
                height: 14.98vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                &.active {
                  height: 23.33vw;
                  border: 0.512vw solid #2965ff;
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
                  justify-content: center;
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
              width: 78.2vw;
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

                width: 78.2vw;
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
              width: 48.2vw;
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
