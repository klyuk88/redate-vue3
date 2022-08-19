<script setup>
import { useRouter } from 'vue-router'
import StartForm from '@/components/StartForm'
import UiButton from '@/ui/UiButton'

const router = useRouter()

const clickHandler = () => {
  router.push('/main')
}
</script>

<template>
  <div class="success">
    <div class="success__form">
      <StartForm type="fourth">
        <div class="success__block">
          <img
            src="@/assets/images/icons/success.svg"
            class="success__image"
            alt="success"
          />

          <h2 class="success__title">Начните знакомства!</h2>

          <p class="success__descr">
            Вы успешно зарегистрированы! Начните знакомства и (или) создайте
            расслыку с вашим предложением!
          </p>
        </div>
      </StartForm>
    </div>

    <div class="success__button">
      <UiButton title="Отлично!" size="big" @click="clickHandler()" />
    </div>
  </div>
</template>

<style lang="scss">
.success {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 939px;

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    display: inline-block;
    margin-top: 52px;
    font-family: 'Mulish';
    font-weight: 600;
    font-size: 34px;
    line-height: 43px;
    color: #ffffff;
  }

  &__descr {
    display: inline-block;
    margin-top: 10px;
    font-family: 'Mulish';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
  }

  &__button {
    margin-top: 90px;
    margin-bottom: 146px;
  }
}

@media only screen and (max-width: 991px) {
  .success {
    justify-content: flex-start;
    min-height: auto;

    &__form {
      width: 100%;
      margin-top: 202px;
    }

    &__title {
      margin-top: 40px;
      display: inline-block;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }

    &__descr {
      margin-top: 12px;
    }

    &__button {
      margin-top: 97px;
      margin-bottom: 159px;
      width: 236px;
    }
  }
}
</style>
