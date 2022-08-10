<!-- eslint-disable indent -->
<script setup>
import { ref, computed } from 'vue'
import { useRegistrationStore } from '../../store/registration'
import { RegistrationService } from '../../services'
import StartForm from '@/components/StartForm'
import Tabs from '../../components/Tabs'
import Elements from '../../components/Elements'
import UiButton from '@/ui/UiButton'

const registrationStore = useRegistrationStore()

const attitudeToAlcohol = ref(
  registrationStore.thirdStage.data?.attitudeToAlcohol ||
    JSON.parse(localStorage.getItem('attitudeToAlcohol')) || [
      {
        id: 1,
        title: 'Негавтиное',
        active: false,
      },
      {
        id: 2,
        title: 'Нейтральное',
        active: true,
      },
      {
        id: 3,
        title: 'Хорошее',
        active: false,
      },
    ]
)

const attitudeTowardsSmoking = ref(
  registrationStore.thirdStage.data?.attitudeTowardsSmoking ||
    JSON.parse(localStorage.getItem('attitudeTowardsSmoking')) || [
      {
        id: 1,
        title: 'Негавтиное',
        active: false,
      },
      {
        id: 2,
        title: 'Нейтральное',
        active: true,
      },
      {
        id: 3,
        title: 'Хорошее',
        active: false,
      },
    ]
)

const hobbies = computed(() =>
  registrationStore.hobbies.data.filter((hobby) => hobby.active)
)

const languages = computed(() =>
  registrationStore.languages.data.filter((language) => language.active)
)

const changeAttitudeToAlcoholTabsHandler = (tab) => {
  attitudeToAlcohol.value.forEach((value) => {
    if (value.title === tab.title) {
      value.active = true
    } else {
      value.active = false
    }
  })

  localStorage.setItem(
    'attitudeToAlcohol',
    JSON.stringify(attitudeToAlcohol.value)
  )
}

const changeAttitudeTowardsSmokingTabsHandler = (tab) => {
  attitudeTowardsSmoking.value.forEach((value) => {
    if (value.title === tab.title) {
      value.active = true
    } else {
      value.active = false
    }
  })

  localStorage.setItem(
    'attitudeTowardsSmoking',
    JSON.stringify(attitudeTowardsSmoking.value)
  )
}

const clickHandler = () => {
  RegistrationService.saveThirdStage({
    hobbies: registrationStore.hobbies.data,
    languages: registrationStore.languages.data,
    attitudeToAlcohol: attitudeToAlcohol.value,
    attitudeTowardsSmoking: attitudeTowardsSmoking.value,
  })
}

const removeHobbyHandler = (hobby) => {
  RegistrationService.setActiveHobby(hobby)
}

const removeLanguageHandler = (language) => {
  RegistrationService.setActiveLanguage(language)
}
</script>

<template>
  <div class="third">
    <div class="third__form">
      <StartForm>
        <div class="third__block">
          <span class="third__title">Отношение к алкоголю:</span>
          <Tabs
            :tabs="attitudeToAlcohol"
            @click="changeAttitudeToAlcoholTabsHandler($event)"
          />
        </div>
        <div class="third__block">
          <span class="third__title">Отношение к курению:</span>
          <Tabs
            :tabs="attitudeTowardsSmoking"
            @click="changeAttitudeTowardsSmokingTabsHandler($event)"
          />
        </div>
        <div class="third__block">
          <span class="third__title">Увлечения:</span>
          <Elements
            to="/registration/hobbies"
            :elements="hobbies"
            @remove="removeHobbyHandler($event)"
          />
        </div>
        <div class="third__block">
          <span class="third__title">Знание языков:</span>
          <Elements
            to="/registration/languages"
            :elements="languages"
            @remove="removeLanguageHandler($event)"
          />
        </div>
      </StartForm>
    </div>

    <div class="third__button">
      <UiButton size="big" title="Продолжить" @click="clickHandler()" />
    </div>

    <router-link to="/registration/fourth" class="third__skip">
      Пропустить
    </router-link>
  </div>
</template>

<style lang="scss">
.third {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__form {
    margin-top: 171px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
    margin-top: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &__title {
    display: inline-block;
    margin-bottom: 12px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: #ffffff;
  }

  &__button {
    margin-top: 49px;
    margin-bottom: 24px;
  }

  &__skip {
    display: inline-block;
    margin-bottom: 62px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #ffffff;
    text-decoration: underline;
  }
}

@media only screen and (max-width: 991px) {
  .third {
    &__form {
      width: 100%;
      margin-top: 130px;
    }

    &__block {
      padding-bottom: 16px;
      margin-top: 16px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
      margin-bottom: 24px;
    }

    &__skip {
      margin-bottom: 88px;
    }
  }
}
</style>
