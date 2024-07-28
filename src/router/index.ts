import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import AuthorView from '@/views/AuthorView.vue'
import GifView from '@/views/GifView.vue'
import NotFound from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/author/:name',
      name: 'author',
      component: AuthorView,
      beforeEnter: (_to, from, next) => {
        if (from.name === 'gif') {
          next();
        } else {
          next({ name: 'main' });
        }
      },
      
    },
    {
      path: '/gifs/:id',
      name: 'gif',
      component: GifView,
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'not-found', 
        component: NotFound 
    },
  
  ],
})

export default router
