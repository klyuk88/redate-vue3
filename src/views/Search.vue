<template>
  <section id="search">
    <div class="grid">
      <div class="content">
        <div class="search-results">
          <h6 class="label">
            Результаты поиска: <span class="results">229 992</span>
          </h6>
        </div>
        <div class="search-items">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
      <SearchPageSidebar />
    </div>
  </section>
</template>

<script setup>
import SearchItem from "@/components/Search/SearchItem.vue";
import SearchPageSidebar from "@/components/SideBars/SearchPageSidebar.vue";
</script>

<style lang="scss">
#search {
  margin: 0 auto;
  padding-left: 130px;
  .grid {
    display: flex;
    align-items: center;
    .content {
      border-left: 1px solid #ffffff54;
      border-right: 1px solid #ffffff54;
      padding: 0 17px;
      background: rgba(196, 196, 196, 0.05);
      flex-grow: 1;
      position: relative;
      z-index: 1;
      .search-results {
        font-size: 18px;
        color: #fff;
        text-align: center;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
        padding-bottom: 20px;
        padding-top: 70px;
        position: absolute;
        width: 90%;
        z-index: 2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(28, 29, 33, 0.01);
        backdrop-filter: blur(50px);
        .results {
          opacity: 0.3;
        }
      }
      .search-items {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        gap: 33px;
        max-width: 1050px;
        margin: 0 auto;
        overflow-y: scroll;
        max-height: 100vh;
        padding-top: 150px;
      }
      .search-items::-webkit-scrollbar {
        width: 2px;
      }
      .search-items::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.14);
      }
      .search-items::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 1);
        border-radius: 2px;
      }
    }
  }
}
</style>