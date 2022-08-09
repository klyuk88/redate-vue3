<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  elements: {
    type: Array,
    default: () => {},
  },
})

const emits = defineEmits(['delete'])

const router = useRouter()

const clickHandler = () => {
  if (!props.elements.length) {
    router.push(props.to)
  }
}

const deleteHandler = (element) => {
  emits('delete', element)
}

const addHandler = () => {
  router.push(props.to)
}
</script>

<template>
  <div class="registration-elements" @click="clickHandler()">
    <div
      v-for="(element, idx) in elements"
      :key="idx"
      class="registration-elements__item"
    >
      <div class="registration-elements__title">{{ element }}</div>
      <div
        class="registration-elements__icon"
        @click="deleteHandler(element)"
      ></div>
    </div>
    <div
      v-if="elements.length"
      class="registration-elements__add"
      @click="addHandler()"
    ></div>
  </div>
</template>

<style lang="scss">
.registration-elements {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 75px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  padding: 12px 18px 4px 18px;
  transition: border-color 0.2s linear;
  cursor: pointer;

  &:hover {
    border-color: #fff;
  }

  &__item {
    display: flex;
    align-items: center;
    border: 1px solid #ffffff;
    border-radius: 8px;
    padding: 4px 10px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  &__title {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }

  &__icon {
    position: relative;
    width: 8px;
    height: 8px;
    margin-left: 10px;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.33);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  &__add {
    position: relative;
    width: 26px;
    height: 26px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    margin-bottom: 8px;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 1px;
      background: #fff;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    &::before {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}
</style>
