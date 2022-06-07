<template>
  <div class="tab-content" ref="diMobItems" @scroll="heandleScroll">
    <DialogMobileItem v-for="(item, idx) in 20" :key="idx" />
    <button class="delite-dialogs">Удалить все заявки</button>
  </div>
</template>
<script setup>
import DialogMobileItem from "@/components/Chat/DialogMobileItem.vue";
</script>
<style lang="scss">
.tab-content {
  padding-top: 140px;
  overflow-x: hidden;
  width: 100%;
  padding-bottom: 50px;
}
</style>