<script setup>
import DialogItem from '@/components/Chat/DialogItem.vue'
</script>

<template>
  <PerfectScrollbar>
    <div class="chats-tab-content">
      <DialogItem v-for="(item, idx) in 20" :key="idx" />
      <button class="delite-dialogs">Удалить все диалоги</button>
    </div>
  </PerfectScrollbar>
</template>

<style lang="scss">
.chats-tab-content {
  max-width: 780px;
  margin: 0 auto;
}
.ps {
  height: 100vh;
  padding-bottom: 50px;
  padding: 150px 30px 50px 30px;
  position: relative;
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
</style>
