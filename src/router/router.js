import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    // 路径别名
    alias: '/home_name',
    // name命名路由
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    // 动态路由如何传参
    path: "/argu/:name",
    component: () => import("@/views/argu.vue")
  },
  {
    // 嵌套路由
    path: "/parent/:name/:age",
    name: 'parent',
    component: () => import("@/views/parent.vue"),
    children: [
      { path: "child", component: () => import("@/views/child.vue") }
    ]
  },
  {
    // 命名视图
    path: '/name_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    // 重定向路由
    path: '/main',
    // 可以返回路径名字
    // redirect: {
    //   name: 'home'
    // },
    // 可以直接返回路径
    redirect: () => {
      return '/'
    }
  }
]
