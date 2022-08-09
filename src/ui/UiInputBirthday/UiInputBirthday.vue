<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  dayValue: {
    type: String,
    required: true,
  },
  monthValue: {
    type: String,
    required: true,
  },
  yearValue: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:day', 'update:month', 'update:year'])

const dayRef = ref(null)
const monthRef = ref(null)
const yearRef = ref(null)

const focus = ref(false)

const cssClasses = computed(() => {
  return {
    'ui-input-birthday--focus': focus.value,
    'ui-input-birthday--error': props.error,
  }
})

const inputDayHandler = (event) => {
  event.target.value = event.target.value.slice(0, 2)

  if (event.target.value.length === 2) {
    monthRef.value.focus()
  }

  emits('update:day', event.target.value)
}

const inputMonthHandler = (event) => {
  event.target.value = event.target.value.slice(0, 2)

  if (event.target.value.length === 2) {
    yearRef.value.focus()
  }

  if (event.target.value.length === 0) {
    dayRef.value.focus()
  }

  emits('update:month', event.target.value)
}

const inputYearHandler = (event) => {
  event.target.value = event.target.value.slice(0, 4)

  if (event.target.value.length === 0) {
    monthRef.value.focus()
  }

  emits('update:year', event.target.value)
}

const focusHandler = () => {
  focus.value = true
}

const focusOutHandler = () => {
  focus.value = false
}
</script>

<template>
  <div class="ui-input-birthday" :class="cssClasses">
    <input
      ref="dayRef"
      type="number"
      class="ui-input-birthday__day"
      min="0"
      max="2"
      placeholder="01"
      :value="dayValue"
      @input="inputDayHandler($event)"
      @focus="focusHandler()"
      @focusout="focusOutHandler()"
    />
    <input
      ref="monthRef"
      type="number"
      class="ui-input-birthday__month"
      min="0"
      max="2"
      placeholder="01"
      :value="monthValue"
      @input="inputMonthHandler($event)"
      @focus="focusHandler()"
      @focusout="focusOutHandler()"
    />
    <input
      ref="yearRef"
      type="number"
      class="ui-input-birthday__year"
      min="0"
      max="4"
      placeholder="2000"
      :value="yearValue"
      @input="inputYearHandler($event)"
      @focus="focusHandler()"
      @focusout="focusOutHandler()"
    />
  </div>
</template>

<style lang="scss">
.ui-input-birthday {
  position: relative;
  display: flex;
  align-items: center;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 1px;
    height: 18px;
    background: rgba(255, 255, 255, 0.14);
  }

  &::after {
    left: 54px;
  }

  &::before {
    left: 102px;
  }

  &--focus {
    input {
      border-color: #ffffff;
    }
  }

  &--error {
    input {
      border-color: #2b66fb;
    }
  }

  &__day,
  &__month,
  &__year {
    position: relative;
    z-index: 1;
    height: 60px;
    padding: 0 16px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    background: transparent;
    outline: 0;
    font-family: 'Mulish';
    color: #ffffff;
    font-size: 15px;
    line-height: 153.5%;
    font-weight: 600;
    transition: border 0.2s linear;
    text-align: center;
  }

  &__day {
    width: 54px;
    padding: 0 10px 0 16px;
    border-right: none;
    border-radius: 11px 0 0 11px;
  }

  &__month {
    width: 48px;
    padding: 0 10px;
    border-right: none;
    border-left: none;
    border-radius: 0;
  }

  &__year {
    width: 72px;
    padding: 0 16px 0 10px;
    border-left: none;
    border-radius: 0 11px 11px 0;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
}
</style>
