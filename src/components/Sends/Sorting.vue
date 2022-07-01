<script setup>
import TheSelect from '@/components/Form/TheSelect.vue'
import TheFormats from '@/components/Form/TheFormats.vue'
import FormRange from '@/components/Form/FormRange.vue'
import BigButton from '@/components/Form/BigButton.vue'
import { ref } from 'vue'

const cities = ref([
  'Москва',
  'Санкт-Петербург',
  'Сочи',
  'Казань',
  'Новосибирск',
])
</script>

<template lang="">
  <form class="sorting">
    <h2 class="page-subtitle sort-title">Сортировка</h2>
    <TheSelect :options="cities" placeholder="Выберите город" />
    <TheFormats />
    <FormRange />
    <BigButton title="Начать поиск" />
  </form>
</template>

<style lang="scss">
.sorting {
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  padding: 24px;
  #formats {
    margin-bottom: 20px;
  }
  .big-btn {
    margin-top: 16px;
  }
  .page-subtitle.sort-title {
    margin-bottom: 16px;
  }
}
</style>
