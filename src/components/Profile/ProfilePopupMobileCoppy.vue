<template>
  <div class="background__id__blur">
    <div class="container__blur">
      <p>ID cкопирован</p>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.background__id__blur {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  .container__blur {
    width: 293px;
    height: 76px;
    background: rgba(36, 37, 41, 0.6);
    border: 1px solid #2b66fb;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 153.5%;
    }
  }
}
</style>
