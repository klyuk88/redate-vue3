<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLocationsStore } from '@/stores/locations.js'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const route = useRoute()

const locations = useLocationsStore()

const layout = computed(() =>
  route.meta.layout === 'auth-layout' ? AuthLayout : DefaultLayout
)

onMounted(async () => {
  await locations.getLocations()
})
</script>

<template>
  <div class="container">
    <component :is="layout"></component>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  max-width: 100%;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 375px;
    padding: 0 10px;
  }
}
</style>
