<template>
  <div class="background__age">
    <div class="web__version">
      <slot name="backStartPage"></slot>
      <div class="popup__age">
        <div class="logo__denied">
          <img src="../../assets/images/denied__logo.svg" alt="" />
        </div>
        <p>
          Благодарим за честный ответ! Мы с нетерпением ждем Вас, когда вы
          достигнитесвоего соврешеннолетия!
        </p>
        <router-link to="/">
          <BigButton
            title="Спасибо!"
            style="
              width: 394px;
              height: 48px;
              font-family: 'Mulish';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 153.5%;
            "
          />
        </router-link>
      </div>
    </div>
    <div class="mobile__version">
      <div class="logo__denied">
        <img src="../../assets/images/denied__logo.svg" alt="" />
      </div>
      <p>
        Благодарим за честный ответ! Мы с нетерпением ждем Вас, когда вы
        достигнитесвоего соврешеннолетия!
      </p>
              <router-link to="/">
          <BigButton
            title="Спасибо!"
            style="
              width: 335px;
              height: 48px;
              font-family: 'Mulish';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 153.5%;
              margin: 0px 0 201px 0;
            "
          />
        </router-link>
      <div class="footer__age__redirect">
        <p>Есть учетная запись?</p>
        <router-link to="/auth">
          <span>Войти</span>
        </router-link>
      </div>
      <div class="footer__age__desc">
        <p>
          Продолжая, вы принимаете
          <span> Пользовательское соглашение</span>
          и
          <span>Политику конфиденциальности</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import BigButton from "../Form/BigButton.vue";
</script>
<style lang="scss">
.mobile__version {
  display: none;
}
.background__age {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  .popup__age {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
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
      margin: 8px 0 32px 0;
      width: 346px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
    .btnBox {
      display: flex;
    }
  }
}

@media (max-width: 1200px) {
  .background__age {
    justify-content: flex-end;
  }
  .web__version {
    display: none;
  }
  .mobile__version {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 16px 0 42px 0;
      width: 302px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
    .footer__age__redirect {
      display: flex;
      align-items: baseline;
      p {
        margin: 0;
        color: #77777a;
        width: unset;
        margin-right: 8px;
      }
    }
    .footer__age__desc {
      margin: 28px 0 60px 0;
      p {
        width: 340px;
        font-weight: 600;
        font-size: 12px;
        line-height: 132.5%;
        text-align: center;
        color: #77777a;
        margin: 0;
        span {
          color: #2b66fb;
        }
      }
    }
  }
}
</style>
