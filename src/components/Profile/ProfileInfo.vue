<template>
  <ProfilePopupDescription
    v-if="modalDescVisible"
    @close="modalDescVisible = false"
  />
  <div class="profile" @click.self="close">
    <div class="profile__info">
      <div class="profile__info__title">
        <div class="profile__name">Владимир</div>
        <div class="profile__subtext">
          <div class="profile__location">Россия, Москва</div>
          <div class="profile__vertical__line">|</div>
          <div class="profile__age">31 лет</div>
          <div class="profile__vertical__line">|</div>
          <div class="profile__online__status">Онлайн</div>
        </div>
      </div>
      <div class="profile__info__filter">
        <div class="profile__info__filter__block">
          <div class="profile__info__filter__icon" @click="modalDescrVisible">
            <img src="@/assets/images/main/description.svg" alt="" />
          </div>
          <div class="profile__info__filter__description">
            Формат знакомств:
          </div>
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
            <div class="profile__info__list__title">Отношение к алкоголю:</div>
            <div class="profile__info__list__status">Негативное</div>
          </div>
          <div class="profile__info__list__stats">
            <div class="profile__info__list__icon">
              <img src="@/assets/images/main/smoke.svg" alt="" />
            </div>
            <div class="profile__info__list__title">Отношение к курению:</div>
            <div class="profile__info__list__status">Нейтральное</div>
          </div>
        </div>
        <div class="profile__horizontal__line"></div>
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
        <div class="profile__horizontal__line"></div>
        <div class="profile__info__list__hobby__block">
          <div class="profile__info__list__hobby">Увлечения:</div>
          <div class="profile__info__list__hobby__item">
            Спорт, Фильмы, Шахматы
          </div>
        </div>
        <div class="profile__horizontal__line"></div>
        <div class="profile__info__list__about__block">
          <div class="profile__info__list__about">О себе:</div>
          <div class="profile__info__list__about__description">
            Человек выского ума, занимаюсь бизнесом по продаже машин, ищу
            спутницу жизни
          </div>
        </div>
        <div class="profile__info__list__carousel"></div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfilePopupDescription from "./ProfilePopupDescription.vue";
export default {
  data() {
    return {
      modalDescVisible: false,
    };
  },
  methods: {
    modalDescrVisible() {
      this.modalDescVisible = true;
    },
    close() {
      this.$emit("close");
    },
  },
  components: { ProfilePopupDescription },
};
</script>
<style lang="scss">
.text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
  color: #ffffff;
}
.profile {
  width: 29.04%;
  height: 100%;
}
.profile__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 488px;
  height: 834px;
  left: 1096px;
  top: 70px;
}
.profile__info__title {
}
.profile__name {
  @extend .text;
  width: 240px;
  height: 74px;
  font-weight: 500;
  font-size: 48px;
  color: #ffffff;
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
  font-size: 16px;
  line-height: 132.5%;
  color: rgba(255, 255, 255, 0.33);
}
.profile__horizontal__line {
  width: 440px;
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.33);
}
.profile__info__filter__block {
  display: flex;
  align-items: center;
}
.profile__age {
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
  text-align: center;
  padding: 8px 12px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  border-radius: 13px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  color: #ffffff;
  margin-right: 12px;
}
.profile__info__list__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  gap: 10px;
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
  color: #ffffff;
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
.profile__info__list__weight__stat {
  color: #ffffff;
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
.profile__info__list__hobby__item {
  color: #ffffff;
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
  width: 440px;
  height: 88px;
  background: rgba(40, 37, 42, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
}
</style>
