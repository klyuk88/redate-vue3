<template>
  <div class="report__popup__background" @click.self="close">
    <div class="report__popup__block">
      <div class="report__popup__content">
        <div class="report__popup__title">Жалоба на пользователя</div>
        <div class="report__popup__select">
          <TheSelect placeholder="Причина" />
        </div>
        <textarea
          class="report__popup__comment"
          placeholder="Введите текст..."
        ></textarea>
        <div class="report__popup__button">Отправить запрос</div>
      </div>
    </div>
  </div>
</template>
<script>
import TheSelect from "../Form/TheSelect.vue";
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
  components: { TheSelect },
};
</script>
<style lang="scss">
.text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  color: #ffffff;
}
.report__popup__background {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(50px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.report__popup__block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: rgba(36, 37, 41, 0.6);
  border: 1px solid #2b66fb;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
  border-radius: 24px;
}
.report__popup__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 16px;
  width: 328px;
  height: 364px;
}
.report__popup__title {
  @extend .text;
  display: flex;
  align-items: center;
}
.report__popup__select {
  gap: 12px;
  width: 328px;
  height: 60px;
  cursor: pointer;
  background: none;
}
.report__popup__comment {
  @extend .text;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;
  width: 328px;
  height: 174px;
  border-radius: 11px;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: none;
  outline: none;
  resize: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.33);
  }
  &:focus {
    border: #ffffff 1px solid;
  }
}
.report__popup__button {
  @extend .text;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 26px;
  gap: 10px;
  width: 328px;
  height: 54px;
  background: linear-gradient(137.15deg, #2965ff 0%, #2e66f5 99.89%);
  border-radius: 11px;
  font-size: 16px;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .report__popup__block {
    height: 107.17vw;
    width: 85.89vw;
    background: rgba(36, 37, 41, 0.6);
    border: 0.256vw solid #2b66fb;
    border-radius: 6.153vw;
    .report__popup__content {
      align-items: center;
      height: 94.87vw;
      width: 73.589vw;
      .report__popup__select {
        width: 73.589vw;
        height: 15.38vw;
      }
      .report__popup__comment {
        width: 73.589vw;
        height: 51.538vw;
      }
      .report__popup__button {
        width: 41.282vw;
        height: 8.461vw;
        font-weight: 700;
        font-size: 3.589vw;
        line-height: 132.5%;
        padding: 0;
      }
    }
  }
}
</style>
