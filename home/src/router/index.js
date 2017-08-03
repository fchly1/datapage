import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/datatable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'datatable',
      component: Hello
    }
  ]
})
