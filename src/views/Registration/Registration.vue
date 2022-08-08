<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import UiBackLink from '@/ui/UiBackLink'
import Steps from './components/Steps'

const router = useRouter()

if (router.currentRoute.value.name === 'Registration') {
  router.push({ name: 'Registration first' })
}

const isBackLink = computed(
  () => router.currentRoute?.value?.meta?.backUrl !== null
)

const steps = computed(() => router.currentRoute?.value?.meta?.steps || [])

const backLinkClickHandler = () => {
  router.push(router.currentRoute?.value?.meta?.backUrl || '/')
}
</script>

<template>
  <div class="registration">
    <div v-if="isBackLink" class="registration__back-link">
      <UiBackLink @click="backLinkClickHandler()" />
    </div>

    <div class="registration__steps">
      <Steps :steps="steps" />
    </div>

    <div class="registration__view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.registration {
  position: relative;
  z-index: 1;

  &__back-link {
    position: fixed;
    top: 70px;
    left: 40px;
    z-index: 5;
  }

  &__steps {
    position: fixed;
    top: 64px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 5;
  }
}

@media only screen and (max-width: 991px) {
  .registration {
    padding: 0 20px;

    &__back-link {
      top: 54px;
      left: 13px;
    }

    &__steps {
      position: absolute;
    }
  }
}
</style>
