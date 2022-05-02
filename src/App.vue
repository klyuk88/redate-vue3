<template>
   <component :is="layout">
          <router-view/>
  </component>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || DefaultLayout
})

</script>

<style lang="scss">
</style>
