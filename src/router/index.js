import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Main',
    components: {
      default: () => import('@/views/Main.vue'),
    }
  },
  {
    path: '/search',
    name: 'Search',
    components: {
      default: () => import('@/views/Search.vue'),
    },
  },
  {
    path: '/registration',
    name: 'Registration',
    components: {
      default: () => import('@/views/Registration.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    components: {
      default: () => import('@/views/Profile.vue'),
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    components: {
      default: () => import('@/views/Chat.vue'),
    },
  },
  {
    path: '/sends',
    name: 'Sends',
    components: {
      default: () => import('@/views/Sends.vue'),
    },
  },
  {
    path: '/notifications',
    name: 'Notifications',
    components: {
      default: () => import('@/views/Notifications.vue'),
    },
  },
  {
    path: '/favorites',
    name: 'Favorites',
    components: {
      default: () => import('@/views/Favorites.vue'),
    },
  },
  {
    path: '/chat/:user',
    name: 'SingleChat',
    components: {
      default: () => import('@/views/SingleChat.vue'),
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    components: {
      default: () => import('@/views/Auth.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/verification',
    name: 'Verification',
    components: {
      default: () => import('@/views/Verification.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/verification/photo',
    name: 'VerificationPhoto',
    components: {
      default: () => import('@/components/Auth/VerificationSecond.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/verification/completed',
    name: 'VerificationCompleted',
    components: {
      default: () => import('@/components/Auth/VerificationThird.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/start',
    name: 'StartPage',
    components: {
      default: () => import('@/components/Auth/AuthMainPage.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    components: {
      default: () => import('@/components/Profile/MyProfileSettings.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    components: {
      default: () => import('@/components/Profile/MyProfileEdit.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/userprofile',
    name: 'Userprofile',
    components: {
      default: () => import('@/views/UserProfile.vue'),
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0
    }
  },
})

export default router