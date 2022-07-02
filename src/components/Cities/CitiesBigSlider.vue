<script setup>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from '~swiper/vue/swiper-vue.js'
import CityBigItem from '@/components/Cities/CityBigItem.vue'

defineProps({
  usersStatistics: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['redirect'])

const clickHandler = (item) => {
  const params = { cityId: item.id }

  emit('redirect', params)
}
</script>

<template>
  <div class="city-big-slider-wrap">
    <Swiper
      :modules="[Pagination]"
      :space-between="15"
      :slides-per-view="1"
      class="city-big-slider"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
      }"
    >
      <SwiperSlide v-for="(item, idx) in usersStatistics" :key="idx">
        <CityBigItem
          :city="item.name"
          :total-registered="item.cityAll"
          :new-users="item.cityNew"
          @click="clickHandler(item)"
        />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

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
