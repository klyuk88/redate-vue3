<template>
  <UserPhotoCarousel v-if="showModal" @hideModal="showModal = false" />
  <ProfileNewMessage v-if="store.newMessageWindow" />
  <div class="profile__page">
    <div class="nav__box">
      <router-link to="/">
        <div class="auth__back__btn">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </router-link>
      <div class="more_mobile">
        <img src="@/assets/images/main/btn_more.svg" alt="" />
      </div>
    </div>
    <div class="left__side">
      <div class="background">
        <ProfilePopupMore
          v-if="showModalMore"
          @hideModalMore="showModalMore = false"
        />
        <div
          class="photo"
          :class="{ notification__unblur: notificationStatus }"
        >
          <img
            class="main__avatar"
            src="../../assets/images/main/nate-J5U-22o1ubw-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="profile__info__list__carousel mobile">
          <div class="profile__mini__avatar">
            <router-link to="/profile/usergallery">
              <img
                src="../../assets/images/main/woman__mini__avatar1.png"
                alt=""
              />
            </router-link>
          </div>
          <div class="profile__mini__avatar">
            <router-link to="/profile/usergallery">
              <img
                src="../../assets/images/main/woman__mini__avatar1.png"
                alt=""
              />
            </router-link>
          </div>
          <div class="profile__mini__avatar">
            <router-link to="/profile/usergallery">
              <img
                src="../../assets/images/main/woman__mini__avatar1.png"
                alt=""
              />
            </router-link>
          </div>
          <div class="profile__mini__avatar">
            <router-link to="/profile/usergallery">
              <img
                src="../../assets/images/main/woman__mini__avatar1.png"
                alt=""
              />
            </router-link>
          </div>
        </div>
        <div
          class="notification__stage__two__desc"
          :class="{ stageTwo: notificationStageTwo }"
        >
          <p>
            Вы можете сразу написать пользователю, а можете “лайкнуть” его
            выкосаз симпатию либо сохранитьего анкету себе в “Избранное” нажав
            на соответсювущую кнопку.
          </p>
        </div>
        <div
          class="stage__three__block"
          :class="{ stageThree: notificationStageThree }"
        >
          <div class="notification__stage__three__desc">
            <div class="text__box">
              <p>
                Нажав на “троеточие” вы можете вызвать окно допольнительных
                функций:
              </p>
              <p>
                - <span>Поделиться</span> - после чего ссылка на профиль будет
                скопирована в Ваш буфер обмена.
              </p>
              <p>
                - <span>Скрыть</span> - анкета пользователя больше не будет вам
                показана в результата поиска.
              </p>
              <p>
                - <span>Заблокировать</span> - заблокирует возможность
                пользователю написать Вам.
              </p>
              <p>
                - <span>Пожаловаться</span> - позволит пожаловаться модератору
                на пользователя.
              </p>
            </div>
          </div>
          <div class="notification__stage__three__moremenu">
            <div class="moremenu__block">
              <img src="../../assets/images/main/share.svg" alt="" />
              <p>Поделиться</p>
            </div>
            <div class="moremenu__block">
              <img src="../../assets/images/main/hide.svg" alt="" />
              <p>Скрыть</p>
            </div>
            <div class="moremenu__block">
              <img src="../../assets/images/main/ban.svg" alt="" />
              <p>Заблокировать</p>
            </div>
            <div class="moremenu__block last">
              <img src="../../assets/images/main/report.svg" alt="" />
              <p>Пожаловаться</p>
            </div>
          </div>
        </div>
        <div class="page__footer__carousel">
          <div
            class="buttons__block"
            :class="{
              notification__unblur: notificationStatus,
              stageTwo: notificationStageTwo,
            }"
          >
            <div class="inner__buttons__block">
              <div class="big__buttons">
                <div
                  class="send__message"
                  @click.prevent="store.newMessageWindow = true"
                >
                  Написать
                </div>
                <div class="icon__btn">
                  <img src="@/assets/images/main/star.svg" alt="" />
                </div>
                <div class="icon__btn">
                  <img src="@/assets/images/main/heart.svg" alt="" />
                </div>
              </div>
              <div class="more" @click="showModalMore = true">
                <img src="@/assets/images/main/btn_more.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="profile__info__list__carousel">
            <div class="profile__mini__avatar" @click="showModal = true">
              <img
                src="../../assets/images/main/woman__mini__avatar1.png"
                alt=""
              />
            </div>
            <div class="profile__mini__avatar" @click="showModal = true">
              <img
                src="../../assets/images/main/woman__mini__avatar1.png"
                alt=""
              />
            </div>
            <div class="profile__mini__avatar" @click="showModal = true">
              <img
                src="../../assets/images/main/woman__mini__avatar1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right__side">
      <div class="profile" @click.self="close">
        <div
          class="profile__info"
          :class="{ notification__unblur: notificationStatus }"
        >
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
                <div
                  class="send__message"
                  @click.prevent="store.newMessageWindow = true"
                >
                  Написать
                </div>
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
          <div
            class="carousel__notification__block"
            :class="{ stageFour: notificationStageFour }"
          >
            <div class="carousel__notification__text">
              <p>
                Нажатие на любое из изображений в мини-галерее вывед вам его в
                большой галерее с возможностью посмотреть и другие фотографии в
                полный экран.
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
  <div class="gallery_preview" :class="{ stageFive: notificationStageFive }">
    <ProfilePhotoCarousel />
  </div>
  <div
    class="notification__blur"
    :class="{
      notification__unblur: notificationStatus,
      stageTwo: notificationStageTwo,
      stageThree: notificationStageThree,
      stageFour: notificationStageFour,
    }"
  >
    <div
      class="unblured__border"
      :class="{
        notification__unblur: notificationStatus,
        stageTwo: notificationStageTwo,
        stageThree: notificationStageThree,
        stageFour: notificationStageFour,
        stageFive: notificationStageFive,
      }"
    >
      <p>
        Анкета - страница пользователя противоположного пола где вы можете
        ознакомитсья с его анкетными данными.
      </p>
      <div class="notification__btn__block">
        <div class="noti__btn">Пропустить знакомство</div>
        <div class="noti__btn blue">Продолжить <span>(1 из 5)</span></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserPhotoCarousel from "./UserPhotoCarousel.vue";
import ProfileNewMessage from "./ProfileNewMessage.vue";
import ProfilePopupMore from "./ProfilePopupMore.vue";
import { ref } from "vue";

import { useStore } from "@/stores/main.js";
const store = useStore();

const showModal = ref(false);
const showModalMore = ref(false);
const notificationStatus = false;
const notificationStageTwo = false;
const notificationStageThree = false;
const notificationStageFour = false;
const notificationStageFive = false;
</script>
<style lang="scss">
.text {
  font-weight: 600;
  font-size: 15px;
  // line-height: 153.5%;
}
.profile__page {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}
.gallery_preview {
  display: none;
  width: 100%;
  height: 100%;
  &.stageFive {
    display: flex;
    position: relative;
    z-index: 100;
  }
}

.notification__blur {
  width: 100%;
  height: 100%;
  background: rgba(36, 37, 41, 0.6);
  backdrop-filter: blur(6px);
  position: fixed;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}
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
}
.carousel__notification__block {
  display: none;
  &.stageFour {
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 653px;
    right: 209px;
  }
  .carousel__notification__text {
    width: 530px;
    height: 107px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #ffffff;
    backdrop-filter: blur(50px);
    border-radius: 11px;
    margin-bottom: 29px;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 153.5%;
      margin: 24px 37px 27px 21px;
    }
  }
}
.page__footer__carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.unblured__border {
  width: 83%;
  height: 880px;
  background: #c4c4c4;
  border-radius: 24px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.4);
  position: absolute;
  left: 200px;
  top: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  display: none;
  &.notification__unblur {
    display: flex;
  }
  &.stageTwo {
    display: flex;
    background: none;
    border: none;
    p {
      display: none;
    }
    .notification__btn__block {
      justify-content: end;
      width: 100%;
    }
  }
  &.stageThree {
    display: flex;
    background: none;
    border: none;
    p {
      display: none;
    }
    .notification__btn__block {
      justify-content: end;
      width: 100%;
    }
  }
  &.stageFour {
    display: flex;
    background: none;
    border: none;
    p {
      display: none;
    }
    .notification__btn__block {
      justify-content: end;
      width: 100%;
    }
  }
  &.stageFive {
    display: flex;
    background: none;
    border: none;
    p {
      display: none;
    }
    .notification__btn__block {
      justify-content: end;
      width: 100%;
    }
  }
  p {
    position: relative;
    top: 33px;
  }
  .notification__btn__block {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 40px;
    .noti__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 13px;
      gap: 10px;
      width: 204px;
      height: 33px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 11px;
      font-weight: 700;
      font-size: 14px;
      line-height: 132.5%;
      color: #ffffff;
      margin-left: 12px;
      span {
        color: rgba(255, 255, 255, 0.6);
      }
      &.blue {
        width: 193px;
        height: 32px;
        background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
        border-radius: 11px;
      }
    }
  }
}
.notification__btn__border {
  position: relative;
  z-index: 100;
}
.notification__stage__two__desc {
  width: 790px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  backdrop-filter: blur(50px);
  border-radius: 11px;
  position: fixed;
  top: 720px;
  left: 280px;
  display: none;
  z-index: 100;
  p {
    margin: 23px 46px 23px 39px;
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #ffffff;
  }
  &.stageTwo {
    display: block;
  }
}
.stage__three__block {
  position: absolute;
  z-index: 100;
  top: 580px;
  left: 280px;
  display: none;
  &.stageThree {
    display: flex;
  }
}
.notification__stage__three__desc {
  width: 409px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  backdrop-filter: blur(50px);
  border-radius: 11px;
  margin-right: 35px;

  .text__box {
    margin: 20px 32px 20px 32px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 153.5%;
    margin-bottom: 8px;
    span {
      font-weight: 700;
    }
  }
}
.notification__stage__three__moremenu {
  position: relative;
  top: 50px;
  background: rgba(40, 41, 45, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  width: 246px;
  height: 213px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .moremenu__block {
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.33);
    height: 52px;
    align-items: center;

    img {
      margin-left: 29px;
      margin-right: 12px;
    }
    &.last {
      border-bottom: none;
    }
  }
}
.more {
  img {
    cursor: pointer;
  }
}
.left__side {
  // width: 1048px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 75px;
}
.right__side {
  // width: 688px;

  .profile {
    .profile__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      // width: 488px;
      height: 833px;
      &.notification__unblur {
        position: relative;
        z-index: 100;
      }
      .buttons__block {
        display: none;
      }
      .profile__info__list__container {
        // width: 488px;
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
  // max-width: 817px;
  height: 100%;
  padding: 50px;
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
  height: 68px;
  top: -35px;
  background: rgba(40, 37, 42, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 26px;
  &.notification__unblur {
    z-index: 100;
  }
  &.stageTwo {
    z-index: 100;
  }
  .inner__buttons__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 405px;
    height: 54px;
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
  width: 100%;
  height: 816px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
  border-radius: 24px;
  display: flex;
  &.notification__unblur {
    position: relative;
    z-index: 100;
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
  margin-bottom: 18px;
  margin-top: 18px;
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
  width: 382px;
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
  width: 382px;
  height: 82px;
  display: flex;
  flex-wrap: wrap;
}
.profile__info__filter__tag {
  @extend .text;
  height: 35px;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  border-radius: 13px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  margin-right: 12px;
  border: #2965ff 1px solid;
}
.profile__info__list__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
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
  // width: 440px;
  width: 123%;
  justify-content: space-between;
}
.info__list__box {
  display: flex;
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
  // width: 409px;
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
  position: relative;
  top: -20px;
  // margin-top: 16px;
  &.stageFour {
    position: relative;
    z-index: 100;
  }
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
  .profile__info__filter__block {
    margin-top: 8.2vw;
    margin-bottom: 2vw;
  }
  .profile__page {
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 8vw;
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
          font-size: 3.589vw;
          line-height: 132.5%;
        }
      }
    }
    .left__side {
      width: 85.89vw;
      flex-direction: column;
      padding: 0;
      .background {
        padding: 0;
        .page__footer__carousel {
          display: none;
        }
        .profile__info__list__carousel {
          display: flex;
          position: relative;
          width: 79.74vw;
          // height: 19.48vw;
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
          height: unset;
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
              padding: 0;
              height: unset;
              margin-bottom: 4.1vw;
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
            height: unset;
            width: 86.15vw;
            .profile__info__filter__description {
              font-weight: 600;
              font-size: 3.846vw;
              line-height: 153.5%;
            }
            .profile__info__filter__tags__block {
              width: 85.89vw;
              gap: 8px;
              height: unset;
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
            padding: 0;
            .profile__horizontal__line {
              display: none;
            }
            .mobile__more__info__title {
              margin-top: 8.2vw;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 85.89vw;
              margin-bottom: 2vw;
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
              .profile__info__list__stats {
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
