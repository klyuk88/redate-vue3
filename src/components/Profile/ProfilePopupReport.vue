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
<style>

.report__popup__background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
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
  gap: 10px;

  background: #242529;
  border: 1px solid #2b66fb;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.17);
  border-radius: 24px;

  top: 294px;
  left: 676px;

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
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.report__popup__select {
  gap: 12px;
  width: 328px;
  height: 60px;
  cursor: pointer;
}
.report__popup__comment {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;
  width: 328px;
  height: 174px;
  border: 1px solid #ffffff;
  border-radius: 11px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 153.5%;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.33);
  background: #242529;
  outline: none;
  resize: none;
}
.report__popup__button {
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
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 153.5%;
  color: #ffffff;
  cursor: pointer;
}
</style>
