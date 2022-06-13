<template>
  <section id="sendings">
    <div class="sendings-grid">
      <div class="main-content">

        <SendsHeader v-if="false"/>

        <div class="tab-header" v-if="true">
          <div class="tab" :class="{ 'active': tabs.sends }">
            <p class="title" @click="tabActive('sends')">Новые рассылки</p>
          </div>
          <div class="tab" :class="{ 'active': tabs.answers }">
            <p class="title" @click="tabActive('answers')">Ответы + 22</p>
          </div>
          <div class="active-line" :class="{'active': tabs.answers}"></div>
        </div>
        
        <component :is="activeTab"></component>
      </div>

      <div class="sidebar">
        <Sorting />
        <NewSendButton/>
      </div>
    </div>
  </section>

  <SendsMobile/>

</template>
<script setup>
import NewSend from "@/components/NewSend.vue";
import Sorting from "@/components/Sends/Sorting.vue";
import SendSlider from "@/components/Sends/SendSlider.vue";
import SendsTabContent from "@/components/Sends/SendsTabContent.vue";
import AnswersTabContent from "@/components/Sends/AnswersTabContent.vue";
import SendsHeader from '@/components/Sends/SendsHeader.vue'
import SendsMobile from '@/components/Sends/SendsMobile.vue'
import NewSendButton from '@/components/NewSendButton.vue'

import { reactive, computed} from "vue";
import { useStore } from "@/stores/main.js";
const store = useStore()

const activeTab = computed(() => {
  if(tabs.sends) {
    return SendsTabContent
  } else if (tabs.answers) {
    return AnswersTabContent
  }
})

const tabs = reactive({
  sends: true,
  answers: false
});

const tabActive = (param) => {
  if (param === "sends") {
    tabs.sends = true;
    tabs.answers = false;
  } else if (param === "answers") {
    tabs.answers = true;
    tabs.sends = false;
  }
};

const openNewSendWindow = () => {
  store.newSendWindow = true
}

</script>

<style lang="scss">
#sendings {
  padding-left: 100px;
  margin: 0 auto;
  .sendings-grid {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(860px, 1057px) minmax(300px, 376px);
    column-gap: 30px;
    align-items: center;
    .main-content {
      position: relative;
      background: rgba(196, 196, 196, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.33);
      height: 100vh;
      .tab-header {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        position: absolute;
        top: 0;
        left: 0;
        padding: 70px 0 18px 0;
        background: rgba(196, 196, 196, 0.05);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        z-index: 2;
        .tab {
          cursor: pointer;
          .title {
            font-size: 18px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.33);
          }
        }
        .tab.active {
          .title {
            font-size: 18px;
            font-weight: 600;
            color: #fff;
          }
        }
        .active-line {
          position: absolute;
          bottom: -1px;
          width: 50%;
          height: 2px;
          background: #fff;
          left: 0;
          transition: all 0.3s ease;
        }
        .active-line.active {
          transform: translateX(100%);
        }
      }

    }
  
  }
}

@media screen and (max-width: 1200px) {
  #sendings {
    display: none;
  }

}
</style>