<script setup>
import { ref } from 'vue'

const emit = defineEmits(['redirect'])

const query = ref('')

const clickHandler = () => {
  emit('redirect', { query: query.value })
}
</script>

<template>
  <div class="cities-serch-mob-input">
    <input v-model="query" type="text" placeholder="Москва" />
    <button @click="clickHandler()">
      <img src="@/assets/images/main/arrow-form.svg" alt="" />
    </button>
  </div>
</template>

<style>
.cities-serch-mob-input {
  display: none;
  width: 100%;
  position: relative;
  margin-top: 40px;
}

.cities-serch-mob-input input {
  width: 100%;
  background: transparent;
  color: #fff;
  border-radius: 11px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  height: 44px;
  padding-left: 10px;
  font-size: 16px;
}

.cities-serch-mob-input input:focus {
  border: 1px solid #fff;
  outline: none;
}

.cities-serch-mob-input input::placeholder {
  color: rgba(255, 255, 255, 0.33);
}

.cities-serch-mob-input button {
  background: #2e66f5;
  border-radius: 11px;
  border: none;
  width: 43px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 1px;
  border: 1px solid #666669;
}

@media (max-width: 1200px) {
  .cities-serch-mob-input {
    display: block;
  }
}
</style>
