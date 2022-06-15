<template>
  <div class="signup__background">
    <div class="signup__page">
      <div class="signup__border">
        <div class="signup__block">
          <div class="signup__block__container">
            <div class="signup__header__block">
              <div class="signup__return__btn">
                <img src="@/assets/images/main/auth__back__arrow.svg" alt="" />
              </div>
              <p>Выберете до 5 увлечений:</p>
            </div>
            <div class="signup__body__block">
              <p>Выбрано:<span>2</span></p>
              <div class="signup__options__block">
                <div class="chips choosed">Спорт</div>
                <div class="chips">Вино</div>
                <div class="chips choosed">Деньги</div>
                <div class="chips">Животные</div>
                <div class="chips choosed">Технологии</div>
                <div class="chips">Книги</div>
                <div class="chips choosed">Кефейни</div>
                <div class="chips">Вечерние прогулки</div>
                <div class="chips choosed">Живопись</div>
                <div class="chips">Рестораны</div>
                <div class="chips choosed">Петь</div>
                <div class="chips">Вкусно поесть</div>
                                <div class="chips choosed">Спорт</div>
                <div class="chips">Вино</div>
                <div class="chips choosed">Деньги</div>
                <div class="chips">Животные</div>
                <div class="chips choosed">Технологии</div>
                <div class="chips">Книги</div>
                <div class="chips choosed">Кефейни</div>
                <div class="chips">Вечерние прогулки</div>
                <div class="chips choosed">Живопись</div>
                <div class="chips">Рестораны</div>
                <div class="chips choosed">Петь</div>
                <div class="chips">Вкусно поесть</div>
                                <div class="chips choosed">Спорт</div>
                <div class="chips">Вино</div>
                <div class="chips choosed">Деньги</div>
                <div class="chips">Животные</div>
                <div class="chips choosed">Технологии</div>
                <div class="chips">Книги</div>
                <div class="chips choosed">Кефейни</div>
                <div class="chips">Вечерние прогулки</div>
                <div class="chips choosed">Живопись</div>
                <div class="chips">Рестораны</div>
                <div class="chips choosed">Петь</div>
                <div class="chips">Вкусно поесть</div>
              </div>
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
  data() {
    return {};
  },
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
.signup__options__block {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  padding-top: 24px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1px;
    // background-color: red;
  }
  // &::-webkit-scrollbar-thumb {
  //   color: white;
  //   width: 2px;
  // }
}
.chips {
  padding: 8px 12px;
  margin-bottom: 14px;
  margin-left: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 13px;
  cursor: pointer;
  &:active {
    background: linear-gradient(137.15deg, #1e51d5 0%, #153fab 99.89%);
    box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  }
  &.choosed {
    border: 1px solid #2965ff;
    box-shadow: 0px 4px 20px -12px rgba(70, 122, 255, 0.4);
  }
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
@media (max-width: 1200px) {
  .signup__return__btn {
    margin-left: 3.33vw;
  }
  .signup__page {
    height: 159.23vw;
  }
  .signup__border {
    display: flex;
    border: none;
    margin: 0;
  }
  .signup__block__container {
    height: 131.53vw;
  }
  .signup__block {
    border: none;
    background: none;
    box-shadow: none;
  }
  .signup__body__block {
    height: 118.461vw;
  }
  .signup__options__block {
    border: none;
  }
  .signup__btn {
    width: 85.89vw;
    height: 15.384vw;
  }
}
</style>
