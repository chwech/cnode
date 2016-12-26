// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import content from 'components/content/content'
import TopicsDetail from 'components/topicsDetail/TopicsDetail'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  { 'path': '/topics', component: content },
  { 'path': '/topics?tab=good', component: content },
  { 'path': '/topics?tab=share', component: content },
  { 'path': '/topics?tab=ask', component: content },
  { 'path': '/topics?tab=job', component: content },
  { 'path': '/topics/:id', name: 'topicsDetail', component: TopicsDetail }
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
