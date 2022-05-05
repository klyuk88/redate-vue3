<template>
<div class="page-content">
    <SideBar/>
    <div class="content">
        <slot/>
    </div>
</div>

    
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
</script>

<style lang="sass" scoped>
.page-content
    display: flex
    align-items: flex-start

    .content
        padding-left: 80px
        padding-top: 75px
        padding-bottom: 75px
        width: 100%
    
    
</style>