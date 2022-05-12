<template>
    <div class="city-big-items">
       <CityBigItem/>
       <CityBigItem/>
       <CityBigItem/>
    </div>
</template>
<script setup>
import CityBigItem from '@/components/Cities/CityBigItem.vue'
</script>
<style lang="scss">
.city-big-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px
}
    
</style>