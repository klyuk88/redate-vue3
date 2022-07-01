<script setup>
import AnswerItem from '@/components/Sends/AnswerItem.vue'
import SendSlider from '@/components/Sends/SendSlider.vue'
</script>

<template>
  <div class="tab-content">
    <SendSlider />
    <div class="items">
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
    </div>
  </div>
</template>
