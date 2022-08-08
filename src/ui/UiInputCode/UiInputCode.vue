<script setup>
import { computed } from 'vue'

const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['input', 'focus'])

const cssClasses = computed(() => {
  return {
    ['ui-input-code--error']: props.error,
  }
})

let code = Array(6)
let dataFromPaste

const inputHandler = (event) => {
  const inputType = event?.inputType
  let currentActiveElement = event?.target

  if (inputType === 'insertText') {
    currentActiveElement.nextElementSibling?.focus()
  }

  if (inputType === 'insertFromPaste' && dataFromPaste) {
    for (const num of dataFromPaste) {
      let id = parseInt(currentActiveElement.id.split('_')[1])

      currentActiveElement.value = num

      code[id] = num

      if (currentActiveElement.nextElementSibling) {
        currentActiveElement = currentActiveElement.nextElementSibling
        currentActiveElement.nextElementSibling?.focus()
      }
    }
  }

  emits('input', code)
}

const deleteHandler = (event) => {
  let value = event?.target?.value

  let currentActiveElement = event?.target

  if (!value) {
    currentActiveElement?.previousElementSibling?.focus()
  }
}

const pasteHandler = (event) => {
  dataFromPaste = event?.clipboardData?.getData('text').trim().split('')
}

const focusHandler = () => {
  emits('focus')
}
</script>

<template>
  <div class="ui-input-code" :class="cssClasses">
    <input
      v-for="(n, index) in code"
      :id="'input_' + index"
      :key="index"
      v-model="code[index]"
      class="ui-input-code__item"
      type="text"
      maxlength="1"
      @input="inputHandler($event)"
      @keydown.delete="deleteHandler($event)"
      @paste="pasteHandler($event)"
      @focus="focusHandler()"
    />
  </div>
</template>

<style lang="scss">
.ui-input-code {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &--error {
    .ui-input-code__item {
      border-color: #2965ff;
    }
  }

  &__item {
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    background: transparent;
    color: #ffffff;
    font-family: 'Mulish';
    font-size: 18px;
    line-height: 153.5%;
    font-weight: 600;
    text-align: center;
    outline: 0;
    transition: border 0.2s linear;

    &:focus {
      border-color: #ffffff;
    }
  }
}

@media only screen and (max-width: 991px) {
  .ui-input-code {
    &__item {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
