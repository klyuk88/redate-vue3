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

<style lang="sass">
.page-content
    display: flex
    align-items: flex-start

.content
    padding-left: 80px
    padding-top: 75px
    
    
</style>