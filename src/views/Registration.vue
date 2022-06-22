<template>
  <div class="content__container">
<!-- <SignupPopupVue /> -->
<RegistrationTabs />
  </div>
</template>
<script setup>
import AuthPopup from "../components/Auth/AuthPopup.vue";
import SignupHobby from "../components/Auth/SignupHobby.vue";
import SignupPopupVue from "../components/Auth/SignupPopup.vue";
import RegistrationTabs from "../components/Auth/RegistrationTabs.vue";




</script>
<style>
.content__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
