<template>
  <div class="cities-block">
    <Statistics
      :totalRegistered="statistics.totalRegistered"
      :menRegistered="statistics.menRegistered"
      :newUsers="statistics.newUsers"
    />

    <div class="decor-line"></div>
    <!-- На мобильном  -->
    <CitiesBigSlider v-if="usersStatistics.length" :usersStatistics="usersStatistics" @redirect="redirectHandler" />

    <CitiesSearchMobInput @redirect="redirectHandler" />
    <!-- На десктопе -->
    <CitiesBigItems v-if="usersStatistics.length" :usersStatistics="usersStatistics" @redirect="redirectHandler" />

    <div v-if="usersStatisticsBySlider.length" class="hidden-part" :class="{ show: store.showCities }">
      <p class="title">Зарегистрировано по городам</p>
      <div class="grid">
        <div class="slider">
          <CitiesSmallSlider :usersStatistics="usersStatisticsBySlider" @redirect="redirectHandler" />
        </div>
      </div>
    </div>
  </div>

  <Filter v-if="currentCity && cities.length" :currentCity="currentCity" :cities="cities" @redirect="redirectHandler" />
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from '@/stores/main.js';
import { useUserStore } from '@/stores/user.js';
import { useStatisticsStore } from '@/stores/statistics.js';
import { useSearchStore } from '@/stores/search.js';
import router from '@/router';
import Statistics from '@/components/Cities/Statistics.vue';
import CitiesSmallSlider from '@/components/Cities/CitiesSmallSlider.vue';
import CitiesBigItems from '@/components/Cities/CitiesBigItems.vue';
import CitiesBigSlider from '@/components/Cities/CitiesBigSlider.vue';
import CitiesSearchMobInput from '@/components/Cities/CitiesSearchMobInput.vue';
import Filter from '@/components/Main/Filter.vue';

const store = useStore();
const statistics = useStatisticsStore();
const search = useSearchStore();
const user = useUserStore();

const usersStatistics = computed(() => statistics.usersStatisticsByCities.slice(0, 3));

const usersStatisticsBySlider = computed(() => statistics.usersStatisticsByCities.slice(3));

const currentCity = computed(() => user.user?.city || null);

const cities = computed(() => statistics.cities || []);

const redirectHandler = (params) => {
  search.setQueryParams(params.id, params.ageMin, params.ageMax, params.query);

  router.push('/search');
};
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
