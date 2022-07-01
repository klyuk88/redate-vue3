<script setup>
import BackLink from '@/components/Search/BackLink.vue'
import TheSelect from '@/components/Form/TheSelect.vue'
import TheFormats from '@/components/Form/TheFormats.vue'
import FormRange from '@/components/Form/FormRange.vue'
import FormCheckbox from '@/components/Form/FormCheckbox.vue'
import BigButton from '@/components/Form/BigButton.vue'
import { ref } from 'vue'
import { useStore } from '@/stores/main.js'

const store = useStore()
const options = ref([ 'Москва', 'Санкт-Петербург', 'Казань' ])
const city = ref(null)
</script>

<template>
  <div id="mobile-sorting">
    <div class="decor"></div>
    <div class="head">
      <div class="back-link">
        <BackLink @click="store.mobileSorting = false" />
      </div>
      <h2 class="title">Сортировка</h2>
    </div>
    <div class="sort-form">
      <TheSelect
        v-model="city"
        placeholder="Выберите город"
        :options="options"
      />
      <FormRange />
      <TheFormats />
      <FormCheckbox title="Сейчас онлайн" />
      <BigButton title="Начать поиск" />
    </div>
  </div>
</template>

<style lang="scss">
#mobile-sorting {
  position: fixed;
  width: 375px;
  max-width: 375px;
  padding: 0 20px 40px 20px;
  height: 99.9%;
  overflow-y: scroll;
  left: 50%;
  transform: translateX(-50%);
  background: #1c1d21;
  top: 0;
  z-index: 10;
  #formats {
    margin-top: 20px;
  }
  #form-checkbox {
    margin-top: 20px;
  }
  .big-btn {
    margin-top: 20px;
  }

  .head {
    text-align: center;
    position: relative;
    padding: 20px 0;
    margin-top: 30px;
    .title {
      font-size: 17px;
      font-weight: 600;
    }
    .back-link {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .sort-form {
    margin-top: 20px;
  }
}
</style>
