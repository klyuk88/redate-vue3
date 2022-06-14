<template>
  <div class="content__container">
    <AuthPopup />
  </div>
</template>
<script setup>
import AuthPopup from '../components/Auth/AuthPopup.vue';
import SignupPopup from '../components/Auth/SignupPopup.vue';

</script>
<style>
.content__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
