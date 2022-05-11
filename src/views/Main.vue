<template>
  <Cities/>
  <div class="page-grid">
    <div class="center-col">
      <div class="content">
        <MobileHeader/>
        <div class="mob-warning">
          <img src="@/assets/images/main/warning-check.svg" alt="" class="icon">
          <p class="text">Ваша анкета в поиске будет видна исключено мужчинам оплатившим «премиум» подписку.</p>
        </div>
        <RecomendedMailings/>
        <PotencialPartners/>
      </div>
    </div>
    <div class="right-col">
      <div class="content">
        <NewSend/>
        <SpecialProposal/>
      </div>
    </div>
  </div>
</template>

<script setup>


import PotencialPartners from '@/components/PotencialPartners/PotencialPartners.vue'
import RecomendedMailings from '@/components/RecomendedMailings.vue'
import SpecialProposal from '@/components/SpecialProposal.vue'
import MobileHeader from '@/components/MobileHeader.vue'
import NewSend from "@/components/NewSend.vue";
import Cities from '@/components/Cities/Cities.vue'


</script>

<style lang="sass">
.page-grid
  display: grid
  grid-template-columns: 1fr 370px
  column-gap: 30px
  width: 100%
  margin-top: 35px
  @media screen and (max-width: 1200px)
    display: block
  .center-col
    overflow: hidden
    height: 100vh
    @media screen and (max-width: 1200px)
      overflow: visible
      height: auto
    > .content
      max-width: 1400px
      margin: 0 auto
      padding-right: 45px
      @media (max-width: 1200px)
        padding: 0
  .right-col
    @media screen and (max-width: 1200px)
      display: none
.page-subtitle
  font-size: 18px
  color: #fff
  font-weight: 600
  @media (max-width: 1200px)
    font-size: 17px

.mob-warning
  display: flex
  align-items: center
  border: 1px solid #2B66FB
  padding: 10px 15px
  display: none
  margin-bottom: 20px
  border-radius: 12px
  gap: 8px
  z-index: 2
  position: relative
  @media (max-width: 1200px)
    display: flex

.mob-warning > .text
  font-size: 12px
  font-weight: 600

</style>