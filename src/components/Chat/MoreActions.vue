<script setup>
import { ref, onUnmounted } from 'vue'
const moreActions = ref(false)

const hideMoreActions = (e) => {
  if (
    moreActions.value &&
    e.target.className !== 'elements' &&
    e.target.className !== 'more-actions'
  ) {
    moreActions.value = false
  }
}

document.addEventListener('click', (e) => {
  hideMoreActions(e)
})

onUnmounted(() => {
  document.removeEventListener('click', hideMoreActions)
})
</script>

<template>
  <div
    class="more-actions"
    :class="{ active: moreActions }"
    @click.stop="moreActions = !moreActions"
  >
    <img src="@/assets/images/dots-icon.svg" alt="" class="dots-icon" />
    <div class="elements">
      <div class="element">
        <img src="@/assets/images/edit-icon.svg" alt="" class="icon" />
        <p class="title">Удалить несколько</p>
      </div>
      <div class="element">
        <img src="@/assets/images/delete-icon.svg" alt="" class="icon" />
        <p class="title">Удалить весь диалог</p>
      </div>
      <div class="element">
        <img src="@/assets/images/stop-icon.svg" alt="" class="icon" />
        <p class="title">Заблокировать</p>
      </div>
      <div class="element">
        <img src="@/assets/images/warning-icon.svg" alt="" class="icon" />
        <p class="title">Пожаловаться</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.more-actions {
  position: relative;
  .elements {
    position: absolute;
    display: none;
    background: #28292d;
    border-radius: 24px;
    border: 1px solid rgba($color: #fff, $alpha: 0.14);
    min-width: 245px;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    .element {
      display: flex;
      align-items: center;
      padding: 12px 32px;
      border-bottom: 1px solid rgba($color: #fff, $alpha: 0.14);
      .title {
        font-size: 14px;
        color: #fff;
      }
      .icon {
        margin-right: 12px;
        width: 20px;
      }
      height: auto;
    }
    .element:nth-child(3) {
      .icon {
        width: 16px;
        margin-right: 16px;
      }
    }
    .element:last-child {
      border-bottom: 0;
    }
  }
}
.more-actions.active {
  .elements {
    display: block;
  }
}
</style>
