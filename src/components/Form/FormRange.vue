<script setup>
import { ref } from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

const range = ref([ 18, 45 ])
</script>

<template>
  <div id="range-age">
    <p class="label">Возраст</p>
    <vue-slider
      v-model="range"
      :height="2"
      :min="18"
      :max="45"
      :interval="1"
      :lazy="true"
      :enable-cross="false"
      tooltip="always"
      tooltip-placement="bottom"
      :rail-style="{
        background: 'rgba(255,255,255, 0.3)',
      }"
      :dot-style="{
        background: '#fff',
        height: '12px',
        width: '12px',
      }"
      :process-style="{ background: '#fff' }"
      :tooltip-style="{
        background: 'transparent',
        'font-size': '12px',
        'font-weigth': '600',
      }"
    />
  </div>
</template>

<style lang="scss">
#range-age {
  border: 1px solid rgba(255, 255, 255, 0.33);
  height: auto;
  border-radius: 11px;
  padding: 12px 20px 35px 20px;
  position: relative;
  .label {
    font-size: 15px;
    font-weight: 600;
    opacity: 0.3;
    margin-bottom: 5px;
  }
  .vue-slider-dot-tooltip-bottom {
    bottom: 0;
  }
  .vue-slider-dot-tooltip-inner-bottom::after {
    display: none;
  }
}
</style>
