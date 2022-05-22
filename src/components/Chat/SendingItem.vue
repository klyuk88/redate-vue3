<template>
    <div class="n-card_item">
      <div class="n-card_item-img">
        <img
          src="https://densegodnya.ru/thumb/2/JxPhNSBaYxUAWgsbD-ltUw/r/d/snezhnyy_bars.jpg"
          alt=""
        />
      </div>
      <div class="n-card_item-name">Костя, 36 <span>Россия</span></div>
      <div class="n-card_item-btn n-sent">Отправлено</div>
      <div class="n-card_item-text">
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Свою ручеек всемогущая, путь приставка силуэт свой текст
        своих там!
      </div>
    </div>
 
</template>

<script setup>
</script>

<style lang="scss">


.n-card_item-img {
  width: 48px;
  height: 48px;
  border-radius: 20px;
  position: relative;
}

.n-card_item-img img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
}

.n-card_item {
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  flex-wrap: wrap;
}

.n-card_item:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}

.n-card_item-name {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding-left: 12px;
}

.n-card_item-name span {
  display: block;
  color: rgba(255, 255, 255, 0.33);
  font-size: 14px;
  font-weight: 500;
}

.n-card_item-text {
  padding-left: 60px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 3;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
}

.n-card_item-btn {
  font-size: 14px;
  line-height: 34px;
  box-sizing: border-box;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
  font-weight: 500;
  width: 120px;
  margin-left: auto;
  text-align: center;
  cursor: pointer;
}

</style>