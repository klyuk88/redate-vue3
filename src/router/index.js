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
    path: '/account/:user',
    name: 'Account',
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
    path: '/profile/settings',
    name: 'Settings',
    components: {
      default: () => import('@/components/Profile/MyProfileSettings.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/profile/edit',
    name: 'Edit',
    components: {
      default: () => import('@/components/Profile/MyProfileEdit.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/profile/:user',
    name: 'Userprofile',
    components: {
      default: () => import('@/views/UserProfile.vue'),
    },
  },
  {
    path: '/auth/recovery',
    name: 'RecoveryPass',
    components: {
      default: () => import('@/components/Auth/ForgotPassword.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/profile/photogallery',
    name: 'PhotoGallery',
    components: {
      default: () => import('@/components/Profile/ProfilePhotoCarousel.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/profile/usergallery',
    name: 'UserGallery',
    components: {
      default: () => import('@/components/Profile/UserPhotoCarousel.vue'),
    },
    meta: {
      layout: 'auth-layout'
    }
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