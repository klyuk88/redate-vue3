<script setup>
import { useStore } from '@/stores/main.js'
import { ref } from 'vue'
const store = useStore()
const newMessage = () => {
  store.newMessageWindow = true
}

const statusOff = ref(false)
const statusDiamond = ref(true)
</script>

<template>
  <router-link to="#" class="search-item-link">
    <div v-if="statusDiamond" class="diamond__border">
      <p class="diamond__title">diamond</p>
    </div>
    <div id="search-item" :class="{ diamond: statusDiamond }">
      <div class="avatar">
        <div
          class="status__online"
          :class="{ offline: statusOff, diamond: statusDiamond }"
        ></div>
        <img
          src="https://o-tendencii.com/uploads/posts/2022-01/1642420914_5-o-tendencii-com-p-strogii-makiyazh-foto-5.jpg"
          alt=""
        />
      </div>
      <div class="about">
        <div class="name-block">
          <h5 class="name">Имя</h5>
          <p class="adress">Москва</p>
        </div>
        <button
          class="dialog"
          :class="{ diamond: statusDiamond }"
          @click.stop="newMessage()"
        >
          <div v-if="!statusDiamond" class="send__img"></div>
          <!-- <img
            v-if="!statusDiamond"
            src="@/assets/images/main/dialog-icon.svg"
            alt=""
          /> -->
          <div v-if="statusDiamond" class="send__img__diamond"></div>
          <!-- <img
            v-if="statusDiamond"
            src="@/assets/images/main/dialog-icon-diamond.svg"
            alt=""
          /> -->
        </button>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
.search-item-link:hover {
  .diamond__border {
    border: none;
    border: 1px solid #f9ae3f;
    box-shadow: 0px 4px 20px -12px rgba(236, 244, 3, 0.734);
  }
  #search-item {
    outline: 2px solid #2965ff;
    box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
    &.diamond {
      outline: 1px solid #f9ae3f;
      box-shadow: 0px 4px 20px -12px rgba(236, 244, 3, 0.734);
    }
    .dialog {
      background: #2965ff;
      &.diamond {
        background: linear-gradient(
          132.27deg,
          #f9ae3f -0.77%,
          #ffdba5 36.67%,
          #ad6902 96.37%
        );
        border: none;
      }
      .send__img__diamond {
        background: url(../../assets/images/main/dialog-icon-black.svg);
      }
    }
  }
}
.search-item-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.diamond__border {
  width: 82px;
  height: 17px;
  // background: rgba(0, 0, 0, 0.7);
  // backdrop-filter: blur(10px);
  // box-shadow: 0px 0px 10px rgba(255, 187, 84, 0.3);
  border-radius: 12px 12px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: rgba(255, 255, 255, 0.3294) 1px solid;
  border-bottom: none;
}
// .diamond__border:before {
//   background: linear-gradient(
//     103.31deg,
//     #f9ae3f 100%,
//     #ffdba5 100%,
//     #ad6902 100%
//   );
// }
// .diamond__border:before {
//   content: '';
//   width: 82px;
//   height: 17px;
//   position: absolute;
//   border-radius: 12px 12px 0px 0px;
//   padding: 1px;
//   -webkit-mask: linear-gradient(#fff, #fff 0) content-box,
//     linear-gradient(#fff, #fff 0);
//   -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
// }
.diamond__title {
  font-family: 'Palatino';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.19em;
  text-transform: uppercase;
  background: linear-gradient(
    132.27deg,
    #f9ae3f -0.77%,
    #ffdba5 36.67%,
    #ad6902 96.37%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 2px;
}
#search-item {
  min-width: 240px;
  border-radius: 24px;
  outline: 1px solid #ffffff54;
  padding: 5px;
  padding-bottom: 12px;
  transition: all 0.2s ease;
  .avatar {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 230px;
    border: 1px solid #ffffff24;
    .status__online {
      background: #0066ff;
      border: 1px solid #242529;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      z-index: 1;
      right: 15px;
      top: 15px;
      &.diamond {
        background: linear-gradient(
          128.12deg,
          #f9ae3f -118.58%,
          #ffdba5 -5.18%,
          #ad6902 175.65%
        );
      }
      &.offline {
        display: none;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }
  }
  .about {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 12px;
    .name-block {
      .name {
        font-size: 16px;
        font-weight: 700;
      }
      .adress {
        font-size: 12px;
        font-weight: 600;
        opacity: 0.4;
      }
    }
    .dialog {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 39px;
      border-radius: 14px;
      border: 1px solid #ffffff24;
      background: transparent;
      cursor: pointer;
      transition: all 0.1s ease;
      // img {
      //   width: 18px;
      //   height: 18px;
      // }
      .send__img {
        background: url(../../assets/images/main/dialog-icon.svg);
        background-size: cover;
        background-repeat: no-repeat;
        width: 18.75px;
        height: 18.75px;
      }
      .send__img__diamond {
        background: url(../../assets/images/main/dialog-icon-diamond.svg);
        background-size: cover;
        background-repeat: no-repeat;
        width: 19.75px;
        height: 19.75px;
      }
    }
    // .dialog:hover {
    //   background: #2965ff;
    // }
  }
}
</style>
