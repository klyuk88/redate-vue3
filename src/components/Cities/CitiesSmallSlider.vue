<script setup>
import { computed } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from '~swiper/vue/swiper-vue.js'
import CitiesSmallSliderItem from '@/components/Cities/CitiesSmallSliderItem.vue'

const props = defineProps({
  usersStatistics: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['redirect'])

const formatedUsersStatistics = computed(() => {
  const size = 4
  const subArray = []

  for (let i = 0; i < Math.ceil(props.usersStatistics.length / size); i++) {
    subArray[i] = props.usersStatistics.slice(i * size, i * size + size)
  }

  return subArray
})

const clickHandler = (item) => {
  const params = { cityId: item.id }

  emit('redirect', params)
}
</script>

<template>
  <div class="small-slider-wrap">
    <Swiper
      :modules="[Navigation]"
      :space-between="16"
      slides-per-view="auto"
      class="cities-small-slider"
      :navigation="{
        nextEl: '.small-slider-wrap .nav',
      }"
    >
      <SwiperSlide v-for="(usersStats, i) in formatedUsersStatistics" :key="i">
        <CitiesSmallSliderItem
          v-for="(item, j) in usersStats"
          :key="j"
          :city="item.name"
          :total-registered="item.cityAll"
          :new-users="item.cityNew"
          @click="clickHandler(item)"
        />
      </SwiperSlide>
    </Swiper>

    <img
      src="@/assets/images/main/arrow-rigth.svg"
      alt="Иконка стрелки вправо"
      class="nav"
    />
  </div>
</template>

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
