<template>
  <div class="cities-small-slide">
    <img
      src="https://www.cruisegid.ru/assets/gallery/1022/20697.jpg"
      :alt="props.city"
      class="cover"
    />
    <div class="tray">
      <div class="title">
        <img src="@/assets/images/main/location-icon.svg" alt="Иконка локации" />
        <h6 class="title">{{ props.city }}</h6>
      </div>
      <div class="statiscic-item">
        <p class="text">
          Всего
          <span class="line"></span>
        </p>

        <p class="text">{{ props.totalRegistered }}</p>
      </div>

      <div class="statiscic-item">
        <p class="text">
          За сутки
          <span class="line"></span>
        </p>
        <p class="text">{{ props.newUsers }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  city: {
    type: String,
    required: true
  },
  totalRegistered: {
    type: Number,
    required: true
  },
  newUsers: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss">
.cities-small-slide {
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  height: 100px;
  width: 277px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.cities-small-slide .cover {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 1;
}

.cities-small-slide .tray {
  background: #1c1d21;
  position: absolute;
  width: 70%;
  height: 100%;
  right: 0;
  z-index: 2;
  padding: 10px 5px 10px 16px;
}

.cities-small-slide .tray .title {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.cities-small-slide .tray .title img {
  width: 16px;
  height: auto;
  margin-right: 3px;
}
.cities-small-slide .tray .title h6 {
  font-size: 16px;
  font-weight: 700;
}

.cities-small-slide .tray .statiscic-item {
  display: grid;
  grid-template-columns: 1fr 40%;
  column-gap: 10px;
}

.cities-small-slide .tray .statiscic-item .text {
  font-size: 16px;
  line-height: 150%;
  position: relative;
}

.cities-small-slide .tray .statiscic-item .text > .line {
  height: 16px;
  width: 1px;
  background: rgba(255, 255, 255, 0.14);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
