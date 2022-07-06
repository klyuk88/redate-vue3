<script setup>
import { ref, computed, watch } from 'vue'
import TheSelect from '@/components/Form/TheSelect.vue'
import BigButton from '@/components/Form/BigButton.vue'

const props = defineProps({
  currentCity: {
    type: Object,
    required: true,
  },
  cities: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits('openModal')

const city = ref(props.currentCity?.name)

const datingFormats = ref([
  'Серьезные отношения',
  'Легкие отношения',
  'Путешествия',
  'Свидание на ночь',
])
const datingFormat = ref(null)

const options = computed(() => props.cities.map((city) => city.name))

const clickHandler = () => {
  const params = { city, datingFormat }

  emit('openModal', params)
}

watch(
  () => props.currentCity,
  () => {
    if (props.currentCity?.name) {
      city.value = props.currentCity.name
    }
  }
)
</script>

<template>
  <div>
    <div class="new-send">
      <h3 class="page-subtitle mb-16">Создать новую рассылку</h3>

      <TheSelect
        v-model="city"
        :options="options"
        placeholder="Выберите город"
        :z-index="2"
      />
      <TheSelect
        v-model="datingFormat"
        :options="datingFormats"
        placeholder="Выберите формат"
        :z-index="1"
      />
      <BigButton title="Создать рассылку" @click="clickHandler()" />
    </div>
  </div>
</template>

<style lang="sass">
.new-send
    position: relative
    padding: 0 20px
.form-label
    color: #fff
    margin-bottom: 10px
    font-size: 14px
    display: block

.mb-16
    margin-bottom: 16px
</style>
