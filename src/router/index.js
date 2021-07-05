import Vue from 'vue'
import VueRouter from 'vue-router'
import LinkList from '../views/LinkList.vue'
import LinkAdd from '../views/LinkAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LinkList',
    component: LinkList
  },
  {
    path: '/add',
    name: 'LinkAdd',
    component: LinkAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
