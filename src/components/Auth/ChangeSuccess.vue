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
      <div class="signup__btn">Отлично!</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.signup__border {
  width: 328.1px;
  height: 349.48px;
  border: 1px solid rgba(43, 102, 251, 0.2);
}
.signup__block {
  width: 304.1px;
  height: 325.48px;
}
.signup__block__container {
  width: 208.1px;
  height: 229.48px;
}
h1 {
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
}

</style>
