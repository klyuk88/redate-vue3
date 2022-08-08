<script setup>
import { ref, watch, computed } from 'vue'
import { useRegistrationStore } from '../../store/registration'
import { RegistrationService } from '../../services'
import StartForm from '@/components/StartForm'
import UiInputCode from '@/ui/UiInputCode'
import UiButton from '@/ui/UiButton'
import UiErrorMessage from '@/ui/UiErrorMessage'

const registrationStore = useRegistrationStore()

const isAnimate = ref(false)

const code = ref([])

const codeError = ref(false)
const errorMessage = ref('')

const isLoading = computed(() => registrationStore.acceptEmail.isLoading)

const acceptError = computed(() => registrationStore.acceptEmail.error)

watch(isAnimate, () => {
  if (isAnimate.value) {
    stopAnimateByTimeout()
  }
})

watch(code, () => {
  if (code.value.length) {
    codeError.value = false
    errorMessage.value = ''
  }
})

const inputHandler = (event) => {
  code.value = event
}

const clickHandler = async () => {
  if (code.value.length !== 4) {
    codeError.value = true
    errorMessage.value = 'Введите код'

    return
  }

  await RegistrationService.acceptEmail(code.value)
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
  <div class="accept">
    <div class="accept__form">
      <StartForm
        title="Введите код"
        description="Мы отправили вам код на электронную почту, введите его для продожления регистрации."
        :animate="isAnimate"
        type="third"
      >
        <UiInputCode
          :error="codeError"
          @input="inputHandler($event)"
          @focus="startAnimate()"
        />

        <p v-if="codeError || acceptError?.status" class="accept__error">
          <UiErrorMessage :message="errorMessage || acceptError?.message" />
        </p>
      </StartForm>
    </div>

    <div class="accept__button">
      <UiButton
        title="Отправить"
        size="big"
        :is-loading="isLoading"
        @click="clickHandler()"
      />
    </div>
  </div>
</template>

<style lang="scss">
.accept {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 939px;

  &__button {
    margin: 163px 0 146px 0;
  }

  &__error {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 991px) {
  .accept {
    justify-content: flex-start;
    min-height: auto;

    &__form {
      width: 100%;
      margin-top: 166px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
    }
  }
}
</style>
