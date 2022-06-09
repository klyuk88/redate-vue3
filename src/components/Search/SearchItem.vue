<template>
<router-link to="#" class="search-item-link">
  <div id="search-item">
    <div class="avatar">
      <img src="https://o-tendencii.com/uploads/posts/2022-01/1642420914_5-o-tendencii-com-p-strogii-makiyazh-foto-5.jpg" alt="" />
    </div>
    <div class="about">
      <div class="name-block">
        <h5 class="name">Имя</h5>
        <p class="adress">Москва, Россия</p>
      </div>
      <button class="dialog" @click.stop="newMessage">
        <img src="@/assets/images/main/dialog-icon.svg" alt="" />
      </button>
    </div>
  </div>
  </router-link>
</template>

<script setup>
import {useStore} from 'vuex'
const store = useStore()
const newMessage = () => {
  store.commit('openNewMessageWindow')
}

</script>

<style lang="scss">
.search-item-link:hover {
  #search-item {
    outline: 2px solid #2965FF;
    box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  }
}
#search-item {
  min-width: 240px;
  border-radius: 24px;
  outline: 1px solid #ffffff54;
  padding: 5px;
  padding-bottom: 12px;
  transition: all .2s ease;
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
        font-size: 16px;
        font-weight: 700;
      }
      .adress {
        font-size: 12px;
        font-weight: 600;
        opacity: 0.4;
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
      transition: all .1s ease;
      img {
        width: 18px;
        height: 18px;
      }
    }
    .dialog:hover {
      background: #2965FF;
    }
  }
}
</style>