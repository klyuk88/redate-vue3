<script setup>
import LikesMobileItem from '@/components/Notifications/LikesMobileItem.vue'
</script>

<template>
  <div class="tab-content">
    <LikesMobileItem v-for="(items, idx) in 2" :key="idx" />
  </div>
</template>

<style lang="scss">
.tab-content {
  padding-top: 140px;
  overflow-x: hidden;
}
</style>
