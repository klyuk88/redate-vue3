<template>
  <a class="big-btn" href="!#">{{title}}</a>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Нажмите меня'
  }
})
</script>
<style>
    
</style>