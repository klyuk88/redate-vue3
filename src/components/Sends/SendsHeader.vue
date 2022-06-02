<template lang="">
       <div class="header">
          <h1 class="title">Новые рассылки</h1>
        </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
  padding: 70px 0 18px 0;
  background: rgba(196, 196, 196, 0.05);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  z-index: 2;
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
}
</style>