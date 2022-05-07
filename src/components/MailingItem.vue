<template>
  <div class="mailing-item">
    <img src="@/assets/images/main/close-mail.svg" alt="" class="close" />
    <img src="@/assets/images/main/avatar-mail.png" alt="" class="avatar" />
    <div class="content">
      <div class="titles">
        <h3 class="title">Григорий, 40 лет</h3>
        <span class="line"></span>
        <h3 class="title city">Санкт-Питербург</h3>
      </div>
      <div class="format">
        <img
          src="@/assets/images/main/format-icon.svg"
          alt=""
          class="format__icon"
        />
        <p class="format__title">Серьзные отношения</p>
      </div>
      <p class="about">Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа систем массового</p>
      <div class="time-and-btn">
          <p class="time">2 минуты назад</p>
          <a href="#"><button class="min-btn">Интересно</button></a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.mailing-item
    display: flex
    align-items: flex-start
    gap: 16px
    padding: 24px
    border: 1px solid rgba(255, 255, 255, 0.14)
    border-radius: 26px
    position: relative
    .avatar
        width: 48px
        height: 48px
        border-radius: 20px
        border: 1px solid rgba(255, 255, 255, 0.14)
    .close
        position: absolute
        top: 25px
        right: 25px
        cursor: pointer
    .about
        font-size: 12px
        line-height: 130%
        color: #fff
        margin-top: 5px

.mailing-item .content
    .titles
        display: flex
        align-items: center
        .title
            margin-right: 8px
            color: #fff
            font-size: 16px
            font-weight: 600
        .title.city
            opacity: 0.3
        .line
            margin-right: 8px
            background: #fff
            opacity: 0.3
            width: 1px
            height: 18px

.mailing-item .format
    display: flex
    align-items: center
    margin-top: 12px
    .format__title
        color: #2965FF
        margin-left: 10px
        font-size: 14px

.mailing-item .time-and-btn
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 17px
    .time
        font-size: 14px
        color: #fff

</style>