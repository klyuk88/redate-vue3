<template>
  <div id="search-item">
    <div class="avatar">
      <img src="http://thr.ru/public/article/prephoto/7069.jpg" alt="" />
    </div>
    <div class="about">
      <div class="name-block">
        <h5 class="name">Семен</h5>
        <p class="adress">Москва, Россия</p>
      </div>
      <button class="dialog">
        <img src="@/assets/images/main/dialog-icon.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
#search-item {
  min-width: 240px;
  border-radius: 24px;
  border: 1px solid #ffffff54;
  padding: 5px;
  padding-bottom: 12px;
  .avatar {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 230px;
    border: 1px solid #FFFFFF24;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }
  }
  .about {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 12px;
    .name-block {
      .name {
        font-style: 16px;
        font-weight: 700;
      }
      .adress {
        font-size: 12px;
        font-weight: 600;
      }
    }
    .dialog {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 39px;
      border-radius: 14px;
      border: 1px solid #FFFFFF24;
      background: transparent;
      cursor: pointer;
      transition: all .3s ease;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>