<template>
  <aside class="side-bar">
    <div class="menu">
      <div class="menu-top">
        <router-link to="/account/vasya" class="profile-link">
          <div class="menu-item avatar">
            <img src="@/assets/images/main/avatar.png" alt="" class="avatar" />
          </div>
        </router-link>

        <div class="menu-item">
          <p class="balance">6450₽</p>
        </div>
      </div>
      <div class="line"></div>
      <nav>
        <router-link to="/main">
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
      <!-- <span>ReDate</span> -->
      <img src="@/assets/images/side-bar-logo.svg" alt="logo">
    </div>
  </aside>
</template>

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
  height: 100vh
  .router-link-active.router-link-exact-active.profile-link
    .menu-item.avatar
      border: 1px solid #2B66FB
      filter: drop-shadow(0px 0px 30px rgba(43, 102, 251, 0.55))
  @media (max-width: 1200px)
    display: none

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
  transition: all .3s ease

.router-link-active
  .menu-item
    background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)

.side-bar .line
  width: 38px
  height: 1px
  background-color: rgba(255,255,255,0.14 )
  margin: 0 auto
  margin-bottom: 12px
.side-bar .logo img
  width: 50px
  height: auto

// .side-bar .logo
//   font-size: 13px
//   font-weight: 400
//   display: flex
//   align-items: center
//   justify-content: center
//   width: 56px
//   height: 20px
//   background: linear-gradient(137.15deg, #2965FF 0%, #2E66F5 99.89%)
//   border-radius: 8px
//   color: #fff
</style>
