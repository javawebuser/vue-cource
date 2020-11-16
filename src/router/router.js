import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    // 路径别名
    alias: '/home_name',
    // name命名路由
    name: "home",
    component: Home,
    // 问号传值的方式
    props: route => ({
      food: route.query.food
    }),
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') alert('这个是从about页面来的')
    //   else alert('这不是从about页面来的')
    //   next() 必须用 不然不会跳转
    // }
  },
  { 
    path: '/login', 
    name: 'login',
    component: () => import('@/views/login.vue') 
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    // 对象模式传值
    // props: {
    //   food: 'banana'
    // }
    meta: {
      title: '关于'
    }
  },
  {
    // 动态路由如何传参
    path: "/argu/:name",
    name: 'argu',
    component: () => import("@/views/argu.vue"),
    // props可以让组件是否使用path中的参数
    props: true
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
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  // 路由访问默认从前面开始找，当前面的页面访问不了的时候，就会访问404页面
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
