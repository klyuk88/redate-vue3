<script setup>
import Scrollbar from '@/components/Scrollbar'

const props = defineProps({
  elements: {
    type: Array,
    default: () => {},
  },
  max: {
    type: Number,
    default: 0,
  },
})

const emits = defineEmits(['click'])

const clickHandler = (element) => {
  let counter = 0

  props.elements.forEach((element) => {
    if (element.active) {
      counter++
    }
  })

  if (props.max > counter || element.active) {
    emits('click', element)
  }
}
</script>

<template>
  <div class="registration-select">
    <Scrollbar>
      <div class="registration-select__block">
        <div
          v-for="(element, idx) in elements"
          :key="idx"
          class="registration-select__item"
          :class="{ 'registration-select__item--active': element.active }"
          @click="clickHandler(element)"
        >
          {{ element.title }}
        </div>
      </div>
    </Scrollbar>
  </div>
</template>

<style lang="scss">
.registration-select {
  width: 100%;
  height: 384px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  padding: 24px 7px 16px 0;

  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: calc(100% - 384px);
    padding: 0 24px;
  }

  &__item {
    margin-right: 4px;
    margin-left: 4px;
    margin-bottom: 8px;
    padding: 8px 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 13px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 132.5%;
    color: #ffffff;
    cursor: pointer;
    transition: border-color, background, box-shadow 0.2s linear;

    &:hover {
      background: rgba(196, 196, 196, 0.05);
      border-color: rgba(255, 255, 255, 0.05);
    }

    &--active {
      border-color: #2e66f5;
      background: #2e66f5;
      box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);

      &:hover {
        border-color: #2e66f5;
        background: #2e66f5;
        box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
      }
    }
  }
}
</style>
