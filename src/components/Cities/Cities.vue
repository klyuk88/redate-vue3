<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/main.js'
import { useStatisticsStore } from '@/stores/statistics.js'
import { useSearchStore } from '@/stores/search.js'
import { useUserStore } from '@/stores/user.js'
import { useLocationsStore } from '@/stores/locations'
import router from '@/router'
import Statistics from '@/components/Cities/Statistics.vue'
import CitiesSmallSlider from '@/components/Cities/CitiesSmallSlider.vue'
import CitiesBigItems from '@/components/Cities/CitiesBigItems.vue'
import CitiesBigSlider from '@/components/Cities/CitiesBigSlider.vue'
import CitiesSearchMobInput from '@/components/Cities/CitiesSearchMobInput.vue'
import Filter from '@/components/Main/Filter.vue'

const store = useStore()
const statistics = useStatisticsStore()
const search = useSearchStore()
const user = useUserStore()
const locations = useLocationsStore()

const usersStatistics = computed(() =>
  statistics.usersStatisticsByCities.data.slice(0, 3)
)

const usersStatisticsForSlider = computed(() =>
  statistics.usersStatisticsByCities.data.slice(3)
)

const currentCity = computed(() => user.information.data?.city || {})

const cities = computed(() => locations.cities.data)

const statisticsError = computed(() => statistics.error.status)

const usersStatisticsError = computed(
  () => statistics.usersStatisticsByCities.error.status
)

const citiesError = computed(() => locations.cities.error.status)

const redirectHandler = (params) => {
  search.setQueryParams(params)

  router.push('/search')
}
</script>

<template>
  <div class="cities-block">
    <Statistics
      v-if="!statisticsError"
      :total-registered="statistics.totalRegistered"
      :men-registered="statistics.menRegistered"
      :new-users="statistics.newUsers"
    />

    <div class="decor-line"></div>
    <!-- На мобильном  -->
    <CitiesBigSlider
      v-if="!usersStatisticsError && usersStatistics.length"
      :users-statistics="usersStatistics"
      @redirect="redirectHandler($event)"
    />

    <CitiesSearchMobInput @redirect="redirectHandler($event)" />
    <!-- На десктопе -->
    <CitiesBigItems
      v-if="!usersStatisticsError && usersStatistics.length"
      :users-statistics="usersStatistics"
      @redirect="redirectHandler($event)"
    />

    <div
      v-if="!usersStatisticsError && usersStatisticsForSlider.length"
      class="hidden-part"
      :class="{ show: store.showCities }"
    >
      <p class="title">Зарегистрировано по городам</p>
      <div class="grid">
        <div class="slider">
          <CitiesSmallSlider
            :users-statistics="usersStatisticsForSlider"
            @redirect="redirectHandler($event)"
          />
        </div>
      </div>
    </div>
  </div>

  <Filter
    v-if="!citiesError && cities.length && Object.keys(currentCity).length"
    :current-city="currentCity"
    :cities="cities"
    @redirect="redirectHandler($event)"
  />
</template>

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
  background: #2c66fa;
  border-radius: 0px 0px 18px 18px;
  width: 115px;
  height: 24px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  color: #fff;
}

.cities-block .hidden-part {
  margin-top: 0;
  transition: max-height 0.2s ease;
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

@media (max-width: 1200px) {
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
