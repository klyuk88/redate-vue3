<script setup>
import { computed } from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

defineProps({
  tooltip: {
    type: Boolean,
    default: true,
  },
  intervalValue: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['update:interval-value', 'focus'])

const points = computed(() => [
  {
    value: 50,
    step: 5,
  },
  {
    value: 100,
    step: 10,
  },
  {
    value: 200,
    step: 10,
  },
  {
    value: 300,
    step: 20,
  },
  {
    value: 500,
    step: 20,
  },
  {
    value: 700,
    step: 30,
  },
  {
    value: 1000,
    step: 30,
  },
])

const data = computed(() => {
  let result = []

  points.value.forEach((point, idx) => {
    const lastPointValue = points.value[points.value.length - 1].value

    if (point.value === lastPointValue) {
      return
    } else {
      const nextPoint = points.value[idx + 1]

      for (let i = point.value; i <= nextPoint.value; i += point.step) {
        result.push(i)
      }
    }
  })

  const uniqueValues = new Set(result)

  return [...uniqueValues]
})

const marks = computed(() => points.value.map((point) => point.value))

const tooltipFormatter = (value) => {
  let resultValue = value

  if (value === 1000) {
    resultValue = `${value.toString().substring(0, 1)} ${value
      .toString()
      .substring(1, 4)}`
  }

  return `${resultValue} 000 ₽`
}

const labelFormatter = (label) => {
  let resultLabel = `${label} т.`

  if (label === 1000) {
    resultLabel = '>1 млн.'
  }

  return resultLabel
}

const changeHandler = (event) => {
  emits('update:interval-value', event)
}

const draggingHandler = () => {
  emits('focus')
}
</script>

<template>
  <div class="ui-input-interval-range">
    <VueSlider
      :value="intervalValue"
      tooltip="always"
      :lazy="true"
      :data="data"
      :marks="marks"
      :rail-style="{
        background: '#6C6D71',
        height: '2px',
      }"
      @change="changeHandler($event)"
      @drag-start="draggingHandler()"
    >
      <template #label="{ label, active }">
        <div
          :class="[
            'ui-input-interval-range__label',
            { active: label === intervalValue && active },
          ]"
          v-text="labelFormatter(label)"
        ></div>
      </template>
      <template #tooltip="{ value, focus }">
        <div
          :class="{
            'ui-input-interval-range__tooltip': true,
            focus,
            'ui-input-interval-range__tooltip--show': tooltip,
          }"
          v-text="tooltipFormatter(value)"
        ></div>
      </template>
      <template #step="{ active }">
        <div :class="['ui-input-interval-range__step', { active }]"></div>
      </template>
      <template #dot="{ focus }">
        <div :class="['ui-input-interval-range__dot', { focus }]"></div>
      </template>
      <template #process>
        <div class="ui-input-interval-range__process"></div>
      </template>
    </VueSlider>
  </div>
</template>

<style lang="scss">
.ui-input-interval-range {
  width: 100%;

  &__tooltip {
    display: none;
    width: 80px;
    color: #2e66f5;
    font-weight: 500;
    font-size: 14px;
    line-height: 153.5%;
    text-align: center;

    &--show {
      display: block;
    }
  }

  &__dot {
    width: 12px;
    height: 12px;
    background: #ffffff;
    border-radius: 50%;
  }

  &__step {
    position: relative;
    top: -4px;
    width: 2px;
    height: 10px;
    background: #6c6d71;
  }

  &__label {
    position: absolute;
    left: 50%;
    bottom: -26px;
    transform: translate(-50%, 0);
    width: 35px;
    font-weight: 600;
    font-size: 10px;
    line-height: 132.5%;
    letter-spacing: -0.04em;
    color: rgba(255, 255, 255, 0.33);
    text-align: center;
  }

  &__label.active {
    color: #ffffff;
  }
}
</style>
