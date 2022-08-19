<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import TheSelect from '../Form/TheSelect.vue'
import SignupHobby from '@/components/Auth/SignupHobby.vue'
import ProfilePopupDeleteAcc from './ProfilePopupDeleteAcc.vue'
import IntervalRange from '../Form/IntervalRange.vue'

const userStore = useUserStore()

const modalDeleteAcc = ref(false)
const passConfirm = ref(true)
const femaleVersion = ref(true)
const focusInput = ref(false)
const focusInputRepeat = ref(false)
const modalHobbyVisible = ref(false)

const logout = () => {
  userStore.logout()
}

function showPass() {
  let inputType = document.querySelectorAll('#input')
  inputType.forEach((e) => {
    e.type === 'password' ? (e.type = 'text') : (e.type = 'password')
  })
}

function showPassRepeat() {
  let inputType = document.querySelectorAll('#inputRepeat')
  inputType.forEach((e) => {
    e.type === 'password' ? (e.type = 'text') : (e.type = 'password')
  })
}
</script>

<template>
  <ProfilePopupDeleteAcc
    v-if="modalDeleteAcc"
    @hide-modal-delete="modalDeleteAcc = false"
  />
  <SignupHobby
    v-if="modalHobbyVisible"
    @hide-modal-hobby="modalHobbyVisible = false"
  />
  <div class="background__edit">
    <router-link to="/account/:user">
      <div class="auth__back__btn">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
    </router-link>
    <div class="container">
      <div class="content__container__edit">
        <div class="header">
          <div class="title__block">
            <div class="btn delete" @click="modalDeleteAcc = true">
              Удалить профиль
            </div>
            <h1>Редактирования профиля</h1>
            <div class="btn leave" @click="logout()">
              <img src="../../assets/images/leave__icon.svg" alt="" />
              Выйти из аккаунта
            </div>
          </div>
          <div class="horizontal__line"></div>
        </div>
        <div class="myprofile__body">
          <div class="mail__block">
            <div class="logo">
              <img
                src="../../assets/images/main/myprofile__settings__email.svg"
                alt=""
              />
            </div>
            <p>Электронная почта:</p>
            <input
              class="input"
              type="text"
              disabled
              placeholder="Example@example.ru"
            />
          </div>
          <div class="pass__container">
            <div class="pass__block">
              <div class="logo">
                <img
                  src="../../assets/images/main/myprofile__settings__lock.svg"
                  alt=""
                />
              </div>
              <p>Пароль:</p>
              <div class="input__box__pass">
                <p>Старый пароль</p>
                <div class="eye__block">
                  <input
                    id="input"
                    class="input"
                    type="password"
                    placeholder="********"
                    @focus=";(focusInput = true), (focusInputRepeat = false)"
                  />
                  <input
                    id="eye"
                    class="eye"
                    type="checkbox"
                    @click="showPass()"
                  />
                  <label
                    class="eyeFirst"
                    for="eye"
                    :class="{ visible: focusInput }"
                  ></label>
                </div>
              </div>
              <div class="input__box__pass">
                <p>Новый пароль</p>
                <div class="eye__block">
                  <input
                    id="inputRepeat"
                    class="input repeat"
                    type="password"
                    placeholder="********"
                    @focus=";(focusInputRepeat = true), (focusInput = false)"
                  />
                  <input
                    id="eyeSecond"
                    class="eye"
                    type="checkbox"
                    @click="showPassRepeat()"
                  />
                  <label
                    class="eyeSecond"
                    for="eyeSecond"
                    :class="{ visible: focusInputRepeat }"
                  ></label>
                </div>
              </div>
              <div v-if="passConfirm" class="vertical__line__pass"></div>
              <img
                v-if="passConfirm"
                src="../../assets/images/main/myprofile__settings__done.svg"
                alt=""
              />
            </div>
            <!-- <div class="input__password">
              <input
                id="input"
                class="input pass"
                type="password"
                placeholder="Пароль"
                @focus="(focusInput = true), (focusInputRepeat = false)"
              />
              <input id="eye" class="eye" type="checkbox" @click="showPass" />
              <label for="eye" :class="{ visible: focusInput }"></label>
            </div> -->
            <!-- <div class="input__password">
              <input
                id="inputRepeat"
                class="input pass__repeat"
                type="password"
                placeholder="Повторите пароль"
                @focus="(focusInputRepeat = true), (focusInput = false)"
              />
              <input
                id="eyeSecond"
                class="eye"
                type="checkbox"
                @click="showPassRepeat"
              />
              <label
                for="eyeSecond"
                :class="{ visible: focusInputRepeat }"
              ></label>
            </div> -->
          </div>
          <div class="horizontal__line"></div>
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
              <TheSelect class="select__city" placeholder="Москва" />
            </div>
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img
                    src="../../assets/images/profile_edit_logo/nation__logo.svg"
                    alt=""
                  />
                </div>
                <span class="nation__span">Национальность и образование:</span>
              </div>
              <div class="nation__block">
                <TheSelect class="select__nation" placeholder="Русская" />
                <TheSelect class="select__education" placeholder="Высшее" />
              </div>
            </div>
          </div>
          <div class="horizontal__line short"></div>
          <div class="cash__education">
            <div class="info__bar">
              <div class="logo__title__group">
                <div class="logo">
                  <img src="../../assets/images/main/money.svg" alt="" />
                </div>
                <span v-if="femaleVersion">Трачу в месяц:</span>
                <span v-if="!femaleVersion">Зарабатываю в месяц:</span>
              </div>
              <IntervalRange class="info__bar-interval-range" />
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
                <div class="add__lang" @click="modalHobbyVisible = true">
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
                      <p>Положительное</p>
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
                      <p>Положительное</p>
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
                <span>Данные фигуры: </span>
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
                <div
                  v-if="femaleVersion"
                  class="signup__params__item params__size"
                >
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
                <div class="add__lang" @click="modalHobbyVisible = true">
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
            <router-link to="/account/vasya">
              <div class="btn">Отмена</div>
            </router-link>
            <div class="btn">Сохранить</div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="mobile__header">
        <div class="title__block">
          <router-link to="/account/vasya">
            <div class="back__arrow">
              <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            </div>
          </router-link>
          <p>Редактирование анкеты</p>
        </div>
      </div>
      <div class="mobile__dropdown">
        <input
          id="section1"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section1" class="accordion__label"
          >Имя и дата рождения</label
        >
        <div class="accordion__content">
          <input class="input" type="text" placeholder="Анастасия" />
          <div class="age__block">
            <p>Дата рождения:</p>
            <div class="age__inputs">
              <input class="input" type="text" placeholder="01" />
              <input class="input" type="text" placeholder="01" />
              <input class="input year" type="text" placeholder="2000" />
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__dropdown">
        <input
          id="section2"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section2" class="accordion__label">Параметры тела</label>
        <div class="accordion__content">
          <div class="params__block">
            <div class="params">
              <p>Рост:</p>
              <input class="input" type="text" placeholder="170" />
            </div>
            <div class="params">
              <p>Вес:</p>
              <input class="input" type="text" placeholder="50" />
            </div>
            <div class="params female">
              <p>Параметры:</p>
              <div class="age__inputs">
                <input class="input" type="text" placeholder="90" />
                <input class="input" type="text" placeholder="60" />
                <input class="input year" type="text" placeholder="90" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__dropdown">
        <input
          id="section3"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section3" class="accordion__label"
          >Город, Национальность</label
        >
        <div class="accordion__content">
          <TheSelect class="select__city" placeholder="Москва" />
          <TheSelect class="select__nation" placeholder="Русская" />
        </div>
      </div>
      <div class="mobile__dropdown">
        <input
          id="section4"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section4" class="accordion__label">Формат знакомтв</label>
        <div class="accordion__content">
          <div class="chips__block">
            <div class="chips">
              <p>Онлайн общение</p>
              <img
                src="../../assets/images/main/cross__delete__photo.svg"
                alt=""
              />
            </div>
            <div class="chips">
              <p>Пойти на свидание</p>
              <img
                src="../../assets/images/main/cross__delete__photo.svg"
                alt=""
              />
            </div>
            <div class="chips">
              <p>Спонсорство</p>
              <img
                src="../../assets/images/main/cross__delete__photo.svg"
                alt=""
              />
            </div>
            <div class="chips">
              <p>Серьёзные отношения</p>
              <img
                src="../../assets/images/main/cross__delete__photo.svg"
                alt=""
              />
            </div>
            <div class="add__btn">
              <p>Отправиться в путешествие</p>
              <img
                src="../../assets/images/main/myprofile__add__btn.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__dropdown">
        <input
          id="section5"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section5" class="accordion__label">Трачу в месяц</label>
        <div class="accordion__content">
          <!-- <div class="cash__block">
            <div class="cash__left__side">
              <img src="../../assets/images/main/description.svg" alt="" />
              <p>Трачу в месяц:</p>
            </div>
            <div class="cash__right__side">
              <div class="border__block">
                <input class="input" type="text" placeholder="50000" />
                <p>$</p>
              </div>
            </div>
          </div> -->
          <IntervalRange class="interval__range__mobile" />
        </div>
      </div>
      <div class="mobile__dropdown">
        <input
          id="section6"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section6" class="accordion__label"
          >Отношение к Алкоголю, Курению</label
        >
        <div class="accordion__content">
          <div class="smoke__block">
            <div class="smoke__box">
              <p>Отноешния к алкоголю</p>
              <div class="border">
                <div class="choose__item">Негавтиное</div>
                <div class="choose__item line">Нейтральное</div>
                <div class="choose__item">Положительное</div>
              </div>
            </div>
            <div class="horizontal__line"></div>
            <div class="smoke__box last">
              <p>Отноешния к курению</p>
              <div class="border">
                <div class="choose__item">Негавтиное</div>
                <div class="choose__item line">Нейтральное</div>
                <div class="choose__item">Положительное</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__dropdown">
        <input
          id="section7"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section7" class="accordion__label"
          >Увлечения, Знание языка</label
        >
        <div class="accordion__content">
          <div class="hobby__block">
            <div class="hobby__box">
              <p class="title__hobby">Увлечения:</p>
              <div class="chips__block">
                <div class="chips__inner__box">
                  <div class="chips">
                    <p>Спорт</p>
                    <img
                      src="../../assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    <p>Вино</p>
                    <img
                      src="../../assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    <p>Путешествие</p>
                    <img
                      src="../../assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="chips">
                    <p>Ужасы</p>
                    <img
                      src="../../assets/images/main/signup__chips__close.svg"
                      alt=""
                    />
                  </div>
                  <div class="add__btn" @click="modalHobbyVisible = true">
                    <img
                      src="../../assets/images/main/add__photo__btn.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="horizontal__line"></div>
              <div class="hobby__box last">
                <p class="title__hobby">Знание языков:</p>
                <div class="chips__block">
                  <div class="chips__inner__box">
                    <div class="chips">
                      <p>Английский</p>
                      <img
                        src="../../assets/images/main/signup__chips__close.svg"
                        alt=""
                      />
                    </div>
                    <div class="chips">
                      <p>Испанский</p>
                      <img
                        src="../../assets/images/main/signup__chips__close.svg"
                        alt=""
                      />
                    </div>
                    <div class="chips">
                      <p>Татарский</p>
                      <img
                        src="../../assets/images/main/signup__chips__close.svg"
                        alt=""
                      />
                    </div>
                    <div class="add__btn" @click="modalHobbyVisible = true">
                      <img
                        src="../../assets/images/main/add__photo__btn.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile__dropdown last">
        <input
          id="section8"
          type="checkbox"
          name="example_accordion"
          class="accordion__input"
        />
        <label for="section8" class="accordion__label">О себе</label>
        <div class="accordion__content">
          <textarea class="textarea__mobile"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  font-family: 'Mulish';
  font-size: 15px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
  outline: none;
  background: none;
  width: 326px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  padding: 12px;
  margin-bottom: 16px;
  &:focus {
    color: #ffffff;
    border: #ffffff solid 1px;
  }
}
.auth__back__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: 70px;
  left: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.auth__back__btn__mobile {
  cursor: pointer;
  position: fixed;
  top: 55px;
  left: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.auth__back__btn__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.input__password {
  font-family: 'Mulish';
  font-size: 15px;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.33);
  background: rgba(196, 196, 196, 0);
  width: 250px;
  height: 60px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.background__edit {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  @extend .flex__center;
  .accordion {
    display: none;
  }
}
.eye__block {
  height: 60px;
}
.eye {
  position: relative;
  z-index: -1;
  opacity: 0;
}
label {
  position: relative;
  z-index: 2;
  // right: -200px;
  // top: -40px;
}
.eye + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  display: none;
  &.visible {
    display: inline-flex;
  }
  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../../assets/images/eye__open.svg);
  }
}
.eye:checked + label::before {
  background-image: url(../../assets/images/eye__close.svg);
}
.eyeFirst {
  left: 200px;
  top: -42px;
}
.eyeSecond {
  left: 200px;
  top: -42px;
}
.container {
  // width: 1056px;
  // height: 2205px;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-top: none;
  border-bottom: none;
  .content__container__edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 2205px;

    .header {
      @extend .flex__center;
      flex-direction: column;
      margin-top: 75px;
      margin-bottom: 48px;
      .title__block {
        display: flex;
        align-items: center;
        .btn {
          padding: 7px 13px;
          border: 1px solid #3e74ff;
          border-radius: 11px;
          font-weight: 700;
          font-size: 14px;
          line-height: 132.5%;
          color: #3e74ff;
          display: flex;
          align-items: center;
          cursor: pointer;
          img {
            margin-right: 10px;
          }
        }
      }
      h1 {
        font-weight: 600;
        font-size: 18px;
        line-height: 153.5%;
        margin: 0 109px 0 166px;
      }
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
      .mail__block {
        width: 784px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 153.5%;
          color: rgba(255, 255, 255, 0.4);
          margin: 0px 99px 0px 12px;
        }
        .input {
          margin: 0;
          background: none;
          &::placeholder {
            color: #ffffff;
          }
        }
      }
      .pass__container {
        display: flex;
        align-items: center;
        margin-top: 16px;
        img {
          margin-top: 24px;
        }
        .vertical__line__pass {
          width: 0px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin: 24px 8px 0 8px;
        }
        .input {
          width: 250px;
          margin: 0;
          margin-right: 12px;
          background: none;
          width: 250px;
          &::placeholder {
            color: #ffffff;
          }
          &.pass {
            margin: 0;
            border: none;
            height: 60px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            position: absolute;
            z-index: 1;
          }
          &.pass__repeat {
            margin: 0;
            border: none;
            height: 60px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            position: absolute;
            z-index: 1;
          }
        }
      }
      .pass__block {
        display: flex;
        align-items: center;
        width: 784px;
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 153.5%;
          color: rgba(255, 255, 255, 0.4);
          margin: 0px 180px 0px 12px;
          margin-top: 24px;
        }

        .input__box__pass {
          display: flex;
          flex-direction: column;
          p {
            margin: 0;
            margin-bottom: 8px;
            font-weight: 600;
            font-size: 12px;
            line-height: 132.5%;
          }
        }
      }
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
            color: rgba(255, 255, 255, 0.4);
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
            // background: #2b66fb;
            border: #2965ff 1px solid;
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
        margin: 48px 0 48px 0;
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

        // .input {
        //   font-family: 'Mulish';
        //   width: 326px;
        //   height: 60px;
        //   background: none;
        //   margin: 0;
        //   &::placeholder {
        //     color: #ffffff;
        //   }
        // }
        .input {
          font-family: 'Mulish';
          font-size: 15px;
          line-height: 153.5%;
          color: rgba(255, 255, 255, 0.33);
          outline: none;
          background: none;
          width: 326px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          padding: 12px;
          margin-bottom: 16px;
          &:focus {
            color: #ffffff;
            border: #ffffff solid 1px;
          }
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
            border: none;
            text-align: center;
            font-family: 'Mulish';
            font-size: 15px;
            line-height: 153.5%;
          }
          .input__month {
            width: 40px;
            background: none;
            border: none;
            text-align: center;
            border-left: 1px solid rgba(255, 255, 255, 0.14);
            border-right: 1px solid rgba(255, 255, 255, 0.14);
            font-family: 'Mulish';
            font-size: 15px;
            line-height: 153.5%;
          }
          .input__year {
            width: 70px;
            background: none;
            border: none;
            text-align: center;
            font-family: 'Mulish';
            font-size: 15px;
            line-height: 153.5%;
          }
        }

        .select__city {
          position: relative;
          z-index: 2;
          width: 512px;
          height: 60px;
          margin-top: 18px;
        }

        .nation__span {
          width: 100px;
          height: 32px;

          font-family: 'Mulish';
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 132.5%;
        }
        .nation__block {
          display: flex;
        }
        .select__nation {
          position: relative;
          z-index: 1;
          width: 250px;
          height: 60px;
          margin-top: 18px;
        }
        .select__education {
          z-index: 1;
          width: 250px;
          height: 60px;
          margin: 18px 0 0 12px;
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

          &:last-child {
            margin-top: 25px;
          }

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
                margin: 0;
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
                margin: 0;
              }
              p {
                margin: 0;
              }
            }
          }
          .signup__params__item {
            p {
              margin: 0;
              color: rgba(255, 255, 255, 0.4);
            }
            &.params__size {
              @extend .flex__center;
              justify-content: space-between;
              width: 269px;
              height: 60px;
              p {
                margin-right: 8px;
              }
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
                  margin: 0;
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
          font-family: 'Mulish';
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
      margin-top: 48px;
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
  .interval__range__mobile {
    width: 295px;
    margin: 24px 0 44px 0;
  }
  .auth__back__btn {
    display: none;
  }
  .container {
    .accordion {
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      .mobile__header {
        border-bottom: 0.256vw solid rgba(255, 255, 255, 0.14);
        width: 100vw;
        height: 22.82vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(30px);
        .title__block {
          margin-bottom: 2.5641vw;
          display: flex;
          justify-content: space-between;
          width: 71.025vw;
          p {
            font-weight: 600;
            font-size: 4.3589vw;
            line-height: 153.5%;
            color: #ffffff;
          }
        }
      }
      .mobile__dropdown {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 0.256vw solid rgba(255, 255, 255, 0.14);
        min-height: 18.461vw;
        &.last {
          margin-bottom: 17.435vw;
        }
      }
    }

    .age__block {
      display: flex;
      align-items: center;
      width: 85.89vw;
      justify-content: space-between;
      p {
        color: #ffffff;
        font-weight: 600;
        font-size: 3.846vw;
        line-height: 153.5%;
        margin-bottom: 5.128vw;
      }
    }
    .input {
      width: 85.897vw;
      margin-bottom: 4.102vw;
      &::placeholder {
        color: #ffffff;
      }
    }
    .age__inputs {
      display: flex;
      width: 45.128vw;
      height: 15.384vw;
      border: 0.256vw solid rgba(255, 255, 255, 0.14);
      border-radius: 2.82vw;
      justify-content: center;
      align-items: center;
      margin-bottom: 6.153vw;
      .input {
        width: 13.33vw;
        height: 7.179vw;
        border: none;
        border-right: 0.256vw solid rgba(255, 255, 255, 0.14);
        border-radius: 0px;
        margin: 0;
        &::placeholder {
          color: #ffffff;
        }
        &.year {
          width: 18.205vw;
          border: none;
        }
      }
    }
    .params__block {
      display: flex;
      justify-content: space-between;
      width: 85.89vw;
      align-items: center;
      margin-bottom: 6.1538vw;
      .params {
        width: 15.384vw;
        height: 23.8461vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 500;
          font-size: 3.589vw;
          line-height: 153.5%;
          color: #ffffff;
        }
        &.female {
          width: 44.871vw;
          .age__inputs {
            margin: 0;
            .input {
              height: 5.897vw;
            }
          }
        }
        .input {
          width: 15.384vw;
          height: 15.384vw;
          margin: 0;
          text-align: center;
          &.year {
            width: 13.333vw;
          }
        }
      }
    }
    .select__city {
      width: 85.89vw;
      z-index: 2;
      margin-bottom: 4.1vw;
    }
    .select__nation {
      width: 85.89vw;
      z-index: 1;
      margin-bottom: 6.153vw;
    }
    .chips__block {
      width: 85.89vw;
      display: flex;
      flex-wrap: wrap;
      gap: 3.076vw;
      margin-bottom: 6.153vw;
      .chips {
        height: 7.948vw;
        padding: 1.794vw 2.564vw;
        border: #2e66f5 1px solid;
        border-radius: 3.333vw;
        gap: 2.564vw;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-weight: 700;
          font-size: 3.33vw;
          line-height: 132.5%;
          color: #ffffff;
        }
      }
      .add__btn {
        padding: 1.794vw 2.564vw;
        gap: 2.307vw;
        height: 7.948vw;
        border: 0.256vw solid rgba(255, 255, 255, 0.14);
        border-radius: 3.333vw;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 3.589vw;
          height: 3.589vw;
        }
        p {
          font-weight: 700;
          font-size: 3.333vw;
          line-height: 132.5%;
          text-align: justify;
          color: #ffffff;
        }
      }
    }
    .cash__block {
      width: 85.89vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6.153vw;
      .cash__left__side {
        width: 31.79vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 500;
          font-size: 3.589vw;
          line-height: 153.5%;
          color: #ffffff;
        }
      }
      .cash__right__side {
        .border__block {
          width: 45.12vw;
          height: 15.38vw;
          border: 0.256vw solid rgba(255, 255, 255, 0.14);
          border-radius: 2.82vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .input {
            width: 25.64vw;
            border: none;

            margin: 0;
            &::placeholder {
              color: rgba(255, 255, 255, 0.33);
            }
          }
          p {
            color: #ffffff;
            font-weight: 600;
            font-size: 3.589vw;
            line-height: 153.5%;
            margin-right: 3.076vw;
          }
        }
      }
    }
    .smoke__block {
      width: 85.89vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .horizontal__line {
        border: 0.256vw solid rgba(255, 255, 255, 0.05);
        width: 85.89vw;
        margin-top: 4.1vw;
        margin-bottom: 4.1vw;
      }
      .smoke__box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        height: 22.3vw;
        &.last {
          margin-bottom: 6.153vw;
        }
        p {
          font-weight: 600;
          font-size: 3.0769vw;
          line-height: 3.846vw;
          color: #ffffff;
        }
        .border {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 15.38vw;
          width: 85.89vw;
          border: 0.256vw solid rgba(255, 255, 255, 0.14);
          border-radius: 2.82vw;
          .choose__item {
            font-weight: 600;
            font-size: 3.5vw;
            line-height: 153.5%;
            color: rgba(255, 255, 255, 0.33);
            display: flex;
            align-items: center;
            justify-content: center;

            &.line {
              border-left: 0.256vw solid rgba(255, 255, 255, 0.33);
              border-right: 0.256vw solid rgba(255, 255, 255, 0.33);
              width: 29vw;
              margin-left: 1.5vw;
              margin-right: 1.5vw;
            }
          }
        }
      }
    }
    .hobby__block {
      width: 85.89vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .horizontal__line {
        border: 0.256vw solid rgba(255, 255, 255, 0.05);
        width: 85.89vw;
        margin-top: 4.1vw;
        margin-bottom: 4.1vw;
      }
      .hobby__box {
        min-height: 27.435vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .title__hobby {
          margin-bottom: 3.0769vw;
        }

        &.last {
          margin-bottom: 6.1538vw;
        }
        p {
          font-weight: 600;
          font-size: 3.0769vw;
          line-height: 3.846vw;
          color: #ffffff;
        }
        .chips__block {
          width: 85.89vw;
          border: 0.256vw solid rgba(255, 255, 255, 0.14);
          border-radius: 2.82vw;
          margin: 0;
          .chips__inner__box {
            gap: 2.051vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            padding: 4.1vw 3.0769vw;
            .add__btn {
              padding: 1.538vw;
              gap: 2.564vw;
              width: 6.1538vw;
              height: 6.1538vw;
              border: 0.256vw solid #ffffff;
              border-radius: 2.051vw;
            }
            .chips {
              padding: 1.025vw 2.564vw;
              gap: 2.564vw;
              height: 6.1538vw;
              border: 0.256vw solid #ffffff;
              border-radius: 2.051vw;
              background: none;
            }
          }
        }
      }
    }
    .textarea__mobile {
      width: 85.89vw;
      min-height: 63.589vw;
      padding: 4.615vw 3.076vw;
      background: none;
      border: 0.256vw solid rgba(255, 255, 255, 0.14);
      border-radius: 2.82vw;
      resize: none;
      outline: none;
      font-weight: 600;
      font-size: 3.846vw;
      line-height: 153.5%;
      color: #ffffff;
      margin-bottom: 6.153vw;
    }
    .accordion__label {
      width: 85.89vw;
      padding: 5.128vw 0;
      display: block;
      font-weight: 500;
      font-size: 3.589vw;
      line-height: 153.5%;
      color: #ffffff;
      cursor: pointer;
      position: relative;
      transition: background 0.1s;
      right: 0;
    }

    .accordion__label::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 5.128vw;
      height: 5.128vw;
      // background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
      background-size: contain;
      background-image: url(../../assets/images/main/auth__back__arrow.svg);

      transition: transform 0.4s;
    }

    .accordion__content {
      width: 85.89vw;
      display: none;
    }

    .accordion__input {
      display: none;
    }

    .accordion__input:checked ~ .accordion__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .accordion__input:checked ~ .accordion__label::after {
      transform: translateY(-50%) rotate(0.5turn);
    }
    display: none;
  }
}

.info__bar-interval-range {
  position: relative;
  z-index: 2;
  width: 512px;
}
</style>
