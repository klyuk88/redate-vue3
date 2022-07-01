<script setup>
import { ref, computed } from 'vue'
import VueSlider from 'vue-slider-component'
import TheSelect from '@/components/Form/TheSelect.vue'
import BigButton from '@/components/Form/BigButton.vue'
import 'vue-slider-component/theme/default.css'

const props = defineProps({
  currentCity: {
    type: Object,
    required: true,
  },
  cities: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['redirect'])

const city = ref(props.currentCity.name)
const range = ref([18, 45])
const showLabel = ref(false)

const options = computed(() => props.cities.map((city) => city.name))

const clickHandler = () => {
  const foundCity = props.cities.find((item) => item.name === city.value)

  emit('redirect', {
    id: foundCity.id,
    ageMin: range.value[0],
    ageMax: range.value[1],
  })
}
</script>

<template>
  <div class="filter">
    <div>
      <TheSelect
        v-model="city"
        :options="options"
        placeholder="Выберите город"
      />
    </div>
    <div>
      <div class="range" :class="{ active: showLabel }">
        <vue-slider
          v-model="range"
          :height="2"
          tooltip="always"
          :min="18"
          :max="45"
          :interval="1"
          :lazy="true"
          :enable-cross="false"
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
          @drag-start="showLabel = true"
          @drag-end="showLabel = false"
        />
      </div>
    </div>
    <div>
      <BigButton title="Начать поиск" @click="clickHandler()" />
    </div>
  </div>
</template>

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
    content: 'Возраст';
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    top: -25px;
  }
}
</style>
