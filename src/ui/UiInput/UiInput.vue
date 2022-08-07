<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (prop) => ['text', 'password'].includes(prop),
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
  eye: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['focus', 'update:value', 'changeType'])

const input = ref(null)

const isClicked = ref(false)

const eyeState = ref(false)
const eyeType = ref('close')

const cssClasses = computed(() => {
  return {
    ['ui-input--error']: props.error,
  }
})

const focusHandler = () => {
  if (props.eye) {
    eyeState.value = true
  }

  emits('focus')
}

const focusOutHandler = () => {
  setTimeout(() => {
    if (isClicked.value) {
      isClicked.value = false

      return
    }

    if (props.eye) {
      eyeState.value = false
    }
  }, 150)
}

const inputHandler = (event) => {
  emits('update:value', event.target.value)
}

const clickHandler = () => {
  isClicked.value = true

  eyeType.value = eyeType.value === 'close' ? 'open' : 'close'

  emits('changeType')

  input.value.focus()
}
</script>

<template>
  <div class="ui-input" :class="cssClasses">
    <div
      v-show="eye && eyeState"
      class="ui-input__eye"
      :class="`ui-input__eye--${eyeType}`"
      @click="clickHandler()"
    ></div>
    <input
      ref="input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      class="ui-input__input"
      @input="inputHandler($event)"
      @focus="focusHandler()"
      @focusout="focusOutHandler()"
    />
  </div>
</template>

<style lang="scss">
.ui-input {
  position: relative;
  width: 100%;

  &--error {
    .ui-input__input {
      border-color: #2965ff;
    }
  }

  &__eye {
    position: absolute;
    z-index: 5;
    top: 50%;
    right: 12.5px;
    transform: translate(0, -50%);
    width: 24px;
    height: 24px;
    cursor: pointer;

    &--close {
      background: url('@/assets/images/icons/eye_close.svg');
    }

    &--open {
      background: url('@/assets/images/icons/eye_open.svg');
    }
  }

  &__input {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 60px;
    padding: 0 12.5px;
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
}
</style>
