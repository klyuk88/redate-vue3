<template>
    <div class="content__container">
        <ProfilePhoto />
        <ProfileInfo />
        <!-- <ProfilePopupDiamond /> -->
    </div>
</template>
<script setup>
// import ProfilePopupDiamond from '../components/Profile/ProfilePopupDiamond.vue';
import ProfileInfo from '../components/Profile/ProfileInfo.vue';
import ProfilePhoto from '../components/Profile/ProfilePhoto.vue';



</script>
<style>
    .content__container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
</style>