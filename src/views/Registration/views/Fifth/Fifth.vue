<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRegistrationStore } from '../../store/registration'
import { RegistrationService } from '../../services'
import StartForm from '@/components/StartForm'
import UiButton from '@/ui/UiButton'
import UiErrorMessage from '@/ui/UiErrorMessage'

const router = useRouter()

const registrationStore = useRegistrationStore()

const sex = ref(localStorage.getItem('sex') || null)

const photoFile = ref(null)

const image = ref(null)
const images = ref([])

const imageStyles = computed(() => {
  return {
    'background-image': `url(${image.value})`,
  }
})

const randomPhotoLoading = computed(
  () => registrationStore.randomPhoto.isLoading
)

const randomPhotoError = computed(() => registrationStore.randomPhoto.error)

const photoListLoading = computed(() => registrationStore.photoList.isLoading)

const photoListError = computed(() => registrationStore.photoList.error)

const addPhotoLoading = computed(() => registrationStore.addPhoto.isLoading)

const addPhotoError = computed(() => registrationStore.addPhoto.error)

const setAvatarLoading = computed(() => registrationStore.setAvatar.isLoading)

const setAvatarError = computed(() => registrationStore.setAvatar.error)

const deletePhotoLoading = computed(
  () => registrationStore.deletePhoto.isLoading
)

const deletePhotoError = computed(() => registrationStore.deletePhoto.error)

const changeHandler = (event) => {
  let files = Array.from(photoFile.value.files)

  const readFile = (file) => {
    if (/.(png|jpg|jpeg|JPG|JPEG)$/.test(file.name)) {
      const fileReader = new FileReader()

      fileReader.readAsDataURL(file)

      fileReader.onload = async () => {
        await RegistrationService.addPhoto(file)

        await getPhotoList()
      }
    }
  }

  files.forEach((file) => readFile(file))

  event.target.value = ''
}

onMounted(async () => {
  await getPhotoList()
})

const getPhotoList = async () => {
  await RegistrationService.photoList()

  image.value =
    registrationStore.photoList.data.filter((photo) => photo.avatar)[0]?.src ||
    null

  if (
    image.value !== null &&
    image.value !== '' &&
    registrationStore.photoList.data.length > 1
  ) {
    images.value = registrationStore.photoList.data
  }

  if (registrationStore.photoList.data.length <= 1) {
    images.value = []
  }
}

const clickUploadHandler = () => {
  photoFile.value.click()
}

const clickRandomHandler = async () => {
  await RegistrationService.randomPhoto()

  image.value = registrationStore.randomPhoto.data
}

const clickHandler = async () => {
  if (image.value === '' || image.value === null) {
    await RegistrationService.randomPhoto()

    image.value = registrationStore.randomPhoto.data
  } else {
    router.push('/registration/success')
  }
}

const clickWomanHandler = () => {
  router.push('/registration/verification')
}

const setAvatarHandler = async (id) => {
  await RegistrationService.setAvatar(id)

  await getPhotoList()
}

const deletePhotoHandler = async (id) => {
  await RegistrationService.deletePhoto(id)

  await getPhotoList()
}
</script>

<template>
  <div class="fifth">
    <div class="fifth__form">
      <StartForm>
        <div class="fifth__block">
          <div
            v-show="image !== null && image !== ''"
            class="fifth__image"
            :style="imageStyles"
          ></div>
          <label v-show="image === null || image === ''" class="fifth__place">
            <input
              ref="photoFile"
              type="file"
              hidden
              multiple
              style="display: none"
              @change="changeHandler($event)"
            />
            <div class="fifth__place-block"></div>
          </label>

          <div v-if="images" class="fifth__slider">
            <div class="fifth__slider-wrapper">
              <Swiper
                :modules="[Navigation]"
                :slides-per-view="4.5"
                :space-between="8"
                :navigation="{
                  nextEl: '.fifth .fifth__slider-nav',
                  prevEl: '',
                }"
              >
                <SwiperSlide v-for="(imageSlide, idx) in images" :key="idx">
                  <div
                    class="fifth__slider-block"
                    :class="{ active: imageSlide.avatar }"
                  >
                    <div
                      class="fifth__slider-button"
                      @click="deletePhotoHandler(imageSlide.id)"
                    ></div>
                    <img
                      :src="imageSlide.src"
                      :alt="imageSlide.id"
                      class="fifth__slider-img"
                      @click="setAvatarHandler(imageSlide.id)"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div class="fifth__slider-nav"></div>
          </div>

          <p v-if="images.length <= 1" class="fifth__message">
            Вы можете добавить до 10 фотографий, после этого одну из них вы
            сможете поставить на свою аватарку. Остальные фотографии будут
            отображаться в вашей галерее.
          </p>

          <p v-else class="fifth__message">
            Выберите фотографию, которая будет вашей аватаркой
          </p>

          <div class="fifth__load-button">
            <UiButton
              title="Загрузить с компьютера"
              size="normal-second"
              :variant="
                image !== null && image !== '' ? 'secondary' : 'primary'
              "
              @click="clickUploadHandler()"
            />
          </div>

          <div class="fifth__load-button-mobile">
            <UiButton
              title="Загрузить"
              size="normal-second"
              :variant="
                image !== null && image !== '' ? 'secondary' : 'primary'
              "
              @click="clickUploadHandler()"
            />
          </div>

          <div
            v-if="sex === '1' && (image === null || image === '')"
            class="fifth__random-button"
          >
            <UiButton
              title="Выбрать случайную"
              size="normal-third"
              variant="secondary"
              :is-loading="randomPhotoLoading"
              @click="clickRandomHandler()"
            />
          </div>

          <div class="fifth__error">
            <UiErrorMessage
              v-if="
                randomPhotoError?.status ||
                photoListError?.status ||
                addPhotoError?.status ||
                setAvatarError?.status ||
                deletePhotoError?.status
              "
              :message="
                randomPhotoError?.message ||
                photoListError?.message ||
                addPhotoError?.message ||
                setAvatarError?.message ||
                deletePhotoError?.message
              "
            />
          </div>
        </div>
      </StartForm>
    </div>

    <div v-if="sex === '1'" class="fifth__button">
      <UiButton
        :title="
          image === null || image === '' ? 'Продолжить' : 'Зарегистрироваться'
        "
        size="big"
        :is-loading="
          randomPhotoLoading ||
          photoListLoading ||
          addPhotoLoading ||
          setAvatarLoading ||
          deletePhotoLoading
        "
        @click="clickHandler()"
      />
    </div>
    <div
      v-if="sex === '2' && image !== null && image !== ''"
      class="fifth__button"
    >
      <UiButton
        title="Зарегистрироваться"
        size="big"
        @click="clickWomanHandler()"
      />
    </div>
  </div>
</template>

<style lang="scss">
.fifth {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__form {
    margin-top: 185px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image {
    width: 324px;
    height: 324px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__place {
    position: relative;
    width: 324px;
    height: 324px;
    border: 1px solid #ffffff;
    border-radius: 24px;
    cursor: pointer;
  }

  &__place-block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 230px;
    height: 230px;
    border: 1px dashed rgba(255, 255, 255, 0.33);
    border-radius: 24px;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 32px;
      height: 1px;
      background: #ffffff;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    &::before {
      transform: translate(-50%, -50%);
    }
  }

  &__message {
    display: inline-block;
    width: 100%;
    max-width: 334px;
    margin: 24px 0 0 0;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    text-align: center;
    color: #ffffff;
  }

  &__load-button {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  &__load-button-mobile {
    display: none;
  }

  &__random-button {
    display: flex;
    justify-content: center;
    margin-top: 12px;
  }

  &__error {
    margin-top: 10px;
  }

  &__button {
    margin-top: 30px;
    margin-bottom: 107px;
  }

  &__slider {
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    overflow: hidden;
    margin-top: 12px;
  }

  &__slider-wrapper {
    width: calc(100% - 28px);
  }

  &__slider-block {
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 13.6575px;
    cursor: pointer;
    user-select: none;

    &.active {
      border: 1px solid #2b66fb;
    }
  }

  &__slider-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13.6575px;
  }

  &__slider-button {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 8px;
    height: 8px;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 1px;
      background: #ffffff;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &__slider-nav {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(25%, -50%) rotate(-90deg);
    width: 56px;
    height: 28px;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 1px;
      background: #ffffff;
    }

    &::after {
      transform: translate(calc(-50% - 2px), -50%) rotate(-135deg);
    }

    &::before {
      transform: translate(calc(-50% + 2px), -50%) rotate(135deg);
    }
  }
}

@media only screen and (max-width: 991px) {
  .fifth {
    justify-content: flex-start;
    min-height: auto;

    &__form {
      width: 100%;
      margin-top: 140px;
    }

    &__load-button {
      display: none;
    }

    &__load-button-mobile {
      display: flex;
      margin-top: 40px;
    }

    &__random-button {
      margin-top: 12px;
    }

    &__button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 48px;
      margin-bottom: 73px;
    }
  }
}
</style>
