const routes = [
  {
    path: '/',

    component: () => import('src/layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
      // { path: '', component: () => import('pages/MenuPrincipal.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
