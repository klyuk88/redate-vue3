<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <label class="form-label">{{ title }}</label>
</template>

<style lang="scss">
.form-label {
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
  display: block;
}
</style>
