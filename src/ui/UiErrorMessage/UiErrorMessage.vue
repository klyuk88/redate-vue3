<script setup>
defineProps({
  message: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <p class="ui-error-message">{{ message }}</p>
</template>

<style lang="scss">
.ui-error-message {
  font-family: 'Mulish';
  color: #2b66fb;
  font-size: 12px;
  line-height: 132.5%;
  font-weight: 600;
  text-align: center;
}
</style>
