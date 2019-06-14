import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import productinfo from './components/GoodsManagement/productinfo.vue'
import productstock from './components/GoodsManagement/productstock.vue'
import productlabel from './components/GoodsManagement/productlabel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/productinfo', component: productinfo },
        { path: '/productstock', component: productstock },
        { path: '/productlabel', component: productlabel }
      ]
    }
  ]
})
