// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import All from 'components/All/All'
import Good from 'components/Good/Good'
import Ask from 'components/Ask/Ask'
import Share from 'components/Share/Share'
import Job from 'components/Job/Job'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  { 'path': '/all', component: All },
  { 'path': '/good', component: Good },
  { 'path': '/ask', component: Ask },
  { 'path': '/share', component: Share },
  { 'path': '/job', component: Job }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
router.push('/all')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
