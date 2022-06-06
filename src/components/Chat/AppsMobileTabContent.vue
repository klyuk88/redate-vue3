<template>
    <div class="tab-content" ref="diMobItems" @scroll="heandleScroll">
      <DialogItem v-for="(item, idx) in 20" :key="idx" />
      <button class="delite-dialogs">Удалить все заявки</button>
    </div>
</template>
<script setup>
import DialogItem from '@/components/Chat/DialogItem.vue'
</script>
<style lang="scss">
  .tab-content {
    padding-top: 140px;
    // height: 100vh;
    // overflow-y: auto;
    width: 100%;
    padding-bottom: 50px;
  }
  
</style>