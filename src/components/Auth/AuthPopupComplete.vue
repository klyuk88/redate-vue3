<template>
  <div class="signup__background">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <label>
              <input type="checkbox" />
              <div class="wrap">
                <div id="check-part-1" class="check-sign"></div>
                <div id="check-part-2" class="check-sign"></div>
              </div>
            </label>
            <h1>Пароль успешно изменен!</h1>
          </div>
        </div>
      </div>
      <div class="webBtn">
        <slot name="toAuth"></slot>
      </div>
      <div class="mobileBtn">
        <slot name="toAuthMobile"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobileBtn {
  display: none;
}
.signup__page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.signup__border {
  padding: 48px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0384) 0%,
    rgba(95, 133, 228, 0.05) 68.75%
  );
  border: 1px solid #2b66fb;
  box-shadow: 0px 32px 83px rgba(18, 34, 74, 0.5);
  border-radius: 24px;
  margin-bottom: 143px;
}
.signup__block {
}
.signup__block__container {
}
h1 {
  line-height: 153.5%;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
}

.check-sign {
  width: 199.1px;
  height: 150.28px;
  position: absolute;
  background: linear-gradient(
    153.8deg,
    #1741b0 18.26%,
    #2c58cb 64.12%,
    #1e49b8 94.17%
  );
}
.wrap {
  position: fixed;
  margin-top: 100px;
}

#check-part-1 {
  width: 0;
  opacity: 0;
  height: 22px;
  transform: rotate(45deg);
  transform-origin: 0 10px;
  left: 32px;
  top: -10px;
}

#check-part-2 {
  width: 0;
  height: 22px;
  transform: rotate(-45deg);
  left: 72px;
  opacity: 0;
  top: 47px;
  transform-origin: 0 10px;
}

input {
  display: none;
}

input:checked + .wrap #check-part-2 {
  opacity: 1;
  width: 160px;
  transition: width 0.4s 0.4s, opacity 0.3s 0.4s;
}

input:checked + .wrap #check-part-1 {
  opacity: 1;
  width: 80px;
  transition: width 0.4s, opacity 0.3s;
}

label {
  width: 199.1px;
  height: 150.28px;
  display: block;
  cursor: pointer;
  margin-bottom: 55px;
}

@media (max-width: 1200px) {
  .webBtn {
    display: none;
  }
  .mobileBtn {
    display: flex;
  }
  .signup__block__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .signup__border {
    display: flex;
    margin-bottom: 12.3vw;
    background: none;
    border: none;
    box-shadow: none;
    padding: 0;
  }
  h1 {
    width: 310px;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
