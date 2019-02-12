import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      (from.name == 'about') ? alert('这是从关于页来的') : alert('这不是从关于页来的')
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // props: {
    //   food: 'banana'
    // }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import("@/views/argu.vue"),
    // 如果 props 被设置为 true，route.params 将会被设置为组件属性
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import("@/views/parent.vue"),
    children: [
      {
        path: 'child',
        component: () => import("@/views/child.vue")
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/parent.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    // redirect: '/'
    // redirect: {
    //   name: 'about'
    // }
    redirect: to => {
      // console.log(to)
      // return '/about'
      return {
        name: 'home'
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: "*",
    component: () => import('@/views/error_404.vue')
  }
]
