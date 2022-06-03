<template>
  <div class="answer-item">
    <svg
      class="close-answer-item"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4436 1.25312L11.3727 0.203125L6.32427 5.15313L1.27584 0.203125L0.204956 1.25312L5.25339 6.20312L0.204956 11.1531L1.27584 12.2031L6.32427 7.25312L11.3727 12.2031L12.4436 11.1531L7.39515 6.20312L12.4436 1.25312Z"
        fill="white"
        fill-opacity="0.33"
      />
    </svg>

    <div class="avatar">
      <img src="https://new3.co/wp-content/uploads/2018/05/6231-2.jpg" alt="" />
    </div>
    <div>
      <div class="title-block">
        <p class="name">Виктор</p>
        <p class="adress">Москва</p>
      </div>
      <div class="slider-block">
        <Swiper
          :slides-per-view="6"
          :space-between="4"
          class="slider"
          :modules="[Navigation]"
          :navigation="{
            nextEl: '.next-arrow',
          }"
          :breakpoints="{
            0: {
              slidesPerView: 5
            },
            1200: {
              slidesPerView: 6
            }
            
          }"
        >
          <SwiperSlide v-for="(item, idx) in 10" :key="idx">
            <AnswerItemSlide />
          </SwiperSlide>
        </Swiper>
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="next-arrow"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.499967 10.1051L4.97388 5.60513L0.499967 1.10513L1.24984 0.350882L6.47363 5.60513L1.24984 10.8594L0.499967 10.1051Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="meta-block">
        <p class="text">Было интересно:<br /><span>2 минуты назад</span></p>
        <button class="write-btn">Написать</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import AnswerItemSlide from "@/components/Sends/AnswerItemSlide.vue";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
</script>
<style lang="scss">
.answer-item {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  height: 200px;
  width: 390px;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 16px;
  position: relative;
  padding: 24px;
  margin: 2px;
  .close-answer-item {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
  }
  .avatar {
    width: 48px;
    height: 48px;
    position: relative;
    img {
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      top: 0;
      object-fit: cover;
      border: 1px solid #F9AE3F;
    }
  }
  .title-block {
    .name {
      font-size: 16px;
      color: #fff;
    }
    .adress {
      color: rgba(255, 255, 255, 0.33);
      font-size: 15px;
    }
  }
  .slider-block {
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 11px;
    padding: 3px;
    margin-top: 16px;
    padding-right: 30px;
    position: relative;
    .slider {
      max-width: 250px;
    }
    .next-arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  .meta-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    .text {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.33);
    }
    .write-btn {
      background: #2965ff;
      border-radius: 11px;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid #2965ff;
      width: 115px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
@media (max-width: 1200px) {
  .answer-item {
    width: 100%;
    padding: 20px;
    .slider-block {
      .slider {
        max-width: 200px;
      }
    }
  }
}
</style>