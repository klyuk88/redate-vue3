<template>
  <section id="not-found">
    <div class="content">
      <h1 class="title">404</h1>
      <p class="text">
        Опс...<br />
        Страница не найдена
      </p>
    </div>
  </section>
</template>

<style lang="scss">
#not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .content {
    .title {
      font-size: 263px;
      text-align: center;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.02);
    }
    .text {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      line-height: 1.5;
    }
  }
}
</style>
