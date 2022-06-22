<template>
  <div class="content__container">
<VerificationTabs />
  </div>
</template>
<script setup>
import VerificationTabs from '../components/Auth/VerificationTabs.vue';

</script>
<style lang="scss">
.content__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
}

</style>
