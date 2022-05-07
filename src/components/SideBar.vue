<template>
  <aside class="side-bar">
    <div class="menu">
      <div class="menu-top">
        <router-link to="/profile">
          <div class="menu-item avatar">
            <img src="@/assets/images/main/avatar.png" alt="" class="avatar" />
          </div>
        </router-link>

        <div class="menu-item">
          <p class="balance">$6045</p>
        </div>
      </div>
      <div class="line"></div>
      <nav>
        <router-link to="/">
          <div class="menu-item">
            <img src="@/assets/images/main/home.svg" alt="" />
          </div>
        </router-link>

        <router-link to="/search">
          <div class="menu-item">
            <img src="@/assets/images/main/search.svg" alt="" />
          </div>
        </router-link>

        <router-link to="/chat">
          <div class="menu-item">
            <img src="@/assets/images/main/dialog.svg" alt="" />
          </div>
        </router-link>

        <router-link to="/sends">
          <div class="menu-item">
            <img src="@/assets/images/main/papka.svg" alt="" />
          </div>
        </router-link>

        <router-link to="/notifications">
          <div class="menu-item">
            <img src="@/assets/images/main/teeny.svg" alt="" />
          </div>
        </router-link>

        <router-link to="/favorites">
          <div class="menu-item">
            <img src="@/assets/images/main/star.svg" alt="" />
          </div>
        </router-link>
      </nav>
    </div>
    <div class="logo">
      <span>ReDate</span>
    </div>
  </aside>
</template>
<script setup>
</script>
<style lang="sass">
.side-bar
    width: 56px
    display: flex
    justify-content: space-between
    flex-direction: column
    padding-top: 100px
    padding-bottom: 50px
    position: fixed
    left: 40px
    z-index: 20
    // position: -webkit-sticky
    // position: sticky
    top: 0
    height: 100vh
.menu-item
    width: 56px
    height: 56px
    border-radius: 16px
    background: rgba(255,255,255,0.03)
    display: flex
    align-items: center
    justify-content: center
    position: relative
    overflow: hidden
    margin-bottom: 12px
    .avatar
        position: absolute
        width: 100%
        height: 100%
        object-fit: cover
        top: 0
        left: 0
    .balance
        font-size: 14px
        font-weight: 600
        color: #fff

.menu-item.avatar
    border: 1px solid #F9AE3F

.router-link-active
    .menu-item
        background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)

.side-bar .line
    width: 38px
    height: 1px
    background-color: rgba(255,255,255,0.14 )
    margin: 0 auto
    margin-bottom: 12px

.side-bar .logo
    font-size: 13px
    font-weight: 400
    display: flex
    align-items: center
    justify-content: center
    width: 56px
    height: 20px
    background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
    border-radius: 8px
    color: #fff

</style>