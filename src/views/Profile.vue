<template>
    <div class="content__container">
        <ProfilePhoto />
        <ProfileInfo />

    </div>
</template>
<script setup>



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