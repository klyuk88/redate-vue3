<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['input'])

const message = ref(props.value)
</script>

<template>
  <div class="form-textarea" :class="{ error: error }">
    <textarea
      v-model="message"
      :name="name"
      :placeholder="placeholder"
      maxlength="500"
      @input="emit('input', message)"
    ></textarea>
    <span class="words-count">500</span>
  </div>
</template>

<style lang="scss">
.form-textarea {
  width: 100%;
  position: relative;
  textarea {
    font-family: 'Mulish';
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-radius: 11px;
    color: #fff;
    font-size: 16px;
    padding: 12px;
    background: transparent;
    resize: none;
    height: 110px;
  }
  textarea:focus {
    outline: 1px solid #fff;
  }
  textarea::placeholder {
    font-family: 'Mulish';
    font-size: 16px;
  }
  .words-count {
    position: absolute;
    right: 15px;
    bottom: 15px;
    color: rgba(255, 255, 255, 0.33);
  }
}

.form-textarea.error {
  textarea {
    border-color: #2965ff;

    &:focus {
      outline-color: #2965ff;
    }
  }
}
</style>
