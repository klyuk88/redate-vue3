<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './store/auth'
import { AuthService } from './services'
import UiBackLink from '@/ui/UiBackLink'
import UiButton from '@/ui/UiButton'
import UiTextLink from '@/ui/UiTextLink'
import UiInput from '@/ui/UiInput'
import UiErrorMessage from '@/ui/UiErrorMessage'
import StartForm from '@/components/StartForm'
import ForgotPasswordLink from './components/ForgotPasswordLink'

const router = useRouter()

const authStore = useAuthStore()

const isAnimate = ref(false)

const email = ref('')
const password = ref('')

const emailError = ref(false)
const passwordError = ref(false)
const errorMessage = ref('')

const isLoading = computed(() => authStore.auth.isLoading)

const authError = computed(() => authStore.auth.error)

const passwordInputType = ref('password')

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

const backLinkClickHandler = () => {
  router.push({ name: 'StartPage' })
}

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

  await AuthService.auth(email.value, password.value)
}

const changeTypeHandler = () => {
  passwordInputType.value =
    passwordInputType.value === 'password' ? 'text' : 'password'
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
  <div class="auth">
    <div class="auth__back-link">
      <UiBackLink @click="backLinkClickHandler()" />
    </div>

    <div class="auth__form">
      <StartForm
        title="Вход"
        description="Введите данные для входа в учетеную запись"
        :animate="isAnimate"
      >
        <div class="auth__block">
          <div class="auth__input">
            <UiInput
              v-model:value="email"
              type="text"
              placeholder="Электронная почта"
              :error="emailError"
              @focus="startAnimate()"
            />
          </div>

          <div class="auth__input">
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

          <p
            v-if="emailError || passwordError || authError?.status"
            class="auth__error"
          >
            <UiErrorMessage :message="errorMessage || authError?.message" />
          </p>
        </div>
      </StartForm>
    </div>

    <div class="auth__reverse">
      <div class="auth__forgot-password">
        <ForgotPasswordLink />
      </div>

      <div class="auth__button">
        <UiButton
          title="Войти"
          size="big"
          :is-loading="isLoading"
          @click="buttonClickHandler()"
        />
      </div>
    </div>

    <div class="auth__registration">
      <UiTextLink
        answer="Нет учетной записи?"
        link="Регистрация"
        to="/registration"
      />
    </div>
  </div>
</template>

<style lang="scss">
.auth {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 939px;
  background: #1c1d21;

  &__back-link {
    position: fixed;
    top: 70px;
    left: 40px;
  }

  &__reverse {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__forgot-password {
    margin-top: 23px;
  }

  &__button {
    margin-top: 84px;
  }

  &__registration {
    margin: 24px 0 89px 0;
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
}

@media only screen and (max-width: 991px) {
  .auth {
    justify-content: flex-start;
    min-height: auto;
    padding: 0 20px;

    &__back-link {
      display: none;
    }

    &__form {
      width: 100%;
      margin-top: 106px;
    }

    &__reverse {
      flex-direction: column-reverse;
      width: 100%;
    }

    &__forgot-password {
      margin-top: 24px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
    }

    &__registration {
      margin: 180px 0 56px 0;
    }
  }
}
</style>
