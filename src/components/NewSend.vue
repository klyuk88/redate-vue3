<template>
  <div>
    <div class="new-send">
      <h3 class="page-subtitle mb-16">Создать новую рассылку</h3>

      <TheSelect
      :options="cities"
      :placeholder="'Выберите город'"
      v-model="city"
      />
      <label class="form-label">Формат знакомств</label>
      <TheSelect
      :options="formats"
      :placeholder="'Выберите формат'"
      v-model="format"
      :zIndex="1"
      />
      <BigButton
      :title="'Создать рассылку'"
      />
      
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import vSelect from "vue-select";
import TheSelect from '@/components/Form/TheSelect.vue'
import BigButton from '@/components/Form/BigButton.vue'

const city = ref("Москва");
const format = ref("Любой");

const cities = ref(["Москва", "Санкт-Петербург", "Казань"]);
const formats = ref([
  "Онлайн общение",
  "Серезные отношения",
  "Свидание",
  "Путешествие",
]);
</script>


<style lang="sass">
.new-send
    padding: 0 20px
.form-label
    color: #fff
    margin-bottom: 10px
    font-size: 14px
    display: block

.mb-16
    margin-bottom: 16px
</style>