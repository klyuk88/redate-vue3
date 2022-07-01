<script setup>
import { ref } from 'vue'
import TheSelect from '@/components/Form/TheSelect.vue'
import BigButton from '@/components/Form/BigButton.vue'

const city = ref('Москва')
const cities = ref([ 'Москва', 'Казань', 'Санкт-Петербург' ])
</script>

<template>
  <div class="search-city-block">
    <h3 class="page-subtitle">Поиск по городу</h3>
    <TheSelect
      v-model="city"
      :options="cities"
      placeholder="Выберите город"
    />
    <BigButton title="Найти город" />
  </div>
</template>

<style>
.search-city-block {
  padding-left: 40px;
}
.search-city-block .page-subtitle {
  margin-bottom: 16px;
}
</style>
