import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOGIONED = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGIONED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGIONED) next({ name: 'home' })
    else next()
  }
})

// 导航被确认之前，所有组件内守卫，异步路由组件被解析后
// router.beforeResolve()

router.afterEach((to, from) => {
  // logining = false
})

export default router
