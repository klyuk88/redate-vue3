<template>
  <div class="mobile-sidebar"
  :class="{active: store.mobileMenu}"
  >
    <h2 class="logo">Redate</h2>

    <div class="menu-block">
      <div class="header">
        <ul class="items">
          <li class="item">
            <router-link to="/profile" class="link profile">
              <div class="image-block profile">
                <img src="@/assets/images/main/avatar.png" alt="" />
              </div>
              <p class="title">Профиль</p>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/top-balance" class="link">
              <div class="image-block">
                <span class="balance">$12К</span>
              </div>
              <p class="title">Пополнить</p>
            </router-link>
          </li>
        </ul>
        <div class="line"></div>
      </div>

      <div class="body">
        <ul class="items">
          <li class="item">
            <router-link to="/" class="link">
              <div class="image-block">
                <img src="@/assets/images/main/home.svg" alt="" />
              </div>
              <p class="title">Главная</p>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/chat" class="link">
              <div class="image-block">
                <img src="@/assets/images/main/dialog.svg" alt="" />
              </div>
              <p class="title">Сообщения</p>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/sends" class="link">
              <div class="image-block">
                <img src="@/assets/images/main/papka.svg" alt="" />
              </div>
              <p class="title">Рассылки</p>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/notifications" class="link">
              <div class="image-block">
                <img src="@/assets/images/main/teeny.svg" alt="" />
              </div>
              <p class="title">Уведомления</p>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/favorites" class="link">
              <div class="image-block">
                <img src="@/assets/images/main/star.svg" alt="" />
              </div>
              <p class="title">Избранное</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
<div class="mobile-sidebar-overlay"
:class="{active: store.mobileMenu}"
@click="closeMobMenu"
></div>
</template>


<script setup>
import {computed, watch} from 'vue'
import {useStore} from '@/stores/main.js'
import {useRoute} from 'vue-router'
const store = useStore()
const route = useRoute()

const closeMobMenu = () => {
    store.mobileMenu = false
}
watch(route, (newVal, oldVal) => {
  setTimeout(() => {
    store.mobileMenu = false
  }, 500);
})
</script>


<style lang="scss">
.mobile-sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 0;
  height: 100%;
  z-index: 99;
  transition: width .2s ease-in;
}
.mobile-sidebar-overlay.active {
    width: 100%;
}
.mobile-sidebar {
  position: fixed;
  z-index: 100;
  width: 311px;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border-radius: 0px 48px 48px 0px;
  padding: 48px 20px;
  transform: translateX(-100%);
  transition: transform 0.2s ease-in;
}
.mobile-sidebar.active {
    transform: translateX(0);
}
.mobile-sidebar .line {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 12px;
  margin-top: 12px;
}
.mobile-sidebar .menu-block {
  margin-top: 61px;
}
.mobile-sidebar > .logo {
  font-size: 17px;
  font-weight: 800;
  line-height: 26px;
  text-transform: uppercase;
  text-align: center;
}
.mobile-sidebar .items > .item {
  margin-bottom: 12px;
}
.mobile-sidebar .items > .item .link {
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;
  border-radius: 16px;
}
.mobile-sidebar {
  .items {
    .item {
      .router-link-active.router-link-exact-active.link {
        background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%);
        .image-block {
          background: transparent;
        }
      }
      .router-link-active.router-link-exact-active.link.profile {
        background: transparent;
        .image-block {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #2B66FB;
          filter: drop-shadow(0px 0px 30px rgba(43, 102, 251, 0.55));
        }
      }
    }
  }
}
.mobile-sidebar .items > .item .link > .title {
  font-size: 16px;
  color: #fff;
  margin-left: 24px;
}
.mobile-sidebar .items > .item .link > .image-block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
}
.mobile-sidebar .items > .item .link > .image-block > .balance {
  font-size: 14px;
  color: #fff;
  font-weight: 600;
}

.mobile-sidebar .items > .item .link > .image-block.profile {
  position: relative;
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 16px;
}
.mobile-sidebar .items > .item .link > .image-block.profile img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
}
</style>
