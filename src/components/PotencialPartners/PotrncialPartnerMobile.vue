<script setup>
import { useStore } from '@/stores/main.js'
const store = useStore()
const openNewMess = () => {
  store.newMessageWindow = true
}
</script>

<template>
  <div class="potencial-item-mobile">
    <div class="photo-block">
      <div class="photo-wrap">
        <router-link to="/profile/:user">
          <img
            src="@/assets/images/main/potencial-mob-photo.png"
            alt=""
            class="photo"
          />
        </router-link>
      </div>
      <div class="mini-photo">
        <div class="item">
          <img src="@/assets/images/main/potincial-mini-photo.png" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/main/potincial-mini-photo.png" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/main/potincial-mini-photo.png" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/main/potincial-mini-photo.png" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/main/potincial-mini-photo.png" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/images/main/potincial-mini-photo.png" alt="" />
        </div>
      </div>
    </div>
    <div class="title-block">
      <div class="name-block">
        <h2 class="name">Александр, <span>26</span> лет</h2>
        <p class="adress">Москва, Россия</p>
      </div>
      <div class="icons-block">
        <div class="icon" @click="openNewMess()">
          <img src="@/assets/images/main/dialog-icon.svg" alt="" />
        </div>
        <div class="icon">
          <img src="@/assets/images/main/potencial-item-star.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.potencial-item-mobile {
  padding: 8px;
  padding-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  margin-bottom: 24px;
}
.potencial-item-mobile .photo-wrap {
  position: relative;
  width: 234px;
  height: 328px;
}
.potencial-item-mobile .photo-wrap > .photo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.potencial-item-mobile .photo-block {
  margin: 0 auto;
  width: 330px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.potencial-item-mobile .mini-photo > .item {
  position: relative;
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  margin-bottom: 8px;
}
.potencial-item-mobile .mini-photo > .item > img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.potencial-item-mobile .mini-photo {
  height: 328px;
  overflow-y: scroll;
  padding-right: 10px;
  margin-left: auto;
}
.potencial-item-mobile > .title-block {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.potencial-item-mobile > .title-block .name-block .name {
  font-size: 16px;
  font-weight: 700;
}
.potencial-item-mobile > .title-block .name-block .adress {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.33);
}
.potencial-item-mobile > .title-block > .icons-block {
  display: flex;
  align-items: center;
  gap: 8px;
}
.potencial-item-mobile > .title-block > .icons-block > .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.potencial-item-mobile {
  .mini-photo::-webkit-scrollbar {
    width: 2px;
  }
  .mini-photo::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.14);
  }
  .mini-photo::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.33);
  }
}
</style>
