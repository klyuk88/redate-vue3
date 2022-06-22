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
    </component>
  </keep-alive>
</template>
<script>
import BigButton from "../Form/BigButton.vue";
import Verification from "./VerificationFirst.vue";
import VerificationSecond from "./VerificationSecond.vue";
import VerificationThird from "./VerificationThird.vue";
export default {
  components: {
    BigButton,
    Verification,
    VerificationSecond,
    VerificationThird,
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
<style lang="scss"></style>
