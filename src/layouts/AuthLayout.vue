<template>
  <Transition>
    <router-view />
  </Transition>
</template>

<style>
.v-enter-active {
  transition: opacity 2s ease;
}

.v-enter-from,
  
.v-leave-to {
  opacity: 0;
}
</style>
