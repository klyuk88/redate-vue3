<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user.js'
import ProfilePopupDiamondBuy from '@/components/Profile/ProfilePopupDiamondBuy.vue'
import ProfilePopupVerificationModerate from '@/components/Profile/ProfilePopupVerificationModerate.vue'
import ProfilePopupVerificationRequest from '@/components/Profile/ProfilePopupVerificationModerate.vue'

const user = useUserStore()

const isOpen = ref(false)

const userSex = computed(() => user.information.data?.sex === 1) // true - man, false - woman

const userIsNeedModerated = computed(
  () => user.registrationStatus.data?.isNeedModerated
)

const clickHandler = () => {
  isOpen.value = true
}

const closeHandler = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="substrate">
    <ProfilePopupDiamondBuy
      v-if="isOpen && userSex"
      class="substrate__popup"
      @close="closeHandler()"
    />

    <ProfilePopupVerificationModerate
      v-if="isOpen && !userSex && userIsNeedModerated"
      class="substrate__popup"
      @close="closeHandler()"
    />

    <ProfilePopupVerificationRequest
      v-if="isOpen && !userSex && !userIsNeedModerated"
      class="substrate__popup"
      @close="closeHandler()"
    />

    <div v-if="!isOpen" class="substrate__block" @click="clickHandler()"></div>
  </div>
</template>

<style lang="scss" scoped>
.substrate {
  position: fixed;
  position: fixed;
  top: 0;
  left: 150px;
  width: calc(100% - 150px);
  height: 100vh;
  z-index: 1000;

  &__popup {
    z-index: 1001;
  }

  &__block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
  }
}
</style>
