<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { DatabaseService } from '@/services/database'
import { useRegistrationStore } from '../../store/registration'
import { RegistrationService } from '../../services'
import StartForm from '@/components/StartForm'
import Select from '../../components/Select'
import UiButton from '@/ui/UiButton'
import UiBackLink from '@/ui/UiBackLink'

const router = useRouter()

const registrationStore = useRegistrationStore()

const languages = computed(() => registrationStore.languages.data)
const selectedlanguages = computed(() => {
  let counter = 0

  languages.value.forEach((language) => {
    if (language.active) {
      counter++
    }
  })

  return counter
})
const languagesError = computed(() => registrationStore.languages.error?.status)

onMounted(async () => {
  if (!registrationStore.languages.data.length) {
    await DatabaseService.languages()

    RegistrationService.languages()
  }
})

const clickSelectHandler = (language) => {
  RegistrationService.setActiveLanguage(language)
}

const clickHandler = () => {
  router.push('/registration/third')
}

const backLinkClickHandler = () => {
  router.push('/registration/third')
}
</script>

<template>
  <div class="languages">
    <div class="languages__form">
      <StartForm>
        <div class="languages__block">
          <div class="languages__back-link">
            <UiBackLink title="" @click="backLinkClickHandler()" />
          </div>

          <div class="languages__title">Выберете до 5 языков:</div>

          <div class="languages__selected">
            Выбрано: <span>{{ selectedlanguages }}</span>
          </div>

          <Select
            :elements="languages"
            :max="5"
            @click="clickSelectHandler($event)"
          />
        </div>
      </StartForm>
    </div>

    <div class="languages__button">
      <UiButton
        size="big"
        title="Выбрать"
        :disabled="languagesError"
        @click="clickHandler()"
      />
    </div>
  </div>
</template>

<style lang="scss">
.languages {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 939px;

  &__block {
    position: relative;
  }

  &__back-link {
    position: absolute;
    top: 3px;
    left: 0;
  }

  &__title {
    margin-bottom: 24px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 153.5%;
    color: #ffffff;
    text-align: center;
  }

  &__selected {
    margin-bottom: 12px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: rgba(255, 255, 255, 0.33);
    text-align: center;

    span {
      color: #ffffff;
    }
  }

  &__button {
    margin-top: 51px;
    margin-bottom: 108px;
  }
}

@media only screen and (max-width: 991px) {
  .languages {
    justify-content: flex-start;
    min-height: auto;

    &__form {
      width: 100%;
      margin-top: 64px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
      margin-bottom: 113px;
    }
  }
}
</style>
