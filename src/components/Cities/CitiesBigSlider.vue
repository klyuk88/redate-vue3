<template>
  <div class="city-big-slider-wrap">
    <Swiper
      :modules="[Pagination]"
      :spaceBetween="15"
      :slidesPerView="1"
      :direction="'vertical'"
      class="city-big-slider"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
      }"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(item, index) in sliceData" :key="index">
        <CityBigItem />
        <CityBigItem />
        <CityBigItem />
        <!-- <CityBigItem v-for="(elem, idx) in item" :key="idx" :title="elem.title" /> -->
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

const slider = ref(null);

// const onSwiper = (swiper) => {
//   swiper.disable()
// };


const sliceData = ref([]);
const data = ref([
  {
    title: "Slide 1",
  },
  {
    title: "Slide 2",
  },
  {
    title: "Slide 3",
  },
  {
    title: "Slide 4",
  },
  {
    title: "Slide 5",
  },
  {
    title: "Slide 6",
  },
]);
const size = 3;
for (let i = 0; i < Math.ceil(data.value.length / size); i++) {
  sliceData.value[i] = data.value.slice(i * size, i * size + size);
}
</script>
<style>
.city-big-slider {
  height: 218px;
  width: 98%;
  margin-left: 0;
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
  right: 0;
}

.city-big-slider-wrap {
    position: relative;
}
</style>