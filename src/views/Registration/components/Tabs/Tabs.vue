<script setup>
defineProps({
  tabs: {
    type: Array,
    default: () => {},
  },
})

const emits = defineEmits(['click'])

const clickHandler = (tab) => {
  emits('click', tab)
}
</script>

<template>
  <div class="registration-tabs">
    <span
      v-for="(tab, idx) in tabs"
      :key="idx"
      class="registration-tabs__item"
      :class="{ 'registration-tabs__item--active': tab.active }"
      @click="clickHandler(tab)"
    >
      {{ tab.title }}
    </span>
  </div>
</template>

<style lang="scss">
.registration-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;

  &__item {
    position: relative;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 153.5%;
    color: rgba(255, 255, 255, 0.33);
    cursor: pointer;
    transition: color 0.2s linear;

    &--active {
      color: #fff;
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -9px;
      transform: translate(0, -50%);
      width: 1px;
      height: 18px;
      background: rgba(255, 255, 255, 0.33);
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }
}
</style>
