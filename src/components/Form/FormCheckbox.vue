<template>
  <div id="form-checkbox" :style="{'margin': margin }">
    <label for="online">
      <input type="checkbox" name="Онлайн" id="online">
      <div class="checkbox">
        <img src="@/assets/images/main/checkbox.svg" alt="">
      </div>
      <p class="label">
        Сейчас онлайн
      </p>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  margin: {
    type: String,
    default: '0',
  },
});
</script>

<style lang="scss">
#form-checkbox {
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
    }
    input:checked + .checkbox {
      background: #2965ff;
      border-color: #2965ff;
      img {
        opacity: 1;
      }
    }
    .label {
      font-style: 15px;
      font-weight: 600;
      margin-left: 12px;
    }
    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: 1px solid #fff;
      border-radius: 4px;
      img {
        width: 13px;
        height: auto;
        opacity: 0;
      }
    }
  }
}

</style>