<script setup>
defineProps({
  msg: {
    type: String,
    default:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Океана ты несколько образ до ведущими снова, строчка напоивший деревни!',
  },
})
</script>

<template>
  <div class="send-item">
    <svg
      class="close-send-item"
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

      <div class="message-block">
        <div class="status-block">
          <!-- <img
            src="@/assets/images/status-icon.svg"
            alt=""
            class="status-icon"
          /> -->
          <p class="status-text">Серьзные отношения</p>
        </div>
        <p class="message">
          {{ msg }}
        </p>
      </div>

      <div class="meta-block">
        <p class="meta-time">2 минуты назад</p>
        <button class="send-status-btn">Интересно</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.send-item {
  max-width: 390px;
  padding: 24px;
  margin: 2px;
  background: #2f3034;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 16px;
  position: relative;
  .close-send-item {
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
  .message-block {
    margin-top: 17px;
    .status-block {
      display: flex;
      align-items: center;
      .status-icon {
        width: 18px;
        height: auto;
      }
      .status-text {
        color: #3e74ff;
        font-size: 14px;
        // margin-left: 6px;
      }
    }
    .message {
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.5;
      margin-top: 5px;
    }
  }
  .meta-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    .meta-time {
      font-size: 14px;
      font-weight: 500;
      color: #fff;
    }
    .send-status-btn {
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
</style>
