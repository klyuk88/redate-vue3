<script setup>
import { ref, watch, computed } from 'vue'
import { useRegistrationStore } from '../../store/registration'
import StartForm from '@/components/StartForm'
import UiInput from '@/ui/UiInput'
import UiButton from '@/ui/UiButton'
import UiSelect from '@/ui/UiSelect'
import UiInputBirthday from '@/ui/UiInputBirthday'
import UiInputParams from '@/ui/UiInputParams'

const registrationStore = useRegistrationStore()

const isAnimate = ref(false)

const name = ref('')

const dayValue = ref('')
const monthValue = ref('')
const yearValue = ref('')

const nameError = ref(false)
const errorMessage = ref('')

const sex = computed(() => Number(registrationStore.sex))

watch(isAnimate, () => {
  if (isAnimate.value) {
    stopAnimateByTimeout()
  }
})

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
  <div class="second">
    <div class="second__form">
      <StartForm :animate="isAnimate">
        <div class="second__block">
          <div class="second__input">
            <UiInput
              v-model:value="name"
              type="text"
              placeholder="Имя"
              @focus="startAnimate()"
            />
          </div>

          <div class="second__input">
            <UiSelect placeholder="Cтрана" />
          </div>

          <div class="second__input">
            <UiSelect placeholder="Город" />
          </div>

          <div class="second__input">
            <UiSelect placeholder="Национальность" />
          </div>

          <div class="second__birthday">
            <span class="second__birthday-title">Дата рождения:</span>

            <UiInputBirthday
              v-model:day-value="dayValue"
              v-model:month-value="monthValue"
              v-model:year-value="yearValue"
            />
          </div>

          <div class="second__line"></div>

          <div v-if="sex === 1" class="second__man">
            <div class="second__man-block">
              <span class="second__man-title">Рост:</span>
              <div class="second__man-input">
                <UiInput placeholder="180" :center="true" :max="3" />
              </div>
            </div>

            <div class="second__man-block">
              <span class="second__man-title">Вес:</span>
              <div class="second__man-input">
                <UiInput placeholder="80" :center="true" :max="3" />
              </div>
            </div>
          </div>

          <div v-else class="second__woman">
            <div class="second__woman-block">
              <span class="second__woman-title">Рост:</span>
              <div class="second__woman-input">
                <UiInput placeholder="180" :center="true" :max="3" />
              </div>
            </div>

            <div class="second__woman-block">
              <span class="econd__woman-title">Вес:</span>
              <div class="second__woman-input">
                <UiInput placeholder="80" :center="true" :max="3" />
              </div>
            </div>

            <div class="second__woman-block">
              <span class="second__woman-title">Параметры:</span>
              <div class="second__woman-params">
                <UiInputParams />
              </div>
            </div>
          </div>

          <p class="second__message">*Необязательно для заполнения</p>

          <p v-if="nameError" class="second__error">
            <UiErrorMessage :message="errorMessage" />
          </p>
        </div>
      </StartForm>
    </div>

    <div class="second__button">
      <UiButton size="big" title="Продолжить" />
    </div>
  </div>
</template>

<style lang="scss">
.second {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 939px;

  &__form {
    margin-top: 209px;
  }

  &__button {
    margin-top: 70px;
    margin-bottom: 107px;
  }

  &__input {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }

  &__birthday {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }

  &__birthday-title {
    font-family: 'Mulish';
    color: #ffffff;
    font-size: 14px;
    line-height: 153.5%;
    font-weight: 500;
  }

  &__line {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.14);
    margin: 24px 0;
  }

  &__man {
    display: flex;
    align-items: center;

    &-block {
      display: flex;
      align-items: center;
      margin-right: 46px;

      &:last-child {
        margin-right: 0;
      }
    }

    &-title {
      font-family: 'Mulish';
      color: #ffffff;
      font-weight: 500;
      font-size: 14px;
      line-height: 153.5%;
    }

    &-input {
      margin-left: 26px;
      width: 60px;
    }
  }

  &__woman {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-block {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-title {
      font-family: 'Mulish';
      color: #ffffff;
      font-weight: 500;
      font-size: 14px;
      line-height: 153.5%;
    }

    &-input {
      width: 60px;
      margin-top: 12px;
    }

    &-params {
      margin-top: 12px;
    }
  }

  &__message {
    display: inline-block;
    margin-top: 8px;
    font-family: 'Mulish';
    color: rgba(255, 255, 255, 0.4);
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
  }

  &__error {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 991px) {
  .second {
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
