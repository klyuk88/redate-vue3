<template>
  <div class="content__container">
    <RegistrationTabs />
    <!-- <AuthPopup /> -->
    <!-- <SignupHobby /> -->
  </div>
</template>
<script setup>
import AuthPopup from "../components/Auth/AuthPopup.vue";

import RegistrationTabs from "../components/Auth/RegistrationTabs.vue";

import SignupHobby from "../components/Auth/SignupHobby.vue";




</script>
<style>
.content__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
