<template>
  <div class="small-slider-wrap">
    <Swiper
      :modules="[Navigation]"
      :spaceBetween="16"
      :slidesPerView="'auto'"
      class="cities-small-slider"
      :navigation="{
        nextEl: '.small-slider-wrap .nav',
      }"
    >
      <SwiperSlide v-for="(item, index) in 3" :key="index">
        <CitiesSmallSliderItem />
        <CitiesSmallSliderItem />
        <CitiesSmallSliderItem />
        <CitiesSmallSliderItem />
      </SwiperSlide>
    </Swiper>    <img src="@/assets/images/main/arrow-rigth.svg" alt="" class="nav" />
  </div>
</template>
<script setup>
import CitiesSmallSliderItem from "@/components/Cities/CitiesSmallSliderItem.vue";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

// const size = 3;
// for (let i = 0; i < Math.ceil(data.value.length / size); i++) {
//   sliceData.value[i] = data.value.slice(i * size, i * size + size);
// }

</script>
<style lang="scss">

.small-slider-wrap {
  position: relative;
}
.small-slider-wrap .nav {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.cities-small-slider .swiper-slide {
  width: 577px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
}

</style>

