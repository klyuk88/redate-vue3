<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import UiBackLink from '@/ui/UiBackLink'
import Steps from './components/Steps'

const router = useRouter()

if (router.currentRoute.value.name === 'Registration') {
  router.push({ name: 'Registration confirm' })
}

const isBackLink = computed(
  () => router.currentRoute?.value?.meta?.backUrl !== null
)

const steps = computed(() => router.currentRoute?.value?.meta?.steps || [])

const step = computed(() => router.currentRoute?.value?.meta?.step || false)

const backLinkClickHandler = () => {
  router.push(router.currentRoute?.value?.meta?.backUrl || '/')
}
</script>

<template>
  <div class="registration">
    <div class="registration__animation-ball"></div>
    <div class="registration__animation-ball right"></div>

    <div v-if="isBackLink" class="registration__back-link">
      <UiBackLink @click="backLinkClickHandler()" />
    </div>

    <div class="registration__steps">
      <Steps :steps="steps" />
    </div>

    <div v-if="step" class="registration__step"></div>

    <div class="registration__view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.registration {
  position: relative;
  z-index: 1;

  &__animation-ball {
    width: 100px;
    height: 100px;
    background-color: rgb(43, 102, 251);
    border-radius: 70%;
    box-shadow: 0 0 90px 180px rgba(41, 102, 255), 0 0 150px 310px #2966ff57,
      0 0 210px 360px #2966ff1c;
    position: fixed;
    animation-name: verticalSlideLeft;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    left: -150px;

    &.right {
      left: unset;
      right: -150px;
      bottom: 0;
      animation-name: verticalSlideRight;
      animation-duration: 7s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
    }
  }

  &__back-link {
    position: fixed;
    top: 70px;
    left: 40px;
    z-index: 5;
  }

  &__steps {
    position: absolute;
    top: 64px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 5;
  }

  &__step {
    position: absolute;
    top: 64px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 5;
    width: 128px;
    height: 4px;
    background: #2b66fb;
    border-radius: 1px;
  }
}

@keyframes verticalSlideLeft {
  from {
    margin-top: 0%;
  }
  to {
    margin-top: 50%;
  }
}
@keyframes verticalSlideRight {
  from {
    margin-bottom: 5%;
  }
  to {
    margin-bottom: 50%;
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
