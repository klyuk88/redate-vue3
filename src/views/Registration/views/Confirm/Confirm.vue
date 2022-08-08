<script setup>
import { useRouter } from 'vue-router'
import StartForm from '@/components/StartForm'
import UiButton from '@/ui/UiButton'
import UiTextLink from '@/ui/UiTextLink'
import UiTerms from '@/ui/UiTerms'

const router = useRouter()

const successClickHandler = () => {
  router.push({ name: 'Registration first' })
}

const unSuccessClickHandler = () => {
  router.push({ name: 'Registration forbidden' })
}
</script>

<template>
  <div class="confirm">
    <div class="confirm__form">
      <StartForm
        title="18+"
        description="Наш сайт предназначен для совершеннолетних. Перед продложением регистрации пожалуйста подтвердите свой возраст."
        type="second"
      >
        <div class="confirm__block">
          <div class="confirm__button">
            <UiButton
              title="Да, мне есть 18"
              size="normal-auto"
              @click="successClickHandler()"
            />
          </div>

          <div class="confirm__button">
            <UiButton
              title="Нет, мне нет 18"
              size="normal-auto"
              variant="secondary"
              @click="unSuccessClickHandler()"
            />
          </div>
        </div>

        <div class="confirm__auth">
          <UiTextLink answer="Есть учетная запись?" link="Войти" to="/auth" />
        </div>

        <div class="confirm__terms">
          <UiTerms />
        </div>
      </StartForm>
    </div>
  </div>
</template>

<style lang="scss">
.confirm {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 240px;

  &__block {
    display: flex;
    align-items: center;
  }

  &__button {
    width: calc(50% - 4px);
    margin-left: 8px;

    &:first-child {
      margin-left: 0;
    }
  }

  &__auth {
    display: none;
  }

  &__terms {
    display: none;
  }
}

@media only screen and (max-width: 991px) {
  .confirm {
    height: auto;
    min-height: auto;

    &__form {
      width: 100%;
      max-width: 335px;
      margin-top: 259px;
    }

    &__block {
      flex-direction: column;
    }

    &__button {
      width: 100%;
      margin-left: 0;
      margin-top: 16px;

      &:first-child {
        margin-top: 0;
      }
    }

    &__auth {
      display: flex;
      justify-content: center;
      margin-top: 141px;
    }

    &__terms {
      display: block;
      margin-top: 28px;
      margin-bottom: 60px;
    }
  }
}
</style>
