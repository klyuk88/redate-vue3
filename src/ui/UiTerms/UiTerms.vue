<template>
  <p class="ui-terms">
    Продолжая, вы принимаете
    <router-link class="ui-terms__link" to="/"
      >Пользовательское соглашение</router-link
    >
    и
    <router-link class="ui-terms__link" to="/"
      >Политику конфиденциальности</router-link
    >
  </p>
</template>

<style lang="scss">
.ui-terms {
  font-family: 'Mulish';
  color: #77777a;
  font-size: 12px;
  line-height: 132.5%;
  font-weight: 600;
  text-align: center;

  &__link {
    color: #2b66fb;
    text-decoration: none;
  }
}
</style>
