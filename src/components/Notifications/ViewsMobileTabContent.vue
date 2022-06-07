<template>
  <div class="tab-content">
    <LikesMobileItem v-for="(items, idx) in 2" :key="idx"/>
  </div>
</template>
<script setup>
import LikesMobileItem from '@/components/Notifications/LikesMobileItem.vue'
</script>
<style lang="scss">
.tab-content {
  padding-top: 140px;
  overflow-x: hidden;
}
  
</style>