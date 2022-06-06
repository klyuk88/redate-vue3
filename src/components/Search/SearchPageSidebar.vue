<template>
  <div id="searchPageSidebar">
    <h3 class="page-subtitle">Сортировка</h3>
    <form>
      <TheSelect
        :placeholder="'Страна, город'"
        :options="cities"
        v-model="city"
      />
      <FormRange/>
      
      <TheFormats/>
      <FormCheckbox :title="'Сейчас онлайн'"/>
      <BigButton :title="'Начать поиск'"/>
    </form>
  </div>
</template>

<script setup>
import TheSelect from "@/components/Form/TheSelect.vue";
import TheFormats from '@/components/Form/TheFormats.vue'
import FormRange from '@/components/Form/FormRange.vue'
import FormCheckbox from '@/components/Form/FormCheckbox.vue'
import BigButton from '@/components/Form/BigButton.vue'

import { ref } from "vue";

const city = ref(null);
const cities = ref(["Москва", "Дубай", "Казань", "Санкт-Петербург"]);
</script>

<style lang="scss">
#searchPageSidebar {
  width: 100%;
  border: 1px solid #ffffff54;
  border-radius: 24px;
  background: rgba(196, 196, 196, 0.05);
  padding: 24px;
  #formats {
    margin-top: 20px;
  }
  #form-checkbox {
    margin-top: 20px;
  }
  .big-btn {
    margin-top: 20px;
  }
  .page-subtitle {
    margin-bottom: 16px;
  }
}
</style>