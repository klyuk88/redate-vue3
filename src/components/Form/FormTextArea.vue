<script setup>
defineProps({
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="form-textarea">
    <textarea
      :name="name"
      :placeholder="placeholder"
      maxlength="300"
    ></textarea>
    <span class="words-count">300</span>
  </div>
</template>

<style lang="scss">
.form-textarea {
  width: 100%;
  position: relative;
  textarea {
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
</style>
