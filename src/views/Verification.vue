<template>
  <div class="content__container">
      <VerificationFirst />
  </div>
</template>
<script setup>

import SignupPopup from "../components/Auth/SignupPopup.vue";
import VerificationFirst from "../components/Auth/VerificationFirst.vue";

</script>
<style lang="scss">
.content__container {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

</style>
