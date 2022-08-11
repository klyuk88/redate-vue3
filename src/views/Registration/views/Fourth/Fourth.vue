<script setup>
import { ref, computed, watch } from 'vue'
import { useRegistrationStore } from '../../store/registration'
import StartForm from '@/components/StartForm'
import UiButton from '@/ui/UiButton'
import UiInputIntervalRange from '@/ui/UiInputIntervalRange'
import UiTextarea from '@/ui/UiTextarea'
import UiSelect from '@/ui/UiSelect'
import UiErrorMessage from '@/ui/UiErrorMessage'

const registrationStore = useRegistrationStore()

const isAnimate = ref(false)

const datingFormat = ref([
  {
    id: 1,
    title: 'Онлайн общение',
    active: false,
  },
  {
    id: 2,
    title: 'Серьезные отношения',
    active: false,
  },
  {
    id: 3,
    title: 'Спонсорство',
    active: false,
  },

  {
    id: 4,
    title: 'Пойти на свидание',
    active: false,
  },
  {
    id: 5,
    title: 'Путешествия',
    active: false,
  },
])

const selectedDatingFormat = ref([])

const about = ref('')

const intervalValue = ref(50)

const datingFormatError = ref(false)
const aboutError = ref(false)
const errorMessage = ref('')

const aboutLength = computed(() => 300 - about.value.length)

const mappedDatingFormats = computed(() =>
  datingFormat.value.map((format) => format.title)
)

const datingFormatPlaceholder = computed(() =>
  datingFormat.value.length === selectedDatingFormat.value.length
    ? 'Формат знакомств: <span>Все</span>'
    : 'Формат знакомств:'
)

const title = computed(() =>
  registrationStore.sex === '1' ? 'Доход в месяц:' : 'Трачу в месяц: '
)

const intervalTitle = computed(() => {
  let resultValue = intervalValue.value

  if (intervalValue.value === 1000) {
    resultValue = `более ${intervalValue.value
      .toString()
      .substring(0, 1)} ${intervalValue.value.toString().substring(1, 4)}`
  }

  return `${resultValue} 000 ₽`
})

watch(isAnimate, () => {
  if (isAnimate.value) {
    stopAnimateByTimeout()
  }
})

watch(selectedDatingFormat, () => {
  if (selectedDatingFormat.value.length) {
    datingFormatError.value = false
    errorMessage.value = ''
  }
})

watch(about, () => {
  if (about.value.length) {
    aboutError.value = false
    errorMessage.value = ''
  }
})

const clickFormatHandler = (format) => {
  selectedDatingFormat.value = selectedDatingFormat.value.filter(
    (el) => el !== format
  )
}

const clickHandler = () => {
  if (!selectedDatingFormat.value.length) {
    datingFormatError.value = true
    errorMessage.value = 'Выберите формат общения'

    return
  }

  if (!about.value.length) {
    aboutError.value = true
    errorMessage.value = 'Расскажите о себе'

    return
  }

  console.log('send')
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
  <div class="fourth">
    <div class="fourth__form">
      <StartForm :animate="isAnimate">
        <div class="fourth__block">
          <div class="fourth__select">
            <UiSelect
              v-model:value="selectedDatingFormat"
              :values="mappedDatingFormats"
              :multiple="true"
              :placeholder="datingFormatPlaceholder"
              :error="datingFormatError"
              @focus="startAnimate()"
            />
          </div>

          <div v-if="selectedDatingFormat.length" class="fourth__selected">
            <div
              v-for="(format, idx) in selectedDatingFormat"
              :key="idx"
              class="fourth__selected-item"
            >
              {{ format }}
              <div
                class="fourth__selected-icon"
                @click="clickFormatHandler(format)"
              ></div>
            </div>
          </div>

          <div class="fourth__interval-range">
            <div class="fourth__interval-range-block">
              <span class="fourth__interval-range-title">{{ title }}</span>
              <span class="fourth__interval-range-interval-title">
                {{ intervalTitle }}
              </span>
            </div>

            <UiInputIntervalRange
              v-model:interval-value="intervalValue"
              :tooltip="false"
              @focus="startAnimate()"
            />
          </div>

          <div class="fourth__line"></div>

          <div class="fourth__textarea">
            <UiTextarea
              v-model:value="about"
              placeholder="Расскажите о себе"
              :length="aboutLength"
              :error="aboutError"
              @focus="startAnimate()"
            />
          </div>

          <div v-if="datingFormatError || aboutError" class="fourth__error">
            <UiErrorMessage :message="errorMessage" />
          </div>
        </div>
      </StartForm>
    </div>

    <div class="fourth__button">
      <UiButton size="big" title="Продолжить" @click="clickHandler()" />
    </div>
  </div>
</template>

<style lang="scss">
.fourth {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__form {
    margin-top: 177px;
  }

  &__selected {
    margin-top: 12px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &-item {
      display: flex;
      align-items: center;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 8px 12px;
      border: 1px solid #2e66f5;
      border-radius: 13px;
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 132.5%;
      color: #ffffff;
      background: #2e66f5;
      box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
    }

    &-icon {
      position: relative;
      width: 10px;
      height: 10px;
      margin-left: 10px;
      cursor: pointer;

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 1px;
        background: rgba(255, 255, 255, 0.33);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  &__interval-range {
    margin-top: 60px;

    &-block {
      position: relative;
      top: -10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-title {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 153.5%;
      color: #ffffff;
    }

    &-interval-title {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 153.5%;
      color: #2e66f5;
    }
  }

  &__line {
    margin: 60px 0 24px 0;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.14);
  }

  &__error {
    margin-top: 10px;
  }

  &__button {
    margin-top: 50px;
    margin-bottom: 107px;
  }
}

@media only screen and (max-width: 991px) {
  .fourth {
    justify-content: flex-start;
    min-height: auto;

    &__form {
      width: 100%;
      margin-top: 130px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
      margin-bottom: 24px;
    }
  }
}
</style>
