<template>
    <div class="tab-content">
      <DialogMobileItem v-for="(item, idx) in 3" :key="idx" />
      <button class="delite-dialogs">Удалить все диалоги</button>
    </div>
</template>
<script setup>
import DialogMobileItem from '@/components/Chat/DialogMobileItem.vue'

</script>
<style lang="scss">
  .tab-content {
    padding-top: 140px;
    overflow-x: hidden;
    width: 100%;
    padding-bottom: 50px;
  }
  
</style>