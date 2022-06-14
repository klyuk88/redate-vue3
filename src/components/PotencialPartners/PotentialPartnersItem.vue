<template>

  <div class="potential-partners-item">
      <a href="/userprofile">
        <div class="image-wrap">
      <img src="@/assets/images/main/partner-avatar.png" alt="" />
    </div>
      </a>

    <div class="name-wrap">
      <div class="name-adress">
        <h2 class="name">Олег, <span class="age">33</span></h2>
        <p class="adress">Москва, Россия</p>
      </div>
      <a href="#" class="dialog-btn" @click.prevent="store.newMessageWindow = true">
        <img
          src="@/assets/images/main/dialog-icon.svg"
          alt=""
          class="dialog-icon"
        />
      </a>
    </div>
  </div>
</template>
<script setup>
import {useStore} from '@/stores/main.js'
const store = useStore()
</script>
<style lang="sass">
.potential-partners-item
    padding: 4px
    padding-bottom: 12px
    border: 1px solid rgba(255, 255, 255, 0.14)
    border-radius: 20px
    // width: 239px
    .image-wrap
        position: relative
        border-radius: 20px
        border: 1px solid rgba(255, 255, 255, 0.14)
        width: 100%
        height: 230px
        overflow: hidden
        img
            position: absolute
            left: 0
            top: 0
            object-fit: cover
            width: 100%
            height: 100%
    .name-wrap
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 8px
        padding: 0 10px
        .name-adress
            .name
                font-size: 16px
                font-weight: 700
                color: #fff
            .adress
                font-size: 12px
                font-weight: 600
                color: #fff
                opacity: 0.3
        .dialog-btn
            border-radius: 14px 
            border: 1px solid rgba(255,255,255,0.14)
        .dialog-icon
            padding: 10px 20px
</style>