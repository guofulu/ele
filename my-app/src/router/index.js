import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import GoodsList from '@/views/goodsList'
import Cart from '@/views/cart'
import Login from '@/views/login'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"click-event",
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ '@/views/About.vue')
      }
    },
    {
      path:"/goodsList",
      name:"goodsList",
      component:GoodsList
    },
    {
      path:"/cart",
      name:"cart",
      component:Cart,
      meta:{
        isAuthorization:true
      },
      beforeEnter: (to, from, next) => {
        console.log("router拦截");
        next({
          path:"/login",
          query:{
            a:1,b:2
          }
        })
      },
    },
    {
      path:"/login",
      name:"login",
      component:Login
    }
    
  ]
})
