<script setup>
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/main.js'
import { useLocationsStore } from '@/stores/locations.js'
import { useMailingStore } from '@/stores/mailing.js'
import { useUserStore } from '@/stores/user.js'
import TheSelect from '@/components/Form/TheSelect.vue'
import FormTextArea from '@/components/Form/FormTextArea.vue'
import BigButton from '@/components/Form/BigButton.vue'

const store = useStore()
const locations = useLocationsStore()
const mailing = useMailingStore()
const user = useUserStore()

const { newSendWindowParams } = storeToRefs(store)

const datingFormats = ref([
  'Серьезные отношения',
  'Легкие отношения',
  'Путешествия',
  'Свидание на ночь',
])
const datingFormat = ref(store.newSendWindowParams?.datingFormat || null)

const sendWrap = ref(null)

const city = ref(
  store.newSendWindowParams?.city || user.information.data?.city?.name || null
)

const message = ref('')

const error = ref(false)
const errorMessage = ref('')

const cityError = ref(false)
const datingFormatError = ref(false)
const messageError = ref(false)

const cities = computed(() => locations.cities.data)

const options = computed(() => cities.value.map((city) => city.name))

const price = computed(() => mailing.price.data?.amount)

watch(newSendWindowParams, () => {
  if (newSendWindowParams?.value?.city) {
    city.value = newSendWindowParams.value.city
  }

  if (newSendWindowParams?.value?.datingFormat) {
    datingFormat.value = newSendWindowParams.value.datingFormat
  }
})

watch(city, () => {
  if (city.value) {
    cityError.value = false

    error.value = false
    errorMessage.value = ''
  }
})

watch(datingFormat, () => {
  if (datingFormat.value) {
    datingFormatError.value = false

    error.value = false
    errorMessage.value = ''
  }
})

watch(message, () => {
  if (message.value) {
    messageError.value = false

    error.value = false
    errorMessage.value = ''
  }
})

document.addEventListener('click', (e) => {
  e.stopPropagation()
  if (e.target === sendWrap.value) {
    closeNewSendWindow()
  }
})

const closeNewSendWindow = () => {
  store.newSendWindow = false
}

const openNewSendWindowSuccess = () => {
  store.newSendWindowSuccess = true
}

const clickHandler = async () => {
  if (!city.value) {
    errorMessage.value = 'Выберите город'
    error.value = true

    cityError.value = true

    return
  }

  if (!datingFormat.value) {
    errorMessage.value = 'Выбирите формат знакомств'
    error.value = true

    datingFormatError.value = true

    return
  }

  if (message.value.length < 20 || message.value.length > 500) {
    errorMessage.value = 'Текст рассылки должен содержать больше 20 символов'
    error.value = true

    messageError.value = true

    return
  }

  const response = await mailing.send(
    city.value,
    datingFormat.value,
    message.value
  )

  console.log('Response', response)

  if (response.status) {
    errorMessage.value = response.message
    error.value = true

    return
  }

  closeNewSendWindow()

  openNewSendWindowSuccess()
}

const inputHandler = (msg) => {
  message.value = msg
}
</script>

<template>
  <div
    ref="sendWrap"
    class="new-send-modal-wrap"
    :class="{ active: store.newSendWindow }"
  >
    <div class="new-send-modal" :class="{ error: error }">
      <img
        src="@/assets/images/close-new-send.svg"
        alt=""
        class="close"
        @click="closeNewSendWindow()"
      />
      <div class="title-block">
        <p class="title">Создание рассылки</p>
        <p class="time">Время публикации 8 часов</p>
      </div>
      <div class="form-block">
        <div class="inputs-block">
          <TheSelect
            v-model="city"
            placeholder="Выберите город"
            :options="options"
            :z-index="2"
            :error="cityError"
          />
          <TheSelect
            v-model="datingFormat"
            placeholder="Выберите формат"
            :options="datingFormats"
            :z-index="1"
            :error="datingFormatError"
          />
          <FormTextArea
            placeholder="Сообщение"
            name="Сообщение"
            :error="messageError"
            @input="inputHandler($event)"
          />
        </div>
        <small class="small">
          Напоминаем, что в рассылке запрещенно указывать свои контактные данные
        </small>
        <BigButton
          :title="`Создать рассылку ${price}₽`"
          @click="clickHandler()"
        />

        <div v-if="error" class="new-send-modal-wrap__error">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.new-send-modal-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &__error {
    margin-top: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    color: #2965ff;
    text-align: center;
  }

  .new-send-modal {
    width: 715px;
    max-width: 715px;
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-radius: 24px;
    background: rgba(36, 37, 41, 0.6);
    padding: 24px;
    position: relative;
    .close {
      position: absolute;
      top: 0;
      right: -30px;
      cursor: pointer;
    }
    .title-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 18px;
        font-weight: 600;
      }
      .time {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .form-block {
      .inputs-block {
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        .form-selecet {
          margin-bottom: 0;
        }
        .form-textarea {
          grid-column: 1/3;
        }
      }
      .big-btn {
        margin-top: 16px;
      }
      .small {
        font-weight: 500;
        font-size: 14px;
        line-height: 153.5%;
        color: #ffffff;
        display: block;
        text-align: center;
        margin-top: 4px;
      }
    }
  }
}

.new-send-modal.error {
  border-color: #2965ff;
}

.new-send-modal-wrap.active {
  display: flex;
}
@media (max-width: 1200px) {
  .new-send-modal-wrap {
    .new-send-modal {
      max-width: 95%;

      .close {
        display: none;
      }

      .title-block {
        flex-direction: column;
        align-items: center;
        .title {
          line-height: 27.63px;
        }

        .time {
          color: rgba(255, 255, 255, 0.33);
          line-height: 21.49px;
        }
      }

      .form-block {
        .inputs-block {
          grid-template-columns: 1fr;
          .form-textarea {
            grid-column: 1/1;
          }
        }
      }
    }
  }
}
</style>
