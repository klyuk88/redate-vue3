<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import SignupPopupFirst from './SignupPopupFirst.vue'
import SignupPopupSecond from './SignupPopupSecond.vue'
import SignupPopupThird from './SignupPopupThird.vue'
import SignupPopupFourth from './SignupPopupFourth.vue'
import SignupPopupFive from './SignupPopupFive.vue'
import BigButton from '../Form/BigButton.vue'
import SignupPopup from './SignupPopup.vue'
import SignupPopupDenied from './SignupPopupDenied.vue'
import SignupPopupCode from './SignupPopupCode.vue'

const router = useRouter()

const query = router?.currentRoute?.value?.query?.stage

let stage = ''

if (query) {
  stage = `${query[0].toUpperCase()}${query.slice(1)}`
}

const userStore = useUserStore()

const nameComponent = ref(stage || '')

const error = ref(false)
const errorMessage = ref('')
const errorType = ref('')

const changeComponent = computed(() => {
  const componentName = 'SignupPopup' + nameComponent.value

  let changeComponent = null

  switch (componentName) {
    case 'SignupPopupFirst':
      changeComponent = SignupPopupFirst
      break
    case 'SignupPopupSecond':
      changeComponent = SignupPopupSecond
      break
    case 'SignupPopupThird':
      changeComponent = SignupPopupThird
      break
    case 'SignupPopupFourth':
      changeComponent = SignupPopupFourth
      break
    case 'SignupPopupFive':
      changeComponent = SignupPopupFive
      break
    case 'SignupPopupDenied':
      changeComponent = SignupPopupDenied
      break
    case 'SignupPopupCode':
      changeComponent = SignupPopupCode
      break
    default:
      changeComponent = SignupPopup
      break
  }
  return changeComponent
})

const registration = async (props) => {
  const { email, password, repeatPassword } = props

  if (!email.length) {
    error.value = true
    errorMessage.value = 'Введите email'
    errorType.value = 'email'

    return
  }

  if (!password.length) {
    error.value = true
    errorMessage.value = 'Введите пароль'
    errorType.value = 'password'

    return
  }

  if (!repeatPassword.length) {
    error.value = true
    errorMessage.value = 'Введите пароль'
    errorType.value = 'repeatPassword'

    return
  }

  if (password !== repeatPassword) {
    error.value = true
    errorMessage.value = 'Пароли не совпадают'
    errorType.value = ''

    return
  }

  const sex = localStorage.getItem('sex')

  const registrationResponse = await userStore.registration(
    email,
    password,
    sex
  )

  if (registrationResponse.status) {
    error.value = true
    errorMessage.value = registrationResponse.message
    errorType.value = ''

    return
  }

  nameComponent.value = 'Code'
}

const acceptEmail = async (props) => {
  const { code } = props

  const codeStr = code.join('')

  if (!codeStr.length) {
    error.value = true
    errorMessage.value = 'Введите код'
    errorType.value = ''

    return
  }

  const email = localStorage.getItem('email') || ''

  const acceptEmailResponse = await userStore.acceptEmail(email, codeStr)

  if (acceptEmailResponse.status) {
    error.value = true
    errorMessage.value = acceptEmailResponse.message
    errorType.value = ''

    return
  }

  nameComponent.value = 'Third'
}
</script>

<template>
  <div>
    <component
      :is="changeComponent"
      :error="error"
      :error-message="errorMessage"
      :error-type="errorType"
    >
      <template #firstPhase>
        <BigButton
          title="Да, мне есть 18"
          style="
            width: 193px;
            height: 48px;
            font-family: 'Mulish';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 153.5%;
          "
          @click="nameComponent = 'First'"
        />
      </template>
      <template #toDenied>
        <BigButton
          title="Нет, мне нет 18"
          style="
            width: 193px;
            height: 48px;
            font-family: 'Mulish';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 153.5%;
            line-height: 132.5%;
            margin-left: 8px;
            border: 1px solid rgba(255, 255, 255, 0.33);
            border-radius: 11px;
            background: none;
          "
          @click="nameComponent = 'Denied'"
        />
      </template>
      <template #toDeniedMobile>
        <BigButton
          title="Нет, мне нет 18"
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 11px 36px;
            gap: 10px;
            width: 335px;
            height: 47px;
            border: 1px solid rgba(255, 255, 255, 0.33);
            border-radius: 11px;
            font-size: 16px;
            margin: 16px 0 141px 0;
            background: none;
          "
          @click="nameComponent = 'Denied'"
        />
      </template>
      <template #firstPhaseMobile>
        <BigButton
          title="Да, мне есть 18"
          style="
            width: 335px;
            height: 48px;
            font-family: 'Mulish';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 153.5%;
          "
          @click="nameComponent = 'First'"
        />
      </template>
      <template #secondPhase="secondPhaseProps">
        <BigButton
          title="Продолжить"
          style="width: 236px; height: 48px"
          @click="registration(secondPhaseProps)"
        />
      </template>
      <template #secondPhaseMobile="secondPhaseMobileProps">
        <BigButton
          title="Продолжить"
          style="
            width: 85.89vw;
            height: 15.38vw;
            margin-top: 8.2vw;
            margin-bottom: 6.15vw;
          "
          @click="registration(secondPhaseMobileProps)"
        />
      </template>
      <template #thirdPhase="thirdPhaseProps">
        <BigButton
          title="Продолжить"
          style="width: 236px; height: 48px"
          @click="acceptEmail(thirdPhaseProps)"
        />
      </template>
      <template #thirdPhaseMobilee="thirdPhaseMobileProps">
        <BigButton
          title="Продолжить"
          style="
            width: 85.89vw;
            height: 15.38vw;
            margin-top: 12.3vw;
            margin-bottom: 6.15vw;
          "
          @click="acceptEmail(thirdPhaseMobileProps)"
        />
      </template>
      <template #backStartPage>
        <router-link to="/">
          <div class="auth__back__btn">
            <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
            <h1 class="auth__back__btn__title">Назад</h1>
          </div>
        </router-link>
      </template>
      <template #backPhaseOne>
        <div class="auth__back__btn" @click="nameComponent = 'First'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template #backPhaseOneMobile>
        <div class="auth__back__btn__mobile" @click="nameComponent = 'First'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        </div>
      </template>
      <template #fourthPhase>
        <BigButton
          title="Продолжить"
          style="width: 236px; height: 48px"
          @click="nameComponent = 'Fourth'"
        />
      </template>
      <template #fourthPhaseMobile>
        <BigButton
          title="Продолжить"
          style="width: 85.89vw; height: 15.38vw; margin-bottom: 6.15vw"
          @click="nameComponent = 'Fourth'"
        />
      </template>
      <template #backPhaseTwoMobile>
        <div class="auth__back__btn__mobile" @click="nameComponent = 'Second'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        </div>
      </template>
      <template #backPhaseTwo>
        <div class="auth__back__btn" @click="nameComponent = 'Second'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template #mobileSkip>
        <p class="skip" @click="nameComponent = 'Fourth'">Пропустить</p>
      </template>
      <template #fivePhase>
        <BigButton
          title="Продолжить"
          style="width: 236px; height: 48px"
          @click="nameComponent = 'Five'"
        />
      </template>
      <template #fivePhaseMobile>
        <BigButton
          title="Продолжить"
          style="width: 85.89vw; height: 15.38vw; margin-bottom: 6.15vw"
          @click="nameComponent = 'Five'"
        />
      </template>
      <template #backPhaseThreeMobile>
        <div class="auth__back__btn__mobile" @click="nameComponent = 'Third'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        </div>
      </template>
      <template #backPhaseThree>
        <div class="auth__back__btn" @click="nameComponent = 'Third'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template #choosePhase>
        <BigButton
          title="Загрузить с компьютера"
          style="width: 228px; height: 35px"
        />
      </template>
      <template #backPhaseFourthMobile>
        <div class="auth__back__btn__mobile" @click="nameComponent = 'Fourth'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        </div>
      </template>
      <template #backPhaseFour>
        <div class="auth__back__btn" @click="nameComponent = 'Fourth'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
    </component>
  </div>
</template>

<style lang="scss">
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
.skip {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #ffffff;
}
</style>
