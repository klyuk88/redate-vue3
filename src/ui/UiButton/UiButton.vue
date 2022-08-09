<script setup>
import { computed } from 'vue'

const CURRENT_CSS_CLASS = 'ui-button'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (prop) => ['primary', 'secondary'].includes(prop),
  },
  size: {
    type: String,
    default: 'normal',
    validator: (prop) => ['normal', 'normal-auto', 'big'].includes(prop),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['click'])

const cssClasses = computed(() => {
  return {
    [CURRENT_CSS_CLASS]: true,
    [`${CURRENT_CSS_CLASS}--${props.variant}`]: true,
    [`${CURRENT_CSS_CLASS}--${props.size}`]: true,
    [`${CURRENT_CSS_CLASS}--is-loading`]: props.isLoading,
    [`${CURRENT_CSS_CLASS}--disabled`]: props.disabled,
  }
})

const clickHandler = () => {
  if (!props.disabled && !props.isLoading) {
    emits('click')
  }
}
</script>

<template>
  <button
    :class="cssClasses"
    :disabled="disabled || isLoading"
    @click="clickHandler()"
  >
    <div v-if="isLoading" :class="`${CURRENT_CSS_CLASS}__loader`"></div>
    <span v-else :class="`${CURRENT_CSS_CLASS}__title`">{{ title }}</span>
  </button>
</template>

<style lang="scss">
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background 0.2s linear;
  outline: 0;

  &--primary {
    border-radius: 11px;
    background: #2e66f5;

    &:hover,
    &:active {
      background: #153fab;
    }
  }

  &--secondary {
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-radius: 11px;
    background: transparent;
  }

  &--normal {
    width: 165px;
    height: 47px;
  }

  &--big {
    width: 236px;
    height: 47px;
  }

  &--normal-auto {
    width: 100%;
    height: 47px;
  }

  &--is-loading,
  &--disabled {
    cursor: not-allowed;
  }

  &--disabled {
    background: #434447;

    &:hover,
    &:active {
      background: #434447;
    }

    .ui-button__title {
      color: rgba(255, 255, 255, 0.33);
    }
  }

  &__loader {
    width: 20px;
    height: 20px;
    border: 1px solid #ffffff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: loader infinite 1s ease-in-out;
  }

  &__title {
    font-family: 'Mulish';
    color: #ffffff;
    font-size: 16px;
    line-height: 153.5%;
    font-weight: 600;
  }
}

.ui-button--is-loading.ui-button--primary {
  &:hover,
  &:active {
    background: #2e66f5;
  }
}

.ui-button--is-loading.ui-button--secondary {
  &:hover,
  &:active {
    background: transparent;
  }
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 991px) {
  .ui-button {
    &--primary {
      &:hover,
      &:active {
        background: #2e66f5;
      }
    }

    &--secondary {
      &:hover,
      &:active {
        background: transparent;
      }
    }

    &--big {
      width: 100%;
      max-width: 335px;
      height: 60px;
    }

    &--disabled {
      background: #434447;

      &:hover,
      &:active {
        background: #434447;
      }

      .ui-button__title {
        color: rgba(255, 255, 255, 0.33);
      }
    }
  }
}
</style>
