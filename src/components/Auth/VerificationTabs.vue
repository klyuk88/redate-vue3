<template>
  <keep-alive>
    <component :is="changeStage">
      <template v-slot:toSecond>
        <BigButton
          @click="nameComponent = 'Second'"
          title="Продолжить"
          style="width: 236px; height: 48px"
        />
      </template>
      <template v-slot:backToMain>
        <div class="auth__back__btn" v-on:click="nameComponent = ''">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template v-slot:toSkip>
        <div class="btn__later" v-on:click="nameComponent = 'Skip'">
          Пройти позже
        </div>
      </template>
      <template v-slot:toThird>
        <BigButton
          @click="nameComponent = 'Third'"
          title="Продолжить"
          style="width: 236px; height: 48px"
        />
      </template>
      <template v-slot:backToFirst>
        <div class="auth__back__btn" v-on:click="nameComponent = ''">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template v-slot:toFinish>
        <BigButton
          @click="nameComponent = 'Third'"
          title="Продолжить"
          style="width: 236px; height: 48px"
        />
      </template>
    </component>
  </keep-alive>
</template>
<script>
import BigButton from "../Form/BigButton.vue";
import Verification from "./VerificationFirst.vue";
import VerificationSecond from "./VerificationSecond.vue";
import VerificationThird from "./VerificationThird.vue";
import VerificationSkip from "./VerificationSkip.vue";
export default {
  components: {
    BigButton,
    Verification,
    VerificationSecond,
    VerificationThird,
    VerificationSkip
  },
  data() {
    return {
      nameComponent: "",
    };
  },
  computed: {
    changeStage() {
      return "Verification" + this.nameComponent;
    },
  },
};
</script>
<style lang="scss">
.auth__back__btn {
  display: flex;
  align-items: center;
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
.btn__later {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 129px;
  height: 39px;
  background: #27282c;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  position: relative;
  top: 20px;
  cursor: pointer;
}
</style>
