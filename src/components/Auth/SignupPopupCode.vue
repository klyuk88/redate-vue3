<script setup>
defineProps({
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
})

let code = Array(6)
let dataFromPaste

const handleInput = (event) => {
  const inputType = event?.inputType
  let currentActiveElement = event?.target

  if (inputType === 'insertText') {
    currentActiveElement.nextElementSibling?.focus()
  }

  if (inputType === 'insertFromPaste' && dataFromPaste) {
    for (const num of dataFromPaste) {
      let id = parseInt(currentActiveElement.id.split('_')[1])

      currentActiveElement.value = num

      code[id] = num

      if (currentActiveElement.nextElementSibling) {
        currentActiveElement = currentActiveElement.nextElementSibling
        currentActiveElement.nextElementSibling?.focus()
      }
    }
  }
}

const handleDelete = (event) => {
  let value = event?.target?.value

  let currentActiveElement = event?.target

  if (!value) {
    currentActiveElement?.previousElementSibling?.focus()
  }
}

const onPaste = (event) => {
  dataFromPaste = event?.clipboardData?.getData('text').trim().split('')
}
</script>

<template>
  <div class="backgound__codeconfirm">
    <slot name="backPhaseOne"></slot>
    <div class="container__codeconfirm">
      <div class="form">
        <div class="content">
          <h1>Введите код</h1>
          <p>
            Мы отправили вам код на электронную почту, введите его для
            продожления регистрации.
          </p>
          <div class="input__box">
            <input
              v-for="(n, index) in code"
              :id="'input_' + index"
              :key="index"
              v-model="code[index]"
              type="text"
              maxlength="1"
              @input="handleInput($event)"
              @keydown.delete="handleDelete($event)"
              @paste="onPaste($event)"
            />
          </div>
          <span v-if="error" class="error__message">{{ errorMessage }}</span>
        </div>
        <slot name="thirdPhase" :code="code"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backgound__codeconfirm {
  .container__codeconfirm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 146px;
    .form {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .content {
      margin: 362px 0 169px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.0384) 0%,
        rgba(95, 133, 228, 0.05) 68.75%
      );
      border: 1px solid #2b66fb;
      box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
      border-radius: 24px;
      h1 {
        font-weight: 600;
        font-size: 34px;
        line-height: 43px;
        color: #ffffff;
      }
      p {
        font-weight: 600;
        font-size: 12px;
        line-height: 132.5%;
        text-align: center;
        color: rgba(255, 255, 255, 0.33);
        margin: 12px 0 32px 0;
        width: 320px;
      }
      .input__box {
        width: 400px;
        display: flex;
        justify-content: space-between;
        input {
          outline: none;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 11px;
          background: none;
          font-weight: 600;
          font-size: 18px;
          line-height: 153.5%;
          text-align: center;
          color: #ffffff;
          &:focus {
            border: 1px solid #ffffff;
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .backgound__codeconfirm {
    .container__codeconfirm {
      margin-bottom: 306px;
      .content {
        border: none;
        background: none;
        box-shadow: none;
        margin: 166px 0 48px 0;
        padding: 0;

        .input__box {
          width: 375px;
        }
      }
    }
  }
}

.error__message {
  font-weight: 600;
  font-size: 12px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2b66fb;
  margin-top: 12px;
  // margin-bottom: 48px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
