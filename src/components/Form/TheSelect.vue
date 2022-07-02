<script setup>
import { ref } from 'vue'
import vSelect from 'vue-select'

const props = defineProps({
  options: {
    type: Array,
    default: () => {},
  },
  placeholder: {
    type: String,
    default: 'Выберите значение',
  },
  value: {
    type: String,
    default: '',
  },
  zIndex: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['input'])

const selectOpen = ref(false)
</script>

<template>
  <v-select
    class="form-selecet"
    :class="{ open: selectOpen }"
    :style="{ 'z-index': zIndex }"
    :options="options"
    :placeholder="placeholder"
    :value="props.value"
    @input="emit('input', value)"
    @open="selectOpen = true"
    @close="selectOpen = false"
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
            fill="white"
          />
        </svg>
      </span>
    </template>
    <template #no-options="{}">Совпадений не найдено</template>
  </v-select>
</template>

<style lang="scss">
.form-selecet {
  margin-bottom: 20px;
}
.vs__dropdown-toggle {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 11px;
  background: #242529;
  max-width: 100%;
  width: 100%;
  min-height: 60px;
  padding: 0 12px;
  position: relative;
  z-index: 1001;
}

.form-selecet.open .vs__dropdown-toggle {
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.vs__selected {
  color: #fff;
  font-size: 16px;
  position: static !important;
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
  border-radius: 11px;
  top: 0px;
  padding-top: 60px;
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
</style>
