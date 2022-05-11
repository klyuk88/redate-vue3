<template>
  <div>
    <div class="new-send">
      <h3 class="page-subtitle mb-16">Создать новую рассылку</h3>
      <v-select
        class="form-selecet"
        :options="options"
        v-model="city"
        placeholder="Выберите город"
      >
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.39492 0.494094L8.14492 7.24409L14.8949 0.494093L16.0263 1.62546L8.14492 9.50684L0.263549 1.62546L1.39492 0.494094Z"
                fill="white"
              />
            </svg>
          </span>
        </template>
      </v-select>
      <label class="form-label" for="format">Формат знакомств</label>
      <v-select
        style="z-index: 1"
        id="format"
        class="form-selecet formats"
        :options="formats"
        v-model="format"
        :searchable="false"
        placeholder="Формат знакомств"
      >
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.39492 0.494094L8.14492 7.24409L14.8949 0.494093L16.0263 1.62546L8.14492 9.50684L0.263549 1.62546L1.39492 0.494094Z"
                fill="white"
              />
            </svg>
          </span>
        </template>
      </v-select>
      <a class="big-btn" href="#"> Создать рассылку </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import vSelect from "vue-select";

const city = ref("Москва");
const format = ref("Любой");

const options = ref(["Москва", "Санкт-Петербург", "Казань"]);
const formats = ref([
  "Онлайн общение",
  "Серезные отношения",
  "Свидание",
  "Путешествие",
]);
</script>


<style lang="sass">
.form-selecet
    margin-bottom: 20px
.vs__dropdown-toggle
    color: #fff
    border: 1px solid rgba(255,255,255,0.3)
    border-radius: 11px
    background: transparent
    max-width: 100%
    width: 100%
    height: 60px
    padding: 0 12px
    position: relative
    z-index: 10000000

.vs__selected
    color: #fff
    font-size: 16px
    position: static!important
.vs__search::placeholder
    color: rgba(255,255,255,0.3)
    font-size: 16px
    font-family: 'Mulish'
.vs__clear
    display: none
.vs__dropdown-menu
    background: #242529
    padding: 0
    margin: 0
    border: 1px solid #fff
    border-radius: 11px
    top: 0px
    padding-top: 60px
.vs__dropdown-option
    color: #fff
    padding: 20px 15px
    border-bottom: 1px solid rgba(255,255,255,0.14)

.new-send
    padding: 0 20px
.form-label
    color: #fff
    margin-bottom: 10px
    font-size: 14px
    display: block

.mb-16
    margin-bottom: 16px
</style>