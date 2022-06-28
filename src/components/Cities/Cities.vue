<template>
  <div class="cities-block">
    <Statistics />
    <div class="decor-line"></div>
    <!-- На мобильном  -->
    <CitiesBigSlider />
    <CitiesSearchMobInput/>
    <!-- На десктопе -->
    <CitiesBigItems/>
    <div class="hidden-part"
    :class="{'show': store.showCities}"
    >
        <p class="title">Зарегистрировано по городам</p>
        <div class="grid">
          <div class="slider">
            <CitiesSmallSlider/>
          </div>
          <!-- <div class="search">
            <SearchCities />
          </div> -->
        </div>
    </div>
    <!-- <button class="all-cities" @click="openCities">{{store.showCities ? 'Скрыть' : 'Все города'}}</button> -->
  </div>
  <Filter/>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import {useStore} from '@/stores/main.js'
import Statistics from "@/components/Cities/Statistics.vue";
import CitiesSmallSlider from "@/components/Cities/CitiesSmallSlider.vue";
import SearchCities from  '@/components/Cities/SearchCities.vue'
import CitiesBigItems from '@/components/Cities/CitiesBigItems.vue'
import CitiesBigSlider from '@/components/Cities/CitiesBigSlider.vue'
import CitiesSearchMobInput from '@/components/Cities/CitiesSearchMobInput.vue'
import Filter from '@/components/Main/Filter.vue'

const store = useStore()

const openCities = () => {
  store.showCities = !store.showCities
}

</script>

<style>
.cities-block {
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 24px;
  border-radius: 40px;
  position: relative;
  /* overflow: hidden; */
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
  background: #2C66FA;
  border-radius: 0px 0px 18px 18px;
  width: 115px;
  height: 24px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  color: #fff
}

.cities-block .hidden-part {
  margin-top: 0;
  transition: max-height .2s ease;
  max-height: 0;
  overflow: hidden;
}

.cities-block .hidden-part.show {
  max-height: 500px;
  margin-top: 24px;
  overflow: visible;
}

.cities-block .hidden-part.show > .title {
  opacity: 1;
  transition: 0.5s ease;
}

.cities-block .hidden-part > .title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
  opacity: 0;
}

.hidden-part .grid {
  display: grid;
  /* grid-template-columns: 1fr 370px; */
  grid-template-columns: 1fr;
}
.hidden-part .slider {
  overflow: hidden;
  padding-right: 50px;
}

@media (max-width :1200px) {
  .cities-block {
    padding: 0;
    border: none;
  }
  .cities-block .all-cities {
    display: none;
  }
  .cities-block .hidden-part {
    display: none;
  }

  
}
</style>