<script setup>
import AnswerItem from '@/components/Sends/AnswerItem.vue'
import SendSlider from '@/components/Sends/SendSlider.vue'
</script>

<template>
  <PerfectScrollbar>
    <SendSlider />
    <div class="answers-items">
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
    </div>
  </PerfectScrollbar>
</template>

<style lang="scss">
.answers-items {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 2px;
  margin: 0 auto;
  justify-content: center;
}
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
  .mansoryContainer {
    margin: 0 auto;
  }
}
.ps::-webkit-scrollbar {
  display: none;
}
</style>
