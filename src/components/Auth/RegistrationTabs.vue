<template>
  <div>
    <keep-alive>
      <component :is="changeComponent">
        <template v-slot:secondPhase>
          <BigButton
            @click="nameComponent = 'Second'"
            title="Продолжить"
            style="width: 236px; height: 48px"
          />
        </template>
        <template v-slot:secondPhaseMobile>
          <BigButton
            @click="nameComponent = 'Second'"
            title="Продолжить"
            style="
              width: 85.89vw;
              height: 15.38vw;
              margin-top: 8.2vw;
              margin-bottom: 6.15vw;
            "
          />
        </template>
        <template v-slot:thirdPhase>
          <BigButton
            @click="nameComponent = 'Third'"
            title="Продолжить"
            style="width: 236px; height: 48px"
          />
        </template>
        <template v-slot:thirdPhaseMobile>
          <BigButton
            @click="nameComponent = 'Third'"
            title="Продолжить"
            style="
              width: 85.89vw;
              height: 15.38vw;
              margin-top: 12.3vw;
              margin-bottom: 6.15vw;
            "
          />
        </template>
        <template v-slot:backPhaseOne>
          <div class="auth__back__btn" @click="nameComponent = ''">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template v-slot:backPhaseOneMobile>
          <div class="auth__back__btn__mobile" @click="nameComponent = ''">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          </div>
        </template>
        <template v-slot:fourthPhase>
          <BigButton
            @click="nameComponent = 'Fourth'"
            title="Продолжить"
            style="width: 236px; height: 48px"
          />
        </template>
        <template v-slot:fourthPhaseMobile>
          <BigButton
            @click="nameComponent = 'Fourth'"
            title="Продолжить"
            style="
              width: 85.89vw;
              height: 15.38vw;
              margin-bottom: 6.15vw;
            "
          />
        </template>
        <template v-slot:backPhaseTwoMobile>
          <div class="auth__back__btn__mobile" @click="nameComponent = 'Second'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          </div>
        </template>
        <template v-slot:backPhaseTwo>
          <div class="auth__back__btn" @click="nameComponent = 'Second'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template v-slot:mobileSkip>
          <p class="skip" @click="nameComponent = 'Fourth'">Пропустить</p>
        </template>
        <template v-slot:fivePhase>
          <BigButton
            @click="nameComponent = 'Five'"
            title="Продолжить"
            style="width: 236px; height: 48px"
          />
        </template>
        <template v-slot:backPhaseThree>
          <div class="auth__back__btn" @click="nameComponent = 'Third'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template v-slot:choosePhase>
          <BigButton
            @click="nameComponent = 'Six'"
            title="Загрузить с компьютера"
            style="width: 228px; height: 35px"
          />
        </template>
        <template v-slot:backPhaseFour>
          <div class="auth__back__btn" @click="nameComponent = 'Fourth'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
      </component>
    </keep-alive>
  </div>
</template>
<script>
import SignupPopup from "./SignupPopup.vue";
import SignupPopupSecond from "./SignupPopupSecond.vue";
import SignupPopupThird from "./SignupPopupThird.vue";
import SignupPopupFourth from "./SignupPopupFourth.vue";
import SignupPopupFive from "./SignupPopupFive.vue";
import BigButton from "../Form/BigButton.vue";
export default {
  components: {
    SignupPopup,
    SignupPopupSecond,
    SignupPopupThird,
    SignupPopupFourth,
    SignupPopupFive,
    BigButton,
  },
  data() {
    return {
      nameComponent: "",
    };
  },
  computed: {
    changeComponent() {
      return "SignupPopup" + this.nameComponent;
    },
  },
};
</script>
<style lang="scss">
.auth__back__btn {
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
.skip {
  font-weight: 500;
font-size: 14px;
line-height: 18px;
text-decoration-line: underline;
color: #FFFFFF;
}
</style>
