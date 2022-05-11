<template>
  <div class="cities-block">
    <Statistics/>
    <div class="decor-line"></div>
    <CitiesBigSlider/>
    <!-- <CitiesSmallSlider/> -->
    <button class="all-cities">Все города</button>
  </div>

</template>

<script setup>
import Statistics from '@/components/Cities/Statistics.vue'
import CitiesBigSlider from '@/components/Cities/CitiesBigSlider.vue'
</script>

<style>
.cities-block {
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 24px;
  border-radius: 40px;
  position: relative;
}

.cities-block > .decor-line {
    width: 100%;
    background: rgba(255, 255, 255, 0.14);
    height: 1px;
    margin: 16px 0;
}
.cities-block .all-cities {
  position: absolute;
  cursor: pointer;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  background: #1C1D21;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 0px 0px 18px 18px;
  width: 115px;
  height: 24px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.33);
}

</style>