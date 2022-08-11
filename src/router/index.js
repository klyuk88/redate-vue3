import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { useUserStore } from '@/stores/user.js'

// const PUBLIC_PAGES = ['/', '/auth', '/registration']

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()

  const tokens = userStore.tokens.data || null

  if (tokens === null && to.meta.auth) {
    return { name: 'StartPage' }
  }

  if (tokens !== null) {
    const date = Date.now()

    const { expiredAt } = tokens.access

    if (date > expiredAt) {
      const { expiredAt } = tokens.refresh

      if (date > expiredAt) {
        return { name: 'Auth' }
      }

      const updatedTokens = await userStore.updateTokens()

      if (updatedTokens.status) {
        return { name: 'Auth' }
      }

      if (!updatedTokens.access?.token) {
        return { name: 'Auth' }
      }
    }

    const registrationStatus = await userStore.getRegistrationStatus()

    if (!registrationStatus.acceptEmail) {
      if (to.path === '/registration/accept') {
        return
      }

      return { name: 'Registration accept' }
    }

    // if (!registrationStatus.verification) {
    //   console.log('Check verification status')

    //   return
    // }

    if (!registrationStatus.inSearch) {
      // const path = to.matched[1]?.path || null

      // path === '/account/:user/edit'

      if (
        to.path === '/registration/second' ||
        to.path === '/registration/third' ||
        to.path === '/registration/fourth' ||
        to.path === '/registration/fifth' ||
        to.path === '/registration/hobbies' ||
        to.path === '/registration/languages' ||
        to.path === '/main'
      ) {
        return
      }

      return { name: 'Main' }
    }

    if (!to.meta.auth) {
      return { name: 'Main' }
    }
  }
})

export default router
