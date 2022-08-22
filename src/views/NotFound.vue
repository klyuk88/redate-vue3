<template>
  <section id="not-found">
    <div class="content">
      <div class="animation">
        <div class="notfound__animation-ball"></div>
        <div class="notfound__animation-ball second"></div>
        <div class="notfound__animation-ball third"></div>
        <div class="notfound__animation-ball fourth"></div>
      </div>

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
    .animation {
      position: fixed;
      bottom: 0;
      right: 50px;
      animation-name: symbolQuest;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
    }
    .notfound {
      &__animation-ball {
        width: 100px;
        height: 100px;
        border-radius: 30%;
        position: fixed;
        bottom: 0;
        right: 800px;
        opacity: 0.5;
        background-color: rgba(43, 102, 251);
        box-shadow: 0 0 50px 50px rgba(41, 102, 255), 0 0 90px 90px #2966ff57,
          0 0 110px 110px #2966ff1c;

        &.second {
          bottom: 230px;
          height: 471px;
          transform: rotate(35deg);
          right: 680px;
        }
        &.third {
          bottom: 668px;
          height: 300px;
          transform: rotate(220deg);
          right: 809px;
          border-radius: 30%;
        }
        &.fourth {
          bottom: 680px;
          height: 250px;
          border-radius: 30%;
          transform: rotate(144deg);
          right: 567px;
        }
      }
    }
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
@keyframes symbolQuest {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(70px, 30px);
  }
}
</style>
