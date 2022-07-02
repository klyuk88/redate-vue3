<script setup>
import { useSearchStore } from '@/stores/search.js'
import router from '@/router'

const search = useSearchStore()

const redirectHandler = () => {
  const params = { onlySpecialOffers: true }

  search.setQueryParams(params)

  router.push('/search')
}
</script>

<template>
  <div class="special-proposal">
    <h2 class="page-subtitle">Спецпредложение</h2>
    <p class="online-info">Сейчас онлайн 596 954</p>
    <div class="items-block">
      <div class="special-proposal-item">
        <div class="avatar-name">
          <img
            src="@/assets/images/main/avatar-special.png"
            alt=""
            class="avatar"
          />
          <div class="name-adress">
            <h6 class="name">Николай, <span>26</span> лет</h6>
            <p class="adress">Владикавказ</p>
          </div>
        </div>
        <a href="#" class="transparent-btn"> Написать </a>
      </div>
      <div class="special-proposal-item">
        <div class="avatar-name">
          <img
            src="@/assets/images/main/avatar-special.png"
            alt=""
            class="avatar"
          />
          <div class="name-adress">
            <h6 class="name">Николай, <span>26</span> лет</h6>
            <p class="adress">Владикавказ</p>
          </div>
        </div>
        <a href="#" class="transparent-btn"> Написать </a>
      </div>
      <div class="special-proposal-item">
        <div class="avatar-name">
          <img
            src="@/assets/images/main/avatar-special.png"
            alt=""
            class="avatar"
          />
          <div class="name-adress">
            <h6 class="name">Николай, <span>26</span> лет</h6>
            <p class="adress">Владикавказ</p>
          </div>
        </div>
        <a href="#" class="transparent-btn"> Написать </a>
      </div>
      <div class="special-proposal-item">
        <div class="avatar-name">
          <img
            src="@/assets/images/main/avatar-special.png"
            alt=""
            class="avatar"
          />
          <div class="name-adress">
            <h6 class="name">Николай, <span>26</span> лет</h6>
            <p class="adress">Владикавказ</p>
          </div>
        </div>
        <a href="#" class="transparent-btn"> Написать </a>
      </div>
      <button class="load-more" @click="redirectHandler()">
        Открыть больше...
      </button>
    </div>
  </div>
</template>

<style lang="sass">
.special-proposal
    padding: 24px 20px
    border: 1px solid rgba(255, 255, 255, 0.33)
    border-radius: 24px
    margin-top: 77px
    position: relative
    z-index: 0
.online-info
    font-size: 14px
    font-weight: 500
    color: #fff
    opacity: 0.3
.items-block
    margin-top: 16px
    .load-more
        font-size: 14px
        font-weight: 700
        margin: 0 auto
        display: block
        margin-top: 16px
        text-decoration: none
        color: #fff
        opacity: 0.3
        text-align: center
        background: none
        border: none
        cursor: pointer
    .special-proposal-item
        display: flex
        align-items: center
        justify-content: space-between
        padding-bottom: 16px
        border-bottom: 1px solid rgba(255,255 ,255 ,0.14 )
        margin-bottom: 16px
    .avatar-name
        display: flex
        align-items: center
        .avatar
            margin-right: 12px
            border-radius: 50%
            width: 48px
            height: 48px
        .name-adress
          .name
              font-size: 14px
              font-weight: 500
              color: #fff
          .adress
              font-size: 14px
              font-weight: 500
              opacity: 0.3

.special-proposal > .shape
    position: absolute
    background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
    mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
    -webkit-mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
    opacity: 0.3
    pointer-events: none
    top: -150px
    left: -150px
    width: 300px
    height: 300px
    z-index: -1
    @media (max-width: 1200px)
      display: none
</style>
