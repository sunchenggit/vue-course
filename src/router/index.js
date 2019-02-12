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

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开路透守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件 （即将进入的页面组件） 内调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发 DOM 更新
 * 12. 用创建好的实例调用 beforeRouteEnter 守卫里传给 next 的回调函数
 */

export default router
