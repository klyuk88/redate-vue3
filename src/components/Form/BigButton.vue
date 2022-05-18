<template>
  <a class="big-btn" href="!#" :style="{ margin: margin }">{{ title }}</a>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Нажмите меня",
  },
  margin: {
    type: String,
    default: "0",
  },
});
</script>
<style lang="scss">
.big-btn {
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 11px;
}
</style>