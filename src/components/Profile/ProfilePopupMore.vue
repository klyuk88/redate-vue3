<template>
  <ProfilePopupBan v-if="modalBanVisible" @hideModalBan="modalBanVisible = false" />
  <ProfilePopupHide v-if="modalHideVisible" @hideModalHide="modalHideVisible = false" />
  <ProfilePopupReport
    v-if="modalReportVisible"
    @hideModalReport="modalReportVisible = false"
  />
  <div class="more__menu__background" @click.self="$emit('hideModalMore')">
    <div class="more__menu__block">
      <div class="more__menu__content">
        <div class="more__menu__box">
          <div class="menu__icon">
            <img src="@/assets/images/main/share.svg" alt="" />
          </div>
          <div class="menu__title">Поделиться</div>
        </div>
        <div class="more__menu__horizontal__line"></div>
        <div class="more__menu__box" @click="modalHideVisible = true">
          <div class="menu__icon">
            <img src="@/assets/images/main/hide.svg" alt="" />
          </div>
          <div class="menu__title">Скрыть</div>
        </div>
        <div class="more__menu__horizontal__line"></div>
        <div class="more__menu__box" @click="modalBanVisible = true">
          <div class="menu__icon">
            <img src="@/assets/images/main/ban.svg" alt="" />
          </div>
          <div class="menu__title">Заблокировать</div>
        </div>
        <div class="more__menu__horizontal__line"></div>
        <div class="more__menu__box" @click="modalReportVisible = true">
          <div class="menu__icon">
            <img src="@/assets/images/main/report.svg" alt="" />
          </div>
          <div class="menu__title">Пожаловаться</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProfilePopupHide from "./ProfilePopupHide.vue";
import ProfilePopupBan from "./ProfilePopupBan.vue";
import ProfilePopupReport from "./ProfilePopupReport.vue";

import { ref } from 'vue'
const modalBanVisible = ref(false);
const modalHideVisible = ref(false);
const modalReportVisible = ref(false);

const emit = defineEmits(['hideModalMore'])
 


</script>
<style>
.more__menu__background {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
}
.more__menu__block {
  position: fixed;
  width: 246px;
  height: 213px;
  left: 890px;
  top: 625px;
  background: rgba(40, 41, 45, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
}
.more__menu__content {
  width: 158px;
  height: 201px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.more__menu__box {
  display: flex;
  margin-left: 29px;
  cursor: pointer;
}
.menu__icon {
  margin-right: 12px;
}
.menu__title {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  color: #ffffff;
}
.more__menu__horizontal__line {
  width: 244px;

  border: 1px solid rgba(255, 255, 255, 0.33);
}
</style>
