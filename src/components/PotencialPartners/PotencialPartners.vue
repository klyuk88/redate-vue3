<template lang="">
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
              <p class="text">
                Ваша анкета в поиске будет видна исключено мужчинам оплатившим
                «премиум» подписку.
              </p>
            </div>
          </div>
          <div class="slider">
            <Swiper
              :modules="[Navigation, Scrollbar]"
              :spaceBetween="20"
              :slidesPerView="'auto'"
              :navigation="{
                nextEl: '.potential-partners .slider .slider-nav',
                prevEl: '',
              }"
              :scrollbar="{
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: 88
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
          <div class="filter">
            <div>
              <TheSelect
              :options="options"
              :placeholder="'Выберите город'"
              v-model="city"
              />
            </div>
            <div>
              <div class="range" :class="{ active: showLabel }">
                <vue-slider
                  v-model="range"
                  :height="2"
                  :tooltip="'always'"
                  :min="18"
                  :max="45"
                  :interval="1"
                  :lazy="true"
                  :enableCross="false"
                  :railStyle="{
                    background: 'rgba(255,255,255, 0.3)',
                  }"
                  :dotStyle="{
                    background: '#fff',
                    height: '12px',
                    width: '12px',
                  }"
                  :processStyle="{ background: '#fff' }"
                  :tooltipStyle="{
                    background: 'transparent',
                    'font-size': '12px',
                    'font-weigth': '600',
                  }"
                  @drag-start="showLabel = true"
                  @drag-end="showLabel = false"
                />
              </div>
            </div>
            <div>
              <a class="big-btn" href="#">Начать поиск</a>
            </div>
          </div>

          <!-- Mobile items  -->
          <div class="mobile-items">
            <PotrncialPartnerMobile/>
            <PotrncialPartnerMobile/>
            <PotrncialPartnerMobile/>
            <PotrncialPartnerMobile/>
            <PotrncialPartnerMobile/>
            <PotrncialPartnerMobile/>
          </div>
          <!-- Mobile items end -->
        </div>

</template>
<script setup>
import { ref, reactive } from "vue";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

import PotentialPartnersItem from "@/components/PotencialPartners/PotentialPartnersItem.vue";
import PotrncialPartnerMobile from "@/components/PotencialPartners/PotrncialPartnerMobile.vue";
import TheSelect from '@/components/Form/TheSelect.vue'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";

const options = ref(["Москва", "Санкт-Петербург", "Казань"]);
const city = ref("Москва");
const format = ref("Любой");
const attributes = reactive({
  ref: "openIndicator",
  role: "presentation",
  class: "vs__open-indicator",
});
const range = ref([18, 45]);

const showLabel = ref(false);
</script>
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
  .filter
    margin-top: 30px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: 12px
    @media (max-width: 1200px)
      display: none
    .vue-slider-dot-tooltip-inner-top::after
      display: none
    .range
      border: 1px solid rgba(255,255,255,0.33)
      height: 60px
      border-radius: 11px
      padding: 0 13px
      padding-top: 16px
      position: relative
      .vue-slider-dot-tooltip-top
        top: 40px
    .range.active
      border: 1px solid #fff
    .range.active:before
      content: "Возраст"
      color: #fff
      font-size: 12px
      font-weight: 600
      position: absolute
      top: -25px

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