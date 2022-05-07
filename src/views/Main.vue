<template>
  <div class="page-grid">
    <div class="center-col">
      <div class="content">
        <div class="recommended-mailings">
          <div class="title-wrap">
            <h2 class="page-subtitle">Рекомендованные рассылки</h2>
            <a href="#" class="link">Открыть все</a>
          </div>
          <div class="slider">
            <Swiper
              :modules="[Navigation, Pagination]"
              :spaceBetween="24"
              :slidesPerView="'auto'"
              :navigation="{
                nextEl: '.recommended-mailings .slider .slider-nav',
                prevEl: '',
              }"
              :pagination="{
                el: '.slider-pagination',
                type: 'bullets',
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

        <div class="potential-partners">
          <div class="title-wrap">
            <h2 class="page-subtitle">Потенциальные партнеры</h2>
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
              <v-select
                class="form-selecet"
                :options="options"
                v-model="city"
                placeholder="Выберите город"
                @open="openSelect"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.39492 0.494094L8.14492 7.24409L14.8949 0.494093L16.0263 1.62546L8.14492 9.50684L0.263549 1.62546L1.39492 0.494094Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </template>
              </v-select>
            </div>
            <div>
              <div class="range" :class="{ active: showLabel }">
                <vue-slider
                  v-model="range"
                  :height="2"
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
        </div>
      </div>
    </div>

    <div class="rigth-col">
      <div class="content">
        <div class="new-send">
          <h3 class="page-subtitle mb-16">Создать новую рассылку</h3>
          <v-select
            class="form-selecet"
            :options="options"
            v-model="city"
            placeholder="Выберите город"
            @open="openSelect"
          >
            <template #open-indicator="{ attributes }">
              <span v-bind="attributes">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.39492 0.494094L8.14492 7.24409L14.8949 0.494093L16.0263 1.62546L8.14492 9.50684L0.263549 1.62546L1.39492 0.494094Z"
                    fill="white"
                  />
                </svg>
              </span>
            </template>
          </v-select>
          <label class="form-label" for="format">Формат знакомств</label>
          <v-select
            style="z-index: 1"
            id="format"
            class="form-selecet formats"
            :options="formats"
            v-model="format"
            :searchable="false"
            placeholder="Формат знакомств"
            @open="openSelect"
          >
            <template #open-indicator="{ attributes }">
              <span v-bind="attributes">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.39492 0.494094L8.14492 7.24409L14.8949 0.494093L16.0263 1.62546L8.14492 9.50684L0.263549 1.62546L1.39492 0.494094Z"
                    fill="white"
                  />
                </svg>
              </span>
            </template>
          </v-select>
          <a class="big-btn" href="#"> Создать рассылку </a>
        </div>

        <div class="special-proposal">
          <div class="shape"></div>
          <h2 class="page-subtitle">Спецпредложение</h2>
          <p class="online-info">Сейчас онлайн 596 954</p>
          <div class="items-block">
            <div class="special-proposal-item">
              <div class="avatar-name">
                <img
                  src="@/assets/images/main/avatar-special.png"
                  alt=""
                  class="avatar"
                />
                <div class="name-adress">
                  <h6 class="name">Николай, <span>26</span> лет</h6>
                  <p class="adress">Владикавказ</p>
                </div>
              </div>
              <a href="#" class="transparent-btn"> Написать </a>
            </div>
            <div class="special-proposal-item">
              <div class="avatar-name">
                <img
                  src="@/assets/images/main/avatar-special.png"
                  alt=""
                  class="avatar"
                />
                <div class="name-adress">
                  <h6 class="name">Николай, <span>26</span> лет</h6>
                  <p class="adress">Владикавказ</p>
                </div>
              </div>
              <a href="#" class="transparent-btn"> Написать </a>
            </div>
            <div class="special-proposal-item">
              <div class="avatar-name">
                <img
                  src="@/assets/images/main/avatar-special.png"
                  alt=""
                  class="avatar"
                />
                <div class="name-adress">
                  <h6 class="name">Николай, <span>26</span> лет</h6>
                  <p class="adress">Владикавказ</p>
                </div>
              </div>
              <a href="#" class="transparent-btn"> Написать </a>
            </div>
            <div class="special-proposal-item">
              <div class="avatar-name">
                <img
                  src="@/assets/images/main/avatar-special.png"
                  alt=""
                  class="avatar"
                />
                <div class="name-adress">
                  <h6 class="name">Николай, <span>26</span> лет</h6>
                  <p class="adress">Владикавказ</p>
                </div>
              </div>
              <a href="#" class="transparent-btn"> Написать </a>
            </div>
            <a href="#" class="load-more">Открыть больше...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import vSelect from "vue-select";
import MailingItem from "@/components/MailingItem.vue";
import PotentialPartnersItem from "@/components/PotentialPartnersItem.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";

const options = ref(["Москва", "Санкт-Петербург", "Казань"]);
const formats = ref([
  "Онлайн общение",
  "Серезные отношения",
  "Свидание",
  "Путешествие",
]);
const city = ref("Москва");
const format = ref("Любой");
const attributes = reactive({
  ref: "openIndicator",
  role: "presentation",
  class: "vs__open-indicator",
});
const range = ref([18, 45]);

const showLabel = ref(false);

const openSelect = () => {
  console.log("open");
};
</script>

<style lang="sass">
.page-grid
  display: grid
  grid-template-columns: 1fr 370px
  column-gap: 30px
  .center-col
    overflow: hidden
    .content
      max-width: 1300px
      margin: 0 auto

.page-subtitle
  font-size: 18px
  color: #fff
  font-weight: 600

.form-selecet
  margin-bottom: 20px
  .vs__dropdown-toggle
    color: #fff
    border: 1px solid rgba(255,255,255,0.3)
    border-radius: 11px
    background: transparent
    max-width: 100%
    width: 100%
    height: 60px
    padding: 0 12px
    position: relative
    z-index: 10000000

  .vs__selected
    color: #fff
    font-size: 16px
    position: static!important
  .vs__search::placeholder
    color: rgba(255,255,255,0.3)
    font-size: 16px
    font-family: 'Mulish'
  .vs__clear
    display: none
  .vs__dropdown-menu
    background: #242529
    padding: 0
    margin: 0
    border: 1px solid #fff
    border-radius: 11px
    top: 0px
    padding-top: 60px
  .vs__dropdown-option
    color: #fff
    padding: 20px 15px
    border-bottom: 1px solid rgba(255,255,255,0.14)

.new-send
  padding: 0 20px
  .form-label
    color: #fff
    margin-bottom: 10px
    font-size: 14px
    display: block

.mb-16
  margin-bottom: 16px

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
    @media screen and (max-width: 1500px)
      margin-top: 10px
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

.special-proposal
  padding: 24px 20px
  border: 1px solid rgba(255, 255, 255, 0.33)
  border-radius: 24px
  margin-top: 77px
  position: relative
  z-index: 0
  .shape
    width: 200px
    height: 200px
    top: 0
    position: absolute
    left: 0
    background: #2E66F5
    transform: translateX(-80%) translateY(-50%)
    filter: blur(100px)
    z-index: -1
  .online-info
    font-size: 14px
    font-weight: 500
    color: #fff
    opacity: 0.3
  .items-block
    margin-top: 16px
    .load-more
      font-size: 14px
      font-weight: 700
      margin: 0 auto
      display: block
      margin-top: 16px
      text-decoration: none
      color: #fff
      opacity: 0.3
      text-align: center
    .special-proposal-item
      display: flex
      align-items: center
      justify-content: space-between
      padding-bottom: 16px
      border-bottom: 1px solid rgba(255,255 ,255 ,0.14 )
      margin-bottom: 16px
      .avatar-name
        display: flex
        align-items: center
        .avatar
          margin-right: 12px
          border-radius: 50%
          width: 48px
          height: 48px
        .name-adress
          .name
            font-size: 14px
            font-weight: 500
            color: #fff
          .adress
            font-size: 14px
            font-weight: 500
            opacity: 0.3

.recommended-mailings
  .swiper .swiper-slide
    width: 456px

.recommended-mailings .slider
  position: relative
  .slider-nav
    position: absolute
    right: -80px
    top: 50%
    transform: translateY(-50%)
    cursor: pointer
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

.potential-partners .slider
  position: relative
  .swiper .swiper-slide
    width: 240px

.potential-partners .slider .slider-nav
  position: absolute
  right: -80px
  top: 50%
  transform: translateY(-50%)
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
</style>