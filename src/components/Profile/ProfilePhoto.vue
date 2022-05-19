<template>
  <ProfileNewMessage
    v-if="newMessageWindow"
  />
  <ProfilePhotoCarousel
    v-if="modalVisiblePhoto"
    @close="modalVisiblePhoto = false"
  />
  <div class="profile__photo__block">
    <ProfilePopupMore
      v-if="modalVisibleMore"
      @close="modalVisibleMore = false"
    />

    <div class="profile__photo" @click="showModalPhoto"></div>
    <div class="profile__photo__buttons__block">
      <div class="profile__photo__buttons__border">
        <div class="profile__photo__buttons__group">
          <div class="profile__photo__buttons__avatar">
            <div class="profile__photo__button__write" @click="showModalMess">
              Написать
            </div>
            <div class="profile__photo__button__like">
              <img src="@/assets/images/main/star.svg" alt="" />
            </div>
            <div class="profile__photo__button__favorite">
              <img src="@/assets/images/main/heart.svg" alt="" />
            </div>
          </div>
          <div class="prfile__photo__button__more" @click="showModalMore">
            <img src="@/assets/images/main/btn_more.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfilePopupMore from "./ProfilePopupMore.vue";
import ProfileNewMessage from "./ProfileNewMessage.vue";
import ProfilePhotoCarousel from "./ProfilePhotoCarousel.vue";
export default {
  data() {
    return {
      modalVisibleMore: false,
      modalVisibleMess: false,
      modalVisiblePhoto: false,
    };
  },
  computed: {
    newMessageWindow() {
      return this.$store.state.newMessageWindow
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },

    showModalMore() {
      this.modalVisibleMore = true;
    },
    showModalMess() {
      this.$store.commit('openNewMessageWindow')
    },
    showModalPhoto() {
      this.modalVisiblePhoto = true;
    },
  },

  components: { ProfilePopupMore, ProfileNewMessage, ProfilePhotoCarousel },
};
</script>
<style>
.profile__photo__block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 817px;
  height: 100vh;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-bottom: none;
  border-top: none;
  margin-right: 209px;
}
.profile__photo {
  width: 608px;
  height: 816px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
  border-radius: 24px;
}
.profile__photo__buttons__block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 7px 8px;
  gap: 10px;
  position: relative;
  width: 421px;
  height: 68.57px;
  left: 0px;
  top: -34px;
  background: rgba(40, 37, 42, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 24px;
}
/* .profile__photo__buttons__border {
} */
.profile__photo__buttons__group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 12px;
  width: 405px;
  height: 54.57px;
}
.profile__photo__buttons__avatar {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 369px;
  height: 56px;
}
.profile__photo__button__write {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 82px;
  gap: 10px;
  width: 241px;
  height: 56px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 18px;
  cursor: pointer;
}
.profile__photo__button__like {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.profile__photo__button__favorite {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.profile__photo__button__more {
  width: 24px;
  height: 24px;
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
