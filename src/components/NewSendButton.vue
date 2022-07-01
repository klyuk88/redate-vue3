<script setup>
import NewSendModal from '@/components/Popups/NewSendModal.vue'
import { useStore } from '@/stores/main.js'
const store = useStore()
const openNewSendWindow = () => {
  store.newSendWindow = true
}
</script>

<template>
  <NewSendModal v-if="store.newSendWindow" />
  <button class="create-new-send-button" @click="openNewSendWindow()">
    Создать новую рассылку
  </button>
</template>

<style lang="scss">
.create-new-send-button {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 18px;
  margin-top: 24px;
  cursor: pointer;
  color: #fff;
}
</style>
