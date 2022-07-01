<script setup>
import LikesItem from '@/components/Notifications/LikesItem.vue'
</script>

<template>
  <PerfectScrollbar>
    <div class="likes-tab-content">
      <LikesItem v-for="(item, index) in 20" :key="index" />
    </div>
  </PerfectScrollbar>
</template>

<style lang="scss">
.ps {
  padding-top: 150px;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  .ps__rail-y {
    margin-top: 150px;
    margin-right: 5px;
    width: 2px;
    background: rgba($color: #fff, $alpha: 0.3);
    border-radius: 0;
    .ps__thumb-y {
      width: 2px;
      background-color: #fff;
      border-radius: 0;
      right: 0;
    }
  }
}
.ps::-webkit-scrollbar {
  display: none;
}
.likes-tab-content {
  width: 730px;
  margin: 0 auto;
}
</style>
