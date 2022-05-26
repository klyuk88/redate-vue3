<template>
  <div class="content__containera">
    <!-- <ProfilePhoto /> -->
    <!-- <ProfileInfo /> -->
    <ProfilePage />
  </div>
</template>
<script setup>
import ProfileInfo from "../components/Profile/ProfileInfo.vue";
import ProfilePhoto from "../components/Profile/ProfilePhoto.vue";
import ProfilePage from "../components/Profile/ProfilePage.vue";
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
