<template>
  <div class="content__container">
    <!-- <AuthPopup /> -->
<!-- <ForgotPassword /> -->
<!-- <SignupPhoneCode /> -->
<!-- <NewPassword /> -->
<!-- <SignupPopup /> -->
<!-- <SignupPopupSecond /> -->
<SignupPopupThird />
<!-- <ChangeSuccess /> -->
  </div>
</template>
<script setup>
import AuthPopup from "../components/Auth/AuthPopup.vue";
import SignupPopup from "../components/Auth/SignupPopup.vue";
import SignupPhoneCode from "../components/Auth/SignupPhoneCode.vue";
import ChangeSuccess from "../components/Auth/ChangeSuccess.vue";
import ForgotPassword from "../components/Auth/ForgotPassword.vue";
import NewPassword from "../components/Auth/NewPassword.vue";
import SignupPopupSecond from "../components/Auth/SignupPopupSecond.vue";
import SignupPopupThird from "../components/Auth/SignupPopupThird.vue";



</script>
<style>
.content__container {
  display: flex;
  align-items: center;
}
</style>
