<script setup>
defineProps({
  to: {
    type: String,
    default: '/forgot',
  },
  title: {
    type: String,
    default: 'Забыли пароль?',
  },
})
</script>

<template>
  <router-link :to="to" class="forgot-password-link">{{ title }}</router-link>
</template>

<style lang="scss">
.forgot-password-link {
  font-family: 'Mulish';
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  line-height: 153.5%;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
}
</style>
