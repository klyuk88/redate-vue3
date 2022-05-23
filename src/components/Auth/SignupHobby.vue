<template>
  <div class="signup__background">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__header__block">
              <div class="signup__return__btn">
                  <img src="@/assets/images/main/auth__back__arrow.svg" alt="">
              </div>
              <p>Выберете до 5 увлечений:</p>
            </div>
            <div class="signup__body__block">
              <p>Выбрано:<span>2</span></p>
              <div class="signup__options__block"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="signup__btn">Выбрать</div>
    </div>
  </div>
</template>
<script>
export default {
    
};
</script>
<style lang="scss" scoped>
.flex__center {
  display: flex;
//   justify-content: center;
  align-items: center;
}
.signup__border {
  width: 504px;
  height: 584px;
}
.signup__block {
  width: 480px;
  height: 560px;
}
.signup__block__container {
  width: 384px;
  height: 464px;
}
.signup__block__container {
  width: 384px;
  height: 464px;
}
.signup__header__block {
  @extend .flex__center;

  width: 382px;
  height: 28px;
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 153.5%;
    color: #ffffff;
    text-align: center;
  }
}
.signup__return__btn {
    align-items: center;
    margin-right: 60px;
    margin-top: 4px;
    
}
.signup__body__block {
  @extend .flex__center;
  flex-direction: column;
  justify-content: space-between;
  width: 384px;
  height: 412px;
  p {
      display: flex;
      justify-content: space-between;
    width: 68px;
    font-weight: 600;
    font-size: 12px;
    line-height: 132.5%;
    color: rgba(255, 255, 255, 0.33);
    span {
      color: #ffffff;
    }
  }
}
.signup__options__block {
  width: 384px;
  height: 384px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
}
</style>
