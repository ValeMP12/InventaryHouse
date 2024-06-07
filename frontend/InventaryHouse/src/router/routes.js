// src/router/routes.js
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      //{ path: '', redirect: '/login' }, // Redirige la raíz a la página de login o menu-principal
      { path: 'menuprincipal', component: () => import('src/pages/MenuPrincipal.vue') },
      { path: 'puntoventa', component: () => import('src/pages/PuntoVenta.vue') },
      { path: 'cortecaja', component: () => import('src/pages/CorteCaja.vue') },
      { path: 'producto', component: () => import('src/pages/Productos.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
