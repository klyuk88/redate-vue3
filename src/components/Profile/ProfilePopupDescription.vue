<template>

<div class="desc__background" @click="close">

  <div class="desc__popup__block">
    <div class="desc__popup__content">
      <div class="desc__popup__text">
        Интересующие форматы знакомств пользователя
      </div>
    </div>
    <div class="desc__popup__arrow">
    </div>
  </div>


</div>
</template>
<script>
export default {
    methods: {
    close() {
      this.$emit("close");
    },
    }
};
</script>
<style>
.desc__background {
 
  width: 1680px;
  height: 1000px;
  position: absolute;
  z-index: 99;

}
.desc__popup__block {
  position: relative;
   width: 226.78px;
  height: 93.87px;
    top: 180px;
  left: 920px;

</template>
<script>
export default {};
</script>
<style>
.desc__popup__block {
  position: fixed;
  width: 226.78px;
  height: 93.87px;
  top: 180px;
  left: 900px;

}
.desc__popup__content {
  width: 226.78px;
  height: 93.87px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(50px);
  width: 220px;
  height: 93.87px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.desc__popup__text {
  width: 171px;
  height: 42px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 153.5%;
  color: #ffffff;
}
.desc__popup__arrow {
  /* width: 30px;
height: 16px;

background: #C4C4C4;
border-radius: 2px;
transform: rotate(90deg); */
}
</style>
