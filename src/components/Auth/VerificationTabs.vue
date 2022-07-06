<script setup>
import { ref, computed } from 'vue'
import BigButton from '../Form/BigButton.vue'
import Verification from './VerificationFirst.vue'
import VerificationSecond from './VerificationSecond.vue'
import VerificationThird from './VerificationThird.vue'
import VerificationSkip from './VerificationSkip.vue'

const nameComponent = ref('')

const changeStage = computed(() => {
  const componentName = 'Verification' + nameComponent.value

  let changeStage = null

  switch (componentName) {
    case 'VerificationSecond':
      changeStage = VerificationSecond
      break
    case 'VerificationThird':
      changeStage = VerificationThird
      break
    case 'VerificationSkip':
      changeStage = VerificationSkip
      break
    default:
      changeStage = Verification
  }
  return changeStage
})
</script>

<template>
  <keep-alive>
    <component :is="changeStage">
      <template #toSecond>
        <BigButton
          title="Продолжить"
          style="width: 236px; height: 48px"
          @click="nameComponent = 'Second'"
        />
      </template>
      <template #backToMain>
        <div class="auth__back__btn" @click="nameComponent = ''">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template #toSkip>
        <div class="btn__later" @click="nameComponent = 'Skip'">
          Пройти позже
        </div>
      </template>
      <template #toThird>
        <BigButton
          title="Продолжить"
          style="width: 236px; height: 48px"
          @click="nameComponent = 'Third'"
        />
      </template>
      <template #backToFirst>
        <div class="auth__back__btn" @click="nameComponent = ''">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template #backToStageTwo>
        <div class="auth__back__btn" @click="nameComponent = 'Second'">
          <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
          <h1 class="auth__back__btn__title">Назад</h1>
        </div>
      </template>
      <template #toFinish>
        <BigButton
          title="Продолжить"
          style="width: 236px; height: 48px"
          @click="nameComponent = 'Third'"
        />
      </template>
    </component>
  </keep-alive>
</template>

<style lang="scss">
.auth__back__btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: 70px;
  left: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.auth__back__btn__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.btn__later {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 129px;
  height: 39px;
  background: #27282c;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  position: relative;
  top: 20px;
  cursor: pointer;
}
</style>
