<template>
  <div class="content__containera">
    <!-- <ProfilePage /> -->
    <MyProfilePage />
  </div>
</template>
<script setup>
import ProfilePage from "../components/Profile/ProfilePage.vue";
import MyProfilePage from "../components/Profile/MyProfilePage.vue";
</script>
<style lang="scss">
.content__containera {
  display: flex;
  align-items: center;
  margin: 0 auto;
}
@media (max-width: 1200px) {
  // .content__container {

  // }
}
</style>
