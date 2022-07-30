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
  } else if (tokens !== null && PUBLIC_PAGES.includes(to.path)) {
    return { name: 'Main' }
  } else if (tokens !== null) {
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
  }
})

export default router
