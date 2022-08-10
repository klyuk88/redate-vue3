<template>
  <div class="message-item">
    <div class="avatar">
      <img
        src="https://i.pinimg.com/236x/e1/ee/46/e1ee462e266376e66763b057596c62cf.jpg"
        alt=""
      />
    </div>
    <div class="message-wrap">
      <p class="author">Лёва</p>
      <p class="message">
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты.
      </p>
    </div>
    <span class="time"> 12:45 </span>
  </div>
</template>

<style lang="scss">
.message-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  position: relative;
  margin-bottom: 25px;
  .time {
    position: absolute;
    right: 0;
    top: 0;
    color: rgba($color: #fff, $alpha: 0.3);
  }
  .message-wrap {
    max-width: 70%;
    .author {
      font-style: 16px;
      color: #fff;
      font-weight: 600;
      text-align: left;
    }
    .message {
      font-size: 14px;
      font-weight: 500;
      color: rgba($color: #fff, $alpha: 0.6);
      line-height: 1.5;
    }
  }
  span {
    font-size: 14px;
  }
  .avatar {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
