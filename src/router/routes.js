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
    name: 'Registration2',
    components: {
      default: () => import('@/views/Registration.vue'),
    },
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/registration2',
    name: 'Registration',
    components: {
      default: () => import('@/views/Registration'),
    },
    children: [
      {
        path: 'confirm',
        name: 'Registration confirm',
        components: {
          default: () => import('@/views/Registration/views/Confirm'),
        },
        meta: {
          backUrl: '/',
        },
      },
      {
        path: 'forbidden',
        name: 'Registration forbidden',
        components: {
          default: () => import('@/views/Registration/views/Forbidden'),
        },
        meta: {
          backUrl: null,
          steps: [],
        },
      },
      {
        path: 'first',
        name: 'Registration first',
        components: {
          default: () => import('@/views/Registration/views/First'),
        },
        meta: {
          backUrl: '/registration/confitm',
          steps: [true, false, false, false, false],
        },
      },
      {
        path: 'accept',
        name: 'Registration accept',
        components: {
          default: () => import('@/views/Registration/views/Accept'),
        },
        meta: {
          backUrl: '/registration/first',
          steps: [],
        },
      },
    ],
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
      default: () => import('@/views/Auth'),
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
