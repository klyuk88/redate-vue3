const routes = [
  {
    path: '/main',
    name: 'Main',
    components: {
      default: () => import('@/views/Main.vue'),
    },
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
      layout: 'auth-layout',
    },
  },
  {
    path: '/account/:user',
    name: 'Account',
    components: {
      default: () => import('@/views/Profile.vue'),
    },
    children: [
      {
        path: '',
        components: {
          default: () => import('@/components/Profile/MyProfilePage.vue'),
        },
      },
      {
        path: 'settings',
        components: {
          default: () => import('@/components/Profile/MyProfileSettings.vue'),
        },
        meta: {
          layout: 'auth-layout',
        },
      },
      {
        path: 'edit',
        components: {
          default: () => import('@/components/Profile/MyProfileEdit.vue'),
        },
        meta: {
          layout: 'auth-layout',
        },
      },
    ],
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
      layout: 'auth-layout',
    },
  },
  {
    path: '/verification',
    name: 'Verification',
    components: {
      default: () => import('@/views/Verification.vue'),
    },
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/',
    name: 'StartPage',
    components: {
      default: () => import('@/components/Auth/AuthMainPage.vue'),
    },
    meta: {
      layout: 'auth-layout',
    },
  },

  {
    path: '/profile/:user',
    name: 'Userprofile',
    components: {
      default: () => import('@/views/UserProfile.vue'),
    },
  },
  {
    path: '/500',
    components: {
      default: () => import('@/views/ServerError.vue'),
    },
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/:notFound(.*)',
    components: {
      default: () => import('@/views/NotFound.vue'),
    },
    meta: {
      layout: 'auth-layout',
    },
  },
]

export { routes }
