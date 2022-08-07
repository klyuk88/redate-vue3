<script setup>
defineProps({
  answer: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="ui-text-link">
    <span class="ui-text-link__answer">{{ answer }}</span>
    <router-link :to="to" class="ui-text-link__link">{{ link }}</router-link>
  </p>
</template>

<style lang="scss">
.ui-text-link {
  display: flex;
  align-items: center;

  &__answer,
  &__link {
    font-family: 'Mulish';
    font-size: 14px;
    line-height: 153.5%;
    font-weight: 500;
  }

  &__answer {
    color: rgba(255, 255, 255, 0.4);
  }

  &__link {
    display: inline-block;
    margin-left: 8px;
    color: #ffffff;
    text-decoration: none;
  }
}
</style>
