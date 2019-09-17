import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import store from '../store/index.js'
import appConfig from '@/config/index.js'
// 基础视图元件
Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

const isLoginRequired = (name) => {
  if (!name) {
    return true
  }
  let {
    notLoginRoute
  } = appConfig
  // 处理 Symbol 类型
  const target = (typeof name === 'symbol') ? name.description : name
  return !notLoginRoute.includes(target)
}

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  if (isLoginRequired(to.name) && !store.state.login) {
    next({
      path: '/login'
    })
    return
  } else if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})


export default router