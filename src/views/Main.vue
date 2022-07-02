<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from '@/stores/main.js'
import { useStatisticsStore } from '@/stores/statistics.js'
import { useUserStore } from '@/stores/user.js'
import PotencialPartners from '@/components/PotencialPartners/PotencialPartners.vue'
import RecomendedMailings from '@/components/RecomendedMailings.vue'
import SpecialProposal from '@/components/SpecialProposal.vue'
import NewSend from '@/components/NewSend.vue'
import Cities from '@/components/Cities/Cities.vue'
import MobileBurger from '@/components/MobileBurger.vue'

const store = useStore()
const statistics = useStatisticsStore()
const user = useUserStore()

const infoText = computed(() => {
  return user.information.data?.sex === 1
    ? 'Все девушки проходят верификацию через модерацию сайта. Все данные защищены.'
    : 'Ваша анкета в поиске будет видна исключено мужчинам оплатившим «премиум» подписку.'
})

const statisticsError = computed(() => statistics.error.status)

onMounted(async () => {
  await statistics.getStatictics()
})
</script>

<template>
  <div id="main-content">
    <div class="mob-header">
      <h1 class="title">Главная</h1>

      <MobileBurger
        :styles="{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }"
      />

      <div class="decor-shape"></div>
    </div>

    <Cities v-if="!statisticsError" />

    <div class="page-grid">
      <div class="center-col">
        <div class="content">
          <div class="mob-warning">
            <img
              src="@/assets/images/main/warning-check.svg"
              alt=""
              class="icon"
            />
            <p class="text">{{ infoText }}</p>
          </div>

          <RecomendedMailings v-if="!store.showCities" />

          <PotencialPartners />
        </div>
      </div>
      <div class="right-col">
        <div class="content">
          <NewSend v-if="!store.showCities" />

          <SpecialProposal />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
#main-content
  max-width: 1465px
  margin: 0 auto
  padding-left: 100px
  padding-top: 75px
  padding-bottom: 75px
  box-sizing: content-box
  @media (max-width: 1200px)
    padding-left: 0
    padding-top: 50px
    padding-bottom: 0
    min-height: auto
    max-width: 100%
    margin: 0 auto
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
    // min-height: 1080px
    // max-height: 2000px
    @media screen and (max-width: 1200px)
      overflow: visible
      min-height: auto
      max-height: auto
    > .content
      // max-width: 1400px
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
  margin: 40px 0
  border-radius: 12px
  z-index: 2
  position: relative
  @media (max-width: 1200px)
    display: flex

.mob-warning > .text
  font-size: 12px
  font-weight: 600
  margin-left: 8px


.mob-header
  text-align: center
  position: relative
  width: 100%
  margin-bottom: 40px
  z-index: 1
  display: none
  @media (max-width: 1200px)
    display: block

.mob-header > .title
  font-size: 17px
  font-weight: 600

// .mob-header .menu-icon
//   position: absolute
//   right: 0
//   top: 50%
//   transform: translateY(-50%)

.mob-header > .decor-shape
  position: absolute
  width: 200px
  height: 200px
  left: 50%
  top: 0
  z-index: -1
  transform: translate(-50%, -50%)
  background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
  mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
  -webkit-mask-image: radial-gradient(ellipse 100% 100% at 50% 50%,black 10%,transparent 50%)
  opacity: 0.3
  pointer-events: none
</style>
