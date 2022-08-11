<script setup>
import { ref, computed, watch } from 'vue'
import VueSelect from 'vue-select'

const props = defineProps({
  values: {
    type: Array,
    default: () => {},
  },
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Array, null],
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:value', 'focus'])

const isOpen = ref(false)

const privateValue = ref(props.value)

const cssClasses = computed(() => {
  return {
    ['ui-select__select--error']: props.error,
    ['ui-select__select--is-open']: isOpen.value,
    ['ui-select__select--multiple']: props.multiple,
  }
})

watch(privateValue, () => {
  if (props.value !== privateValue.value) {
    emits('update:value', privateValue.value)
  }
})

watch(
  () => props.value,
  (value) => {
    if (value !== privateValue.value) {
      privateValue.value = props.value
    }
  }
)

const openHandler = () => {
  isOpen.value = true

  emits('focus')
}
</script>

<template>
  <div class="ui-select">
    <VueSelect
      v-model="privateValue"
      :placeholder="placeholder"
      class="ui-select__select"
      :class="cssClasses"
      :options="values"
      :multiple="multiple"
      @open="openHandler()"
      @close="isOpen = false"
      @focus="emits('focus')"
    >
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.39492 0.494094L8.14492 7.24409L14.8949 0.494093L16.0263 1.62546L8.14492 9.50684L0.263549 1.62546L1.39492 0.494094Z"
              fill="#6C6D70"
            />
          </svg>
        </span>
      </template>
      <template #no-options="{}">Совпадений не найдено</template>
    </VueSelect>

    <div
      v-if="multiple && privateValue.length > 0"
      class="ui-select__placeholder"
      v-html="placeholder"
    ></div>
  </div>
</template>

<style lang="scss">
.ui-select {
  position: relative;

  &__select {
    position: relative;

    &--is-open {
      .vs__dropdown-toggle {
        border: 1px solid #fff !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3) !important;
        background: #242529 !important;
        border-radius: 11px 11px 0 0 !important;
      }
    }

    &--error {
      .vs__dropdown-toggle {
        border-color: #2965ff !important;
      }

      .vs__dropdown-menu {
        border-color: #2965ff !important;
      }
    }

    &--multiple {
      .vs__selected-options {
        .vs__selected {
          display: none;
        }
      }
    }

    .vs__dropdown-toggle {
      overflow: hidden;
      position: relative;
      z-index: 1;
      width: 100%;
      height: 60px;
      padding: 0 5.5px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 11px;
      background: transparent;
      outline: 0;
      font-family: 'Mulish';
      color: #ffffff;
      font-size: 15px;
      line-height: 153.5%;
      font-weight: 600;
    }

    .vs__selected {
      color: #fff;
      font-size: 16px;
      position: static !important;
      background: transparent;
      border: none;
      width: auto;
    }

    .vs__search::placeholder {
      color: rgba(255, 255, 255, 0.3);
      font-size: 16px;
      font-family: 'Mulish';
    }

    .vs__clear {
      display: none;
    }

    .vs__dropdown-menu {
      background: #242529;
      padding: 0;
      margin: 0;
      border: 1px solid #fff;
      border-top: none;
      border-radius: 0 0 11px 11px;
      top: 60px;
    }

    .vs__dropdown-menu::-webkit-scrollbar {
      width: 5px;
    }
    .vs__dropdown-menu::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.14);
    }
    .vs__dropdown-menu::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.33);
    }

    .vs__dropdown-option {
      color: #fff;
      padding: 20px 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    }

    :root {
      --vs-dropdown-max-height: 250px;
    }
  }

  &__placeholder {
    position: absolute;
    top: 21.5px;
    left: 15.5px;
    color: rgba(255, 255, 255, 0.3);
    font-size: 16px;
    font-family: 'Mulish';

    span {
      color: #2e66f5;
    }
  }
}

.ui-select__select--is-open.ui-select__select--error {
  .vs__dropdown-toggle {
    border-bottom-color: rgba(255, 255, 255, 0.3) !important;
  }
}
</style>
