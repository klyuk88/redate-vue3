<script setup>
import { ref, computed } from 'vue'
// eslint-disable-next-line no-unused-vars
import AuthPopup from './AuthPopup.vue'
import BigButton from '../Form/BigButton.vue'
// eslint-disable-next-line no-unused-vars
import AuthPopupRecovery from './AuthPopupRecovery.vue'
// eslint-disable-next-line no-unused-vars
import AuthPopupCode from './AuthPopupCode.vue'
// eslint-disable-next-line no-unused-vars
import AuthPopupPassword from './AuthPopupPassword.vue'
// eslint-disable-next-line no-unused-vars
import AuthPopupComplete from './AuthPopupComplete.vue'

const nameAuth = ref('')

const changePage = computed(() => 'AuthPopup' + nameAuth.value)
</script>

<template>
  <div>
    <keep-alive>
      <component :is="changePage">
        <template #toRecovery>
          <p class="auth__forgot" @click="nameAuth = 'Recovery'">
            Забыли пароль?
          </p>
        </template>
        <template #backToAuth>
          <div class="auth__back__btn" @click="nameAuth = ''">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template #backToAuthMobile>
          <div class="auth__back__btn__mobile" @click="nameAuth = ''">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          </div>
        </template>
        <template #backToRecoveryMobile>
          <div class="auth__back__btn__mobile" @click="nameAuth = 'Recovery'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          </div>
        </template>
        <template #toCode>
          <BigButton
            title="Отправить"
            style="width: 236px; height: 48px; margin-bottom: 24px"
            @click="nameAuth = 'Code'"
          />
        </template>
        <template #toCodeMobile>
          <BigButton
            title="Отправить"
            style="width: 85.89vw; height: 15.38vw; margin-bottom: 12.3vw"
            @click="nameAuth = 'Code'"
          />
        </template>
        <template #backToAuthSpan>
          <span @click="nameAuth = ''">Войти</span>
        </template>
        <template #backToCodeMobile>
          <div class="auth__back__btn__mobile" @click="nameAuth = 'Code'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          </div>
        </template>
        <template #backToRecovery>
          <div class="auth__back__btn" @click="nameAuth = 'Recovery'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template #toNewPassword>
          <BigButton
            title="Продолжить"
            style="width: 236px; height: 48px; margin-bottom: 24px"
            @click="nameAuth = 'Password'"
          />
        </template>
        <template #toNewPasswordMobile>
          <BigButton
            title="Продолжить"
            style="width: 85.89vw; height: 15.38vw; margin-bottom: 12.3vw"
            @click="nameAuth = 'Password'"
          />
        </template>
        <template #backToCode>
          <div class="auth__back__btn" @click="nameAuth = 'Code'">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </template>
        <template #toComplete>
          <BigButton
            title="Сохранить"
            style="width: 236px; height: 48px; margin-bottom: 146px"
            @click="nameAuth = 'Complete'"
          />
        </template>
        <template #toCompleteMobile>
          <BigButton
            title="Сохранить"
            style="width: 85.89vw; height: 15.38vw; margin-top: 8.2vw"
            @click="nameAuth = 'Complete'"
          />
        </template>
        <template #toAuth>
          <BigButton
            title="Сохранить"
            style="width: 236px; height: 48px; margin-bottom: 146px"
            @click="nameAuth = ''"
          />
        </template>
        <template #toAuthMobile>
          <BigButton
            title="Сохранить"
            style="width: 85.89vw; height: 15.38vw; margin-bottom: 63.3vw"
            @click="nameAuth = ''"
          />
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<style lang="scss">
.auth__back__btn__mobile {
  cursor: pointer;
  position: fixed;
  top: 55px;
  left: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
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
