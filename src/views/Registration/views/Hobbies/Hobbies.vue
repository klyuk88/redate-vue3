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

const hobbies = computed(() => registrationStore.hobbies.data)
const selectedHobbies = computed(() => {
  let counter = 0

  hobbies.value.forEach((hobby) => {
    if (hobby.active) {
      counter++
    }
  })

  return counter
})
const hobbiesError = computed(() => registrationStore.hobbies.error?.status)

onMounted(async () => {
  if (!registrationStore.hobbies.data.length) {
    await DatabaseService.hobbies()

    RegistrationService.hobbies()
  }
})

const clickSelectHandler = (hobby) => {
  RegistrationService.setActiveHobby(hobby)
}

const clickHandler = () => {
  router.push('/registration/third')
}

const backLinkClickHandler = () => {
  router.push('/registration/third')
}
</script>

<template>
  <div class="hobbies">
    <div class="hobbies__form">
      <StartForm>
        <div class="hobbies__block">
          <div class="hobbies__back-link">
            <UiBackLink title="" @click="backLinkClickHandler()" />
          </div>

          <div class="hobbies__title">Выберете до 5 увлечений:</div>

          <div class="hobbies__selected">
            Выбрано: <span>{{ selectedHobbies }}</span>
          </div>

          <Select
            :elements="hobbies"
            :max="5"
            @click="clickSelectHandler($event)"
          />
        </div>
      </StartForm>
    </div>

    <div class="hobbies__button">
      <UiButton
        size="big"
        title="Выбрать"
        :disabled="hobbiesError"
        @click="clickHandler()"
      />
    </div>
  </div>
</template>

<style lang="scss">
.hobbies {
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
  .hobbies {
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
