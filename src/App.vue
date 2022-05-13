<template>
<div class="container">
     <component :is="layout">
          <router-view/>
  </component>
</div>

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

<style lang="sass">
  .container
    max-width: 100%
    padding: 0 40px
    margin: 0 auto
    @media (max-width: 1200px)
      max-width: 375px
      padding: 0 10px


</style>
