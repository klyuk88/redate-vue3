<template>
  <div class="send-slide">
    <div>
      <p class="title-block">
        <span class="adress">Россия, Москва</span> |
        <span class="status">Серьёзные отношения</span>
      </p>
      <p class="text">
        Идея провести этот вечер чудестно, а также сложившаяся структура
        организации требуют от нас анализа систем массового участия. Равным
        образом сложившаяся структура организации требуют определения и
        уточнения новых предложений. С другой стороны начало повседневной
        работы.
      </p>
    </div>
    <div>
      <div class="timer-block">
        <p class="begin">Начало: 23 марта 11:05</p>
        <p class="end">6 часов до окончания</p>
      </div>
      <button class="timer-btn">Оставновить</button>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.send-slide {
  border: 1px solid #ffffff;
  border-radius: 2px;
  padding: 24px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  .title-block {
    font-size: 14px;
    font-weight: 500;
  }
  .text {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 12px;
  }
  .timer-block {
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-radius: 2px;
    text-align: center;
    padding: 12px;
    .begin {
      font-size: 23px;
      font-weight: 700;
      color: #fff;
      margin-top: 12px;
    }
    .begin:after {
      content: "";
      display: block;
      width: 90%;
      height: 1px;
      background: rgba(255, 255, 255, 0.33);
      margin: 0 auto;
      margin-top: 24px;
    }
    .end {
      font-size: 16px;
      font-weight: 600;
      color: #3e74ff;
      margin-top: 12px;
    }
  }
  .timer-btn {
    width: 144px;
    height: 33px;
    border: 1px solid #434447;
    border-radius: 11px;
    background: transparent;
    font-size: 14px;
    color: #fff;
    margin: 0 auto;
    display: block;
    cursor: pointer;
    margin-top: 27px;
  }
}
@media (max-width: 1200px) {
  .send-slide {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 12px;
    border: 1px solid #FFFFFF54;
    .text {
      font-size: 13px;
    }
    .timer-btn {
      width: 100%;
      height: 43px;
      border-color: #fff;
      margin-top: 12px;
    }
    .timer-block {
      .begin {
        font-size: 15px;
        margin-top: 0;
      }
      .begin:after {
        margin-top: 12px;
      }
      .end {
        font-size: 15px;
      }
    }
  }
}
</style>