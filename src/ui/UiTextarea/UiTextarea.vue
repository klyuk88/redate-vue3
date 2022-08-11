<script setup>
import { computed } from 'vue'

const props = defineProps({
  maxLength: {
    type: Number,
    default: 300,
  },
  length: {
    type: Number,
    default: 300,
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    required: true,
  },
})

const emits = defineEmits(['focus', 'update:value'])

const cssClasses = computed(() => {
  return {
    ['ui-textarea--error']: props.error,
  }
})

const focusHandler = () => {
  emits('focus')
}

const inputHandler = (event) => {
  if (props.maxLength) {
    event.target.value = event.target.value.slice(0, props.maxLength)
  }

  emits('update:value', event.target.value)
}
</script>

<template>
  <div class="ui-textarea" :class="cssClasses">
    <textarea
      class="ui-textarea__textarea"
      :maxlength="maxLength"
      :value="value"
      :placeholder="placeholder"
      @focus="focusHandler()"
      @input="inputHandler($event)"
    ></textarea>

    <div class="ui-textarea__length">{{ length }}</div>
  </div>
</template>

<style lang="scss">
.ui-textarea {
  position: relative;
  width: 100%;

  &--error {
    .ui-textarea__textarea {
      border-color: #2965ff;
    }
  }

  &__textarea {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 254px;
    padding: 12.5px;
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
    resize: none;

    &::placeholder {
      font-family: 'Mulish';
      color: rgba(255, 255, 255, 0.33);
      font-size: 15px;
      line-height: 153.5%;
      font-weight: 600;
    }

    &:focus {
      border-color: #ffffff;
    }
  }

  &__length {
    pointer-events: none;
    position: absolute;
    bottom: 7px;
    right: 12px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 153.5%;
    color: rgba(255, 255, 255, 0.33);
  }
}
</style>
