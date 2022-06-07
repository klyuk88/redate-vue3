<template>
  <div class="content__container">
    <VerificationFirst />
    <!-- <VerificationSecond /> -->
  </div>
</template>
<script setup>
import VerificationTabs from "../components/Auth/VerificationTabs.vue";
import VerificationFirst from "../components/Auth/VerificationFirst.vue";
import VerificationSecond from "../components/Auth/VerificationSecond.vue";
</script>
<style>
.content__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
