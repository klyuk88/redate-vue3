<template>
  <div class="filter">
    <div>
      <TheSelect
        :options="options"
        :placeholder="'Выберите город'"
        v-model="city"
      />
    </div>
    <div>
      <div class="range" :class="{ active: showLabel }">
        <vue-slider
          v-model="range"
          :height="2"
          :tooltip="'always'"
          :min="18"
          :max="45"
          :interval="1"
          :lazy="true"
          :enableCross="false"
          :railStyle="{
            background: 'rgba(255,255,255, 0.3)',
          }"
          :dotStyle="{
            background: '#fff',
            height: '12px',
            width: '12px',
          }"
          :processStyle="{ background: '#fff' }"
          :tooltipStyle="{
            background: 'transparent',
            'font-size': '12px',
            'font-weigth': '600',
          }"
          @drag-start="showLabel = true"
          @drag-end="showLabel = false"
        />
      </div>
    </div>
    <div>
      <BigButton :title="'Начать поиск'" />
    </div>
  </div>
</template>
<script setup>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import TheSelect from '@/components/Form/TheSelect.vue'
import BigButton from '@/components/Form/BigButton.vue'
import { ref, reactive } from 'vue'

const options = ref(["Москва", "Санкт-Петербург", "Казань"]);
const city = ref("Москва");
const format = ref("Любой");
const range = ref([18, 45]);
const showLabel = ref(false);

</script>
<style lang="scss">
.filter {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 12px;
  @media (max-width: 1200px) {
    display: none;
  }
  .vue-slider-dot-tooltip-inner-top::after {
    display: none;
  }
  .range {
    border: 1px solid rgba(255, 255, 255, 0.33);
    height: 60px;
    border-radius: 11px;
    padding: 0 13px;
    padding-top: 16px;
    position: relative;
    .vue-slider-dot-tooltip-top {
      top: 40px;
    }
  }
  .range.active {
    border: 1px solid #fff;
  }
  .range.active:before {
    content: "Возраст";
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    top: -25px;
  }
}
</style>