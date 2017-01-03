// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueTouch from 'vue-touch'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import vContent from 'components/content/v-content'
import TopicsDetail from 'components/topicsDetail/TopicsDetail'
import user from 'components/user/user'
import login from 'components/Topics/login/login'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueTouch)
const routes = [
  { 'path': '/topics', component: vContent },
  { 'path': '/topics?tab=good', component: vContent },
  { 'path': '/topics?tab=share', component: vContent },
  { 'path': '/topics?tab=ask', component: vContent },
  { 'path': '/topics?tab=job', component: vContent },
  { 'path': '/topics/:id', name: 'topicsDetail', component: TopicsDetail },
  { 'path': '/user/:loginname', name: 'user', component: user },
  { 'path': '/login', component: login }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
router.push('/topics')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

