<template>
  <div class="album__close" @click="close">
    <img src="@/assets/images/main/close-album.svg" alt="" />
  </div>
  <div class="button__carousel__right">
    <img src="@/assets/images/main/album__arrow__right.svg" alt="" />
  </div>
  <div class="button__carousel__left">
    <img src="@/assets/images/main/album__arrow__left.svg" alt="" />
  </div>
  <div class="album__block" @click.self="close">
    <div class="album__content">
      <div class="album__photo__container">
        <div class="album__photo__carousel">
          <div class="photo__carousel__container">
            <div class="photo__frame">
              <div class="photo__frame__carousel">
                <div class="photo__frame__carousel__item__list">
                  <div class="photo__frame__carousel__item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="photo__frame__carousel__counter">4 из 10</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.album__block {
  width: 1680px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(50px);

}
.album__content {
  width: 1382px;
  height: 818px;
  background: rgba(36, 37, 41, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(30px);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.album__photo__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.album__photo__carousel {
}
.album__photo__container {
  width: 560px;
  height: 782.97px;
}
.photo__frame {
  width: 560px;
  height: 714px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
  border-radius: 24px;
}
.photo__frame__carousel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 10px;
  backdrop-filter: blur(15px);
  position: absolute;
  width: 388px;
  height: 78px;
  left: 86px;
  top: 675px;
  z-index: 99;
  background: rgba(40, 37, 42, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
}
.photo__frame__carousel__item__list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 7px;
  width: 364px;
  height: 54px;
  border-radius: 52px;
}
.photo__frame__carousel__item {
  width: 54px;
  height: 54px;
  background: url(../../assets/images/main/potincial-mini-photo.png);
  border-radius: 14px;
}
.photo__frame__carousel__counter {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
  color: #ffffff;
}
.album__close {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 1574.41px;
  top: 93.5px;
  z-index: 1;
}
.button__carousel__right {
  position: absolute;
  width: 19.22px;
  height: 38.41px;
  left: 501px;
  top: 448px;
  z-index: 1;
  border-radius: 1px;
}
.button__carousel__left {
  position: absolute;
  z-index: 1;
  width: 19.22px;
  height: 38.41px;
  left: 1173.22px;
  top: 486px;
  border-radius: 1px;
}
</style>
