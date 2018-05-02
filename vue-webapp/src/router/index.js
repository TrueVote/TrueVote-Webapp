import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'LandingPage' },
  { path: '/create', component: 'CreatePoll'},
  { path: '/count', component: 'Count'},
  { path: '/votingStation', component: 'VotingStation'},
  { path: '/vote', component: 'Vote'},
  { path: '/submit', component: 'Submit'}
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
