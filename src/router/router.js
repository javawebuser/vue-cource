import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    // 动态路由如何传参
    path: "/argu/:name",
    component: () => import("@/views/argu.vue")
  }
]
