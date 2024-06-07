const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'categoria', component: () => import('pages/Categoria/IndexCategoria.vue') },
      { path: 'createCategoria', component: () => import('pages/Categoria/createCategoria.vue') },
      { path: 'updateCategoria/:id', name: 'updateCategoria', component: () => import('pages/Categoria/updateCategoria.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
