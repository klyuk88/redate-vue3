<template>
  <div>
    <keep-alive>
      <component :is="changePage">
        <template v-slot:toRecovery>
          <p class="auth__forgot" @click="nameAuth = 'Recovery'">
            Забыли пароль?
          </p>
        </template>
        <template v-slot:backToAuth>
          <div class="auth__back__btn" @click="nameAuth = ''">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template v-slot:toCode>
          <BigButton
            @click="nameAuth = 'Code'"
            title="Отправить"
            style="width: 236px; height: 48px; margin-bottom: 24px"
          />
        </template>
        <template v-slot:backToAuthSpan>
          <span @click="nameAuth = ''">Войти</span>
        </template>
        <template v-slot:backToRecovery>
          <div class="auth__back__btn" @click="nameAuth = 'Recovery'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template v-slot:toNewPassword>
          <BigButton
            @click="nameAuth = 'Password'"
            title="Продолжить"
            style="width: 236px; height: 48px; margin-bottom: 24px"
          />
        </template>
        <template v-slot:backToCode>
          <div class="auth__back__btn" @click="nameAuth = 'Code'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template v-slot:toComplete>
          <BigButton
            @click="nameAuth = 'Complete'"
            title="Сохранить"
            style="width: 236px; height: 48px; margin-bottom: 146px"
          />
        </template>
        <template v-slot:toAuth>
          <BigButton
            @click="nameAuth = ''"
            title="Сохранить"
            style="width: 236px; height: 48px; margin-bottom: 146px"
          />
        </template>
      </component>
    </keep-alive>
  </div>
</template>
<script>
import AuthPopup from "./AuthPopup.vue";
import BigButton from "../Form/BigButton.vue";
import AuthPopupRecovery from "./AuthPopupRecovery.vue";
import AuthPopupCode from "./AuthPopupCode.vue";
import AuthPopupPassword from "./AuthPopupPassword.vue";
import AuthPopupComplete from "./AuthPopupComplete.vue";
export default {
  components: {
    AuthPopup,
    BigButton,
    AuthPopupRecovery,
    AuthPopupCode,
    AuthPopupPassword,
    AuthPopupComplete,
  },
  data() {
    return {
      nameAuth: "",
    };
  },
  computed: {
    changePage() {
      return "AuthPopup" + this.nameAuth;
    },
  },
};
</script>
<style lang="scss">
.auth__forgot {
  font-size: 14px;
  margin-bottom: 84px;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  line-height: 153.5%;
  color: rgba(255, 255, 255, 0.4);
}
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
span {
  color: #ffffff;
  cursor: pointer;
}
</style>
