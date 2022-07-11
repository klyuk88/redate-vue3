<script setup>
import ruLocale from 'date-fns/locale/ru'
import { useStore } from '@/stores/main.js'

const store = useStore()

defineProps({
  mailing: {
    type: Object,
    required: true,
  },
  showSubstrate: {
    type: Boolean,
    default: false,
  },
})

const clickHandler = () => {
  store.hideRecomendedMailingModal = true
}
</script>

<template>
  <div class="mailing-item">
    <img
      src="@/assets/images/main/close-mail.svg"
      alt=""
      class="close"
      @click="clickHandler()"
    />
    <div class="mailing-item__img-wrap" :class="{ blur: showSubstrate }">
      <img src="@/assets/images/main/avatar-mail.png" alt="" class="avatar" />
    </div>
    <div class="content">
      <div class="titles">
        <h3 class="title">
          {{ mailing.creator.name }}, {{ mailing.creator.age }} лет
        </h3>
        <span class="line"></span>
        <h3 class="title city">{{ mailing.creator.city.name }}</h3>
      </div>
      <div class="format">
        <p class="format__title">Серьзные отношения</p>
      </div>
      <p class="about">{{ mailing.text }}</p>
      <div class="time-and-btn">
        <p class="time">
          <timeago
            :datetime="new Date(mailing.createdAt)"
            :auto-update="true"
            :locale="ruLocale"
          />
        </p>
        <a href="#"><button class="min-btn">Интересно</button></a>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.mailing-item
    display: flex
    align-items: flex-start
    padding: 24px
    border: 1px solid rgba(255, 255, 255, 0.14)
    border-radius: 26px
    position: relative
    min-height: 204px
    @media (max-width: 1200px)
      border: none
      border-radius: 0
      width: 100%
      background: rgba(255, 255, 255, 0.05)
    .avatar
        width: 48px
        height: 48px
        border-radius: 50%
        border: 1px solid rgba(255, 255, 255, 0.14)
        margin-right: 16px
    .close
        position: absolute
        top: 25px
        right: 25px
        cursor: pointer
    .about
        display: block
        font-size: 12px
        line-height: 130%
        color: #fff
        margin-top: 5px
        word-wrap: break-word
        overflow: hidden

.mailing-item__img-wrap
  position: relative
  z-index: 10
  &:after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 48px
    height: 48px
    border-radius: 50%
    z-index: 11
    backdrop-filter: blur(10px)
    border: none
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))

.mailing-item .content
    width: calc(100% - 64px)
    .titles
        display: flex
        align-items: center
        @media (max-width: 1200px)
          flex-direction: column
          align-items: flex-start
        .title
            margin-right: 8px
            color: #fff
            font-size: 16px
            font-weight: 600
            @media (max-width: 1200px)
              font-size: 15px
        .title.city
            opacity: 0.3
            @media (max-width: 1200px)
              font-size: 12px

        .line
            margin-right: 8px
            background: #fff
            opacity: 0.3
            width: 1px
            height: 18px
            @media (max-width: 1200px)
              display: none

.mailing-item .format
    display: flex
    align-items: center
    margin-top: 12px
    .format__title
        color: #2965FF
        font-size: 14px

.mailing-item .time-and-btn
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 17px
    .time
        font-size: 14px
        color: #fff

        &:first-letter
          text-transform: uppercase
        @media (max-width: 1200px)
          display: none
</style>
