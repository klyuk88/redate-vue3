<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button class="back-btn" @click="emit('click')">
    <img src="@/assets/images/main/arrow-left.svg" alt="" />
    <span>Назад</span>
  </button>
</template>

<style lang="scss">
.back-btn {
  display: flex;
  align-items: center;
  color: #fff;
  border: none;
  border-radius: none;
  background: transparent;
  span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 7px;
  }
  img {
    width: 9px;
    height: auto;
  }
}
</style>
