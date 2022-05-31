<template>
  <div class="send-slider">
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="[Navigation, Pagination]"
      :navigation="{
        nextEl: '.slider-nav.right',
        prevEl: '.slider-nav.left',
      }"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
      }"
    >
      <SwiperSlide>
        <SendSliderItem />
      </SwiperSlide>
      <SwiperSlide>
        <SendSliderItem />
      </SwiperSlide>
      <SwiperSlide>
        <SendSliderItem />
      </SwiperSlide>
    </Swiper>
  <div class="swiper-pagination"></div>
    <svg
      class="slider-nav right"
      width="21"
      height="41"
      viewBox="0 0 21 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.0127 40C0.554563 40 12.7051 28.091 19.4892 21.5021C19.8897 21.1132 19.8926 20.4737 19.4979 20.0789L1.0127 1.59375"
        stroke="white"
        stroke-opacity="1"
        stroke-width="2"
      />
    </svg>
    <svg
      class="slider-nav left"
      width="22"
      height="41"
      viewBox="0 0 22 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2031 1C20.6613 1 8.51077 12.909 1.72662 19.4979C1.32616 19.8868 1.32322 20.5263 1.71795 20.9211L20.2031 39.4062"
        stroke="white"
        stroke-opacity="1"
        stroke-width="2"
      />
    </svg>
  </div>
</template>
<script setup>
import SendSliderItem from "@/components/Sends/SendSliderItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import { Navigation, Pagination } from "swiper";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
</script>
<style lang="scss">
.send-slider {
  position: relative;
  max-width: 788px;
  margin: 0 auto;
  margin-bottom: 40px;
  .slider-nav.left {
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .slider-nav.right {
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .swiper-pagination {
    bottom: -25px;
    .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.33);
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: #fff;
    }
  }

}
</style>