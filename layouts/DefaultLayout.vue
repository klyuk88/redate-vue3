<template>
<div class="page-content">
    <SideBar/>
    <div class="content">
        <slot/>
    </div>
    <div class="shape"></div>
</div>

    
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
</script>

<style lang="sass" scoped>
.footer
    position: relative
    
.page-content
    display: flex
    align-items: flex-start
    position: relative

    .content
        padding-left: 130px
        padding-top: 75px
        padding-bottom: 75px
        width: 100%
        min-height: 100vh
    
    .shape
        position: absolute
        bottom: -100px
        left: -100px
        width: 300px
        height: 300px
        background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
        filter: blur(150px)
    
    
</style>