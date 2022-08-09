<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import { useRegistrationStore } from '../../store/registration'
import { DatabaseService } from '@/services/database'
import { RegistrationService } from '../../services'
import StartForm from '@/components/StartForm'
import UiInput from '@/ui/UiInput'
import UiButton from '@/ui/UiButton'
import UiSelect from '@/ui/UiSelect'
import UiInputBirthday from '@/ui/UiInputBirthday'
import UiInputParams from '@/ui/UiInputParams'
import UiErrorMessage from '@/ui/UiErrorMessage'

const databaseStore = useDatabaseStore()

const registrationStore = useRegistrationStore()

const isAnimate = ref(false)

const name = ref(registrationStore.secondStage.data?.name || '')

const country = ref(registrationStore.secondStage.data?.country || null)

const city = ref(registrationStore.secondStage.data?.city || null)

const nationality = ref(registrationStore.secondStage.data?.nationality || null)

const growth = ref(registrationStore.secondStage.data?.growth || '')

const weight = ref(registrationStore.secondStage.data?.weight || '')

const dayValue = ref(registrationStore.secondStage.data?.dayValue || '')
const monthValue = ref(registrationStore.secondStage.data?.monthValue || '')
const yearValue = ref(registrationStore.secondStage.data?.yearValue || '')

const breast = ref(registrationStore.secondStage.data?.breast || '')
const waist = ref(registrationStore.secondStage.data?.waist || '')
const tips = ref(registrationStore.secondStage.data?.tips || '')

const nameError = ref(false)
const countryError = ref(false)
const cityError = ref(false)
const nationalityError = ref(false)
const dateError = ref()
const errorMessage = ref('')

const sex = computed(() => Number(registrationStore.sex))

const countries = computed(() =>
  databaseStore.countries.data.map((country) => country.name)
)
const countryIndex = computed(() => {
  const countries = databaseStore.countries.data

  let index = null

  countries.forEach((el, idx) => {
    if (el.name === country.value) {
      index = idx
    }
  })

  return index
})
const countriesError = computed(() => databaseStore.countries.error)

const cities = computed(
  () =>
    databaseStore.cities.data[countryIndex.value]?.map((city) => city.name) ||
    []
)
const citiesError = computed(() => databaseStore.cities.error)

const nationalities = computed(() =>
  databaseStore.nationalities.data.map((nationality) =>
    sex.value === 1 ? nationality.nameMan : nationality.nameWomen
  )
)
const nationalitiesError = computed(() => databaseStore.nationalities.error)

const buttonDisabled = computed(
  () =>
    countriesError.value?.status ||
    citiesError.value?.status ||
    nationalitiesError.value?.status ||
    !countries.value?.length ||
    !cities.value?.length ||
    !nationalities.value?.length
)

watch(isAnimate, () => {
  if (isAnimate.value) {
    stopAnimateByTimeout()
  }
})

watch(name, () => {
  if (name.value.length) {
    nameError.value = false
    errorMessage.value = ''
  }
})

watch(country, () => {
  if (country.value.length) {
    countryError.value = false
    errorMessage.value = ''
  }
})

watch(city, () => {
  if (city.value.length) {
    cityError.value = false
    errorMessage.value = ''
  }
})

watch(nationality, () => {
  if (nationality.value.length) {
    nationalityError.value = false
    errorMessage.value = ''
  }
})

watch(dayValue, () => {
  if (dayValue.value.length) {
    dateError.value = false
    errorMessage.value = ''
  }
})

watch(monthValue, () => {
  if (monthValue.value.length) {
    dateError.value = false
    errorMessage.value = ''
  }
})

watch(yearValue, () => {
  if (yearValue.value.length) {
    dateError.value = false
    errorMessage.value = ''
  }
})

onMounted(async () => {
  await DatabaseService.countries()

  await DatabaseService.cities()

  await DatabaseService.nationalities()
})

const clickHandler = async () => {
  if (!name.value.length) {
    nameError.value = true
    errorMessage.value = 'Введите имя'

    return
  }

  if (!country.value?.length || country.value === null) {
    countryError.value = true
    errorMessage.value = 'Выберите страну'

    return
  }

  if (!city.value?.length || city.value === null) {
    cityError.value = true
    errorMessage.value = 'Выберите город'

    return
  }

  if (!nationality.value?.length || nationality.value === null) {
    nationalityError.value = true
    errorMessage.value = 'Выберите национальность'

    return
  }

  if (
    dayValue.value.length !== 2 ||
    monthValue.value.length !== 2 ||
    yearValue.value.length !== 4
  ) {
    dateError.value = true
    errorMessage.value = 'Введите дату рождения'

    return
  }

  RegistrationService.saveSecondStage({
    name: name.value,
    country: country.value,
    city: city.value,
    nationality: nationality.value,
    dayValue: dayValue.value,
    monthValue: monthValue.value,
    yearValue: yearValue.value,
    growth: growth.value,
    weight: weight.value,
    breast: breast.value,
    waist: waist.value,
    tips: tips.value,
  })
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
  <div class="second">
    <div class="second__form">
      <StartForm :animate="isAnimate">
        <div class="second__block">
          <div class="second__input">
            <UiInput
              v-model:value="name"
              type="text"
              placeholder="Имя"
              :error="nameError"
              @focus="startAnimate()"
            />
          </div>

          <div class="second__input">
            <UiSelect
              v-model:value="country"
              placeholder="Cтрана"
              :values="countries"
              :error="countryError"
              @focus="startAnimate()"
            />
          </div>

          <div class="second__input">
            <UiSelect
              v-model:value="city"
              placeholder="Город"
              :values="cities"
              :error="cityError"
              @focus="startAnimate()"
            />
          </div>

          <div class="second__input">
            <UiSelect
              v-model:value="nationality"
              placeholder="Национальность"
              :values="nationalities"
              :error="nationalityError"
              @focus="startAnimate()"
            />
          </div>

          <div class="second__birthday">
            <span class="second__birthday-title">Дата рождения:</span>

            <UiInputBirthday
              v-model:day-value="dayValue"
              v-model:month-value="monthValue"
              v-model:year-value="yearValue"
              :error="dateError"
              @focus="startAnimate()"
            />
          </div>

          <div class="second__line"></div>

          <div v-if="sex === 1" class="second__man">
            <div class="second__man-block">
              <span class="second__man-title">Рост:</span>
              <div class="second__man-input">
                <UiInput
                  v-model:value="growth"
                  placeholder="180"
                  :center="true"
                  :max="3"
                  @focus="startAnimate()"
                />
              </div>
            </div>

            <div class="second__man-block">
              <span class="second__man-title">Вес:</span>
              <div class="second__man-input">
                <UiInput
                  v-model:value="weight"
                  placeholder="80"
                  :center="true"
                  :max="3"
                  @focus="startAnimate()"
                />
              </div>
            </div>
          </div>

          <div v-else class="second__woman">
            <div class="second__woman-block">
              <span class="second__woman-title">Рост:</span>
              <div class="second__woman-input">
                <UiInput
                  v-model:value="growth"
                  placeholder="180"
                  :center="true"
                  :max="3"
                  @focus="startAnimate()"
                />
              </div>
            </div>

            <div class="second__woman-block">
              <span class="econd__woman-title">Вес:</span>
              <div class="second__woman-input">
                <UiInput
                  v-model:value="weight"
                  placeholder="80"
                  :center="true"
                  :max="3"
                  @focus="startAnimate()"
                />
              </div>
            </div>

            <div class="second__woman-block">
              <span class="second__woman-title">Параметры:</span>
              <div class="second__woman-params">
                <UiInputParams
                  v-model:breast-value="breast"
                  v-model:waist-value="waist"
                  v-model:tips-value="tips"
                  @focus="startAnimate()"
                />
              </div>
            </div>
          </div>

          <p class="second__message">*Необязательно для заполнения</p>

          <div
            v-if="
              nameError ||
              countryError ||
              cityError ||
              nationalityError ||
              dateError ||
              countriesError?.status ||
              citiesError?.status ||
              nationalitiesError?.status
            "
            class="second__error"
          >
            <UiErrorMessage
              :message="
                errorMessage ||
                countries?.message ||
                cities?.message ||
                nationalitiesError?.message
              "
            />
          </div>
        </div>
      </StartForm>
    </div>

    <div class="second__button">
      <UiButton
        size="big"
        title="Продолжить"
        :disabled="buttonDisabled"
        @click="clickHandler()"
      />
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
      margin-top: 140px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
      margin-bottom: 140px;
    }
  }
}
</style>
