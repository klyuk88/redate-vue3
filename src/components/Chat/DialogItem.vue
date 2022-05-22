<template>
  <div class="m-mess_wrapper" :class="{'delite': false}">
    <div class="m-mess_item" :class="{'m-new': false}">
      <div class="m-mess_item-img">
        <div class="m-mess_item-img m-online"></div>
        <img
          src="https://densegodnya.ru/thumb/2/JxPhNSBaYxUAWgsbD-ltUw/r/d/snezhnyy_bars.jpg"
          alt=""
        />
      </div>
      <div class="m-mess_start">
        <div class="m-mess_item-name">Александр</div>
        <div class="m-mess_item-text">Привет, спасибо что написал:)</div>
      </div>
      <div class="m-mess_end">
        <div class="m-mess_time">12:55</div>
        <div class="m-mess_new">1</div>
      </div>
    </div>
    <div class="m-mess_del">x</div>
    <div class="m-mess_del-mob">Удалить</div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.m-mess_wrapper {
  display: flex;
  gap: 2px;
  margin-top: 2px;
  align-items: stretch;
  justify-content: center;
  cursor: pointer;
}

.m-mess_wrapper.delite {
  justify-content: end;
  .m-mess_item {
    flex-shrink: 0;
  }
  .m-mess_del-mob {
    display: flex;
  }
}

.m-mess_item {
  width: 75%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#414141, #414141),
    linear-gradient(#414141, #414141);
  background-size: 90.5% 1px;
  background-repeat: no-repeat, no-repeat;
  background-position: right bottom;
}

.m-new {
  background: rgba(255, 255, 255, 0.05) !important;
}

.m-mess_item-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.m-mess_item-img img {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  object-fit: cover;
}

.m-mess_start {
  display: inline-block;
  margin-left: 12px;
  margin-right: auto;
}

.m-mess_item-name {
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 3px;
}

.m-mess_item-text {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  font-size: 14px;
}

.m-mess_time {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.33);
}

.m-mess_new {
  width: 20px;
  text-align: center;
  line-height: 20px;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 40px;
  color: #fff;
  font-size: 12px;
  margin-left: auto;
  font-weight: 600;
}

.m-mess_end {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.m-mess_del {
  display: flex;
  font-weight: 700;
  color: #fff;
  align-items: center;
  cursor: pointer;
  padding: 0 15.5px;
  box-sizing: border-box;
  border: 1px solid #434447;
  border-radius: 2px;
}

.m-online {
  content: "";
  position: absolute;
  background: #2b66fb;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  bottom: 1px;
  right: 4px;
  z-index: 1;
}

.m-information {
  max-width: 200px;
  text-align: center;
  margin-top: 50px;
}

.m-information_text {
  font-size: 15px;
  line-height: 23px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
}

.m-information_btn {
  color: #2b66fb;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #2b66fb;
  border-radius: 11px;
  text-align: center;
  width: 120px;
  margin: 0 auto;
  margin-top: 20px;
  line-height: 34px;
  cursor: pointer;
}

.m-mess_del-mob {
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  align-items: center;
  padding: 0 24px;
  display: none;
}

@media (max-width: 1200px) {
  .m-mess_item {
    width: 100%;
  }
  .m-mess_del {
    display: none;
  }
  .m-mess_wrapper {
    gap: 0;
  }
  // .m-mess_item {
  //   background: inherit;
  // }
}
</style>