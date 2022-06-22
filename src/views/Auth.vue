<template>
  <div class="content__container">
    <AuthTabs />
  </div>
</template>
<script setup>
import AuthTabs from '../components/Auth/AuthTabs.vue';
</script>
<style>
.content__container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100vh;
}
</style>
