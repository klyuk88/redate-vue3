<template>
  <div class="answer-slider-item">
    <img
      src="https://new3.co/wp-content/uploads/2018/05/6231-2.jpg"
      alt="image"
      class="image"
    />
  </div>
</template>
<script setup>
</script>
<style lang="scss">
.answer-slider-item {
  position: relative;
  width: 38px;
  height: 38px;
  
  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>