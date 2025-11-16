import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobListView from '@/views/JobListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobListView,
    },
    // {
    //   path: '/add-job',
    //   name: 'add-job',
    //   component: () => import('@/views/AddJobView.vue'),
    // },
  ],
})

export default router
