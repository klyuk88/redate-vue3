<template>
  <div id="formats" :class="{ open: formatsOpen }">
    <ul class="items">
      <li class="placeholder" @click="formatsOpen = !formatsOpen">
        <span>Выбрать формат</span>
        <img src="@/assets/images/main/select-arrow.svg" alt="" />
      </li>
      <li>
        <label for="first">
          <p class="label">Пункт первый</p>
          <input
            type="checkbox"
            id="first"
            value="Первый"
            v-model="formatsValue"
          />
          <div class="checkbox">
            <img src="@/assets/images/main/checkbox.svg" alt="" />
          </div>
        </label>
      </li>
      <li>
        <label for="second">
          <p class="label">Пункт второй</p>
          <input
            type="checkbox"
            id="second"
            value="Второй"
            v-model="formatsValue"
          />
          <div class="checkbox">
            <img src="@/assets/images/main/checkbox.svg" alt="" />
          </div>
        </label>
      </li>
      <li>
        <label for="third">
          <p class="label">Пункт третий</p>
          <input
            type="checkbox"
            id="third"
            value="Третий"
            v-model="formatsValue"
          />
          <div class="checkbox">
            <img src="@/assets/images/main/checkbox.svg" alt="" />
          </div>
        </label>
      </li>
    </ul>
    <div class="btn-wrap">
      <BigButton :title="'Выбрать'" />
    </div>
  </div>
  
  <div id="selected-meaning">
    <div class="item" v-for="(item, idx) in formatsValue" :key="idx">
      <span>{{item}}</span>
      <img src="@/assets/images/main/carbon_close.svg" alt="" @click="resetValue(idx)"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import BigButton from "@/components/Form/BigButton.vue";
const formatsOpen = ref(false);
const formatsValue = ref([]);
const resetValue = (idx) => {
  formatsValue.value.splice(idx, 1)
}
</script>

<style lang="scss">
#formats {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
  max-height: 60px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  .items {
    list-style: none;
    padding: 0;
    width: calc(100% + 2px);
    margin-top: -1px;
    margin-left: -1px;
    .placeholder {
      display: flex;
      align-items: center;
      position: relative;
      border: 1px solid rgba($color: #fff, $alpha: 0.3);
      height: 60px;
      border-radius: 11px;
      padding: 0 17px;
      cursor: pointer;
      span {
        font-size: 15px;
        font-weight: 500;
        opacity: 0.2s ease-in-out;
      }
      img {
        position: absolute;
        right: 17px;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity;
      }
    }
    li {
      label {
        display: flex;
        height: 60px;
        padding: 0 17px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        cursor: pointer;
        input {
          position: absolute;
          width: 0;
          height: 0;
        }
        input:checked + .checkbox {
          background: #2965ff;
          border: 1px solid #2965ff;
          img {
            opacity: 1;
          }
        }
        .lebel {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          padding: 0 17px;
        }
        .checkbox {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid #fff;
          border-radius: 4px;
          width: 19px;
          height: 19px;
          img {
            width: 13px;
            height: auto;
            opacity: 0;
          }
        }
      }
    }
  }
  .btn-wrap {
    padding: 4px;
    box-sizing: content-box;
  }
}
#formats.open {
  max-height: 1000px;
  border-color: #fff;
  .items {
    .placeholder {
      img {
        opacity: 0;
      }
    }
  }
}

#selected-meaning {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  gap: 15px;
  .item {
    background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    padding-left: 25px;
    span {
      margin-right: 15px;
      font-size: 16px;
      font-weight: 600;
    }
    img {
      width: 25px;
      height: auto;
      cursor: pointer;
    }
  }
}
</style>