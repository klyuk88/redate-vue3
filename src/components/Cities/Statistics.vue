<template>
  <div class="statistics">
    <div class="item big">
      <h4 class="title">254 013</h4>
      <p class="text">Всего зарегистрировано</p>
    </div>
    <div class="item">
      <h4 class="title">104 023</h4>
      <p class="text">Зарегистрировано<br />мужских анкет</p>
    </div>
    <div class="item">
      <h4 class="title">3 023</h4>
      <p class="text">Новых пользователей<br />за последнии 24 часа</p>
    </div>
  </div>
</template>
<script>
</script>
<style>
.statistics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* gap: 16px; */
}

.statistics .item {
  padding: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}
.statistics .item:last-child {
  margin-right: 0;
}

.statistics .item.big {
  /* background: linear-gradient(
    91.52deg,
    #2b66fb 10.22%,
    #4272eb 75.83%,
    #2b66fb 75.84%
  ); */
  background-color: #2b66fb;
  border: 1px solid #2b66fb;
  box-shadow: 0px 4px 24px rgba(43, 102, 251, 0.4);
  border-radius: 24px;
  color: #fff;
}

.statistics .item.big .title {
  color: #fff;
}

.statistics .item.big .text {
  font-size: 20px;
  font-weight: 700;
  margin-left: 40px;
}

.statistics .item .title {
  font-size: 40px;
  color: #3e74ff;
  margin-right: 16px;
}

.statistics .item .text {
  font-size: 12px;
  line-height: 130%;
}

@media (max-width: 1200px) {
  .statistics .item {
    width: 25%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 16px;
  }
  .statistics .item.big {
    width: 100%;
    margin-right: 0;
  }
  .statistics .item .title {
    font-size: 32px;
    margin: 0;
  }
  .statistics .item.big .text {
    font-size: 14px;
    margin-left: 14px;
    margin: 0;
  }
}
</style>