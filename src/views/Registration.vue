<template>
  <div class="content__container">
    <!-- <RegistrationTabs /> -->
    <!-- <AuthPopup /> -->
      
  <!-- <ProfilePhotoCarousel /> -->

    <!-- <ForgotPassword /> -->
    <!-- <SignupPhoneCode /> -->
    <!-- <NewPassword /> -->
    <!-- <SignupPopup /> -->
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
    <!-- <ProfileNewMessage /> -->
    <!-- <ProfilePopupBan /> -->
    <!-- <ProfilePopupCongrats /> -->
    <!-- <ProfilePopupDescription /> -->
    <!-- <ProfilePopupDiamond /> -->
    <!-- <ProfilePopupDiamondLost /> -->
    <!-- <ProfilePopupHide /> -->
    <!-- <ProfilePopupReport /> -->
    <MyProfileSettings />
    <!-- <MyProfileEdit /> -->
    <!-- <ProfilePopupDeleteAcc /> -->
    <!-- <ProfilePopupEditComplet /> -->
    <!-- <ProfilePopupVerificationModerate /> -->
    <!-- <ProfilePopupVerificationRequest /> -->
    <!-- <AuthMainPage /> -->
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
import ProfileNewMessage from "../components/Profile/ProfileNewMessage.vue";
import ProfilePopupBan from "../components/Profile/ProfilePopupBan.vue";
import ProfilePopupCongrats from "../components/Profile/ProfilePopupCongrats.vue";
import ProfilePopupDescription from "../components/Profile/ProfilePopupDescription.vue";
import ProfilePopupDiamond from "../components/Profile/ProfilePopupDiamond.vue";
import ProfilePopupDiamondLost from "../components/Profile/ProfilePopupDiamondLost.vue";
import ProfilePopupHide from "../components/Profile/ProfilePopupHide.vue";
import ProfilePopupMaillist from "../components/Profile/ProfilePopupMaillist.vue";
import ProfilePopupReport from "../components/Profile/ProfilePopupReport.vue";
import MyProfileSettings from "../components/Profile/MyProfileSettings.vue";
import MyProfileEdit from "../components/Profile/MyProfileEdit.vue";
import ProfilePopupDeleteAcc from "../components/Profile/ProfilePopupDeleteAcc.vue";
import ProfilePopupEditComplet from "../components/Profile/ProfilePopupEditComplet.vue";
import ProfilePopupVerificationModerate from "../components/Profile/ProfilePopupVerificationModerate.vue";
import ProfilePopupVerificationRequest from "../components/Profile/ProfilePopupVerificationRequest.vue";
import MyProfilePage from "../components/Profile/MyProfilePage.vue";
import AuthMainPage from "../components/Auth/AuthMainPage.vue";
import RegistrationTabs from "../components/Auth/RegistrationTabs.vue";
import ProfilePhotoCarousel from "../components/Profile/ProfilePhotoCarousel.vue";
</script>
<style>
.content__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
