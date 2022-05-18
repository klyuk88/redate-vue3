<template>
  <label class="form-label">{{ title }}</label>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style lang="scss">
.form-label {
    color: #fff;
    margin-bottom: 10px;
    font-size: 14px;
    display: block;

}


</style>