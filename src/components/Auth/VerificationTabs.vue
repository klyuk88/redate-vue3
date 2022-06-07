<template>
  <div>
    <div class="tabs">
      <div class="signup__navigation">
        <div class="nav__box" @click="setActive('tab-1')">
          <div
            class="navigation__item active"
          ></div>
        </div>
        <div class="nav__box" @click="setActive('tab-2')">
          <div
            class="navigation__item"
            :class="{ active: isActiveNav}"
          ></div>
        </div>
        <div class="nav__box"  @click="setActive('tab-3')">
          <div
            class="navigation__item"
           :class="{ active: isActiveNav}"
          ></div>
        </div>
        <div class="nav__box"  @click="setActive('tab-4')">
          <div
            class="navigation__item"
           :class="{ active: isActiveNav}"
          ></div>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane" v-show="isActive('tab-1')">
          <div class="for-example">
            <VerificationFirst />
          </div>
        </div>
        <div class="tab-pane" v-show="isActive('tab-2')">
          <div class="for-example">
            <VerificationSecond />
          </div>
        </div>
        <div class="tab-pane" v-show="isActive('tab-3')">
          <div class="for-example">
            <VerificationThird />
          </div>
        </div>
        <div class="tab-pane" v-show="isActive('tab-4')">
          <div class="for-example">
            <SignupPopupFourth />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VerificationFirst from "./VerificationFirst.vue";
import VerificationSecond from "./VerificationSecond.vue";
import VerificationThird from "./VerificationThird.vue";
import SignupPopupFourth from "./SignupPopupFourth.vue";

export default {
  components: {
    VerificationFirst,
    VerificationSecond,
    VerificationThird,
    SignupPopupFourth,
  },
  data() {
    return {
      activeTab: "tab-1",
    //   isActiveNav: false
    };
  },
  methods: {
    setActive(tab) {
      this.activeTab = tab;
    },
    isActive(tab) {
      return this.activeTab === tab;
    },
    // changeActive() {
    //   return (this.isActiveNav  === !this.isActiveNav);
    // }
  },
};
</script>
<style lang="scss" scoped>
.tab-content {
  position: absolute;
  left: 25%;
  top: 10%;
}
.signup__navigation {
  z-index: 150;
  left: 690px;
  // display: none;
.nav__box {
    width: 32px;
    height: 60px;
    cursor: pointer;
    .navigation__item {
        background: none;
    }
}
}
</style>
