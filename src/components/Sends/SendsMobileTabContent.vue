<template lang="">
     <div class="send-mobile-tab-content">
      <SendSlider />
      <button class="mob-new-send-btn">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="plus-icon"
        >
          <path
            d="M8.41499 0.880302L6.95368 0.880301L6.95368 7.76934L0.0646402 7.76934L0.0646402 9.23066L6.95368 9.23066L6.95368 16.1197L8.41499 16.1197L8.41499 9.23066L15.304 9.23066L15.304 7.76934L8.41499 7.76934L8.41499 0.880302Z"
            fill="white"
          />
        </svg>
        <span>Создать рассылку</span>
      </button>

      <div class="items">
        <SendItem />
        <SendItem />
        <SendItem />
        <SendItem />
      </div>
    </div>
</template>
<script setup>
import SendItem from "@/components/Sends/SendItem.vue";
import SendSlider from "@/components/Sends/SendSlider.vue";
</script>
<style lang="scss">
.send-mobile-tab-content {
  .mob-new-send-btn {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      271.17deg,
      #292a2f -1.65%,
      #1c264d 60.4%,
      #242529 99.3%
    );
    border: 1px solid rgba(255, 255, 255, 0.33);
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    .plus-icon {
      margin-right: 10px;
    }
  }
  .items {
    margin-top: 16px;
  }
}
</style>