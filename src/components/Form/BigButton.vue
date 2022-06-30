<template>
  <button class="big-btn" @click="emit('click')">{{ props.title }}</button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Нажмите меня',
  },
});

const emit = defineEmits(['click']);
</script>

<style lang="scss">
.big-btn {
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 60px;
  border-radius: 11px;
  border: none;
  font-family: 'Mulish';
  cursor: pointer;
}
</style>
