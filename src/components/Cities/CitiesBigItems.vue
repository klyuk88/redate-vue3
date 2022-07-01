<script setup>
import CityBigItem from '@/components/Cities/CityBigItem.vue'

defineProps({
  usersStatistics: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['redirect'])

const clickHandler = (item) => {
  emit('redirect', item)
}
</script>

<template>
  <div class="city-big-items">
    <CityBigItem
      v-for="(item, idx) in usersStatistics"
      :key="idx"
      :city="item.name"
      :total-registered="item.cityAll"
      :new-users="item.cityNew"
      @click="clickHandler(item)"
    />
  </div>
</template>

<style lang="scss">
.city-big-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
}

@media screen and (max-width: 1200px) {
  .city-big-items {
    display: none;
  }
}
</style>
