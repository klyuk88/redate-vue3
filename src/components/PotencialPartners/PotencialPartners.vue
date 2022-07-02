<script setup>
import { computed } from 'vue'
import { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from '~swiper/vue/swiper-vue.js'
import { useStore } from '@/stores/main.js'
import { useUserStore } from '@/stores/user.js'
import PotentialPartnersItem from '@/components/PotencialPartners/PotentialPartnersItem.vue'
import PotrncialPartnerMobile from '@/components/PotencialPartners/PotrncialPartnerMobile.vue'
import ProfileNewMessage from '@/components/Profile/ProfileNewMessage.vue'

const store = useStore()
const user = useUserStore()

const infoText = computed(() => {
  return user.information.data?.sex === 1
    ? 'Все девушки проходят верификацию через модерацию сайта. Все данные защищены.'
    : 'Ваша анкета в поиске будет видна исключено мужчинам оплатившим «премиум» подписку.'
})
</script>

<template>
  <ProfileNewMessage v-if="store.newMessageWindow" />
  <div class="potential-partners">
    <div class="title-wrap">
      <h2 class="page-subtitle">Потенциальные партнеры</h2>
      <a href="#" class="btn">Смотреть</a>
      <div class="warning">
        <img
          src="@/assets/images/main/warning-check.svg"
          alt=""
          class="image"
        />
        <p class="text">{{ infoText }}</p>
      </div>
    </div>
    <div class="slider">
      <Swiper
        :modules="[Navigation, Scrollbar]"
        :space-between="20"
        slides-per-view="auto"
        :navigation="{
          nextEl: '.potential-partners .slider .slider-nav',
          prevEl: '',
        }"
        :scrollbar="{
          el: '.swiper-scrollbar',
          draggable: true,
          dragSize: 88,
        }"
      >
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
        <SwiperSlide>
          <PotentialPartnersItem />
        </SwiperSlide>
      </Swiper>
      <img
        src="@/assets/images/main/arrow-rigth.svg"
        alt=""
        class="slider-nav"
      />
      <div class="swiper-scrollbar"></div>
    </div>
    <!-- Slider -->

    <!-- Mobile items  -->
    <div class="mobile-items">
      <PotrncialPartnerMobile />
      <PotrncialPartnerMobile />
      <PotrncialPartnerMobile />
      <PotrncialPartnerMobile />
      <PotrncialPartnerMobile />
      <PotrncialPartnerMobile />
    </div>
    <!-- Mobile items end -->
  </div>
</template>

<style lang="sass">
.potential-partners > .title-wrap
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 20px
  @media screen and (max-width: 1500px)
    flex-direction: column
    align-items: flex-start
  > .warning
    display: flex
    align-items: center
    padding: 8px 12px
    border-radius: 12px
    border: 1px solid #2B66FB
    z-index: 1
    @media screen and (max-width: 1500px)
      margin-top: 10px
    @media screen and (max-width: 1200px)
      display: none
    .image
      margin-right: 8px
    .text
      font-size: 12px
      font-weight: 600
      color: #fff

.potential-partners
  margin-top: 45px

.potential-partners .slider .swiper-scrollbar
  bottom: auto

.potential-partners .slider
  position: relative
  @media (max-width: 1200px)
    display: none
  .swiper .swiper-slide
    width: 240px

.potential-partners .slider .slider-nav
  position: absolute
  right: -40px
  top: 50%
  transform: translateY(-100%)
  cursor: pointer

.potential-partners .slider
  .swiper-scrollbar
    width: 100%
    margin-top: 42px
    background: rgba(255,255,255,0.3)
    height: 1px
    .swiper-scrollbar-drag
      width: 88px
      height: 2px
      background: #fff

.potential-partners > .mobile-items
  display: none
  @media (max-width: 1200px)
    display: block

.potential-partners .title-wrap
  position: relative

.potential-partners .title-wrap > .btn
  width: 90px
  height: 32px
  display: flex
  align-items: center
  justify-content: center
  font-size: 12px
  color: #2B66FB
  border: 1px solid #2B66FB
  border-radius: 12px
  position: absolute
  right: 0
  top: 0
  text-decoration: none
  transform: translateY(-20%)
  display: none
  @media (max-width: 1200px)
    display: flex
</style>
