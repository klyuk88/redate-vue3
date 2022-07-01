<script setup>
import FavoriteItem from '@/components/Favorites/FavoriteItem.vue'
import DialogSidebar from '@/components/Chat/DialogSidebar.vue'
import FavoritesMobile from '@/components/Favorites/FavoritesMobile.vue'
</script>

<template>
  <section id="favorites">
    <div class="grid">
      <div class="content">
        <div class="header">
          <p class="label">Избранное</p>
        </div>
        <PerfectScrollbar>
          <div class="items">
            <FavoriteItem v-for="(item, index) in 20" :key="index" />
          </div>
        </PerfectScrollbar>
      </div>
      <div class="sidebar">
        <DialogSidebar />
      </div>
    </div>
  </section>
  <FavoritesMobile />
</template>

<style lang="scss">
#favorites {
  margin: 0 auto;
  padding-left: 100px;
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(860px, 1057px) minmax(300px, 376px);
    column-gap: 30px;
    align-items: center;
    .content {
      position: relative;
      background: rgba(196, 196, 196, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.33);
      height: 100vh;
      .header {
        font-size: 18px;
        color: #fff;
        text-align: center;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        padding-bottom: 20px;
        padding-top: 70px;
        position: absolute;
        width: 100%;
        z-index: 2;
        top: 0;
        left: 0;
        background: rgba(196, 196, 196, 0.05);
        backdrop-filter: blur(30px);
        .label {
          font-size: 18px;
          font-weight: 600;
        }
        .results {
          opacity: 0.3;
        }
      }
      .ps {
        padding-top: 150px;
        height: 100vh;
        overflow-y: auto;
        scrollbar-width: none;
        .ps__rail-y {
          margin-top: 150px;
          margin-right: 5px;
          width: 2px;
          background: rgba($color: #fff, $alpha: 0.3);
          border-radius: 0;
          .ps__thumb-y {
            width: 2px;
            background-color: #fff;
            border-radius: 0;
            right: 0;
          }
        }
      }
      .items {
        max-width: 785px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 35px;
        padding-bottom: 50px;
      }
    }
  }
}

@media (max-width: 1200px) {
  #favorites {
    display: none;
  }
}
</style>
