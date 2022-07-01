<script setup>
defineProps({
  time: {
    type: String,
    default: '00:00',
  },
  message: {
    type: String,
    default: 'Здесь будет сообщение',
  },
  right: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="mobile-message-item" :class="{ right: right }">
    <p class="message">
      {{ message }}
      <span class="time">
        {{ time }}
      </span>
    </p>
  </div>
</template>

<style lang="scss">
.mobile-message-item {
  padding: 6px 10px;
  position: relative;
  border-radius: 14px;
  max-width: 70%;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  .message {
    font-size: 14px;
    color: #fff;
  }
  .time {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.3);
    float: right;
    margin-left: 10px;
    margin-top: 10px;
  }
}
.mobile-message-item.left {
  background: rgba(255, 255, 255, 0.05);
}
.mobile-message-item.right {
  background: #2b66fb;
  align-self: flex-end;
}
</style>
