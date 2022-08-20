<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  breastValue: {
    type: String,
    required: true,
  },
  waistValue: {
    type: String,
    required: true,
  },
  tipsValue: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits([
  'update:breast-value',
  'update:waist-value',
  'update:tips-value',
  'focus',
])

const breastRef = ref(null)
const waistRef = ref(null)
const tipsRef = ref(null)

const focus = ref(false)

const cssClasses = computed(() => {
  return {
    'ui-input-params--focus': focus.value,
    'ui-input-params--error': props.error,
  }
})

const inputBreastHandler = (event) => {
  event.target.value = event.target.value.slice(0, 3)

  if (event.target.value.length === 3) {
    waistRef.value.focus()
  }

  emits('update:breast-value', event.target.value)
}

const inputWaistHandler = (event) => {
  event.target.value = event.target.value.slice(0, 3)

  if (event.target.value.length === 3) {
    tipsRef.value.focus()
  }

  if (event.target.value.length === 0) {
    breastRef.value.focus()
  }

  emits('update:waist-value', event.target.value)
}

const inputTipsHandler = (event) => {
  event.target.value = event.target.value.slice(0, 3)

  if (event.target.value.length === 0) {
    waistRef.value.focus()
  }

  emits('update:tips-value', event.target.value)
}

const focusHandler = () => {
  focus.value = true

  emits('focus')
}

const focusOutHandler = () => {
  focus.value = false
}
</script>

<template>
  <div class="ui-input-params" :class="cssClasses">
    <input
      ref="breastRef"
      type="number"
      class="ui-input-params__breast"
      min="0"
      max="3"
      placeholder="90"
      :value="breastValue"
      @input="inputBreastHandler($event)"
      @focus="focusHandler()"
      @focusout="focusOutHandler()"
    />
    <input
      ref="waistRef"
      type="number"
      class="ui-input-params__waist"
      min="0"
      max="3"
      placeholder="60"
      :value="waistValue"
      @input="inputWaistHandler($event)"
      @focus="focusHandler()"
      @focusout="focusOutHandler()"
    />
    <input
      ref="tipsRef"
      type="number"
      class="ui-input-params__tips"
      min="0"
      max="3"
      placeholder="90"
      :value="tipsValue"
      @input="inputTipsHandler($event)"
      @focus="focusHandler()"
      @focusout="focusOutHandler()"
    />
  </div>
</template>

<style lang="scss">
.ui-input-params {
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
    left: 56px;
  }

  &::before {
    left: 118px;
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

  &__breast,
  &__waist,
  &__tips {
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

  &__breast {
    width: 56px;
    padding: 0 22px 0 16px;
    border-right: none;
    border-radius: 11px 0 0 11px;
  }

  &__waist {
    width: 62px;
    padding: 0 22px;
    border-right: none;
    border-left: none;
    border-radius: 0;
  }

  &__tips {
    width: 56px;
    padding: 0 16px 0 22px;
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
