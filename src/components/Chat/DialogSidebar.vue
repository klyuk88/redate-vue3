<template>
  <div id="dialog-sidebar">
    <div class="n-card">
      <div class="n-card_title">Новые рассылки</div>
      <div class="n-card_desc">В твоем городе 5490 рассылок</div>
      <div class="n-card_wrapper">
        <SendingItem/>
        <SendingItem/>
      </div>

      <div class="n-card_loadmore">Открыть больше...</div>
    </div>
    <NewSendButton/>
  </div>
</template>

<script setup>
import SendingItem from '@/components/Chat/SendingItem.vue'
import NewSendButton from '@/components/NewSendButton.vue'
</script>

<style lang="scss">
#dialog-sidebar {
  width: 100%;
}
.n-card_wrapper {
  padding: 16px 0;
}
.n-card {
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  margin-top: 80px;
  box-sizing: border-box;
}

.n-card_title {
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  font-weight: 600;
}

.n-card_desc {
  color: rgba(255, 255, 255, 0.33);
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
}

.n-card_loadmore {
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.33);
  cursor: pointer;
}

.n-sent {
  background: #2b66fb;
  border-color: #2b66fb;
}

.n-create {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 82px;
  color: #fff;
  max-width: 376px;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 18px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 24px;
  box-sizing: border-box;
}
</style>