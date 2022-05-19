<template>
  <div class="content__container">
    <ProfilePhoto />
    <ProfileInfo />
  </div>
</template>
<script setup>
import ProfileInfo from "../components/Profile/ProfileInfo.vue";
import ProfilePhoto from "../components/Profile/ProfilePhoto.vue";
</script>
<style>
.content__container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 130px;
  width: 78.2%;
}
</style>
