<template>
  <div class="album__block"   >
    <div class="album__content">
      <div class="button__carousel__right" >
        <img src="@/assets/images/main/album__arrow__right.svg" alt="" />
      </div>
      <div class="album__photo__container">
        <div class="album__photo__carousel">
          <div class="photo__carousel__container">
            <div class="photo__frame">
              <img
                src="../../assets/images/main/album__main__avatar.png"
                alt=""
              />
              <div class="photo__frame__carousel">
                <div class="photo__frame__btn__block">
                  <div class="btn">Сделать Аватаркой</div>
                  <div class="btn">Удалить</div>
                </div>
                <div class="photo__frame__carousel__item__list">
                  <div class="photo__frame__carousel__item"></div>
                  <div class="photo__frame__carousel__item"></div>
                  <div class="photo__frame__carousel__item"></div>
                  <div class="photo__frame__carousel__item"></div>
                  <div class="photo__frame__carousel__item"></div>
                  <div class="photo__frame__carousel__item"></div>
                </div>
              </div>
            </div>
            <div class="photo__frame__carousel__counter">4 из 10</div>
          </div>
        </div>
      </div>
      <div class="button__carousel__left">
        <img src="@/assets/images/main/album__arrow__left.svg" alt="" />
      </div>
    </div>
    <div class="album__close" @click="$emit('hideModal')">
      <img src="@/assets/images/main/close-album.svg" alt="" />
    </div>
  </div>
  <div class="mobile__album">
      <img class="avatar" src="../../assets/images/main/album__main__avatar.png" alt="">

    <div class="mobile__album__header">
      <div class="btn__back__block">
        <div class="btn__back">
          <img class="arrow" src="../../assets/images/main/auth__back__arrow.svg" alt="" />
        </div>
        <p>Назад</p>
      </div>
      <div class="page__number">1 <span>/ 20</span></div>
    </div>
    <div class="mobile__album__body">
      <!-- <img src="../../assets/images/main/album__main__avatar.png" alt=""> -->
    </div>
    <div class="mobile__album__footer">
      <div class="footer__btn__block">
        <div class="footer__btn">
          <img class="logo" src="../../assets/images/main/album__make__avatar.svg" alt="" />
          <p>Сделать аватаркой</p>
        </div>
        <div class="vertical__line"></div>
        <div class="footer__btn">
          <img class="logo" src="../../assets/images/main/album__delete__photo.svg" alt="" />
          <p>Удалить</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import {ref} from 'vue'
// const showModal = ref(false);
const emit = defineEmits(['hideModal'])
  
</script>
<style lang="scss" scoped>
.mobile__album {
  display: none;
}
.album__block {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
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
  img {
    width: 560px;
    height: 714px;
    border-radius: 14px;
    position: relative;
    z-index: 0;
  }
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
  height: 117px;
  left: 86px;
  top: 627px;
  z-index: 100;
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
  cursor: pointer;
}
.photo__frame__carousel__counter {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
  color: #ffffff;
  text-align: center;
  margin-top: 35px;
}
.album__close {
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 818px;
  margin-left: 24px;
  img {
    cursor: pointer;
  }
}
.photo__frame__btn__block {
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 28px;
  .btn {
    padding: 6px 12px;
    gap: 10px;
    width: 174px;
    height: 28px;
    background: rgba(40, 37, 42, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.33);
    backdrop-filter: blur(15px);
    border-radius: 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.button__carousel__right {
  margin-right: 40px;
  img {
    cursor: pointer;
  }
}
.button__carousel__left {
  margin-left: 40px;
  img {
    cursor: pointer;
  }
}
@media (max-width: 1200px) {
  .album__block {
    display: none;
  }
  .mobile__album {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    .avatar {
      height: 100%;
      position: fixed;
    }
  }
  .mobile__album__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50.51vw;
    margin-top: 1.538vw;
    position: relative;
    left: -23.076vw;
    .btn__back__block {
      display: flex;
      align-items: center;
      p {
        font-weight: 500;
        font-size: 3.589vw;
        line-height: 153.5%;
        color: #ffffff;
      }
      .btn__back {
      }
      .page__number {
        font-weight: 600;
        font-size: 4.358vw;
        line-height: 153.5%;
        color: #ffffff;
        span {
          font-weight: 600;
          font-size: 4.358vw;
          line-height: 153.5%;
          color: #ffffff;
        }
      }
    }
  }
  .mobile__album__body {
    // filter: blur(60px);
    img {
      // width: 100%;
    }
  }
  .mobile__album__footer {
    width: 100vw;
    height: 18.461vw;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  .vertical__line {
        border: 0.256vw solid rgba(255, 255, 255, 0.14);
        height: 8.717vw;
        width: 0px;
        position: relative;
        left: 0;
  }
    .footer__btn__block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2.564vw;
      .footer__btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 10.256vw;
        width: 50vw;
        p {
          font-weight: 600;
          font-size: 3.076vw;
          line-height: 3.846vw;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
