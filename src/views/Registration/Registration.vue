<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import UiBackLink from '@/ui/UiBackLink'

const router = useRouter()

if (router.currentRoute.value.name === 'Registration') {
  router.push({ name: 'Registration first' })
}

const isBackLink = computed(
  () => router.currentRoute?.value?.meta?.backUrl !== null
)

const backLinkClickHandler = () => {
  router.push(router.currentRoute?.value?.meta?.backUrl || '/')
}
</script>

<template>
  <div class="registration">
    <div v-if="isBackLink" class="registration__back-link">
      <UiBackLink @click="backLinkClickHandler()" />
    </div>
    <div class="registration__view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.registration {
  position: relative;

  &__back-link {
    position: fixed;
    top: 70px;
    left: 40px;
  }
}

@media only screen and (max-width: 991px) {
  .registration {
    padding: 0 20px;

    &__back-link {
      top: 54px;
      left: 13px;
    }
  }
}
</style>
