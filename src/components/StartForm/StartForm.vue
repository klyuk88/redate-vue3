<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  animate: {
    type: Boolean,
    default: false,
  },
})

const cssClasses = computed(() => {
  return {
    'start-form--without-text': !props.title && !props.description,
    'start-form--animate': props.animate,
  }
})
</script>

<template>
  <div class="start-form" :class="cssClasses">
    <div class="start-form__container">
      <h2 v-if="title" class="start-form__title">{{ title }}</h2>
      <p v-if="description" class="start-form__description">
        {{ description }}
      </p>

      <div class="start-form__slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.start-form {
  padding: 0px;
  margin: 24px;
  border: 1px solid transparent;
  border-radius: 32px;

  &--animate {
    animation-name: border;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 422px;
    padding: 48px;
    border: 1px solid #2b66fb;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.0384) 0%,
      rgba(95, 133, 228, 0.05) 68.75%
    );
    box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
    border-radius: 24px;
  }

  &__title {
    font-family: 'Mulish';
    color: #ffffff;
    font-size: 34px;
    line-height: 43px;
    font-weight: 600;
    text-align: center;
  }

  &__description {
    display: inline-block;
    margin-top: 8px;
    font-family: 'Mulish';
    color: rgba(255, 255, 255, 0.33);
    font-size: 12px;
    line-height: 132.5%;
    font-weight: 600;
    text-align: center;
  }

  &__slot {
    width: 100%;
    margin-top: 32px;
  }
}

@keyframes border {
  0% {
    padding: 0;
    margin: 24px;
    border-color: rgba(#2965ff, 1);
    border-radius: 24px;
  }

  100% {
    padding: 24px;
    margin: 0;
    border-color: rgba(#2965ff, 0);
    border-radius: 32px;
  }
}

@media only screen and (max-width: 991px) {
  .start-form {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0;

    &--animate {
      animation-name: none;
    }

    &__container {
      width: 100%;
      max-width: 335px;
      padding: 0;
      border: none;
      border-radius: 0;
      box-shadow: none;
      background: transparent;
    }

    &__title {
      font-size: 32px;
      line-height: 40px;
    }

    &__description {
      margin-top: 16px;
      font-size: 13px;
      line-height: 16px;
      font-weight: 400;
    }

    &__slot {
      margin-top: 88px;
    }
  }
}
</style>
