import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  // 比較
  {
    path: '/comparisons',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/comparisons/index.vue') },
      { path: ':id', component: () => import('pages/comparisons/_id.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
