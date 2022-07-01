<script>
export default {}
</script>

<template>
  <div class="likes-item new">
    <div class="avatar-block">
      <img
        src="https://pbs.twimg.com/profile_images/805129549721767936/PpXiAgic.jpg"
        alt=""
        class="avatar"
      />
    </div>
    <div class="content-block">
      <div class="title-block">
        <div class="title">
          <p class="name">Андрэ</p>
          <p class="meta">4 минуты назад</p>
        </div>
        <p class="note">Понравлась ваша анкета</p>
      </div>
      <button class="btn">Написать</button>
    </div>
    <div class="hide-block">
      <img src="@/assets/images/hide_likes.svg" alt="" class="hide" />
    </div>
  </div>
</template>

<style lang="scss">
.likes-item {
  display: grid;
  width: 100%;
  padding: 16px;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.14);
  position: relative;
  cursor: pointer;
  margin-bottom: 2px;
  z-index: 1;
  .hide-block {
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 50px;
    right: 0;
    transform: translateX(0);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.6s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba($color: #fff, $alpha: 0.14);
    z-index: 0;
  }
  .avatar-block {
    position: relative;
    height: 48px;
    .avatar {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .content-block {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    .title-block {
      .title {
        display: flex;
        gap: 6px;
        align-items: center;
        .name {
          font-size: 16px;
          font-weight: 600;
        }
        .meta {
          font-size: 14px;
          font-weight: 500;
          opacity: 0.4;
        }
      }
      .note {
        font-size: 14px;
        opacity: 0.6;
        line-height: 1.5;
      }
    }
    .btn {
      width: 122px;
      height: 35px;
      background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
      border-radius: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }
  }
}
.likes-item:hover {
  .hide-block {
    transform: translateX(100%);
    opacity: 1;
  }
}
.likes-item.new {
  background: rgba($color: #fff, $alpha: 0.05);
  border-color: transparent;
}
</style>
