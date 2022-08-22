<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useRegistrationStore } from '../../store/registration'
import { RegistrationService } from '../../services'
import StartForm from '@/components/StartForm'
import UiButton from '@/ui/UiButton'
import UiTextLink from '@/ui/UiTextLink'
import UiInput from '@/ui/UiInput'
import UiErrorMessage from '@/ui/UiErrorMessage'
import UiTerms from '@/ui/UiTerms'

const registrationStore = useRegistrationStore()

const isAnimate = ref(false)

const email = ref('')
const password = ref('')
const passwordRepeat = ref('')

const emailError = ref(false)
const passwordError = ref(false)
const passwordRepeatError = ref(false)
const errorMessage = ref('')

const passwordInputType = ref('password')
const passwordRepeatInputType = ref('password')

const isLoading = computed(() => registrationStore.registration.isLoading)

const registrationError = computed(() => registrationStore.registration.error)

watch(isAnimate, () => {
  if (isAnimate.value) {
    stopAnimateByTimeout()
  }
})

watch(email, () => {
  if (email.value.length) {
    emailError.value = false
    errorMessage.value = ''
  }
})

watch(password, () => {
  if (password.value.length) {
    passwordError.value = false
    errorMessage.value = ''
  }
})

watch(passwordRepeat, () => {
  if (passwordRepeat.value.length) {
    passwordRepeatError.value = false
    errorMessage.value = ''
  }
})

onMounted(() => {
  localStorage.removeItem('tokens')
})

const buttonClickHandler = async () => {
  if (!email.value.length) {
    emailError.value = true
    errorMessage.value = 'Введите email'

    return
  }

  if (!password.value.length) {
    passwordError.value = true
    errorMessage.value = 'Введите пароль'

    return
  }

  if (!passwordRepeat.value.length) {
    passwordRepeatError.value = true
    errorMessage.value = 'Введите пароль'

    return
  }

  if (password.value !== passwordRepeat.value) {
    passwordError.value = true
    passwordRepeatError.value = true
    errorMessage.value = 'Пароли не совпадают'

    return
  }

  await RegistrationService.registration(email.value, password.value)
}

const changeTypeHandler = () => {
  passwordInputType.value =
    passwordInputType.value === 'password' ? 'text' : 'password'
}

const changeTypeRepeatPasswordHandler = () => {
  passwordRepeatInputType.value =
    passwordRepeatInputType.value === 'password' ? 'text' : 'password'
}

const startAnimate = () => {
  isAnimate.value = true
}

const stopAnimateByTimeout = () => {
  setTimeout(() => {
    isAnimate.value = false
  }, 700)
}
</script>

<template>
  <div class="first">
    <div class="first__form">
      <StartForm
        title="Регистрация"
        description="Начните новые знакомства после быстрой регистрации. Ваши данные будут защищены."
        :animate="isAnimate"
      >
        <div class="first__block">
          <div class="first__input">
            <UiInput
              v-model:value="email"
              type="text"
              placeholder="Электронная почта"
              :error="emailError"
              @focus="startAnimate()"
            />
          </div>

          <div class="first__input">
            <UiInput
              v-model:value="password"
              :type="passwordInputType"
              placeholder="Пароль"
              :error="passwordError"
              :eye="true"
              @focus="startAnimate()"
              @change-type="changeTypeHandler()"
            />
          </div>

          <div class="first__input">
            <UiInput
              v-model:value="passwordRepeat"
              :type="passwordRepeatInputType"
              placeholder="Повторите пароль"
              :error="passwordRepeatError"
              :eye="true"
              @focus="startAnimate()"
              @change-type="changeTypeRepeatPasswordHandler()"
            />
          </div>

          <div
            v-if="
              emailError ||
              passwordError ||
              passwordRepeatError ||
              registrationError?.status
            "
            class="first__error"
          >
            <UiErrorMessage
              :message="errorMessage || registrationError?.message"
            />
          </div>
        </div>
      </StartForm>
    </div>

    <div class="first__button">
      <UiButton
        title="Продолжить"
        size="big"
        :is-loading="isLoading"
        @click="buttonClickHandler()"
      />
    </div>

    <div class="first__auth">
      <UiTextLink answer="Есть учетная запись?" link="Войти" to="/auth" />
    </div>

    <div class="first__terms">
      <UiTerms />
    </div>
  </div>
</template>

<style lang="scss">
.first {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 939px;

  &__button {
    margin-top: 84px;
  }

  &__auth {
    margin: 24px 0;
  }

  &__input {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }

  &__error {
    margin-top: 10px;
  }

  &__terms {
    width: 100%;
    max-width: 340px;
    margin-bottom: 45px;
  }
}

@media only screen and (max-width: 991px) {
  .first {
    justify-content: flex-start;
    min-height: auto;

    &__form {
      width: 100%;
      margin-top: 106px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
    }

    &__auth {
      margin: 24px 0 88px 0;
    }

    &__terms {
      margin-bottom: 61px;
    }
  }
}
</style>
