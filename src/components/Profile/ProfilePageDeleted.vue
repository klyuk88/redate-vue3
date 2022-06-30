<template>
  <div class="background__deleted__profile">
    <div class="mobile__deleted__profile">
      <div class="arrow__back">
        <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
        <h1 class="auth__back__btn__title">Назад</h1>
      </div>
      <MobileBurger style="margin-right: 20px" />
    </div>
    <p>Страница пользователя удалена</p>
    <div class="btn">Вернутся в диалоги</div>
    <h1 class="logo">REDATE</h1>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.mobile__deleted__profile {
  .arrow__back {
      display: none;
  }

}
.logo {
  display: none;
}
.background__deleted__profile {
  position: fixed;
  top: 0;
  max-width: 1264px;
  width: 100%;
  height: 100vh;
  background: rgba(196, 196, 196, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-top: none;
  border-bottom: none;
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 153.5%;
    text-align: center;
  }
  .btn {
    width: 167px;
    height: 34px;
    border: 1px solid #2b66fb;
    border-radius: 11px;
    font-weight: 700;
    font-size: 14px;
    line-height: 132.5%;
    color: #2b66fb;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    cursor: pointer;
  }
}
@media (max-width: 1200px) {
  .mobile__deleted__profile {
      
    .arrow__back {
      position: fixed;
      top: 55px;
      left: 20px;
      top: 70px;
      display: flex;
      align-items: center;
    }
    h1 {
      display: block;
      font-weight: 700;
      font-size: 14px;
      line-height: 132.5%;
    }
    
  }
  .logo {
    display: block;
    font-family: "Myanmar MN";
    font-style: normal;
    font-weight: 400;
    font-size: 16.1842px;
    line-height: 153.5%;
    letter-spacing: 0.245em;
    position: fixed;
    bottom: 40px;
  }
}
</style>
