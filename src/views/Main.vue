<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from '@/stores/main.js'
import { useStatisticsStore } from '@/stores/statistics.js'
import { useUserStore } from '@/stores/user.js'
import { useMailingStore } from '@/stores/mailing.js'
import { useLocationsStore } from '@/stores/locations.js'
import PotencialPartners from '@/components/PotencialPartners/PotencialPartners.vue'
import RecomendedMailings from '@/components/RecomendedMailings.vue'
import SpecialProposal from '@/components/SpecialProposal.vue'
import NewSend from '@/components/NewSend.vue'
import Cities from '@/components/Cities/Cities.vue'
import MobileBurger from '@/components/MobileBurger.vue'
import Substrate from '@/components/Substrate.vue'
import NewSendModal from '@/components/Popups/NewSendModal.vue'
import NewSendModalSuccess from '@/components/Popups/NewSendModalSuccess.vue'
import HideRecomendedMailingModal from '@/components/Popups/HideRecomendedMailingModal.vue'

const store = useStore()
const statistics = useStatisticsStore()
const user = useUserStore()
const mailing = useMailingStore()
const locations = useLocationsStore()

const infoText = computed(() => {
  return user.information.data?.sex === 1
    ? 'Все девушки проходят верификацию через модерацию сайта. Все данные защищены.'
    : 'Ваша анкета в поиске будет видна исключено мужчинам оплатившим «премиум» подписку.'
})

const showSubstrate = computed(() => {
  if (user.information.data?.sex === 1) {
    return user.currentTariff.error.status
  } else {
    return !user.registrationStatus.data?.isModerated
  }
})

const currentCity = computed(() => user.information.data?.city || {})

const cities = computed(() => locations.cities.data)

const showNewSendModalSuccess = computed(() => store.newSendWindowSuccess)

const showHideRecomendedMailingModal = computed(
  () => store.hideRecomendedMailingModal
)

const citiesError = computed(() => locations.cities.error.status)

const statisticsError = computed(() => statistics.error.status)

onMounted(async () => {
  await statistics.getStatictics()

  await mailing.getPrice()

  await mailing.getList()
})

const openModal = (params) => {
  store.newSendWindowParams = params
  store.newSendWindow = true
}
</script>

<template>
  <div id="main-content">
    <div class="mainpage__animation-ball"></div>
    <div class="mainpage__animation-ball-right"></div>

    <Substrate v-if="showSubstrate" />

    <NewSendModal v-if="!citiesError" />

    <NewSendModalSuccess v-if="showNewSendModalSuccess" />

    <HideRecomendedMailingModal v-if="showHideRecomendedMailingModal" />

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

          <RecomendedMailings
            v-if="!store.showCities"
            @open-modal="openModal($event)"
          />

          <PotencialPartners />
        </div>
      </div>
      <div class="right-col">
        <div class="content">
          <NewSend
            v-if="!store.showCities && !citiesError"
            :current-city="currentCity"
            :cities="cities"
            @open-modal="openModal($event)"
          />

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

.mainpage__animation-ball
  width: 150px
  height: 100px
  background-color: rgb(43, 102, 251)
  border-radius: 70%
  box-shadow: 0 0 90px 180px rgba(41, 102, 255), 0 0 150px 310px #2966ff57, 0 0 210px 360px #2966ff1c
  position: fixed
  animation-name: verticalSlideLeft
  animation-duration: 1.5s
  animation-iteration-count: infinite
  animation-direction: alternate-reverse
  bottom: 0
  left: -150px
.mainpage__animation-ball-right
  width: 150px
  height: 100px
  background-color: rgb(43, 102, 251)
  border-radius: 70%
  box-shadow: 0 0 90px 180px rgba(41, 102, 255), 0 0 150px 310px #2966ff57, 0 0 210px 360px #2966ff1c
  position: fixed
  right: -150px
  top: 0
  animation-name: verticalSlideRight
  animation-duration: 1.5s
  animation-iteration-count: infinite
  animation-direction: alternate-reverse

@keyframes verticalSlideLeft
  from
    margin-bottom: 0%
  to
    margin-bottom: 50px
@keyframes verticalSlideRight
  from
    margin-top: 0%
  to
    margin-top: 50px
</style>
