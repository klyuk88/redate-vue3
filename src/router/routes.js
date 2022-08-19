const routes = [
  {
    path: '/main',
    name: 'Main',
    components: {
      default: () => import('@/views/Main.vue'),
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/search',
    name: 'Search',
    components: {
      default: () => import('@/views/Search.vue'),
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/registration',
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
          step: false,
        },
      },
      {
        path: 'first',
        name: 'Registration first',
        components: {
          default: () => import('@/views/Registration/views/First'),
        },
        meta: {
          backUrl: '/registration/confirm',
          steps: [true, false, false, false],
          step: false,
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
          step: false,
        },
      },
      {
        path: 'second',
        name: 'Registration second',
        components: {
          default: () => import('@/views/Registration/views/Second'),
        },
        meta: {
          backUrl: '/registration/accept',
          steps: [true, true, false, false],
          step: false,
        },
      },
      {
        path: 'third',
        name: 'Registration third',
        components: {
          default: () => import('@/views/Registration/views/Third'),
        },
        meta: {
          backUrl: '/registration/second',
          steps: [true, true, true, false],
          step: false,
        },
      },
      {
        path: 'hobbies',
        name: 'Registration hobbies',
        components: {
          default: () => import('@/views/Registration/views/Hobbies'),
        },
        meta: {
          backUrl: null,
          steps: [],
          step: false,
        },
      },
      {
        path: 'languages',
        name: 'Registration languages',
        components: {
          default: () => import('@/views/Registration/views/Languages'),
        },
        meta: {
          backUrl: null,
          steps: [],
          step: false,
        },
      },
      {
        path: 'fourth',
        name: 'Registration fourth',
        components: {
          default: () => import('@/views/Registration/views/Fourth'),
        },
        meta: {
          backUrl: '/registration/third',
          steps: [true, true, true, true],
          step: false,
        },
      },
      {
        path: 'fifth',
        name: 'Registration fifth',
        components: {
          default: () => import('@/views/Registration/views/Fifth'),
        },
        meta: {
          backUrl: '/registration/fourth',
          steps: [],
          step: true,
        },
      },
      {
        path: 'success',
        name: 'Registration success',
        components: {
          default: () => import('@/views/Registration/views/Success'),
        },
        meta: {
          backUrl: null,
          steps: [],
          step: false,
        },
      },
    ],
    meta: {
      layout: 'auth-layout',
      auth: false,
    },
  },
  {
    path: '/account/:user',
    name: 'Account',
    components: {
      default: () => import('@/views/Profile.vue'),
    },
    meta: {
      auth: true,
    },
    children: [
      {
        path: '',
        components: {
          default: () => import('@/components/Profile/MyProfilePage.vue'),
        },
        meta: {
          auth: true,
        },
      },
      {
        path: 'settings',
        components: {
          default: () => import('@/components/Profile/MyProfileSettings.vue'),
        },
        meta: {
          layout: 'auth-layout',
          auth: true,
        },
      },
      {
        path: 'edit',
        name: 'Account edit',
        components: {
          default: () => import('@/components/Profile/MyProfileEdit.vue'),
        },
        meta: {
          layout: 'auth-layout',
          auth: true,
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
    meta: {
      auth: true,
    },
  },
  {
    path: '/sends',
    name: 'Sends',
    components: {
      default: () => import('@/views/Sends.vue'),
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/notifications',
    name: 'Notifications',
    components: {
      default: () => import('@/views/Notifications.vue'),
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/favorites',
    name: 'Favorites',
    components: {
      default: () => import('@/views/Favorites.vue'),
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/chat/:user',
    name: 'SingleChat',
    components: {
      default: () => import('@/views/SingleChat.vue'),
    },
    meta: {
      auth: true,
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
      auth: false,
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
      auth: false,
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
      auth: false,
    },
  },

  {
    path: '/profile/:user',
    name: 'Userprofile',
    components: {
      default: () => import('@/views/UserProfile.vue'),
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/500',
    components: {
      default: () => import('@/views/ServerError.vue'),
    },
    meta: {
      layout: 'auth-layout',
      auth: false,
    },
  },
  {
    path: '/:notFound(.*)',
    components: {
      default: () => import('@/views/NotFound.vue'),
    },
    meta: {
      layout: 'auth-layout',
      auth: false,
    },
  },
]

export { routes }
