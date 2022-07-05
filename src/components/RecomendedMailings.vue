<script setup>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from '~swiper/vue/swiper-vue.js'
import MailingItem from '@/components/MailingItem.vue'
</script>

<template lang="">
  <div class="recommended-mailings">
    <div class="title-wrap">
      <h2 class="page-subtitle">Рекомендованные рассылки</h2>
      <router-link to="/sends" class="link">Открыть все</router-link>
      <a href="#" class="mob-link"
        ><img src="@/assets/images/main/recomend-plus.svg" alt=""
      /></a>
    </div>
    <div class="slider">
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
        <SwiperSlide>
          <MailingItem />
        </SwiperSlide>
        <SwiperSlide>
          <MailingItem />
        </SwiperSlide>
        <SwiperSlide>
          <MailingItem />
        </SwiperSlide>
        <SwiperSlide>
          <MailingItem />
        </SwiperSlide>
        <SwiperSlide>
          <MailingItem />
        </SwiperSlide>
      </Swiper>
      <img
        src="@/assets/images/main/arrow-rigth.svg"
        alt=""
        class="slider-nav"
      />
      <div class="slider-pagination"></div>
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
</style>
