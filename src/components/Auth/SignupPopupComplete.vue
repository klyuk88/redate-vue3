<template>
  <div class="signup__background">
    <div class="signup__page" >
      <div class="signup__border" :class="{ animated__border__done: isClicked }" >
        <div class="signup__block"  @click="isClicked = true">
          <div class="signup__content">
            <div class="success__logo">
              <div class="left__logo"></div>
              <div class="right__logo"></div>
            </div>
            <div class="signup__desc">
              <h1>Начните знакомства!</h1>
              <p>
                Вы успешно зарегистрированы! Начните знакомства и создайте
                расслыку с Вашим предложением!
              </p>
            </div>
          </div>
        </div>
        <div class="btn__done">Отлично!</div>
      </div>
    </div>
      <router-link to="/account/:user">
        <div class="btn__done">Отлично!</div>
      </router-link>
  </div>
</template>
<script setup>
import AuthPopup from "@/components/Auth/AuthPopup.vue";
import SignupHobby from "@/components/Auth/SignupHobby.vue";
import SignupPopupVue from "@/components/Auth/SignupPopup.vue";
import ChangeSuccess from '@/components/Auth/ChangeSuccess.vue'
import { ref } from "vue";
const isClicked = ref(true);

</script>
<style lang="scss" scoped>
.signup__page {
    height: 600px;
}
.signup__border {
  width: 485px;
  height: 431px;
      margin: 0 ;
      position: absolute;

  .btn__done {
    display: none;
  }
}
.signup__block {
  width: 461px;
  height: 407px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
  border-radius: 24px;
}
.signup__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 311px;
}
.success__logo {
  width: 224.9px;
  height: 169.75px;
  .left__logo {
    position: relative;
    width: 25.7px;
    height: 103.63px;
    left: 48px;
    top: 81px;
    background: linear-gradient(
      153.8deg,
      #1741b0 18.26%,
      #2c58cb 64.12%,
      #1e49b8 94.17%
    );
    transform: rotate(135deg);
  }
  .right__logo {
    position: relative;
    width: 25.61px;
    height: 214.45px;
    left: 143px;
    top: -117px;
    background: linear-gradient(
      153.8deg,
      #1741b0 18.26%,
      #2c58cb 64.12%,
      #1e49b8 94.17%
    );
    transform: rotate(-135deg);
  }
}
.signup__desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 600;
    font-size: 34px;
    line-height: 43px;
    color: #ffffff;
    width: 356px;
    height: 43px;
  }
  p {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    width: 365px;
    height: 36px;
  }
}
.btn__done {
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 236px;
  height: 48px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  cursor: pointer;
}
.animated__border__done {
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: borderanimation;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}
@keyframes borderanimation {
  0% {
    border: 1px solid #2965ff;
    border-radius: 30px;
    width: 461px;
    height: 408px;
  }
  25% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 476px;
    height: 418px;
  }
  50% {
    border: 1px solid #2b66fb90;
    border-radius: 30px;
    width: 484px;
    height: 436px;
  }
  75% {
    border: 1px solid #2b66fb45;
    border-radius: 30px;
    width: 492px;
    height: 454px;
  }
  100% {
    border: 1px solid #2b66fb00;
    border-radius: 32px;
    width: 500px;
    height: 462px;
  }
}
@media (max-width: 1200px) {
  .signup__page {
 
    .btn__done {
      display: none;
    }
  }
  .signup__border {
      justify-content: space-between;
      margin: 0 auto;
    height: 125.897vw;
    display: flex;
    border: none;
    flex-direction: column;
    .btn__done {
      display: flex;
    }
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__desc {
    h1 {
      font-weight: 600;
      font-size: 6.1538vw;
      line-height: 7.692vw;
      width: 64.3589vw;
      height: 7.692vw;
    }
    p {
      font-weight: 400;
      font-size: 3.5897vw;
      line-height: 4.615vw;
      display: flex;
      align-items: center;
      text-align: center;
      width: 70.512vw;
      height: 13.846vw;
    }
  }
}
</style>
