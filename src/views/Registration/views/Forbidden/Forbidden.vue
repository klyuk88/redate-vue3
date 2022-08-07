<script setup>
import { computed } from 'vue'
import { useRegistrationStore } from '../../store/registration'
import { RegistrationService } from '../../services'
import StartForm from '@/components/StartForm'
import UiButton from '@/ui/UiButton'
import UiTextLink from '@/ui/UiTextLink'
import UiTerms from '@/ui/UiTerms'
import DeniedIcon from '@/assets/images/icons/denied.svg'

const registrationStore = useRegistrationStore()

const isLoading = computed(() => registrationStore.forbidden.isLoading)

const clickHandler = () => {
  RegistrationService.forbidden()
}
</script>

<template>
  <div class="forbidden">
    <div class="forbidden__form">
      <StartForm
        :icon="DeniedIcon"
        description="Благодарим за честный ответ! <br>Мы с нетерпением ждем Вас, когда вы достигните своего соврешеннолетия!"
        type="second"
      >
        <div class="forbidden__button">
          <UiButton
            size="normal-auto"
            title="Спасибо!"
            :is-loading="isLoading"
            @click="clickHandler()"
          />
        </div>

        <div class="forbidden__auth">
          <UiTextLink answer="Есть учетная запись?" link="Войти" to="/auth" />
        </div>

        <div class="forbidden__terms">
          <UiTerms />
        </div>
      </StartForm>
    </div>
  </div>
</template>

<style lang="scss">
.forbidden {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 240px;

  &__button {
    width: 100%;
  }

  &__auth {
    display: none;
  }

  &__terms {
    display: none;
  }
}

@media only screen and (max-width: 991px) {
  .forbidden {
    height: auto;
    min-height: auto;

    &__form {
      width: 100%;
      max-width: 335px;
      margin-top: 262px;
    }

    &__button {
      width: 100%;
      margin-left: 0;
      margin-top: 16px;

      &:first-child {
        margin-top: 13px;
      }
    }

    &__auth {
      display: flex;
      justify-content: center;
      margin-top: 201px;
    }

    &__terms {
      display: block;
      margin-top: 28px;
      margin-bottom: 60px;
    }
  }
}
</style>
