import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobListView from '@/views/JobListView.vue'
import JobDetailsView from '@/views/JobDetailsView.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
    {
      path: '/add-job',
      name: 'Add Job',
      component: AddJobView,
    },
    {
      path: '/add-job/:id',
      name: 'Edit Job',
      component: EditJobView,
    },
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetailsView,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
