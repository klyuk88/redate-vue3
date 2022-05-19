<template>
  <div class="content__container">
    <!-- <AuthPopup /> -->
<!-- <ChangeSuccess /> -->
<ForgotPassword />
<!-- <NewPassword /> -->
<!-- <SignupPopup /> -->
<!-- <SignupPhoneCode /> -->
  </div>
</template>
<script setup>
import AuthPopup from "../components/Auth/AuthPopup.vue";
import SignupPopup from "../components/Auth/SignupPopup.vue";
import SignupPhoneCode from "../components/Auth/SignupPhoneCode.vue";
import ChangeSuccess from "../components/Auth/ChangeSuccess.vue";
import ForgotPassword from "../components/Auth/ForgotPassword.vue";
import NewPassword from "../components/Auth/NewPassword.vue";



</script>
<style>
.content__container {
  display: flex;
  align-items: center;
}
</style>
