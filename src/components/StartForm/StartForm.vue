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
  type: {
    type: String,
    default: 'first',
    validator: (prop) => ['first', 'second', 'third', 'fourth'].includes(prop),
  },
  icon: {
    type: String,
    default: '',
  },
})

const cssClasses = computed(() => {
  return {
    'start-form--without-text':
      !props.title && !props.description && !props.icon,
    'start-form--animate': props.animate,
  }
})
</script>

<template>
  <div class="start-form" :class="cssClasses">
    <div
      class="start-form__container"
      :class="`start-form__container--${type}`"
    >
      <img v-if="icon" class="start-form__icon" :src="icon" />
      <h2 v-if="title" class="start-form__title">{{ title }}</h2>
      <p
        v-if="description"
        class="start-form__description"
        v-html="description"
      ></p>

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

  &--without-text {
    .start-form__slot {
      margin-top: 0;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #2b66fb;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.0384) 0%,
      rgba(95, 133, 228, 0.05) 68.75%
    );
    box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
    border-radius: 24px;

    &--first {
      width: 422px;
      padding: 48px;
    }

    &--second {
      width: 432px;
      padding: 20.5px 19px;

      .start-form__description {
        width: 100%;
        max-width: 346px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
      }
    }

    &--third {
      width: 422px;
      padding: 48px;

      .start-form__description {
        width: 100%;
        max-width: 320px;
      }
    }

    &--fourth {
      width: 461px;
      padding: 48px;
    }
  }

  &__icon {
    width: 58px;
    height: 48px;
    object-fit: contain;
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
      padding: 0;
      border: none;
      border-radius: 0;
      box-shadow: none;
      background: transparent;

      &--first {
        width: 100%;
        max-width: 335px;
      }

      &--second {
        width: 100%;
        max-width: 335px;

        .start-form__description {
          width: 100%;
          max-width: 302px;
        }

        .start-form__slot {
          margin-top: 29px;
        }
      }

      &--third {
        width: 100%;
        max-width: 335px;

        .start-form__description {
          width: 100%;
          max-width: 302px;
        }

        .start-form__slot {
          margin-top: 72px;
        }
      }
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
