<template>
  <div class="new-send-modal-wrap" ref="sendWrap" :class="{'active': store.newSendWindow}">
    <div class="new-send-modal">
      <img src="@/assets/images/close-new-send.svg" alt="" class="close" @click="closeNewSendWindow" />
      <div class="title-block">
        <p class="title">Создание рассылки</p>
        <p class="time">Время публикации — 8 часов</p>
      </div>
      <form class="form-block">
        <div class="inputs-block">
          <TheSelect :placeholder="'Выберите город'" :options="cities" />
          <TheSelect :placeholder="'Выберите формат'" :options="formats" :zIndex="1"/>
          <FormTextArea :placeholder="'Сообщение'" :name="'Сообщение'"/>
        </div>
        <small class="small">*В рассылке запрещенно указывать свои контакты</small>
        <BigButton :title="'Создать рассылку $34'"/>

      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import TheSelect from "@/components/Form/TheSelect.vue";
import FormTextArea from '@/components/Form/FormTextArea.vue'
import BigButton from '@/components/Form/BigButton.vue'
import {useStore} from '@/stores/main.js'

const store = useStore()

const closeNewSendWindow = () => {
  store.newSendWindow = false
}
const cities = ref(["Москва", "Санкт-Петербург", "Иран", "Стамбул"]);
const formats = ref(["Серьезно", "Не серьезно", "Серьезно", "Не серьезно"]);

const sendWrap = ref(null)
document.addEventListener('click', (e) => {
  e.stopPropagation()
  if(e.target === sendWrap.value) {
    closeNewSendWindow()
  }
})


</script>
<style lang="scss">
.new-send-modal-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  .new-send-modal {
    width: 715px;
    max-width: 715px;
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-radius: 24px;
    background: rgba(36, 37, 41, 0.6);
    padding: 24px;
    position: relative;
    .close {
      position: absolute;
      top: 0;
      right: -30px;
      cursor: pointer;
    }
    .title-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 18px;
        font-weight: 600;
      }
      .time {
        font-size: 14px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.33);
      }
    }
    .form-block {
      .inputs-block {
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        .form-selecet {
          margin-bottom: 0;
        }
        .form-textarea {
          grid-column: 1/3;
        }
        
      }
      .big-btn {
          margin-top: 16px;
        }
      .small {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.33);
        display: block;
      }
    }
  }
}
.new-send-modal-wrap.active {
  display: flex;
}
@media (max-width: 1200px) {
  .new-send-modal-wrap {
    .new-send-modal {
      max-width: 95%;
      .close {
        display: none;
      }
      .form-block {
        .inputs-block {
          grid-template-columns: 1fr;
          .form-textarea {
            grid-column: 1/1
          }
        }
      }
    }
  }
}
</style>