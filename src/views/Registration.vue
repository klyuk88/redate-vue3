<template>
  <div class="content__container">
    <!-- <AuthPopup /> -->
<!-- <ForgotPassword /> -->
<!-- <SignupPhoneCode /> -->
<!-- <NewPassword /> -->
<SignupPopup />
<!-- <SignupPopupSecond /> -->
<!-- <SignupPopupThird /> -->
<!-- <SignupPopupFourth /> -->
<!-- <SignupHobby /> -->
<!-- <UploadPhoto /> -->
<!-- <ChoosePhoto /> -->
<!-- <ChangeSuccess /> -->
<!-- <VerificationFirst /> -->
<!-- <VerificationSecond /> -->
<!-- <VerificationThird /> -->
<!-- <SignupPopupComplete /> -->
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
import SignupHobby from "../components/Auth/SignupHobby.vue";
import SignupPopupFourth from "../components/Auth/SignupPopupFourth.vue";
import UploadPhoto from "../components/Auth/UploadPhoto.vue";
import ChoosePhoto from "../components/Auth/ChoosePhoto.vue";
import VerificationFirst from "../components/Auth/VerificationFirst.vue";
import VerificationSecond from "../components/Auth/VerificationSecond.vue";
import VerificationThird from "../components/Auth/VerificationThird.vue";
import SignupPopupComplete from "../components/Auth/SignupPopupComplete.vue";



</script>
<style>
.content__container {
  display: flex;
  align-items: center;
}
</style>
