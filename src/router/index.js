import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyChart from '@/components/MyChart'
import Login from '@/components/Login'
import Main from '@/components/Main'
import UserList from '@/components/UserList'
import ProductList from '@/components/ProductList'
import ProductAdd from '@/components/ProductAdd'
import NotFound from '@/components/NotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '',
          component: MyChart
        },
        {
          path: '/chart',
          component: MyChart
        },
        {
          path: '/productList',
          component: ProductList
        },
        {
          path: '/productAdd',
          component: ProductAdd
        },
        {
          path: '/userList',
          component: UserList
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }

  ]
})
