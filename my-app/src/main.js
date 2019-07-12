import Vue from 'vue'
import vueResource from "vue-resource"
import App from './App.vue'
import router from '@/router'
import components from '@/components'
import WeiBo from '@/WeiBo'
import bus from '@/bus'

Vue.use(components)
Vue.use(vueResource)
Vue.use(bus)
Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
//   if(to.meta.isAuthorization){
//     console.log("全局批量拦截")
//     next({
//       path:"/login"
//     })
//   }else{
//     next()
//   }
// })
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log("全局后置守卫")
})
new Vue({
  router,
  render: function (h) { return h(WeiBo) }
}).$mount('#app')
