<script setup>
defineProps({
  city: {
    type: String,
    required: true,
  },
  totalRegistered: {
    type: Number,
    required: true,
  },
  newUsers: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="city-slide">
    <div class="data">
      <p class="city">
        <img
          src="@/assets/images/main/location-icon.svg"
          alt="Иконка локации"
        />
        {{ city }}
      </p>
      <div class="item">
        <p class="numbers">{{ totalRegistered }}</p>
        <p class="subtitle">Зарегистрировано</p>
      </div>
      <div class="decor-line"></div>
      <div class="item">
        <p class="numbers">{{ newUsers }}</p>
        <p class="subtitle">Новых пользователей</p>
      </div>
    </div>
    <img src="@/assets/images/main/city-1.jpg" :alt="city" class="city-photo" />
  </div>
</template>

<style>
.city-slide {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  height: 220px;
  flex-grow: 1;
  z-index: 0;
  cursor: pointer;
}

.city-slide .city-photo {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.city-slide .data {
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40%;
  z-index: 1;
  text-align: center;
  /* padding: 0 25px; */
}
.city-slide .city {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  margin-bottom: 19px;
}
.city-slide .data > .item .numbers {
  font-size: 32px;
  font-weight: 800;
}
.city-slide .data > .item .subtitle {
  font-size: 12px;
  font-weight: 600;
}

.city-slide .data > .decor-line {
  width: 50%;
  height: 1px;
  background: rgba(255, 255, 255, 0.14);
  margin: 0 auto;
  margin-top: 5px;
}
@media (max-width: 1200px) {
  .city-slide {
    height: 100%;
  }
  .city-slide .city {
    font-size: 15px;
    padding: 10px 0;
    margin-bottom: 8px;
  }
  .city-slide .data > .item .numbers {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
