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
        <template v-slot:thirdPhase>
          <BigButton
            @click="nameComponent = 'Third'"
            title="Продолжить"
            style="width: 236px; height: 48px"
          />
        </template>
        <template v-slot:backPhaseOne>
          <div class="auth__back__btn" @click="nameComponent = ''">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template v-slot:fourthPhase>
          <BigButton
            @click="nameComponent = 'Fourth'"
            title="Продолжить"
            style="width: 236px; height: 48px"
          />
        </template>
        <template v-slot:backPhaseTwo>
          <div class="auth__back__btn" @click="nameComponent = 'Third'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
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
    <!-- <BigButton  v-if="nameComponent == '' " v-on:click="nameComponent =  '' " title="Продолжить" /> -->
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
.auth__back__btn__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
</style>
