<template>
  <div class="background">
    <div class="content__container">
      <div class="male__side">
        <div class="background__logo">
          <!-- <img src="../../assets/images/main/male__back.svg" alt=""> -->
        </div>
        <div class="btn">Мужчина</div>
      </div>
      <div class="middle__menu">
        <div class="logo">
          <img src="../../assets/images/main/main_page__logo.svg" alt="" />
        </div>
        <div class="signin__btn__block">
          <div class="btn">Войти</div>
          <h1>Абсолютно новый формат знакомств</h1>
        </div>
        <h1 class="choose">Выбирите свой пол:</h1>
      </div>
      <div class="female__side">
        <div class="background__logo">
          <!-- <img src="../../assets/images/main/female__back.svg" alt=""> -->
        </div>
        <div class="btn">ЖЕНЩИНА</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.btn {
  padding: 11px 44px;
  height: 47px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  filter: drop-shadow(0px 32px 83px rgba(18, 34, 74, 0.5));
  border-radius: 11px;
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
h1 {
  width: 220px;
  font-weight: 400;
  font-size: 15.9719px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background: linear-gradient(
    239.3deg,
    #ffffff 2.37%,
    rgba(255, 255, 255, 0.21) 135.92%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.background {
  width: 100%;
  height: 100%;
  .content__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .male__side {
      width: 100%;
      display: flex;
      justify-content: center;
      .btn {
        width: 177px;
      }
      .background__logo {
      }
    }
    .middle__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      height: 731px;
      margin-top: 60px;
      .logo {
      }
      .signin__btn__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 139px;
      }
    }
    .female__side {
      width: 100%;
      display: flex;
      justify-content: center;
      .btn {
        width: 177px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .content__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .male__side {
      width: 100%;
      display: flex;
      justify-content: center;
      .btn {
        width: 100px;
      }
      .background__logo {
      }
    }
    .middle__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      height: 731px;
      margin-top: 0;
      .logo {
      }
      .choose {
        display: none;
      }
      .signin__btn__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 139px;
        .btn {
          padding: 11px 46px;
          gap: 10px;
          width: 150px;
          height: 47px;
        }
      }
    }
    .female__side {
      width: 100%;
      display: flex;
      justify-content: center;
      .btn {
        width: 177px;
      }
    }
  }
}
</style>
