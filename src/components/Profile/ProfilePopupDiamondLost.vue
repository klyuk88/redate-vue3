<script>
export default {}
</script>

<template>
  <div class="diamond__lost__background">
    <div class="diamond__lost__block">
      <div class="diamond__lost__content">
        <div class="diamond__lost__info">
          <h1 class="diamond__lost__title">«Premium»</h1>
          <p class="diamond__lost__text">
            У вас закончился лимит сообщений в день. Необходимо приобрести
            «Premium» акккаут.
          </p>
        </div>
        <div class="diamond__lost__buttons">
          <div class="diamond__lost__cancel">Отмена</div>
          <div class="diamond__lost__store">Магазин</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.text {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  text-align: center;
  color: #ffffff;
}
.diamond__lost__background {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
}
.diamond__lost__block {
  padding: 24px;
  width: 304px;

  background: rgba(36, 37, 41, 0.6);
  border-radius: 24px;
  border: 1px solid #f9ae3f;
}
.diamond__lost__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.diamond__lost__info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 246px;
}
.diamond__lost__title {
  @extend .text;
}
.diamond__lost__text {
  @extend .text;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
  width: 246px;
  margin-bottom: 16px;
}
.diamond__lost__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 256px;
  height: 34px;
}
.diamond__lost__cancel {
  @extend .text;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 11px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
}
.diamond__lost__store {
  @extend .text;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 34px;
  border-radius: 11px;
  font-weight: 700;
  font-size: 14px;
  line-height: 132.5%;
  border: 1px solid #f9ae3f;
}
</style>
