<template>
  <div class="content__container">
    <ProfilePage />

  </div>
</template>
<script setup>
import ProfilePage from "@/components/Profile/ProfilePage.vue";
import MyProfilePage from "../components/Profile/MyProfilePage.vue";

</script>
<style lang="scss">
.content__container {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

</style>
