<script setup>
defineProps({
  steps: {
    type: Array,
    default: () => {},
  },
})
</script>

<template>
  <div class="steps">
    <div
      v-for="(step, idx) in steps"
      :key="idx"
      class="steps__item"
      :class="{ 'steps__item--active': step }"
    ></div>
  </div>
</template>

<style lang="scss">
.steps {
  display: flex;
  align-items: center;

  &__item {
    width: 32px;
    height: 4px;
    margin-left: 16px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.33);
    transition: background 0.2s linear;

    &:first-child {
      margin-left: 0;
    }

    &--active {
      background: #2b66fb;
    }
  }
}
</style>
