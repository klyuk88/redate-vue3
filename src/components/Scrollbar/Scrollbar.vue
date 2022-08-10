<template>
  <div class="scrollbar">
    <PerfectScrollbar>
      <slot />
    </PerfectScrollbar>
  </div>
</template>

<style lang="scss">
.scrollbar {
  height: 100%;

  .ps {
    height: 100%;
  }

  .ps--active-x > .ps__rail-x,
  .ps--active-y > .ps__rail-y,
  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background: rgba(#ffffff, 0.14);
  }
  .ps__rail-y {
    opacity: 1;
    width: 1px;
  }
  .ps__thumb-y,
  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y,
  .ps__rail-y.ps--clicking .ps__thumb-y {
    right: 0;
    width: 1px;
    border-radius: 0;
    background: #ffffff;
  }
  .ps:hover > .ps__rail-x,
  .ps:hover > .ps__rail-y,
  .ps--focus > .ps__rail-x,
  .ps--focus > .ps__rail-y,
  .ps--scrolling-x > .ps__rail-x,
  .ps--scrolling-y > .ps__rail-y {
    opacity: 1;
  }
}
</style>
