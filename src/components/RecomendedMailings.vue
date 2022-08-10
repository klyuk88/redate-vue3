<script setup>
import { computed } from 'vue'
import { useMailingStore } from '@/stores/mailing.js'
import { useUserStore } from '@/stores/user.js'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from '~swiper/vue/swiper-vue.js'
import MailingItem from '@/components/MailingItem.vue'

const mailing = useMailingStore()
const user = useUserStore()

const emit = defineEmits('openModal')

const mailings = computed(() => mailing.list.data)

const mailingsLoading = computed(() => mailing.list.isLoading)

const showSubstrate = computed(() => {
  if (user.information.data?.sex === 1) {
    return user.currentTariff.error.status
  } else {
    return !user.registrationStatus.data?.isModerated
  }
})

const clickHandler = () => {
  emit('openModal')
}
</script>

<template lang="">
  <div class="recommended-mailings">
    <div class="title-wrap">
      <h2 class="page-subtitle">Рекомендованные рассылки</h2>
      <router-link
        v-if="mailings.length && !mailingsLoading"
        to="/sends"
        class="link"
        >Открыть все</router-link
      >
      <div class="mob-link" @click="clickHandler()">
        <img src="@/assets/images/main/recomend-plus.svg" alt="" />
      </div>
    </div>
    <div v-if="mailings.length && !mailingsLoading" class="slider">
      <Swiper
        :modules="[Navigation, Pagination]"
        :space-between="24"
        :slides-per-view="2"
        :navigation="{
          nextEl: '.recommended-mailings .slider .slider-nav',
          prevEl: '',
        }"
        :pagination="{
          el: '.slider-pagination',
          type: 'bullets',
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
        }"
      >
        <SwiperSlide v-for="(item, idx) in mailings" :key="idx">
          <MailingItem :mailing="item" :show-substrate="showSubstrate" />
        </SwiperSlide>
      </Swiper>
      <img
        src="@/assets/images/main/arrow-rigth.svg"
        alt=""
        class="slider-nav"
      />
      <div class="slider-pagination"></div>
    </div>
    <div
      v-if="!mailings.length && !mailingsLoading"
      class="recommended-mailings-empty"
    >
      <p class="recommended-mailings-empty__title">
        Список рассылок пуст, будьте первыми —
        <span class="recommended-mailings-empty__button" @click="clickHandler()"
          >Создать</span
        >
      </p>
    </div>
  </div>
</template>

<style lang="sass">
.recommended-mailings > .title-wrap
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 16px
  .link
    font-size: 14px
    color: #fff
    opacity: 0.3
    text-direction: underline
    @media (max-width: 1200px)
      display: none
  .mod-link
    display: none
    @media (max-width: 1200px)
        display: block

.recommended-mailings .swiper .swiper-slide
    width: 456px

.recommended-mailings .slider
    position: relative
.slider-nav
    position: absolute
    right: -40px
    top: 50%
    transform: translateY(-50%)
    cursor: pointer
    @media (max-width: 1200px)
      display: none
.slider-pagination
    display: flex
    align-items: center
    justify-content: center
    margin-top: 24px
    .swiper-pagination-bullet
        background: rgba(255,255,255,0.3)
        margin-right: 3px
    .swiper-pagination-bullet.swiper-pagination-bullet-active
        background: rgba(255,255,255, 1)

.recommended-mailings .title-wrap .mob-link
    display: none
    @media (max-width: 1200px)
        display: block

.recommended-mailings-empty
  width: 100%
  height: 204px
  display: flex
  align-items: center
  justify-content: center
  border: 1px solid rgba(255, 255, 255, 0.14)
  border-radius: 24px

  &__title
    font-weight: 600
    font-size: 15px
    line-height: 153.5%
    color: #FFFFFF

  &__button
    color: #2B66FB
    cursor: pointer
</style>
