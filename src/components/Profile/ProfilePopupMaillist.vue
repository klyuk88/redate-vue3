<template>
  <div class="maillist__background">
    <div class="maillist__box">
      <div class="maillist__block">
        <div class="maillist__content">
          <div class="maillist__info">
            <h1 class="info__title">Создание рассылки</h1>
            <h3 class="info__text">Время публикации - 8 часов</h3>
          </div>
          <div class="maillist__inputs">
            <div class="maillist__selectors">
              <TheSelect placeholder="Москва" class="selector__city" />

              <TheSelect
                placeholder="Формат знакомств:"
                class="selector__options"
              />
            </div>
            <textarea
              class="maillist__comments"
              placeholder="Введите текст..."
            ></textarea>
            <div class="maillist__desc">
              *В рассылке запрещенно указывать свои контакты
            </div>
          </div>
          <div class="maillist__btn">Создать рассылку $34</div>
        </div>
      </div>
      <div class="maillist__close__btn">
        <img src="../../assets/images/main/close-message.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import TheSelect from "../Form/TheSelect.vue";

export default { components: { TheSelect } };
</script>
<style lang="scss">
.text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.33);
}
.maillist__background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  width: 100%;
  height: 100%;
}
.maillist__box {
  display: flex;
  justify-content: center;
}
.maillist__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  gap: 10px;
  width: 716px;
  height: 368px;
  background: rgba(36, 37, 41, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
}
.maillist__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 16px;
  width: 668px;
  height: 320px;
}
.maillist__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 668px;
  height: 28px;
}
.info__title {
  @extend .text;
  font-size: 18px;
  color: #ffffff;
}
.info__text {
  @extend .text;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.33);
}
.maillist__inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
  width: 668px;
  height: 206px;
}
.maillist__selectors {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 668px;
  height: 60px;
}
.selector__city {
  @extend .text;
  width: 328px;
  height: 60px;
  color: #ffffff;
}
.selector__options {
  width: 328px;
  height: 60px;
  @extend .text;
}
.maillist__comments {
  @extend .text;
  text-align: start;
  width: 668px;
  height: 110px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  resize: none;
  background: rgba(36, 37, 41, 0.6);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.33);
  padding: 12px;
  outline: none;
}
.maillist__desc {
  @extend .text;
  width: 668px;
  height: 16px;
  font-size: 12px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.33);
}
.maillist__btn {
  @extend .text;
  font-size: 16px;
  color: #ffffff;
}
.maillist__btn {
  @extend .text;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  width: 668px;
  height: 54px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  font-size: 16px;
  color: #ffffff;
}
.maillist__close__btn {
  margin-left: 24px;
}
</style>
