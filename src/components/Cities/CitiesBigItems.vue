<template>
  <div class="city-big-items">
    <CityBigItem 
      v-for="(item, idx) in props.usersStatistics" :key="idx"
      :city="item.name"
      :totalRegistered="item.cityAll"
      :newUsers="item.cityNew"
      @click="clickHandler(item)"
    />
  </div>
</template>

<script setup>
import CityBigItem from '@/components/Cities/CityBigItem.vue'

const props = defineProps({
  usersStatistics: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(['redirect'])

const clickHandler = (item) => {
  emit('redirect', item)
}
</script>

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
