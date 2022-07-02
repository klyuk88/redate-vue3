import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuthStore } from '@/stores/auth.js'

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
  const publicPages = ['/', '/auth', '/start', '/registration']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()
  if (authRequired && !auth.user) {
    return { name: 'StartPage' }
  } else if (
    auth.user &&
    (to.name === 'Auth' ||
      to.name === 'StartPage' ||
      to.name === 'Registration')
  ) {
    return { name: 'Main' }
  }
})

export default router
