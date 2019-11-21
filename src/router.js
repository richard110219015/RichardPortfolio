import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Personal_Info from './views/Personal_Info.vue'
import Projects from './views/Projects.vue'
import WorkVideo from './views/WorkVideo.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Personal_Info',
      name: 'Personal_Info',
      component: Personal_Info
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/WorkVideo',
      name: 'WorkVideo',
      component: WorkVideo
    }
  ]
})
