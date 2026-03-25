import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name:"notFound",
      component: () => import('@/views/ont_found.vue'),
    },
    {
      path: "/",
      name: "index",
      component: () => import("@/views/index.vue"),
      // meta: { transition: 'slide-left' },
    },
    {
      path:"/match",
      name:"match",
      component:()=>import("@/views/match.vue"),
      // meta: { transition: 'slide-left' },
    },
    {
      path:"/show",
      name:"show",
      component:()=>import("@/views/show.vue"),
    },
    {
      path:"/enter_code",
      name:"enterCode",
      component:()=>import("@/views/enter_code.vue"),
    },
    {
      path:"/setting",
      name:"setting",
      component:()=>import("@/views/setting.vue"),
    }
  ],
})

export default router
