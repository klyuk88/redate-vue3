import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { useUserStore } from '@/stores/user.js'

const PUBLIC_PAGES = ['/', '/auth', '/registration']

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
  const authRequired = !PUBLIC_PAGES.includes(to.path)

  const userStore = useUserStore()

  const tokens = userStore.tokens.data || null

  if (authRequired && tokens === null) {
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
      if (to.path === '/registration' && to.query.stage === 'code') {
        return
      }

      return { name: 'Registration', query: { stage: 'code' } }
    }

    // if (!registrationStatus.verification) {
    //   console.log('Check verification status')

    //   return
    // }

    // if (!registrationStatus.inSearch) {
    //   console.log('Redirect to profile and check user info')

    //   return
    // }

    if (PUBLIC_PAGES.includes(to.path)) {
      return { name: 'Main' }
    }
  }
})

export default router
