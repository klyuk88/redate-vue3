<template>
  <div class="city-big-slider-wrap">
    <Swiper
      :modules="[Pagination]"
      :spaceBetween="15"
      :slidesPerView="1"
      class="city-big-slider"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
      }"
    >
      <SwiperSlide v-for="(item, idx) in 3" :key="idx">
        <CityBigItem />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CityBigItem from "@/components/Cities/CityBigItem.vue";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
</script>
<style>
.city-big-slider {
  height: auto;
  width: 100%;
}

.city-big-slider .swiper-slide {
  display: flex;
  gap: 15px;
}
.city-big-slider-wrap
  .swiper-pagination
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}
.city-big-slider-wrap .swiper-pagination .swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.33);
}
.city-big-slider-wrap .swiper-pagination-bullets {
  bottom: -25px;
}

.city-big-slider-wrap {
  position: relative;
  display: none;
}
@media (max-width: 1200px) {
  .city-big-slider-wrap {
    display: block;
  }
  .city-big-slider .swiper-slide {
    height: 170px;
  }

}
</style>