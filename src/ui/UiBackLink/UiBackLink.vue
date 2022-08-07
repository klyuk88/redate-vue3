<script setup>
defineProps({
  title: {
    type: String,
    default: 'Назад',
  },
})

const emits = defineEmits(['click'])

const clickHandler = () => {
  emits('click')
}
</script>

<template>
  <div class="ui-back-link" @click="clickHandler()">
    <div class="ui-back-link__icon"></div>
    <div class="ui-back-link__title">{{ title }}</div>
  </div>
</template>

<style lang="scss">
.ui-back-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__icon {
    width: 24px;
    height: 24px;
    background: url('@/assets/images/icons/back_arrow.svg');
  }

  &__title {
    font-family: 'Mulish';
    color: #ffffff;
    font-size: 14px;
    line-height: 132.5%;
    font-weight: 700;
  }
}

@media only screen and (max-width: 991px) {
  .ui-back-link {
    &__title {
      display: none;
    }
  }
}
</style>
